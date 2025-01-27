import React from 'react';
import ImageCard from './ImageCard';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  // Fade-in animation for each project card
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="projects" className="max-w-[1200px] mx-auto w-full">
      <h1 className="uppercase font-bold text-lg sm:text-xl tracking-wider px-10 pb-6">Projects</h1>
      <div className='px-10 sm:pl-20 mt-8'>
        <Slider {...settings}>

          {/*Project 1 - Traffic Emission Simulation */}
          <motion.div
            className="p-4 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={fadeIn}
          >
            <ImageCard imageUrl="/images/copernicus-game.png" linkUrl="https://play.unity.com/en/games/6e97a30f-d1dc-494d-a115-77d721f6445c/copernicus" />
            <div className="flex justify-between py-4 w-60">
              <h1 className="font-bold uppercase">Copernicus Game</h1>
              <a className="text-right hover:text-gray-400" href="https://play.unity.com/en/games/6e97a30f-d1dc-494d-a115-77d721f6445c/copernicus">
                Visit↗
              </a>
            </div>
            <p className='w-60'>Educational game developed using Unity to teach Copernicus Services.</p>
          </motion.div>

          {/*Project 2 */}
          <motion.div
            className="p-4 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={fadeIn}
          >
            <ImageCard imageUrl="/images/traffic.png" linkUrl="/traffic-emission-simulation" />
            <div className="flex justify-between py-4 w-60">
              <h1 className="font-bold uppercase">Traffic Emission Simulation</h1>
              <a className="text-right hover:text-gray-400" href="/traffic-emission-simulation">
                Visit↗
              </a>
            </div>
            <p className='w-60'>Research project as part of Spatial Simulation course.</p>
          </motion.div>

          {/* Project 3 - Orbit Explorer */}
          <motion.div
            className="p-4 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={fadeIn}
          >
            <ImageCard
              imageUrl="/images/orbit.png"
              linkUrl="https://orbit-explorer.streamlit.app/"
            />
            <div className="flex justify-between py-4 w-60">
              <h1 className="font-bold uppercase">Orbit Explorer</h1>
              <a className="text-right hover:text-gray-400" href="https://orbit-explorer.streamlit.app/">
                Visit↗
              </a>
            </div>
            <p className='w-60'>
              This web app created in <span className="font-bold">Streamlit</span> allows users to explore
              different types of satellite orbits and visualize their ground track.
            </p>
          </motion.div>

          {/* Project 4 - Image Editor */}
          <motion.div
            className="p-4 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={fadeIn}
          >
            <ImageCard
              imageUrl="/images/editor.png"
              linkUrl="https://github.com/dastanNurbek"
            />
            <div className="flex justify-between py-4 w-60">
              <h1 className="font-bold uppercase">Image Editor</h1>
              <a className="text-right hover:text-gray-400" href="https://github.com/dastanNurbek">
                Visit↗
              </a>
            </div>
            <p className='w-60'>
              This application was created using <span className="font-bold">Flutter</span>. It uses{' '}
              <span className="font-bold">Look-Up-Tables</span> to create filters and{' '}
              <span className="font-bold">GLSL</span> fragment shaders to apply changes to images.
            </p>
          </motion.div>
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
