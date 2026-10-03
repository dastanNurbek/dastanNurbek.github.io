import React from 'react';
import Section from './ui/Section';
import Reveal from './ui/Reveal';

const roles = [
  {
    role: 'Internship',
    org: 'IGN — Geodata Paris',
    period: 'May 2026 — Aug 2026',
    description: "Researching the thesis topic 'Procedural Generation of Synthetic Aerial Images'.",
  },
  {
    role: 'Internship',
    org: 'Paris Lodron University of Salzburg',
    period: 'Jul 2025 — Sep 2025',
    description: 'Developed a 3D world platform using Unity and the ArcGIS SDK for geospatial data visualisation.',
  },
  {
    role: 'Research Assistant',
    org: 'Al-Farabi Kazakh National University',
    period: 'Jan 2024 — Jan 2025',
    description: 'Published an article and participated in an international conference.',
  },
  {
    role: 'Computer Science Teacher',
    org: 'TAMOS Education',
    period: 'Sep 2023 — Jun 2024',
    description: 'Taught Python and C# alongside game development in Unity.',
  },
];

const Experience = () => (
  <Section id="experience" index="03" label="Experience" tone="grey">
    <ol className="relative border-l border-line">
      {roles.map((r, i) => (
        <li key={r.org + r.period} className="pb-12 last:pb-0">
          <Reveal delay={i * 0.05}>
            <div className="group relative pl-8 md:pl-14">
              <span className="absolute left-0 top-[9px] h-1.5 w-1.5 -translate-x-[3.5px] bg-faint transition-colors duration-300 group-hover:bg-accent" />

              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <span className="font-mono text-2xs uppercase tracking-label text-muted transition-colors duration-300 group-hover:text-fg">
                  {r.period}
                </span>
                {r.live && (
                  <span className="flex items-center gap-1.5 font-mono text-2xs uppercase tracking-label text-accent">
                    <span className="h-1 w-1 animate-pulse bg-accent" />
                    Current
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-xl font-light leading-tight tracking-tight text-fg md:text-3xl">
                {r.org}
              </h3>
              <p className="mt-2 font-mono text-2xs uppercase tracking-label text-accent">{r.role}</p>
              <p className="mt-5 max-w-read leading-relaxed text-soft">{r.description}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
