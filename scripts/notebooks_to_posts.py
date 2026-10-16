"""Turn the frames-to-splats notebooks into blog post data for this site.

    python scripts/notebooks_to_posts.py /path/to/frames-to-splats

Writes public/blog/frames-to-splats/series.json and one folder per notebook with
post.json plus its images (WebP), Plotly figures (JSON) and videos (MP4).
Needs Pillow with WebP support.
"""
import base64
import io
import json
import re
import shutil
import sys
from pathlib import Path

from PIL import Image

SERIES = "frames-to-splats"
REPO_URL = "https://github.com/dastanNurbek/frames-to-splats"
OUT_ROOT = Path(__file__).resolve().parent.parent / "public" / "blog" / SERIES
MAX_IMAGE_WIDTH = 1600
WEBP_QUALITY = 82

NOTEBOOK_LINK = re.compile(r"\]\((\d\d)_[a-z_]+\.ipynb\)")
README_LINK = re.compile(r"\]\(README\.md(#[\w-]+)?\)")


def slug_of(path):
    return path.stem.replace("_", "-")


def rewrite_links(md, slugs):
    # A one-line $$...$$ parses as inline maths; give it its own lines so it renders as a display equation.
    md = re.sub(r"^\$\$(.+)\$\$$", r"$$\n\1\n$$", md, flags=re.M)
    md = NOTEBOOK_LINK.sub(lambda m: f"](#/{SERIES}/{slugs[m.group(1)]})", md)
    md = README_LINK.sub(lambda m: f"]({REPO_URL}{m.group(1) or ''})", md)
    return md.replace("](LICENSE)", f"]({REPO_URL}/blob/main/LICENSE)")


def save_webp(png_b64, path):
    img = Image.open(io.BytesIO(base64.b64decode(png_b64))).convert("RGB")
    if img.width > MAX_IMAGE_WIDTH:
        img = img.resize((MAX_IMAGE_WIDTH, round(img.height * MAX_IMAGE_WIDTH / img.width)), Image.LANCZOS)
    img.save(path, "WEBP", quality=WEBP_QUALITY, method=6)
    return img.width, img.height


def output_blocks(output, cell_index, k, out_dir, notebook_dir):
    kind = output["output_type"]
    if kind == "stream":
        if output["name"] == "stderr":                       # progress bars and warnings
            return []
        return [{"type": "output", "text": "".join(output["text"]).rstrip()}]
    if kind == "error":
        raise ValueError(f"cell {cell_index} has an error output: {output['ename']}")

    data = output.get("data", {})
    if "application/vnd.jupyter.widget-view+json" in data:  # tqdm bars: nothing to show statically
        return []
    if "application/vnd.plotly.v1+json" in data:
        name = f"plot-{cell_index}-{k}.json"
        (out_dir / name).write_text(json.dumps(data["application/vnd.plotly.v1+json"], separators=(",", ":")))
        return [{"type": "plotly", "src": name}]
    if "text/html" in data:
        html = "".join(data["text/html"])
        video = re.search(r'<video src="([^"]+)"', html)
        if video:
            source = notebook_dir / video.group(1)
            shutil.copy2(source, out_dir / source.name)
            return [{"type": "video", "src": source.name}]
        raise ValueError(f"cell {cell_index}: unhandled HTML output")
    if "image/png" in data:
        name = f"cell-{cell_index}-{k}.webp"
        width, height = save_webp(data["image/png"], out_dir / name)
        return [{"type": "image", "src": name, "width": width, "height": height}]
    if "text/plain" in data:
        text = "".join(data["text/plain"]).strip()
        if len(text) > 1 and text[0] == text[-1] and text[0] in "'\"":   # a displayed str shows with quotes
            text = text[1:-1]
        return [{"type": "output", "text": text}]
    return []


def convert(path, slugs, summaries):
    nb = json.loads(path.read_text())
    out_dir = OUT_ROOT / slug_of(path)
    out_dir.mkdir(parents=True)

    first = "".join(nb["cells"][0]["source"])
    heading, _, rest = first.partition("\n")
    number, _, title = heading.lstrip("# ").partition(" — ")
    blocks = [{"type": "markdown", "text": rewrite_links(rest.strip(), slugs)}] if rest.strip() else []

    for i, cell in enumerate(nb["cells"][1:], start=1):
        source = "".join(cell["source"]).strip()
        if cell["cell_type"] == "markdown":
            # The closing "Next: [...]" line is for GitHub readers; the blog has its own pager.
            source = re.sub(r"\n+Next: \[[^\]]+\]\([^)]+\)\s*$", "", source).strip()
            blocks.append({"type": "markdown", "text": rewrite_links(source, slugs)})
            continue
        blocks.append({"type": "code", "text": source})
        for k, output in enumerate(cell.get("outputs", [])):
            blocks.extend(output_blocks(output, i, k, out_dir, path.parent))

    post = {"number": number, "slug": slug_of(path), "title": title.strip(), "notebook": path.name,
            "notebookUrl": f"{REPO_URL}/blob/main/{path.name}", "summary": summaries.get(number, ""),
            "blocks": blocks}
    (out_dir / "post.json").write_text(json.dumps(post, ensure_ascii=False, separators=(",", ":")))
    return post


def readme_parts(readme, slugs):
    # Intro = text before "## The steps"; details = sections after the steps table, minus the license.
    body = readme.split("\n", 1)[1]
    intro, _, after = body.partition("## The steps")
    summaries = {m.group(1): m.group(2).strip()
                 for m in re.finditer(r"^\| (\d\d) [^|]+\| ([^|]+)\|", after, re.M)}
    details = after[after.index("\n## "):] if "\n## " in after else ""
    details = details.split("\n## License")[0]
    return rewrite_links(intro.strip(), slugs), rewrite_links(details.strip(), slugs), summaries


def main(notebook_dir):
    notebook_dir = Path(notebook_dir).resolve()
    notebooks = sorted(notebook_dir.glob("[0-9][0-9]_*.ipynb"))
    slugs = {p.name[:2]: slug_of(p) for p in notebooks}
    intro, details, summaries = readme_parts((notebook_dir / "README.md").read_text(), slugs)

    shutil.rmtree(OUT_ROOT, ignore_errors=True)
    OUT_ROOT.mkdir(parents=True)
    posts = [convert(p, slugs, summaries) for p in notebooks]

    series = {"slug": SERIES, "title": "From Frames to Gaussian Splats", "repoUrl": REPO_URL,
              "intro": intro, "details": details,
              "posts": [{k: p[k] for k in ("number", "slug", "title", "summary")} for p in posts]}
    (OUT_ROOT / "series.json").write_text(json.dumps(series, ensure_ascii=False, indent=1))

    total = sum(f.stat().st_size for f in OUT_ROOT.rglob("*") if f.is_file())
    for p in posts:
        size = sum(f.stat().st_size for f in (OUT_ROOT / p["slug"]).iterdir())
        kinds = {}
        for b in p["blocks"]:
            kinds[b["type"]] = kinds.get(b["type"], 0) + 1
        print(f"{p['slug']:<26} {size / 2**20:5.1f} MB  {kinds}")
    print(f"total {total / 2**20:.1f} MB in {OUT_ROOT}")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else ".")
