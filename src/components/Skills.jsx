import React from 'react';
import Section from './ui/Section';
import Reveal from './ui/Reveal';

const groups = [
  {
    label: 'Languages',
    items: ['Python', 'R', 'C#', 'Java', 'Dart', 'GAML'],
  },
  {
    label: 'Frameworks',
    items: ['PyTorch', 'TorchGeo', 'PySpark', 'MLlib', 'React', 'Flutter'],
  },
  {
    label: 'Tools',
    items: ['Unity', 'ArcGIS', 'QGIS', 'eCognition', 'SNAP', 'GAMA', 'Blender'],
  },
];

const Skills = () => (
  <Section id="skills" index="05" label="Skills" tone="light">
    <div>
      {groups.map((g, i) => (
        <Reveal key={g.label} delay={i * 0.06}>
          <div className="grid grid-cols-1 gap-x-10 gap-y-4 border-t border-line py-8 md:grid-cols-[9rem_1fr]">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-2xs text-accent">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-mono text-2xs uppercase tracking-label text-muted">{g.label}</h3>
            </div>

            <ul className="flex flex-wrap gap-x-2 gap-y-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="border border-line px-3.5 py-2 font-mono text-sm text-soft transition-colors duration-300 hover:border-accent hover:text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Skills;
