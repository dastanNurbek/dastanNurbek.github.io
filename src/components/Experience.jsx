import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {

  // Fade-in and slide-up animation for sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div id="experience" className="max-w-[1200px] mx-auto w-full">
      <div className="grid md:grid-cols-3 gap-8 h-full">
        <h1 className="uppercase font-bold text-lg sm:text-xl tracking-wider px-10 pb-6">Experience</h1>

        {/* Mobile Version */}
        <motion.div
          className="block md:hidden px-10 sm:pl-20 text-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }} // Trigger animation every time the element is 50% in view
          variants={fadeInUp}
        >
          <div className="border-l-2 border-[#93c5fd] pl-4">
            <h3 className="font-bold uppercase">Research Assistant - Al-Farabi Kazakh National University</h3>
            <p className="mt-2 text-gray-400 text-xs">Jan 2024 - Present</p>
            <p className="mt-6">
              Published one publication and participated in an international conference. Currently publishing another article.
            </p>
          </div>

          <div className="border-l-2 border-[#93c5fd] pl-4 mt-12">
            <h3 className="font-bold uppercase">Computer Science Teacher - TAMOS Education</h3>
            <p className="mt-2 text-gray-400 text-xs">Sep 2023 - June 2024</p>
            <p className="mt-6">
              Taught students Python and C# programming languages, as well as Game Development on Unity. Participated with students in coding competitions and project olympiads.
            </p>
          </div>
        </motion.div>

        {/* Desktop Version */}
        <motion.div
          className="hidden md:block px-10 sm:pl-20 text-sm col-span-2 pt-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }} // Trigger animation every time the element is 50% in view
          variants={fadeInUp}
        >
          <div className="border-l-2 border-[#93c5fd] pl-4">
            <h3 className="font-bold uppercase">Research Assistant - Al-Farabi Kazakh National University</h3>
            <p className="mt-2 text-gray-400 text-xs">Jan 2024 - Present</p>
            <p className="mt-6">
              Published one publication and participated in an international conference. Currently publishing another article.
            </p>
          </div>

          <div className="border-l-2 border-[#93c5fd] pl-4 mt-12">
            <h3 className="font-bold uppercase">Computer Science Teacher - TAMOS Education</h3>
            <p className="mt-2 text-gray-400 text-xs">Sep 2023 - June 2024</p>
            <p className="mt-6">
              Taught students Python and C# programming languages, as well as Game Development on Unity. Participated with students in coding competitions and project olympiads.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;