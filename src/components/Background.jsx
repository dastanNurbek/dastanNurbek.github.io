import React from 'react';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import Disclosure from './ui/Disclosure';

const degrees = [
  {
    level: 'Master of Science',
    title: 'Copernicus Master in Digital Earth',
    institutions: ['Paris Lodron University of Salzburg', 'University of South Brittany'],
    period: 'Oct 2024 — Oct 2026',
    courses: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Big Data',
      'Advanced Remote Sensing',
      'Object-based Image Analysis',
      'Efficient Image Processing',
      'GIS & Spatial Analysis',
    ],
    logos: [
      { src: '/images/logos/plus.webp', alt: 'Paris Lodron University of Salzburg', h: 'h-10 md:h-12' },
      { src: '/images/logos/ubs.webp', alt: 'University of South Brittany', h: 'h-8 md:h-10' },
      { src: '/images/logos/erasmus.webp', alt: 'Erasmus Mundus', h: 'h-6 md:h-8' },
    ],
  },
  {
    level: 'Bachelor of Technics and Technologies',
    title: 'Space Engineering and Technologies',
    institutions: ['Al-Farabi Kazakh National University'],
    period: 'Sep 2019 — Jun 2023',
    courses: [
      'Processing of Satellite Data',
      'Scientific Data Processing',
      'Basics of GIS Technologies',
      'High-level Programming Languages',
      'Object-oriented Programming',
      'Orbital Mechanics',
      'Space Systems Design',
      'Simulation Modeling of Complex Systems',
    ],
    logos: [{ src: '/images/logos/kaznu.webp', alt: 'Al-Farabi Kazakh National University', h: 'h-10 md:h-12' }],
  },
];

const Background = () => (
  <Section id="background" index="03" label="Background" tone="light">
    <div>
      {degrees.map((d, i) => (
        <Reveal key={d.title} delay={i * 0.05}>
          {/* The period sits in its own column so the dates read as one scannable rail */}
          <article className="grid grid-cols-1 gap-x-10 gap-y-4 border-t border-line py-10 md:grid-cols-[12rem_1fr]">
            <p className="font-mono text-2xs uppercase tracking-label text-fg md:pt-1">{d.period}</p>

            <div>
              <p className="font-mono text-2xs uppercase tracking-label text-accent">{d.level}</p>

              <h3 className="mt-4 max-w-[30ch] text-2xl font-light leading-tight tracking-tight text-fg md:text-3xl">
                {d.title}
              </h3>

              <ul className="mt-5 space-y-1">
                {d.institutions.map((inst) => (
                  <li key={inst} className="text-soft">
                    {inst}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Disclosure label="Key courses" count={d.courses.length}>
                  <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
                    {d.courses.map((c, idx) => (
                      <li
                        key={c}
                        className="flex items-baseline gap-4 border-b border-line py-2.5 font-mono text-sm text-soft"
                      >
                        <span className="text-faint">{String(idx + 1).padStart(2, '0')}</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </Disclosure>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-8 border-t border-line pt-6">
                <span className="font-mono text-2xs uppercase tracking-label text-faint">Awarded by</span>
                {d.logos.map((logo) => (
                  <img
                    key={logo.src}
                    src={logo.src}
                    alt={logo.alt}
                    className={`${logo.h} w-auto object-contain opacity-70 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0`}
                  />
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Background;
