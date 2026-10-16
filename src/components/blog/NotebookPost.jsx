import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProjectLayout from '../projects/ProjectLayout';
import { Block, blogBase } from './blocks';

const SERIES = 'frames-to-splats';

const NotebookPost = () => {
  const { slug } = useParams();
  const [series, setSeries] = useState(null);
  const [post, setPost] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setPost(null);
    setFailed(false);
    Promise.all([
      fetch(blogBase(`${SERIES}/series.json`)).then((r) => r.json()),
      fetch(blogBase(`${SERIES}/${slug}/post.json`)).then((r) => r.json()),
    ])
      .then(([s, p]) => {
        if (!cancelled) { setSeries(s); setPost(p); }
      })
      .catch(() => !cancelled && setFailed(true));
    return () => { cancelled = true; };
  }, [slug]);

  if (failed) {
    return (
      <ProjectLayout eyebrow="Notebook series" title="Post not found">
        <p>
          This post doesn't exist. <Link to={`/${SERIES}`}>Back to the series</Link>.
        </p>
      </ProjectLayout>
    );
  }
  if (!post || !series) {
    return <ProjectLayout eyebrow="Notebook series" title="Loading…" />;
  }

  const index = series.posts.findIndex((p) => p.slug === slug);
  const prev = series.posts[index - 1];
  const next = series.posts[index + 1];
  const base = blogBase(`${SERIES}/${slug}`);

  return (
    <ProjectLayout
      eyebrow={`${series.title} · ${post.number} / ${String(series.posts.length).padStart(2, '0')}`}
      title={post.title}
      subtitle={post.summary}
      links={[{ label: 'Notebook on GitHub', href: post.notebookUrl }]}
    >
      <p className="font-mono text-2xs uppercase tracking-label">
        <Link to={`/${SERIES}`}>← All parts</Link>
      </p>

      {post.blocks.map((block, i) => (
        <Block key={i} block={block} base={base} />
      ))}

      <nav className="mt-16 flex flex-wrap justify-between gap-3 border-t border-line pt-8">
        {prev ? (
          <Link to={`/${SERIES}/${prev.slug}`} className="nb-pager group">
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            {prev.number} {prev.title}
          </Link>
        ) : <span />}
        {next && (
          <Link to={`/${SERIES}/${next.slug}`} className="nb-pager group">
            {next.number} {next.title}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        )}
      </nav>
    </ProjectLayout>
  );
};

export default NotebookPost;
