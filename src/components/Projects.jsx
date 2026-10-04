import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from './ui/Section';
import projects from '../lib/projects';

const INITIAL = 8;

// Preview card geometry, in px — kept here so the follow logic can do maths on it.
const CARD_W = 224;
const CARD_H = 258;
const GAP = 28;

const Row = ({ project, number, delay, onEnter, onLeave }) => {
  const content = (
    <>
      <span className="absolute inset-0 origin-left scale-x-0 bg-surface transition-transform duration-500 ease-n group-hover:scale-x-100" />

      <span className="relative z-10 pt-1 font-mono text-2xs text-faint transition-colors duration-300 group-hover:text-accent">
        {number}
      </span>

      <img
        src={project.image}
        alt=""
        loading="lazy"
        decoding="async"
        className="relative z-10 h-12 w-12 shrink-0 border border-line object-cover lg:hidden"
      />

      <span className="relative z-10 min-w-0 flex-1">
        <span className="block text-lg font-light leading-snug tracking-tight text-fg transition-colors duration-300 group-hover:text-accent md:text-2xl">
          {project.title}
        </span>
        <span className="mt-3 block max-w-[56ch] leading-relaxed text-muted">
          {project.blurb}
        </span>
        <span className="mt-4 flex flex-wrap gap-x-3 gap-y-1 md:hidden">
          {project.tags.map((t) => (
            <span key={t} className="font-mono text-2xs uppercase tracking-label text-faint">
              {t}
            </span>
          ))}
        </span>
      </span>

      <span className="relative z-10 ml-auto hidden shrink-0 items-start gap-6 md:flex">
        <span className="flex flex-col items-end gap-1">
          {project.tags.map((t) => (
            <span key={t} className="font-mono text-2xs uppercase tracking-label text-faint">
              {t}
            </span>
          ))}
        </span>
        <span className="w-4 pt-0.5 text-right font-mono text-xs text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
          {project.external ? '↗' : '→'}
        </span>
      </span>
    </>
  );

  const className =
    'group relative flex items-start gap-5 border-b border-line px-0 py-6 transition-[padding] duration-500 ease-n md:gap-8 md:hover:px-5';

  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => onEnter(project)}
      onMouseLeave={onLeave}
      onFocus={() => onEnter(project)}
      onBlur={onLeave}
    >
      {project.external ? (
        <a href={project.href} target="_blank" rel="noopener noreferrer" className={className}>
          {content}
        </a>
      ) : (
        <Link to={project.href} className={className}>
          {content}
        </Link>
      )}
    </motion.li>
  );
};

const Projects = () => {
  const [visible, setVisible] = useState(INITIAL);

  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const noteRef = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });
  const frame = useRef(0);
  const shown = useRef(null);

  // The card follows the pointer and swaps its own content through refs, so
  // sweeping across the list never re-renders the rows.
  const place = useCallback(() => {
    frame.current = 0;
    const card = cardRef.current;
    if (!card) return;
    const { x, y } = pointer.current;
    const flip = x + GAP + CARD_W > window.innerWidth;
    const left = flip ? x - GAP - CARD_W : x + GAP;
    const top = Math.min(Math.max(y - CARD_H / 2, 8), window.innerHeight - CARD_H - 8);
    card.style.transform = `translate3d(${left}px, ${top}px, 0)`;
  }, []);

  const track = useCallback(
    (e) => {
      pointer.current = { x: e.clientX, y: e.clientY };
      if (!frame.current) frame.current = window.requestAnimationFrame(place);
    },
    [place]
  );

  const show = useCallback(
    (project) => {
      const card = cardRef.current;
      if (!card || shown.current === project) return;
      shown.current = project;
      if (imgRef.current.getAttribute('src') !== project.image) imgRef.current.src = project.image;
      noteRef.current.textContent = project.external ? 'External ↗' : 'Case study →';
      place();
      card.style.opacity = '1';
    },
    [place]
  );

  const hide = useCallback(() => {
    shown.current = null;
    if (cardRef.current) cardRef.current.style.opacity = '0';
  }, []);

  useEffect(
    () => () => {
      if (frame.current) window.cancelAnimationFrame(frame.current);
    },
    []
  );

  const remaining = projects.length - visible;

  return (
    <Section id="projects" index="04" label="Projects" tone="dark">
      <div onMouseMove={track} onMouseLeave={hide} className="border-t border-line">
        <ul>
          {projects.slice(0, visible).map((p, i) => (
            <Row
              key={p.title + p.href}
              project={p}
              number={String(i + 1).padStart(2, '0')}
              delay={Math.min(i, 6) * 0.04}
              onEnter={show}
              onLeave={hide}
            />
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-8">
          {remaining > 0 && (
            <button
              type="button"
              onClick={() => setVisible(projects.length)}
              className="group flex items-center gap-3 font-mono text-2xs uppercase tracking-label text-fg transition-colors hover:text-accent"
            >
              Load all
              <span className="text-faint transition-colors group-hover:text-accent">
                [{String(remaining).padStart(2, '0')}]
              </span>
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </button>
          )}
          {visible > INITIAL && (
            <button
              type="button"
              onClick={() => setVisible(INITIAL)}
              className="font-mono text-2xs uppercase tracking-label text-muted transition-colors hover:text-accent"
            >
              Collapse ↑
            </button>
          )}
          <span className="ml-auto font-mono text-2xs uppercase tracking-label text-faint">
            {String(Math.min(visible, projects.length)).padStart(2, '0')} /{' '}
            {String(projects.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Cursor-anchored preview, desktop only. Mounted once and driven by refs. */}
      <div
        ref={cardRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-30 hidden w-56 border border-line bg-bg opacity-0 transition-opacity duration-200 will-change-transform lg:block"
      >
        <img
          ref={imgRef}
          src={projects[0].image}
          alt=""
          decoding="async"
          className="h-56 w-full object-cover"
        />
        <p
          ref={noteRef}
          className="border-t border-line px-3 py-2 font-mono text-2xs uppercase tracking-label text-muted"
        />
      </div>
    </Section>
  );
};

export default Projects;
