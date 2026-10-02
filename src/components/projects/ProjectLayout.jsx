import React from 'react';
import { Link } from 'react-router-dom';
import DotMatrix from '../ui/DotMatrix';
import Reveal from '../ui/Reveal';

// A case study is one centred sheet: chrome, header and prose share this column.
const COLUMN = 'mx-auto w-full max-w-[880px] px-6 md:px-10';

/**
 * Shared frame for every case-study page: a thin bar back to the index,
 * a technical header, and the body in long-form prose.
 */
const ProjectLayout = ({ eyebrow = 'Case study', title, subtitle, meta = [], links = [], children }) => {
  return (
    <div className="panel panel-light min-h-screen">
      <header className="panel panel-dark fixed inset-x-0 top-0 z-50 border-b border-line nav-blur">
        <div className={`${COLUMN} flex h-14 items-center justify-between`}>
          <Link
            to="/"
            className="group flex items-center gap-3 font-mono text-2xs uppercase tracking-label text-fg transition-colors hover:text-accent"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Index
          </Link>

          <span className="hidden items-center gap-3 text-fg sm:flex">
            <DotMatrix text="DN" pitch={3.2} tracking={1} showGrid={false} />
          </span>
        </div>
      </header>

      <div className={`${COLUMN} pt-16`}>
        <div className="border-b border-line py-10 md:py-16">
          <Reveal>
            <p className="font-mono text-2xs uppercase tracking-label text-accent">{eyebrow}</p>
            <h1 className="mt-6 max-w-[26ch] text-3xl font-light leading-[1.1] tracking-tight text-fg md:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 max-w-read leading-relaxed text-soft md:text-lg">
                {subtitle}
              </p>
            )}

            {links.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 border border-line px-4 py-2.5 font-mono text-2xs uppercase tracking-label text-fg transition-colors duration-300 hover:border-accent hover:text-accent"
                  >
                    {l.label}
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                  </a>
                ))}
              </div>
            )}
          </Reveal>

          {meta.length > 0 && (
            <dl className="mt-12 grid grid-cols-2 gap-x-8 md:grid-cols-4">
              {meta.map((m) => (
                <div key={m.k} className="border-t border-line py-5">
                  <dt className="font-mono text-2xs uppercase tracking-label text-accent">{m.k}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-soft">{m.v}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <article className="prose-n py-12 md:py-16">{children}</article>
      </div>

      <div className="border-t border-line">
        <div className={`${COLUMN} flex flex-wrap items-center justify-between gap-4 py-8`}>
          <Link
            to="/"
            className="group flex items-center gap-3 font-mono text-2xs uppercase tracking-label text-fg transition-colors hover:text-accent"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Back to index
          </Link>
          <a
            href="mailto:dastan.nurbek22@gmail.com"
            className="font-mono text-2xs uppercase tracking-label text-muted transition-colors hover:text-accent"
          >
            dastan.nurbek22@gmail.com ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
