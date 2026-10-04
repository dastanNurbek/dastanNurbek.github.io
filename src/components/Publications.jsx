import React from 'react';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import Disclosure from './ui/Disclosure';

const Publications = () => (
  <Section id="publications" index="06" label="Publications" tone="grey">
    <Reveal>
      <article className="border-t border-line py-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <span className="font-mono text-2xs uppercase tracking-label text-accent">Journal article</span>
          <span className="font-mono text-2xs uppercase tracking-label text-muted">2023</span>
        </div>

        <h3 className="mt-5 max-w-[34ch] text-2xl font-light leading-tight tracking-tight text-fg md:text-3xl">
          <a
            href="https://bulletin-phmath.kaznpu.kz/index.php/ped/article/view/1720"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-accent"
          >
            Modeling the change of water volume in Alakol Lake through polynomial regression
            <span className="ml-2 align-middle font-mono text-xs text-muted">↗</span>
          </a>
        </h3>

        <p className="mt-5 max-w-read leading-relaxed text-soft">
          Bulletin of the Abai KazNPU, series of Physical and Mathematical Sciences, vol. 84, no. 4,
          pp. 101–108.
        </p>

        <div className="mt-8">
          <Disclosure label="Abstract">
            <p className="max-w-read border-l border-accent pl-5 leading-relaxed text-soft">
              Water level and water volume monitoring can help identify possible changes of water flow,
              as well as water volume changes, which can suggest alteration of waterway flow and
              potential surface level flooding. Satellite altimetry and optical remote sensing are used
              to obtain water level and water area data of Lake Alakol. The Normalized Difference Water
              Index is used to calculate water area from Sentinel-2 data series. Hydroweb provides water
              level data and estimates water area using a polynomial regression model. Heron's formula is
              used to calculate water volume changes. After results analysis, seasonal variations of water
              level and water volume were observed. Water level data from Sentinel-2 and interpolated water
              level data series from Hydroweb showed a strong relationship with a correlation coefficient
              of 0.78.
            </p>
          </Disclosure>
        </div>

        <div className="mt-6">
          <Disclosure label="Citation">
            <p className="max-w-read font-mono text-xs leading-relaxed text-muted">
              Нурбекулы, Д., Бейсембекова, М., Маемерова, Г. and Ракишева, З. 2023. MODELING THE CHANGE
              OF WATER VOLUME IN ALAKOL LAKE THROUGH POLYNOMIAL REGRESSION. Bulletin of the Abai KazNPU,
              the series of “Physical and Mathematical Sciences”. 84, 4 (Dec. 2023), 101–108. DOI:{' '}
              <a
                className="text-fg underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
                href="https://doi.org/10.51889/2959-5894.2023.84.4.010"
                target="_blank"
                rel="noopener noreferrer"
              >
                10.51889/2959-5894.2023.84.4.010
              </a>
            </p>
          </Disclosure>
        </div>
      </article>
    </Reveal>
  </Section>
);

export default Publications;
