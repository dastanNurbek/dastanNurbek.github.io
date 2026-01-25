import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Publications = () => {
  const [showAbstract, setShowAbstract] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div id="publications" className="max-w-[1200px] mx-auto w-full py-12">
      <div className="grid md:grid-cols-3 gap-8 h-full">
        {/* Sidebar Title */}
        <h1 className="uppercase font-bold text-lg sm:text-xl tracking-wider px-10 pb-6">
          Publications
        </h1>

        {/* Content Area */}
        <motion.div
          className="px-10 sm:pl-20 text-sm col-span-2 pt-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="mb-10">
            <a
              className="font-bold uppercase text-base underline underline-offset-4 decoration-2 decoration-[#93c5fd] hover:text-gray-700 transition-colors"
              href="https://bulletin-phmath.kaznpu.kz/index.php/ped/article/view/1720"
              target="_blank"
              rel="noopener noreferrer"
            >
              Modeling The Change of Water Volume in Alakol Lake Through Polynomial Regression
            </a>
            
            <p className="py-4 text-gray-600">
              Published in{' '}
              <span className="italic">
                Bulletin of the Abai KazNPU, the series of Physical and Mathematical Sciences, 2023
              </span>
            </p>

            {/* Abstract Accordion */}
            <div className="pb-1">
              <button
                onClick={() => setShowAbstract(!showAbstract)}
                className="flex items-center gap-2 mb-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                Abstract
                {showAbstract ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              <AnimatePresence>
                {showAbstract && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 text-gray-500 leading-relaxed border-l-2 border-gray-100 pl-4 ml-1">
                      Water level and water volume monitoring can help identify possible changes of water flow, 
                      as well as water volume changes, which can suggest alteration of waterway flow and 
                      potential surface level flooding. Satellite altimetry and optical remote sensing are 
                      used to obtain water level and water area data of Lake Alakol. The Normalized Difference 
                      Water Index is used to calculate water area from Sentinel-2 data series. Hydroweb provides 
                      water level data and estimates water area using polynomial regression model. Heron's formula 
                      are used to calculate water volume changes. After results analysis, seasonal variations 
                      of water level and water volume were observed. Water level data from Sentinel-2 and 
                      interpolated water level data series from Hydroweb showed a strong relationship with a 
                      correlation coefficient of 0.78.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Citation Section */}
            <div className="text-xs text-gray-400">
              <span className="font-semibold block mb-2">Recommended citation:</span>
              Нурбекулы, Д., Бейсембекова, М., Маемерова, Г. and Ракишева, З. 2023. MODELING THE CHANGE OF WATER VOLUME IN ALAKOL LAKE THROUGH POLYNOMIAL REGRESSION. Bulletin of the Abai KazNPU, the series of "Physical and Mathematical Sciences". 84, 4 (Dec. 2023), 101–108. DOI:{' '}
              <a
                className="underline underline-offset-4 decoration-1 decoration-[#93c5fd] hover:text-[#60a5fa]"
                href="https://doi.org/10.51889/2959-5894.2023.84.4.010"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.51889/2959-5894.2023.84.4.010
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Publications;