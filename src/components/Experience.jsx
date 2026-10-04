import React from 'react';
import Section from './ui/Section';
import Reveal from './ui/Reveal';

const roles = [
  {
    role: 'Internship',
    org: 'IGN — Geodata Paris',
    period: 'May 2026 — Aug 2026',
    description: "Master’s thesis research evaluating the procedural generation pipeline from GIS data and its beneﬁts in wildﬁre segmentation.",
  },
  {
    role: 'Internship',
    org: 'Paris Lodron University of Salzburg',
    period: 'Jul 2025 — Sep 2025',
    description: 'Developed a 3D digital twin using Unity and ArcGIS SDK for geospatial data visualization.',
  },
  {
    role: 'Research Assistant',
    org: 'Al-Farabi Kazakh National University',
    period: 'Jan 2024 — Jan 2025',
    description: 'Researched the dynamics of water bodies of Kazakhstan using satellite data. Published an article and participated in an international conference.',
  },
  {
    role: 'Computer Science Teacher',
    org: 'TAMOS Education',
    period: 'Sep 2023 — Jun 2024',
    description: 'Taught students Python and C# programming languages, as well as game development on Unity.',
  },
];

const Experience = () => (
  <Section id="experience" index="02" label="Experience" tone="grey">
    <ol>
      {roles.map((r, i) => (
        <li key={r.org + r.period}>
          <Reveal delay={i * 0.05}>
            <div className="group grid grid-cols-1 gap-x-10 gap-y-3 border-t border-line py-10 md:grid-cols-[12rem_1fr]">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 md:pt-1">
                <span className="font-mono text-2xs uppercase tracking-label text-fg">{r.period}</span>
                {r.live && (
                  <span className="flex items-center gap-1.5 font-mono text-2xs uppercase tracking-label text-accent">
                    <span className="h-1 w-1 animate-pulse bg-accent" />
                    Current
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-2xl font-light leading-tight tracking-tight text-fg md:text-3xl">
                  {r.org}
                </h3>
                <p className="mt-3 font-mono text-2xs uppercase tracking-label text-accent">{r.role}</p>
                <p className="mt-5 max-w-read leading-relaxed text-soft">{r.description}</p>
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
