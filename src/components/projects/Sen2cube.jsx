import React from 'react';
import ProjectLayout from './ProjectLayout';

const steps = [
  {
    src: '/images/sen-1.png',
    alt: 'Concepts section defining water, cloud and ice entities',
    text: 'In the concepts section, three entities are defined — water, cloud and ice — using the Color type.',
  },
  {
    src: '/images/sen-2.png',
    alt: 'Application section merging cloud and ice entities',
    text: 'In the application section, the cloud and ice entities are merged first.',
  },
  {
    src: '/images/sen-3.png',
    alt: 'Water frequency computation',
    text: 'The water entity then yields how frequently, as a percentage, water appeared on a given pixel across a collection of cloud-free and ice-free images.',
  },
  {
    src: '/images/sen-4.png',
    alt: 'Pixel counting and area evaluation',
    text: 'Finally, pixels above the 25% threshold are counted and the water area is evaluated in square kilometres.',
  },
];

const tests = [
  { src: '/images/sen-5.png', name: 'Traunsee', estimated: '24.74 km²', truth: '24.5 km²' },
  { src: '/images/sen-6.png', name: 'Mondsee', estimated: '14.18 km²', truth: '14.2 km²' },
  { src: '/images/sen-7.png', name: 'Hallstätter See', estimated: '8.37 km²', truth: '8.55 km²' },
  { src: '/images/sen-8.png', name: 'Lake Zell', estimated: '4.67 km²', truth: '4.55 km²' },
];

const Sen2Cube = () => (
  <ProjectLayout
    title="Water area calculation on Sen2Cube.at"
    subtitle="A semantic EO data cube model that separates water from cloud and ice, then converts pixel frequency into surface area."
    meta={[
      { k: 'Platform', v: 'Sen2Cube.at' },
      { k: 'Data', v: 'Sentinel-2' },
      { k: 'Threshold', v: '25% water frequency' },
      { k: 'Validation', v: '4 Austrian lakes' },
    ]}
  >
    <h2>Model description</h2>
    {steps.map((s) => (
      <figure key={s.src} className="my-8">
        <img src={s.src} alt={s.alt} />
        <figcaption>{s.text}</figcaption>
      </figure>
    ))}

    <h2>Test cases</h2>
    <table>
      <thead>
        <tr>
          <th>Lake</th>
          <th>Estimated</th>
          <th>Ground truth</th>
        </tr>
      </thead>
      <tbody>
        {tests.map((t) => (
          <tr key={t.name}>
            <td>{t.name}</td>
            <td>{t.estimated}</td>
            <td>{t.truth}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
      {tests.map((t) => (
        <figure key={t.src}>
          <img src={t.src} alt={`Model output for ${t.name}`} />
          <figcaption>
            {t.name} — {t.estimated} estimated
          </figcaption>
        </figure>
      ))}
    </div>
  </ProjectLayout>
);

export default Sen2Cube;
