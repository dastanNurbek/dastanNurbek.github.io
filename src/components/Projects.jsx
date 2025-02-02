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

          {/*Project - Copernicus */}
          <motion.div
            className="p-4 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={fadeIn}
          >
            <ImageCard imageUrl="/images/copernicus-laptop.png" linkUrl="https://play.unity.com/en/games/6e97a30f-d1dc-494d-a115-77d721f6445c/copernicus" />
            <div className="flex justify-between py-4 w-60">
              <h1 className="font-bold uppercase">Copernicus Game</h1>
              <a className="text-right hover:text-gray-400" href="https://play.unity.com/en/games/6e97a30f-d1dc-494d-a115-77d721f6445c/copernicus">
                Visit↗
              </a>
            </div>
            <p className='w-60'>Educational game developed using <span className="font-bold">Unity</span> to explain 
            the audience about Copernicus and its Services.</p>
          </motion.div>

          {/*Project - Traffic Emission Simulation */}
          <motion.div
            className="p-4 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={fadeIn}
          >
            <ImageCard imageUrl="/images/traffic.png" linkUrl="#/traffic-emission-simulation" />
            <div className="flex justify-between py-4 w-60">
              <h1 className="font-bold uppercase">Traffic Emission Simulation</h1>
              <a className="text-right hover:text-gray-400" href="#/traffic-emission-simulation">
                Visit↗
              </a>
            </div>
            <p className='w-60'>Research project as part of Spatial Simulation course 
            dedicated to studying the Traffic Emission impacts on Air Quality in Paris using <span className="font-bold">GAMA</span>.</p>
          </motion.div>

          {/*Project - Earthquake Displacement Map */}
          <motion.div
            className="p-4 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={fadeIn}
          >
            <ImageCard imageUrl="/images/displacement.png" linkUrl="https://earth.google.com/web/@37.26295813,136.91549175,145.27503422a,310995.44694085d,35y,0h,0t,0r/data=CgRCAggBOgMKATBCAggASggIw9GgyQcQAA" />
            <div className="flex justify-between py-4 w-60">
              <h1 className="font-bold uppercase">Earthquake Displacement Map</h1>
              <a className="text-right hover:text-gray-400" href="https://earth.google.com/web/@37.26295813,136.91549175,145.27503422a,310995.44694085d,35y,0h,0t,0r/data=CgRCAggBOgMKATBCAggASggIw9GgyQcQAA">
                Visit↗
              </a>
            </div>
            <p className='w-60'>Displacement Map of Japanese Earthquake 2024 
              in <span className="font-bold">SNAP</span> platform as part an 
              exercise for the course Advanced Remote Sensing.</p>
          </motion.div>

          {/*Project - Segmentation */}
          <motion.div
            className="p-4 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={fadeIn}
          >
            <ImageCard imageUrl="/images/segmentation.png" linkUrl="#/segmentation" />
            <div className="flex justify-between py-4 w-60">
              <h1 className="font-bold uppercase">eCognition vs. Open-source</h1>
              <a className="text-right hover:text-gray-400" href="#/segmentation">
                Visit↗
              </a>
            </div>
            <p className='w-60'>Assigment project as part of Advanced Remote Sensing course 
            focused on comparing <span className="font-bold">eCognition</span> and <span className="font-bold">Python</span> segmentation tools.</p>
          </motion.div>

          {/*Project - Sen2Cube */}
          <motion.div
            className="p-4 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={fadeIn}
          >
            <ImageCard imageUrl="/images/sen2cube.png" linkUrl="#/sen2cube" />
            <div className="flex justify-between py-4 w-60">
              <h1 className="font-bold uppercase">Water Area Calculator</h1>
              <a className="text-right hover:text-gray-400" href="#/sen2cube">
                Visit↗
              </a>
            </div>
            <p className='w-60'>Water Area Calculation model made in <span className="font-bold">Sen2Cube.at</span> platform.</p>
          </motion.div>

          {/*Project - Google Earth Engine */}
          <motion.div
            className="p-4 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={fadeIn}
          >
            <ImageCard imageUrl="/images/gee-flood.png" linkUrl="https://ee-dastannurbek22.projects.earthengine.app/view/ural-river-flood" />
            <div className="flex justify-between py-4 w-60">
              <h1 className="font-bold uppercase">River Flood Illustration</h1>
              <a className="text-right hover:text-gray-400" href="https://ee-dastannurbek22.projects.earthengine.app/view/ural-river-flood">
                Visit↗
              </a>
            </div>
            <p className='w-60'>Slider-widget app created 
              in <span className="font-bold">Google Earth Engine</span> illustrating Ural River flood that took place in 2024</p>
          </motion.div>

          {/*Project - EO Browser */}
          <motion.div
            className="p-4 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={fadeIn}
          >
            <ImageCard imageUrl="/images/eo-browser.png" linkUrl="#/eo-browser" />
            <div className="flex justify-between py-4 w-60">
              <h1 className="font-bold uppercase">Wildfire Case Study</h1>
              <a className="text-right hover:text-gray-400" href="#/eo-browser">
                Visit↗
              </a>
            </div>
            <p className='w-60'>Case study of wildfire area evaluation in Abai region, Kazakhstan 
              using Custom <span className="font-bold">JavaScript</span> in <span className="font-bold">EO-Browser</span>.</p>
          </motion.div>

          {/* Project - Orbit Explorer */}
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

          {/* Project - Image Editor */}
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
