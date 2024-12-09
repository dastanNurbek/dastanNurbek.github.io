import React from 'react';
import { motion } from 'framer-motion';

const Publications = () => {
  // Fade-in and slide-up animation for the publication
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div id="publications" className="max-w-[1200px] mx-auto w-full">
      <div className="grid md:grid-cols-3 gap-8 h-full">
        <h1 className="uppercase font-bold text-lg sm:text-xl tracking-wider px-10 pb-6">Publications</h1>

        {/* Publication Item for mobile */}
        <motion.div
          className="block md:hidden text-left text-sm px-10 sm:pl-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }} // Trigger animation when 50% of the element is in view
          variants={fadeInUp}
        >
          <a
            className="font-bold uppercase text-base underline underline-offset-4 decoration-2 decoration-[#93c5fd]"
            href="https://bulletin-phmath.kaznpu.kz/index.php/ped/article/view/1720"
          >
            Modeling The Change of Water Volume in Alakol Lake Through Polynomial Regression
          </a>
          <p className="py-4">
            Published in{' '}
            <span className="italic">
              Bulletin of the Abai KazNPU, the series of Physical and Mathematical Sciences, 2023
            </span>
          </p>
          <p>
            Water level and water volume monitoring can help identify possible changes of water flow, as well as water volume changes, which can suggest alteration of waterway flow and potential surface level flooding. Satellite altimetry and optical remote sensing are used to obtain water level and water area data of Lake Alakol. The Normalized Difference Water Index is used to calculate water area from Sentinel-2 data series. Hydroweb provides water level data and estimates water area using polynomial regression model. Heron's formula are used to calculate water volume changes. After results analysis, seasonal variations of water level and water volume were observed. Water level data from Sentinel-2 and interpolated water level data series from Hydroweb were showed strong relationship with correlation coefficient of 0.78.
          </p>
          <p className="py-4">
            Recommended citation: Нурбекулы, Д., Бейсембекова, М., Маемерова, Г. and Ракишева, З. 2023. MODELING THE CHANGE OF WATER VOLUME IN ALAKOL LAKE THROUGH POLYNOMIAL REGRESSION. Bulletin of the Abai KazNPU, the series of "Physical and Mathematical Sciences". 84, 4 (Dec. 2023), 101–108. DOI:{' '}
            <a
              className="underline underline-offset-4 decoration-2 decoration-[#93c5fd]"
              href="https://doi.org/10.51889/2959-5894.2023.84.4.010"
            >
              https://doi.org/10.51889/2959-5894.2023.84.4.010
            </a>
            .
          </p>
        </motion.div>

        {/* Publication Item for larger screens */}
        <motion.div
          className="hidden md:block px-10 sm:pl-20 text-sm col-span-2 pt-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }} // Trigger animation when 50% of the element is in view
          variants={fadeInUp}
        >
          <a
            className="font-bold uppercase text-base underline underline-offset-4 decoration-2 decoration-[#93c5fd]"
            href="https://bulletin-phmath.kaznpu.kz/index.php/ped/article/view/1720"
          >
            Modeling The Change of Water Volume in Alakol Lake Through Polynomial Regression
          </a>
          <p className="py-4">
            Published in{' '}
            <span className="italic">
              Bulletin of the Abai KazNPU, the series of Physical and Mathematical Sciences, 2023
            </span>
          </p>
          <p>
            Water level and water volume monitoring can help identify possible changes of water flow, as well as water volume changes, which can suggest alteration of waterway flow and potential surface level flooding. Satellite altimetry and optical remote sensing are used to obtain water level and water area data of Lake Alakol. The Normalized Difference Water Index is used to calculate water area from Sentinel-2 data series. Hydroweb provides water level data and estimates water area using polynomial regression model. Heron's formula are used to calculate water volume changes. After results analysis, seasonal variations of water level and water volume were observed. Water level data from Sentinel-2 and interpolated water level data series from Hydroweb were showed strong relationship with correlation coefficient of 0.78.
          </p>
          <p className="py-4">
            Recommended citation: Нурбекулы, Д., Бейсембекова, М., Маемерова, Г. and Ракишева, З. 2023. MODELING THE CHANGE OF WATER VOLUME IN ALAKOL LAKE THROUGH POLYNOMIAL REGRESSION. Bulletin of the Abai KazNPU, the series of "Physical and Mathematical Sciences". 84, 4 (Dec. 2023), 101–108. DOI:{' '}
            <a
              className="underline underline-offset-4 decoration-2 decoration-[#93c5fd]"
              href="https://doi.org/10.51889/2959-5894.2023.84.4.010"
            >
              https://doi.org/10.51889/2959-5894.2023.84.4.010
            </a>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Publications;