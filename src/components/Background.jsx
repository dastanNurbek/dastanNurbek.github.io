import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Background = () => {
    const [scrollY, setScrollY] = useState(0);
    const [masterCoursesExpanded, setMasterCoursesExpanded] = useState(true);
    const [bachelorCoursesExpanded, setBachelorCoursesExpanded] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
    };

    const coursesMaster = [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Distributed Systems",
        "Advanced Remote Sensing",
        "Object-based Image Analysis",
        "Efficient Image Processing",
        "GIS & Spatial Analysis"
    ];

    const coursesBachelor = [
        "Calculus and Linear Algebra",
        "Programming Fundamentals",
        "Differential Equations",
        "Mechanics",
        "Space Systems Engineering",
        "Computer Modeling and Simulation",
        "GIS and Remote Sensing",
    ];

    return (
        <div id="background" className="max-w-[1200px] mx-auto w-full">
            <div className="grid md:grid-cols-3 gap-8 h-full">
                <h1 className="uppercase font-bold text-lg sm:text-xl tracking-wider px-10 pb-6">
                    Background
                </h1>

                {/* Mobile Version */}
                <motion.div
                    className="block md:hidden text-left text-sm"
                    initial="hidden"
                    animate={scrollY > 200 ? 'visible' : 'hidden'}
                    variants={fadeIn}
                >
                    <p className="uppercase px-10 sm:pl-20 underline underline-offset-4 decoration-2 decoration-[#93c5fd]">
                        <span className="font-bold">Master of Science</span>, Copernicus Master in Digital Earth 🌍
                    </p>
                    <div className="px-10 sm:pl-20 pt-6">
                        <button
                            onClick={() => setMasterCoursesExpanded(!masterCoursesExpanded)}
                            className="flex items-center gap-2 mb-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            Key Courses
                            {masterCoursesExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        <AnimatePresence>
                            {masterCoursesExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-wrap gap-3 pb-4">
                                        {coursesMaster.map((course, idx) => (
                                            <div
                                                key={idx}
                                                className="px-4 py-3 border border-gray-700 rounded-md hover:border-gray-500 transition-colors duration-200"
                                            >
                                                <div className="text-sm font-medium text-gray-500 hover:text-gray-800">{course}</div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <p className="text-xs px-10 sm:pl-20 text-gray-400">
                        Paris Lodron University of Salzburg, University of South Brittany
                    </p>
                    <p className="text-xs px-10 sm:pl-20 text-gray-400 pb-6">
                        Oct 2024 - present
                    </p>
                    <div className="flex justify-items-start">
                        <img src="/images/PLUS.jpg" alt="/" className="w-32 sm:w-48 sm:h-24 ml-10 sm:ml-20" />
                        <img src="/images/ubs_logo.png" alt="/" className="w-24 h-14 sm:w-36 sm:h-20 ml-10 mt-1 sm:ml-14" />
                    </div>
                    <div className="flex justify-items-start pb-12">
                        <img src="/images/Erasmus.jpg" alt="/" className="w-64 sm:w-80 pl-10 pt-6 sm:pl-20" />
                    </div>

                    <p className="uppercase px-10 sm:pl-20 underline underline-offset-4 decoration-2 decoration-[#93c5fd]">
                        <span className="font-bold">Bachelor of Technics and Technologies</span>, Space Engineering and Technologies 🛰️
                    </p>
                    <div className="px-10 sm:pl-20 pt-6">
                        <button
                            onClick={() => setBachelorCoursesExpanded(!bachelorCoursesExpanded)}
                            className="flex items-center gap-2 mb-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            Key Courses
                            {bachelorCoursesExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        <AnimatePresence>
                            {bachelorCoursesExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-wrap gap-3 pb-4">
                                        {coursesBachelor.map((course, idx) => (
                                            <div
                                                key={idx}
                                                className="px-4 py-3 border border-gray-700 rounded-md hover:border-gray-500 transition-colors duration-200"
                                            >
                                                <div className="text-sm font-medium text-gray-500 hover:text-gray-800">{course}</div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <p className="text-xs px-10 sm:pl-20 text-gray-400">
                        Al-Farabi Kazakh National University
                    </p>
                    <p className="text-xs px-10 sm:pl-20 text-gray-400">Sep 2019 - June 2023</p>
                    <img src="/images/kaznu.png" alt="/" className="max-w-36 sm:max-w-52 px-10 sm:pl-20 pt-6" />
                </motion.div>

                {/* Desktop Version */}
                <motion.div
                    className="hidden md:block text-left text-sm col-span-2 pt-2"
                    initial="hidden"
                    animate={scrollY > 200 ? 'visible' : 'hidden'}
                    variants={fadeIn}
                >
                    <p className="uppercase px-10 sm:pl-20 underline underline-offset-4 decoration-2 decoration-[#93c5fd]">
                        <span className="font-bold ">Master of Science</span>, Copernicus Master in Digital Earth 🌍
                    </p>
                    <div className="px-10 sm:pl-20 pt-6">
                        <button
                            onClick={() => setMasterCoursesExpanded(!masterCoursesExpanded)}
                            className="flex items-center gap-2 mb-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            Key Courses
                            {masterCoursesExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        <AnimatePresence>
                            {masterCoursesExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-wrap gap-3 pb-4">
                                        {coursesMaster.map((course, idx) => (
                                            <div
                                                key={idx}
                                                className="px-4 py-3 border border-gray-700 rounded-md hover:border-gray-500 transition-colors duration-200"
                                            >
                                                <div className="text-sm font-medium text-gray-500 hover:text-gray-800">{course}</div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <p className="text-xs px-10 sm:pl-20 text-gray-400">
                        Paris Lodron University of Salzburg, University of South Brittany
                    </p>
                    <p className="text-xs px-10 sm:pl-20 text-gray-400 pb-6">
                        Oct 2024 - present
                    </p>
                    <div className="flex justify-items-start pb-12">
                        <img src="/images/PLUS.jpg" alt="/" className="w-48 h-24 ml-20" />
                        <img src="/images/ubs_logo.png" alt="/" className="w-36 h-20 mt-1 ml-12" />
                        <img src="/images/Erasmus.jpg" alt="/" className="w-80 h-16 ml-14 mt-4" />
                    </div>

                    <p className="uppercase px-10 sm:pl-20 underline underline-offset-4 decoration-2 decoration-[#93c5fd]">
                        <span className="font-bold">Bachelor of Technics and Technologies</span>, Space Engineering and Technologies 🛰️
                    </p>
                    <div className="px-10 sm:pl-20 pt-6">
                        <button
                            onClick={() => setBachelorCoursesExpanded(!bachelorCoursesExpanded)}
                            className="flex items-center gap-2 mb-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            Key Courses
                            {bachelorCoursesExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        <AnimatePresence>
                            {bachelorCoursesExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-wrap gap-3 pb-4">
                                        {coursesBachelor.map((course, idx) => (
                                            <div
                                                key={idx}
                                                className="px-4 py-3 border border-gray-700 rounded-md hover:border-gray-500 transition-colors duration-200"
                                            >
                                                <div className="text-sm font-medium text-gray-500 hover:text-gray-800">{course}</div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <p className="text-xs px-10 sm:pl-20 text-gray-400">
                        Al-Farabi Kazakh National University
                    </p>
                    <p className="text-xs px-10 sm:pl-20 text-gray-400 pb-6">Sep 2019 - June 2023</p>
                    <img src="/images/kaznu.png" alt="/" className="max-w-44 pl-20" />
                </motion.div>
            </div>
        </div>
    );
};

export default Background;