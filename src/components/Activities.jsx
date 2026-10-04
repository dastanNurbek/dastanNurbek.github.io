import React from 'react';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import Disclosure from './ui/Disclosure';

const groups = [
  {
    label: 'Presentations',
    items: [
      {
        title: 'The 17th International Coastal Symposium',
        org: 'The Journal of Coastal Research',
        place: 'Doha',
        year: '2024',
        presenter: true,
        summary:
          "Poster presentation accepted on the research paper 'Wave climate analysis of Lake Balkhash using altimetry data'.",
      },
      {
        title: 'FARABI ALEMI 2023',
        org: 'Al-Farabi Kazakh National University',
        place: 'Almaty',
        year: '2023',
        presenter: true,
        summary:
          "Thesis on 'Observing long-term NOx trends in Almaty city using satellite retrievals' was published and awarded third place.",
      },
      {
        title: 'AIAC AUES',
        org: 'Almaty University of Power Engineering and Telecommunications',
        place: 'Almaty',
        year: '2023',
        presenter: true,
        summary:
          "Spoke on the abstract thesis 'Observing long-term NOx trends in Almaty city using satellite retrievals'.",
      },
    ],
  },
  {
    label: 'Schools & symposia',
    items: [
      {
        title: 'AI4EO Spring School 2026',
        org: 'International Spring School on AI for Earth Observation',
        place: 'Vannes, Brittany',
        year: '2026',
        details: [
          'Participated in and helped organise the AI4EO Spring School in Vannes. The programme featured lectures and hands-on sessions on foundation models, MLOps, responsible AI and generative models, alongside a data-driven project from Φ-lab.',
        ],
      },
      {
        title: 'AI4EO 2025',
        org: 'International Symposium on AI for Earth Observation',
        place: 'Rennes, Brittany',
        year: '2025',
        details: [
          'The symposium held in Rennes on 11–12 September deepened my understanding of artificial intelligence for Earth observation. Four keynote speakers presented work on forestry, foundation models, bias mitigation and digital twins.',
          'I gained new perspectives on self-supervised learning and multi-modal approaches, and specifically explored the SSL4Eco dataset and research on super-resolution of GOME-2 data for improved precision in atmospheric studies.',
        ],
      },
      {
        title: 'ISSonVIS 2025',
        org: 'International Spring School on Visualization',
        place: 'Palacký University Olomouc',
        year: '2025',
        details: [
          'Over two days I gained a broad understanding of how maps and visual data can be powerful tools for both conveying truth and spreading misinformation. Sessions covered trust in maps, perception design and psychology.',
          'The course also emphasised ethical considerations in map-making and explored the growing role of AI in both creating and combating disinformation.',
        ],
      },
    ],
  },
];

const Item = ({ item }) => (
  <article className="group border-t border-line py-8">
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <div className="flex items-center gap-3">
        {item.presenter && (
          <span className="border border-accent px-2 py-1 font-mono text-2xs uppercase tracking-label text-accent">
            Presenter
          </span>
        )}
        <span className="font-mono text-2xs uppercase tracking-label text-muted">{item.place}</span>
      </div>
      <span className="font-mono text-2xs uppercase tracking-label text-muted">{item.year}</span>
    </div>

    <h4 className="mt-5 max-w-[34ch] text-lg font-light leading-tight tracking-tight text-fg md:text-2xl">
      {item.title}
    </h4>
    <p className="mt-3 font-mono text-2xs uppercase tracking-label text-faint">{item.org}</p>

    {item.summary && (
      <p className="mt-5 max-w-read leading-relaxed text-soft">{item.summary}</p>
    )}

    {item.details && (
      <div className="mt-8">
        <Disclosure label="Details">
          <div className="max-w-read space-y-4 leading-relaxed text-soft">
            {item.details.map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </div>
        </Disclosure>
      </div>
    )}
  </article>
);

const Activities = () => (
  <Section id="activities" index="07" label="Activities" tone="light">
    <div className="space-y-16">
      {groups.map((g, gi) => (
        <div key={g.label}>
          <h3 className="font-mono text-2xs uppercase tracking-label text-accent">{g.label}</h3>

          <div className="mt-6">
            {g.items.map((item, i) => (
              <Reveal key={item.title} delay={Math.min(i, 4) * 0.05 + gi * 0.03}>
                <Item item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Activities;
