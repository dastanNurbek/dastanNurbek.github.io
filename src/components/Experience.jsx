import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Internship - Paris Lodron University of Salzburg",
      date: "July 2025 - Sep 2025",
      description: "Developed a 3D world platform using Unity and ArcGIS SDK for geospatial data visualization.",
      side: "left"
    },
    {
      title: "Research Assistant - Al-Farabi Kazakh National University",
      date: "Jan 2024 - Jan 2025",
      description: "Published one publication and participated in an international conference.",
      side: "right"
    },
    {
      title: "Computer Science Teacher - TAMOS Education",
      date: "Sep 2023 - June 2024",
      description: "Taught students Python and C# programming languages, as well as Game Development on Unity.",
      side: "left"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div id="experience" className="max-w-[1200px] mx-auto w-full">
      <div className="grid md:grid-cols-3 gap-8">
        <h1 className="uppercase font-bold text-lg sm:text-xl tracking-wider px-10 pb-6">Experience</h1>

        <div className="md:col-span-2 relative px-10">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            {/* Continuous vertical line in center */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#3b82f6] via-[#60a5fa] to-[#93c5fd]"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative last:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeIn}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3b82f6] rounded-full border-4 border-white z-10"></div>

                {/* Content card - alternating sides */}
                <motion.div
                  className={`w-[45%] ${exp.side === 'left' ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="p-6 rounded-lg border border-gray-300">
                    <h3 className="font-bold uppercase text-sm">{exp.title}</h3>
                    <p className="mt-2 text-gray-400 text-xs font-semibold">{exp.date}</p>
                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden">
            {/* Continuous vertical line on left */}
            <div className="absolute left-9.5 w-0.5 h-full bg-gradient-to-b from-[#3b82f6] via-[#60a5fa] to-[#93c5fd]"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative mb-16 last:mb-0 pl-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeIn}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-0.5rem] w-4 h-4 bg-[#3b82f6] rounded-full border-4 border-white z-10"></div>

                {/* Content card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.03,
                    x: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="p-5 rounded-lg border border-gray-300">
                    <h3 className="font-bold uppercase text-sm">{exp.title}</h3>
                    <p className="mt-2 text-gray-400 text-xs font-semibold">{exp.date}</p>
                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;