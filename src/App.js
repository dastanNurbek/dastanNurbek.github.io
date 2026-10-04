import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { scrollTo, startSmoothScroll } from "./lib/smoothScroll";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Background from "./components/Background";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Activities from "./components/Activities";
import Footer from "./components/Footer";
import TrafficSimulation from "./components/projects/TrafficSimulation";
import EOBrowser from "./components/projects/EOBrowser";
import Sen2Cube from "./components/projects/Sen2cube";
import Segmentation from "./components/projects/Segmentation";
import CampusMap from "./components/projects/Campusmap";
import DengueCompetition from "./components/projects/DengueCompetition";
import AircraftDetection from "./components/projects/AircraftDetection";
import BigDataDL from "./components/projects/BigDataDL";
import BigDataML from "./components/projects/BigDataML";

// A hash route change keeps the old scroll position, so reset it by hand.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollTo(0, { immediate: true });
  }, [pathname]);
  return null;
}

function SmoothScroll() {
  useEffect(() => startSmoothScroll(), []);
  return null;
}

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Profile />
        <Experience />
        <Background />
        <Projects />
        <Skills />
        <Publications />
        <Activities />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <SmoothScroll />
      <ScrollToTop />
      <Routes>
        <Route path="/campusmap" element={<CampusMap />} />
        <Route path="/traffic-emission-simulation" element={<TrafficSimulation />} />
        <Route path="/eo-browser" element={<EOBrowser />} />
        <Route path="/sen2cube" element={<Sen2Cube />} />
        <Route path="/segmentation" element={<Segmentation />} />
        <Route path="/dengue-competition" element={<DengueCompetition />} />
        <Route path="/aircraft-detection" element={<AircraftDetection />} />
        <Route path="/big-data-dl" element={<BigDataDL />} />
        <Route path="/big-data-ml" element={<BigDataML />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
