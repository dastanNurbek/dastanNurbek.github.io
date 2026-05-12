import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Data Setup - Flattened for easy filtering
const allSkills = [
  { name: "Python", category: "Languages" },
  { name: "PySpark", category: "Frameworks" },
  { name: "ArcGIS", category: "Tools" },
  { name: "R", category: "Languages" },
  { name: "Flutter", category: "Frameworks" },
  { name: "eCognition", category: "Tools" },
  { name: "C#", category: "Languages" },
  { name: "TorchGeo", category: "Frameworks" },
  { name: "SNAP", category: "Tools" },
  { name: "React", category: "Frameworks" },
  { name: "Blender", category: "Tools" },
  { name: "Java", category: "Languages" },
  { name: "QGIS", category: "Tools" },
  { name: "Dart", category: "Languages" },
  { name: "PyTorch", category: "Frameworks" },
  { name: "GAML", category: "Languages" },
  { name: "GAMA", category: "Tools" },
  { name: "MLlib", category: "Frameworks" },
  { name: "Unity", category: "Tools" },
];

// 2. Color Configuration
const categoryColors = {
  Languages: "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
  Frameworks: "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
  Tools: "bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200",
};

const Skills = () => {
  const [filter, setFilter] = useState('All');

  // Filter logic
  const filteredSkills = filter === 'All' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === filter);

  // Categories for buttons
  const categories = ['All', 'Languages', 'Frameworks', 'Tools'];

  return (
    <div id="skills" className="max-w-[1200px] mx-auto w-full py-10">
      <div className="grid md:grid-cols-3 gap-8 h-full">
        
        {/* --- Left Column: Title (Preserved Original Style) --- */}
        <div className="col-span-1">
           <h1 className="uppercase font-bold text-lg sm:text-xl tracking-wider px-10 pb-6 sticky top-20">
             Skills
           </h1>
        </div>

        {/* --- Right Column: Filters & Grid --- */}
        <div className="col-span-1 md:col-span-2 px-10 sm:px-0 sm:pr-20">
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border
                  ${filter === cat 
                    ? "bg-gray-800 text-white border-gray-800 shadow-md transform scale-105" 
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div 
            layout 
            className="flex flex-wrap gap-3"
          >
            <AnimatePresence mode='popLayout'>
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className={`px-4 py-2 rounded-lg border text-sm font-semibold shadow-sm cursor-default transition-colors ${categoryColors[skill.category]}`}
                >
                  {skill.name}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Empty State Helper (Just in case) */}
          {filteredSkills.length === 0 && (
            <p className="text-gray-400 text-sm italic pt-4">No skills found for this category.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Skills;