import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    const [scrollY, setScrollY] = useState(0);

    // Effect to track scroll position
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Animations based on scroll position
    const fadeInUp = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

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
                    variants={fadeInUp}
                >
                    <p className="uppercase px-10 sm:pl-20">
                        <span className="font-bold">Master of Science</span>, Copernicus Master in Digital Earth 🌍
                    </p>
                    <p className="px-10 sm:pl-20 pt-6">
                        Currently learning Advanced Remote Sensing, Object-based Image Analysis, Computer Vision, Spatial Simulation, and much more.
                    </p>
                    <p className="text-xs px-10 sm:pl-20 text-gray-400 pt-6">
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

                    <p className="uppercase px-10 sm:pl-20">
                        <span className="font-bold">Bachelor of Technics and Technologies</span>, Space Engineering and Technologies 🛰️
                    </p>
                    <p className="px-10 sm:pl-20 pt-6">
                        Learned fundamentals of Mathematics, Physics and Mechanics; basics of Rocket Science; concepts and principles of Space Systems; Programming Languages; 3D Modelling and Simulation; Processing and Analyzing Satellite Imagery and Scientific Data; applying Numerical and Theoretical research methods to solving scientific and applied problems.
                    </p>
                    <p className="text-xs px-10 sm:pl-20 text-gray-400 pt-6">
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
                    variants={fadeInUp}
                >
                    <p className="uppercase px-10 sm:pl-20">
                        <span className="font-bold">Master of Science</span>, Copernicus Master in Digital Earth 🌍
                    </p>
                    <p className="px-10 sm:pl-20 pt-6">
                        Currently learning Advanced Remote Sensing, Object-based Image Analysis, Computer Vision, Spatial Simulation, and much more.
                    </p>
                    <p className="text-xs px-10 sm:pl-20 text-gray-400 pt-6">
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

                    <p className="uppercase px-10 sm:pl-20">
                        <span className="font-bold">Bachelor of Technics and Technologies</span>, Space Engineering and Technologies 🛰️
                    </p>
                    <p className="px-10 sm:pl-20 pt-6">
                        Learned fundamentals of Mathematics, Physics and Mechanics; basics of Rocket Science; concepts and principles of Space Systems; Programming Languages; 3D Modelling and Simulation; Processing and Analyzing Satellite Imagery and Scientific Data; applying Numerical and Theoretical research methods to solving scientific and applied problems.
                    </p>
                    <p className="text-xs px-10 sm:pl-20 text-gray-400 pt-6">
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