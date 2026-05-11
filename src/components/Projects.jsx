import React, { useState } from 'react';
import ImageCard from './ImageCard';
import { motion } from 'framer-motion';

const INITIAL_COUNT = 6;
const INCREMENT = 3;

const projects = [
  {
    imageUrl: '/images/unity-augmentation.png',
    linkUrl: 'https://github.com/dastanNurbek/unity_augmentation',
    title: 'Synthetic Data',
    description: <><span className="font-bold">Unity</span> generated synthetic satellite data for Deep Learning tasks. Study on Wildfire Classification.</>,
  },
  {
    imageUrl: '/images/copernicus-laptop.png',
    linkUrl: 'https://play.unity.com/en/games/6e97a30f-d1dc-494d-a115-77d721f6445c/copernicus',
    title: 'Copurrnicus Game',
    description: <>Educational game developed using <span className="font-bold">Unity</span> to promote EU's Copernicus and its Services.</>,
  },
  {
    imageUrl: '/images/campus-map.png',
    linkUrl: '#/campusmap',
    title: 'CampusMap Game',
    description: <>Serious game developed using <span className="font-bold">Unity</span> and <span className="font-bold">ArcGIS SDK</span> to explore Z_GIS and interact with real-time data.</>,
  },
  {
    imageUrl: '/images/aircraft-detection.png',
    linkUrl: '#/aircraft-detection',
    title: 'Aircraft Detection',
    description: <>Deep Learning project using <span className="font-bold">YOLO</span> and <span className="font-bold">Faster R-CNN</span> for aircraft detection in satellite imagery.</>,
  },
  {
    imageUrl: '/images/dengue.png',
    linkUrl: '#/dengue-competition',
    title: 'Dengue AI',
    description: <>Machine Learning project using <span className="font-bold">Scikit-learn</span> Random Forest aimed at predicting future Dengue fever outbreaks.</>,
  },
  {
    imageUrl: '/images/traffic.png',
    linkUrl: '#/traffic-emission-simulation',
    title: 'Spatial Simulation',
    description: <>Research project as part of Spatial Simulation course dedicated to studying the Traffic Emission impacts on Air Quality in Paris using <span className="font-bold">GAMA</span>.</>,
  },
  {
    imageUrl: '/images/displacement.png',
    linkUrl: 'https://earth.google.com/earth/d/1cPCmIYKlfh73nHOM7u8IRuLH059doEWs?usp=sharing',
    title: 'Earthquake Displacement Map',
    description: <>Displacement Map of Japanese Earthquake 2024 in <span className="font-bold">SNAP</span> platform as part an exercise for the course Advanced Remote Sensing.</>,
  },
  {
    imageUrl: '/images/segmentation.png',
    linkUrl: '#/segmentation',
    title: 'eCognition vs. Open-source',
    description: <>Assignment project as part of Advanced Remote Sensing course focused on comparing <span className="font-bold">eCognition</span> and <span className="font-bold">Python</span> segmentation tools.</>,
  },
  {
    imageUrl: '/images/sen2cube.png',
    linkUrl: '#/sen2cube',
    title: 'Water Area Calculator',
    description: <>Water Area Calculation model made in <span className="font-bold">Sen2Cube.at</span> platform.</>,
  },
  {
    imageUrl: '/images/gee-flood.png',
    linkUrl: 'https://ee-dastannurbek22.projects.earthengine.app/view/ural-river-flood',
    title: 'River Flood Illustration',
    description: <>Slider-widget app created in <span className="font-bold">Google Earth Engine</span> illustrating Ural River flood that took place in 2024.</>,
  },
  {
    imageUrl: '/images/eo-browser.png',
    linkUrl: '#/eo-browser',
    title: 'Wildfire Case Study',
    description: <>Case study of wildfire area evaluation in Abai region, Kazakhstan using Custom <span className="font-bold">JavaScript</span> in <span className="font-bold">EO-Browser</span>.</>,
  },
  {
    imageUrl: '/images/orbit.png',
    linkUrl: 'https://orbit-explorer.streamlit.app/',
    title: 'Orbit Explorer',
    description: <>This web app created in <span className="font-bold">Streamlit</span> allows users to explore different types of satellite orbits and visualize their ground track.</>,
  },
  {
    imageUrl: '/images/editor.png',
    linkUrl: 'https://github.com/dastanNurbek',
    title: 'Image Editor',
    description: <>This application was created using <span className="font-bold">Flutter</span>. It uses <span className="font-bold">Look-Up-Tables</span> to create filters and <span className="font-bold">GLSL</span> fragment shaders to apply changes to images.</>,
  },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const showMore = () => setVisibleCount((c) => Math.min(c + INCREMENT, projects.length));
  const hide = () => setVisibleCount(INITIAL_COUNT);

  const isExpanded = visibleCount > INITIAL_COUNT;
  const canShowMore = visibleCount < projects.length;

  return (
    <div id="projects" className="max-w-[1200px] mx-auto w-full">
      <h1 className="uppercase font-bold text-lg sm:text-xl tracking-wider px-10 pb-6">Projects</h1>
      <div className="px-10 sm:px-20 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={project.title}
              className="justify-items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              variants={fadeIn}
            >
              <ImageCard imageUrl={project.imageUrl} linkUrl={project.linkUrl} />
              <div className="flex justify-between py-4 w-60">
                <h1 className="font-bold uppercase">{project.title}</h1>
                <a className="text-right hover:text-gray-400" href={project.linkUrl}>
                  Visit↗
                </a>
              </div>
              <p className="w-60">{project.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-10">
          {canShowMore && (
            <button
              onClick={showMore}
              className="px-6 py-2 border border-current uppercase text-sm font-bold tracking-wider hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Show More
            </button>
          )}
          {isExpanded && (
            <button
              onClick={hide}
              className="px-6 py-2 border border-current uppercase text-sm font-bold tracking-wider hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Hide
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
