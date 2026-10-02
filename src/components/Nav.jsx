import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import sections from '../lib/sections';
import useActiveSection from '../hooks/useActiveSection';
import { pauseScroll, resumeScroll, scrollTo } from '../lib/smoothScroll';
import DotMatrix from './ui/DotMatrix';

const IDS = sections.map((s) => s.id);
const BAR = 56;

const social = [
  { label: 'Github', href: 'https://github.com/dastanNurbek' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dastan-nurbekuly-1758362b3/' },
  { label: 'Email', href: 'mailto:dastan.nurbek22@gmail.com' },
];

export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) scrollTo(el, { offset: -BAR });
};

/* 2x2 dot glyph that becomes a cross when the index is open */
const IndexGlyph = ({ open }) => (
  <span className="relative block h-3 w-3">
    {[
      [0, 0],
      [1, 0],
      [0, 1],
      [1, 1],
    ].map(([x, y], i) => (
      <motion.span
        key={i}
        className="absolute h-[3px] w-[3px] bg-current"
        animate={{
          left: open ? 4.5 : x * 9,
          top: open ? 4.5 : y * 9,
          opacity: open && i > 0 ? 0 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
    ))}
    <motion.span
      className="absolute left-0 top-[5.5px] h-px w-3 bg-current"
      animate={{ opacity: open ? 1 : 0, rotate: open ? 45 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    />
    <motion.span
      className="absolute left-0 top-[5.5px] h-px w-3 bg-current"
      animate={{ opacity: open ? 1 : 0, rotate: open ? -45 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    />
  </span>
);

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const active = useActiveSection(IDS);
  const current = sections.find((s) => s.id === active) || sections[0];

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) pauseScroll();
    else resumeScroll();
    return () => {
      document.body.style.overflow = '';
      resumeScroll();
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const go = (id) => {
    setOpen(false);
    // Let the overlay release the scroll lock before moving.
    window.setTimeout(() => scrollToSection(id), 60);
  };

  return (
    <>
      <header className="panel panel-dark fixed inset-x-0 top-0 z-50 border-b border-line nav-blur">
        <div className="shell flex h-14 items-center justify-between">
          <button
            type="button"
            onClick={() => scrollTo(0)}
            className="flex items-center gap-3 text-fg transition-colors hover:text-accent"
            aria-label="Back to top"
          >
            <DotMatrix text="DN" pitch={3.2} tracking={1} showGrid={false} />
            <span className="hidden font-mono text-2xs uppercase tracking-label sm:block">
              Dastan Nurbekuly
            </span>
          </button>

          <div className="hidden items-center gap-2 font-mono text-2xs uppercase tracking-label text-muted md:flex">
            <motion.span
              className="h-1 w-1 bg-accent"
              animate={{ opacity: [1, 0.15, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="text-accent">{current.index}</span>
            <span className="text-faint">/</span>
            <span>{current.label}</span>
          </div>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-2 font-mono text-2xs uppercase tracking-label text-fg transition-colors hover:text-accent"
            aria-expanded={open}
            aria-label="Toggle index"
          >
            <span>{open ? 'Close' : 'Index'}</span>
            <IndexGlyph open={open} />
          </button>
        </div>

        <div className="h-px w-full bg-transparent">
          <div
            className="h-px bg-accent"
            style={{ width: `${progress * 100}%`, transition: 'width 0.1s linear' }}
          />
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-lenis-prevent
            className="panel panel-dark dotfield fixed inset-0 z-40 overflow-y-auto pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="shell flex min-h-[calc(100vh-3.5rem)] flex-col justify-between py-10">
              <ul>
                {sections.map((s, i) => (
                  <motion.li
                    key={s.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.04 * i, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-line"
                  >
                    <button
                      type="button"
                      onClick={() => go(s.id)}
                      className="group flex w-full items-baseline gap-5 py-3 text-left md:gap-8 md:py-4"
                    >
                      <span
                        className={`font-mono text-2xs ${
                          active === s.id ? 'text-accent' : 'text-faint'
                        } transition-colors group-hover:text-accent`}
                      >
                        {s.index}
                      </span>
                      <span className="text-3xl font-light uppercase tracking-tight text-fg transition-all duration-300 ease-n group-hover:translate-x-2 group-hover:text-accent md:text-5xl">
                        {s.label}
                      </span>
                      {active === s.id && (
                        <span className="ml-auto hidden font-mono text-2xs uppercase tracking-label text-muted md:block">
                          Current
                        </span>
                      )}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-14 flex flex-wrap items-end justify-between gap-8">
                <div>
                  <p className="font-mono text-2xs uppercase tracking-label text-muted">Direct</p>
                  <a
                    href="mailto:dastan.nurbek22@gmail.com"
                    className="mt-2 block text-fg transition-colors hover:text-accent md:text-lg"
                  >
                    dastan.nurbek22@gmail.com
                  </a>
                </div>
                <ul className="flex flex-wrap gap-x-8 gap-y-2">
                  {social.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-2xs uppercase tracking-label text-muted transition-colors hover:text-accent"
                      >
                        {s.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
