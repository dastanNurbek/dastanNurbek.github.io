import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectLayout from '../projects/ProjectLayout';
import { Markdown, blogBase } from './blocks';

const SERIES = 'frames-to-splats';

const SeriesIndex = () => {
  const [series, setSeries] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(blogBase(`${SERIES}/series.json`))
      .then((r) => r.json())
      .then((s) => !cancelled && setSeries(s));
    return () => { cancelled = true; };
  }, []);

  if (!series) return <ProjectLayout eyebrow="Notebook series" title="Loading…" />;

  return (
    <ProjectLayout
      eyebrow={`Notebook series · ${series.posts.length} parts`}
      title={series.title}
      meta={[
        { k: 'Stack', v: 'pycolmap · GLOMAP · gsplat' },
        { k: 'Camera', v: 'Canon EOS 600D, 18 mm' },
        { k: 'Output', v: '.ply for Blender & Unity' },
      ]}
      links={[{ label: 'Repository', href: series.repoUrl }]}
    >
      <Markdown text={series.intro} />

      <h2>Parts</h2>
      <ol className="nb-parts">
        {series.posts.map((p) => (
          <li key={p.slug}>
            <Link to={`/${SERIES}/${p.slug}`} className="nb-part">
              <span className="nb-part-number">{p.number}</span>
              <span>
                <span className="nb-part-title">{p.title}</span>
                <span className="nb-part-summary">{p.summary}</span>
              </span>
              <span className="nb-part-arrow">→</span>
            </Link>
          </li>
        ))}
      </ol>

      <Markdown text={series.details} />
    </ProjectLayout>
  );
};

export default SeriesIndex;
