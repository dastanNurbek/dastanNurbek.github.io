import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Courses() {
  const [showISSonVIS, setShowISSonVIS] = useState(false);
  const [showAI4EO, setShowAI4EO] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div id="activities" className="max-w-[1200px] mx-auto w-full">
      <div className="grid md:grid-cols-3 gap-8 h-full">
        <h1 className="uppercase font-bold text-lg sm:text-xl tracking-wider px-10 pb-6">Activities</h1>

        {/* Mobile view conference items */}
        <motion.div
          className="block md:hidden text-left text-sm px-10 sm:pl-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={fadeIn}
        >
          <div>
            <h1>
              <span className="uppercase font-bold">ISSonVIS 2025</span>, International Spring School on Visualization
            </h1>
            {showISSonVIS && (
              <>
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
              </>
            )}
            <button
              onClick={() => setShowISSonVIS(!showISSonVIS)}
              className="text-blue-500 hover:text-blue-700 text-xs mt-2"
            >
              {showISSonVIS ? 'Show less' : 'Show more'}
            </button>
            <p className="text-gray-400 text-xs mt-2">Palacký University Olomouc, 2025</p>
          </div>

          <div className="mt-10">
            <h1>
              <span className="uppercase font-bold">AI4EO 2025</span>, International Symposium on AI for Earth Observation
            </h1>
            {showAI4EO && (
              <>
                <p className="py-2">
                  The AI4EO Symposium held in Rennes on September 11–12 was an enriching experience 
                  that deepened my understanding of artificial intelligence for Earth Observation. The 
                  program featured four keynote speakers who presented their work on a diverse set of 
                  topics, including forestry, foundation models, bias mitigation in deep learning, and 
                  digital twins. Complementing the talks, poster sessions provided valuable insight 
                  into current research trends in AI4EO.
                </p>
                <p className="py-2">
                  I gained new perspectives on self-supervised learning, foundation models, and 
                  multi-modal approaches. One poster that particularly caught my attention was 
                  SSL4Eco, a phenology-aware dataset for ecological research developed by the 
                  Swiss Federal Research Institute and the EcoVision Lab. The authors proposed 
                  an innovative method for sampling images tailored to foundation models, with 
                  a focus on natural ecosystems rather than agricultural landscapes.
                </p>
                <p className="py-2">
                  Another highlight was a poster on the super-resolution of GOME-2 data using deep 
                  learning. Having previously worked with NOx satellite products, I found this study 
                  especially relevant. By enhancing spatial resolution and validating results against 
                  in-situ measurements, the work offers improved precision for atmospheric studies.
                </p>
              </>
            )}
            <button
              onClick={() => setShowAI4EO(!showAI4EO)}
              className="text-blue-500 hover:text-blue-700 text-xs mt-2"
            >
              {showAI4EO ? 'Show less' : 'Show more'}
            </button>
            <p className="text-gray-400 text-xs mt-2">Rennes, Britanny, France, 2025</p>
          </div>
        </motion.div>

        {/* Desktop view conference items */}
        <motion.div
          className="hidden md:block px-10 sm:pl-20 text-sm col-span-2 pt-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={fadeIn}
        >
          <div>
            <h1>
              <span className="font-bold">ISSonVIS 2025</span>, International Spring School on Visualization
            </h1>
            {showISSonVIS && (
              <>
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
              </>
            )}
            <button
              onClick={() => setShowISSonVIS(!showISSonVIS)}
              className="text-blue-500 hover:text-blue-700 text-xs mt-2"
            >
              {showISSonVIS ? 'Show less' : 'Show more'}
            </button>
            <p className="text-gray-400 text-xs mt-2">Palacký University Olomouc, 2025</p>
          </div>

          <div className="mt-10">
            <h1>
              <span className="font-bold">AI4EO 2025</span>, International Symposium on AI for Earth Observation
            </h1>
            {showAI4EO && (
              <>
                <p className="py-2">
                  The AI4EO Symposium held in Rennes on September 11–12 was an enriching experience 
                  that deepened my understanding of artificial intelligence for Earth Observation. The 
                  program featured four keynote speakers who presented their work on a diverse set of 
                  topics, including forestry, foundation models, bias mitigation in deep learning, and 
                  digital twins. Complementing the talks, poster sessions provided valuable insight 
                  into current research trends in AI4EO.
                </p>
                <p className="py-2">
                  I gained new perspectives on self-supervised learning, foundation models, and 
                  multi-modal approaches. One poster that particularly caught my attention was 
                  SSL4Eco, a phenology-aware dataset for ecological research developed by the 
                  Swiss Federal Research Institute and the EcoVision Lab. The authors proposed 
                  an innovative method for sampling images tailored to foundation models, with 
                  a focus on natural ecosystems rather than agricultural landscapes.
                </p>
                <p className="py-2">
                  Another highlight was a poster on the super-resolution of GOME-2 data using deep 
                  learning. Having previously worked with NOx satellite products, I found this study 
                  especially relevant. By enhancing spatial resolution and validating results against 
                  in-situ measurements, the work offers improved precision for atmospheric studies.
                </p>
              </>
            )}
            <button
              onClick={() => setShowAI4EO(!showAI4EO)}
              className="text-blue-500 hover:text-blue-700 text-xs mt-2"
            >
              {showAI4EO ? 'Show less' : 'Show more'}
            </button>
            <p className="text-gray-400 text-xs mt-2">Rennes, Britanny, France, 2025</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Courses;