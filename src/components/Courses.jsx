import React from 'react';
import { motion } from 'framer-motion';

function Courses() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="max-w-[1200px] mx-auto w-full">
      <div className="grid md:grid-cols-3 gap-8 h-full">
        <h1 className="uppercase font-bold text-lg sm:text-xl tracking-wider px-10 pb-6">Courses</h1>

        {/* Mobile view conference items */}
        <motion.div
          className="block md:hidden text-left text-sm px-10 sm:pl-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }} // Trigger animation when 50% of the element is in view
          variants={fadeIn}
        >
          <div>
            <h1>
              <span className="uppercase font-bold">ISSonVIS 2025</span>, International Spring School on Visualization
            </h1>
            <p className="py-2">
                Over the course of two days, I gained a broad 
                understanding of how maps and visual data can be 
                powerful tools for both conveying truth and spreading 
                misinformation. The sessions covered topics like trust in 
                maps, how visualizations can be manipulated, and how user 
                perception is influenced by design, psychology, and even 
                technology. I learned how easily maps can be used to distort 
                reality and the importance of being critical of what we 
                see, especially in the context of digital media.
            </p>
            <p className="py-2">
                The course also emphasized ethical considerations in map-making and 
                explored the growing role of AI in both creating and combating 
                disinformation. Through both lectures and practical sessions, I 
                became more aware of how visual information shapes public opinion 
                and the responsibility that comes with creating trustworthy 
                content.
            </p>
            <p className="text-gray-400 text-xs">Palacký University Olomouc, 2025</p>
          </div>

        </motion.div>

        {/* Desktop view conference items */}
        <motion.div
          className="hidden md:block px-10 sm:pl-20 text-sm col-span-2 pt-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }} // Trigger animation when 50% of the element is in view
          variants={fadeIn}
        >
          <div>
            <h1>
              <span className="font-bold">ISSonVIS 2025</span>, International Spring School on Visualization
            </h1>
            <p className="py-2">
                Over the course of two days, I gained a broad 
                understanding of how maps and visual data can be 
                powerful tools for both conveying truth and spreading 
                misinformation. The sessions covered topics like trust in 
                maps, how visualizations can be manipulated, and how user 
                perception is influenced by design, psychology, and even 
                technology. I learned how easily maps can be used to distort 
                reality and the importance of being critical of what we 
                see, especially in the context of digital media.
            </p>
            <p className="py-2">
                The course also emphasized ethical considerations in map-making and 
                explored the growing role of AI in both creating and combating 
                disinformation. Through both lectures and practical sessions, I 
                became more aware of how visual information shapes public opinion 
                and the responsibility that comes with creating trustworthy 
                content.
            </p>
            <p className="text-gray-400 text-xs">Palacký University Olomouc, 2025</p>
          </div>

        </motion.div>
      </div>
    </div>
  );
}

export default Courses;