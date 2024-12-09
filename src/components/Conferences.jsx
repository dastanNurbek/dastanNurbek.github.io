import React from 'react';
import { motion } from 'framer-motion';

function Conferences() {
  // Fade-in and slide-up animation for the conferences
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="max-w-[1200px] mx-auto w-full">
      <div className="grid md:grid-cols-3 gap-8 h-full">
        <h1 className="uppercase font-bold text-lg sm:text-xl tracking-wider px-10 pb-6">Conferences</h1>

        {/* Mobile view conference items */}
        <motion.div
          className="block md:hidden text-left text-sm px-10 sm:pl-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }} // Trigger animation when 50% of the element is in view
          variants={fadeInUp}
        >
          <div>
            <h1>
              <span className="uppercase font-bold">The 17th International Coastal Symposium</span>, The Journal of Coastal Research (JCR)
            </h1>
            <p className="py-2">
              Poster presentation was accepted based on a research paper "Wave climate analysis of Lake Balkhash using altimetry data"
            </p>
            <p className="text-gray-400 text-xs">Doha, 2024</p>
          </div>

          <div className="mt-10">
            <h1>
              <span className="uppercase font-bold">FARABI ALEMI</span>, Al-Farabi Kazakh National University
            </h1>
            <p className="py-2">
              Thesis on "Observing long-term NOx trends in Almaty city using satellite retrievals" was published and awarded third place.
            </p>
            <p className="text-gray-400 text-xs">Almaty, 2023</p>
          </div>

          <div className="mt-10">
            <h1>
              <span className="uppercase font-bold">AIAC AUES</span>, Almaty University of Power Engineering and Telecommunications
            </h1>
            <p className="py-2">
              Participated as a speaker on abstract thesis "Observing long-term NOx trends in Almaty city using satellite retrievals".
            </p>
            <p className="text-gray-400 text-xs">Almaty, 2023</p>
          </div>
        </motion.div>

        {/* Desktop view conference items */}
        <motion.div
          className="hidden md:block px-10 sm:pl-20 text-sm col-span-2 pt-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }} // Trigger animation when 50% of the element is in view
          variants={fadeInUp}
        >
          <div>
            <h1>
              <span className="uppercase font-bold">The 17th International Coastal Symposium</span>, The Journal of Coastal Research (JCR)
            </h1>
            <p className="py-2">
              Poster presentation was accepted based on a research paper "Wave climate analysis of Lake Balkhash using altimetry data"
            </p>
            <p className="text-gray-400 text-xs">Doha, 2024</p>
          </div>

          <div className="mt-10">
            <h1>
              <span className="uppercase font-bold">FARABI ALEMI</span>, Al-Farabi Kazakh National University
            </h1>
            <p className="py-2">
              Thesis on "Observing long-term NOx trends in Almaty city using satellite retrievals" was published and awarded third place.
            </p>
            <p className="text-gray-400 text-xs">Almaty, 2023</p>
          </div>

          <div className="mt-10">
            <h1>
              <span className="uppercase font-bold">AIAC AUES</span>, Almaty University of Power Engineering and Telecommunications
            </h1>
            <p className="py-2">
              Participated as a speaker on abstract thesis "Observing long-term NOx trends in Almaty city using satellite retrievals".
            </p>
            <p className="text-gray-400 text-xs">Almaty, 2023</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Conferences;