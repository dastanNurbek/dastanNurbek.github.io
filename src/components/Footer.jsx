import React from 'react';
import DotMatrix from './ui/DotMatrix';
import { scrollTo } from '../lib/smoothScroll';
import Reveal from './ui/Reveal';

const links = [
  { label: 'Email', value: 'dastan.nurbek22@gmail.com', href: 'mailto:dastan.nurbek22@gmail.com' },
  { label: 'Github', value: 'dastanNurbek', href: 'https://github.com/dastanNurbek' },
  {
    label: 'LinkedIn',
    value: 'dastan-nurbekuly',
    href: 'https://www.linkedin.com/in/dastan-nurbekuly-1758362b3/',
  },
];

const Footer = () => (
  <footer id="contact" className="panel panel-dark dotfield border-t border-line">
    <div className="shell">
      <div className="grid grid-cols-1 gap-x-10 md:grid-cols-12">
        <header className="pt-10 md:col-span-3 md:pt-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xs text-accent">08</span>
            <span className="h-px w-5 bg-line" />
            <h2 className="font-mono text-2xs uppercase tracking-label text-fg">Contact</h2>
          </div>
        </header>

        <div className="min-w-0 pb-14 pt-10 md:col-span-9 md:pb-20 md:pt-20">
          <Reveal>
            <div className="text-fg">
              <DotMatrix text={'GET IN\nTOUCH'} pitch={10} radius={0.33} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-10 max-w-[44ch] leading-relaxed text-soft">
              Open to research collaborations and thesis work in Earth observation and machine learning.
              Email is the fastest way to reach me.
            </p>
          </Reveal>

          <ul className="mt-12 border-t border-line">
            {links.map((l, i) => (
              <Reveal key={l.label} delay={0.05 * i}>
                <li>
                  <a
                    href={l.href}
                    target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-6 border-b border-line py-5 transition-[padding] duration-500 ease-n md:hover:px-4"
                  >
                    <span className="font-mono text-2xs uppercase tracking-label text-muted transition-colors group-hover:text-accent">
                      {l.label}
                    </span>
                    <span className="flex items-center gap-4">
                      <span className="truncate text-fg transition-colors group-hover:text-accent">
                        {l.value}
                      </span>
                      <span className="font-mono text-xs text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
                        ↗
                      </span>
                    </span>
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-line">
      <div className="shell flex flex-wrap items-center justify-between gap-4 py-6 font-mono text-2xs uppercase tracking-label text-faint">
        <span>© {new Date().getFullYear()} Dastan Nurbekuly</span>
        <span className="hidden sm:block">Built with React</span>
        <button
          type="button"
          onClick={() => scrollTo(0)}
          className="transition-colors hover:text-accent"
        >
          Top ↑
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
