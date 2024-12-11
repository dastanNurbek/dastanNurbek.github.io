import React from 'react';
import ImageCard from './ImageCard';
import { motion } from 'framer-motion';

const Projects = () => {
  // Fade-in animation for each project card
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div id="projects" className="max-w-[1200px] mx-auto w-full">
      <div className="grid md:grid-cols-3 gap-8 h-full">
        <h1 className="uppercase font-bold text-lg sm:text-xl tracking-wider px-10 pb-6">Projects</h1>

        {/* Project 1 - Orbit Explorer */}
        <motion.div
          className="grid md:col-span-1 w-64 md:ml-10 text-sm justify-self-center my-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }} // Trigger animation when 50% of the element is visible
          variants={fadeIn}
        >
          <ImageCard
            imageUrl="/images/orbit.png"
            linkUrl="https://orbit-explorer.streamlit.app/"
          />
          <div className="flex justify-between py-4">
            <h1 className="font-bold uppercase">Orbit Explorer</h1>
            <a className="text-right hover:text-gray-400" href="https://orbit-explorer.streamlit.app/">
              Visit↗
            </a>
          </div>
          <p>
            This web app created in <span className="font-bold">Streamlit</span> allows users to explore
            different types of satellite orbits and visualize their ground track.
          </p>
        </motion.div>

        {/* Project 2 - Image Editor */}
        <motion.div
          className="grid md:col-span-1 w-64 text-sm justify-self-center my-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }} // Trigger animation when 50% of the element is visible
          variants={fadeIn}
        >
          <ImageCard
            imageUrl="/images/editor.png"
            linkUrl="https://github.com/dastanNurbek"
          />
          <div className="flex justify-between py-4">
            <h1 className="font-bold uppercase">Image Editor</h1>
            <a className="text-right hover:text-gray-400" href="https://github.com/dastanNurbek">
              Visit↗
            </a>
          </div>
          <p>
            This application was created using <span className="font-bold">Flutter</span>. It uses{' '}
            <span className="font-bold">Look-Up-Tables</span> to create filters and{' '}
            <span className="font-bold">GLSL</span> fragment shaders to apply changes to images.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;