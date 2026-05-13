import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Background from "./components/Background";
import Gap from "./components/Gap";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import TrafficSimulation from "./components/projects/TrafficSimulation";
import EOBrowser from "./components/projects/EOBrowser";
import Sen2Cube from "./components/projects/Sen2cube";
import Segmentation from "./components/projects/Segmentation";
import CampusMap from "./components/projects/Campusmap";
import DengueCompetition from "./components/projects/DengueCompetition";
import AircraftDetection from "./components/projects/AircraftDetection";
import BigDataDL from "./components/projects/BigDataDL";
import BigDataML from "./components/projects/BigDataML";

function App() {
  return (
    <Router>
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
        <Route path="/" element={
          <div>
            <Navbar />
            <About />
            <Background />
            <Gap />
            <Experience />
            <Gap />
            <Projects />
            <Gap />
            <Skills />
            <Gap />
            <Publications />
            <Gap />
            <Activities />
            <Contact />
          </div>}
        />
      </Routes>
    </Router>

  );
}

export default App;
