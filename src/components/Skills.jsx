import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  // Fade-in and slide-up animation for sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div id="skills" className="max-w-[1200px] mx-auto w-full">
      <div className="grid md:grid-cols-3 gap-8 h-full">
        <h1 className="uppercase font-bold text-lg sm:text-xl tracking-wider px-10 pb-6">Skills</h1>

        {/* Mobile Version */}
        <motion.div
          className="flex md:hidden px-10 sm:pl-20 text-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }} // Trigger animation every time the element is 50% in view
          variants={fadeInUp}
        >
          <div className="w-full">
            <h1 className="pb-4 uppercase font-bold tracking-wide underline underline-offset-4 decoration-2 decoration-[#93c5fd]">Languages</h1>
            <p className="py-1">Python</p>
            <p className="py-1">R</p>
            <p className="py-1">C#</p>
            <p className="py-1">Java</p>
            <p className="py-1">Dart</p>
            <p className="py-1">GAML</p>
            <p className="py-1">HTML</p>
            <p className="py-1">CSS</p>
          </div>
          <div className="w-full">
            <h1 className="pb-4 uppercase font-bold tracking-wide underline underline-offset-4 decoration-2 decoration-[#93c5fd]">Frameworks</h1>
            <p className="py-1">Streamlit</p>
            <p className="py-1">Flutter</p>
            <p className="py-1">React</p>
            <p className="py-1">TailwindCSS</p>
          </div>
          <div className="w-full">
            <h1 className="pb-4 uppercase font-bold tracking-wide underline underline-offset-4 decoration-2 decoration-[#93c5fd]">Tools</h1>
            <p className="py-1">ArcGIS</p>
            <p className="py-1">SNAP</p>
            <p className="py-1">QGIS</p>
            <p className="py-1">GAMA</p>
            <p className="py-1">Unity</p>
          </div>
        </motion.div>

        {/* Desktop Version */}
        <motion.div
          className="hidden md:flex justify-evenly pl-10 sm:pl-20 text-sm col-span-2 pt-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }} // Trigger animation every time the element is 50% in view
          variants={fadeInUp}
        >
          <div className="w-full">
            <h1 className="pb-4 uppercase font-bold tracking-wide underline underline-offset-4 decoration-2 decoration-[#93c5fd]">Languages</h1>
            <p className="py-1">Python</p>
            <p className="py-1">R</p>
            <p className="py-1">C#</p>
            <p className="py-1">Java</p>
            <p className="py-1">Dart</p>
            <p className="py-1">GAML</p>
            <p className="py-1">HTML</p>
            <p className="py-1">CSS</p>
          </div>
          <div className="w-full">
            <h1 className="pb-4 uppercase font-bold tracking-wide underline underline-offset-4 decoration-2 decoration-[#93c5fd]">Frameworks</h1>
            <p className="py-1">Streamlit</p>
            <p className="py-1">Flutter</p>
            <p className="py-1">React</p>
            <p className="py-1">TailwindCSS</p>
          </div>
          <div className="w-full">
            <h1 className="pb-4 uppercase font-bold tracking-wide underline underline-offset-4 decoration-2 decoration-[#93c5fd]">Tools</h1>
            <p className="py-1">ArcGIS</p>
            <p className="py-1">SNAP</p>
            <p className="py-1">QGIS</p>
            <p className="py-1">GAMA</p>
            <p className="py-1">Unity</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;