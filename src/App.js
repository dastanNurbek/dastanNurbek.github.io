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
import Conferences from "./components/Conferences";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import TrafficSimulation from "./components/projects/TrafficSimulation";
import EOBrowser from "./components/projects/EOBrowser";
import Sen2Cube from "./components/projects/Sen2cube";
import Segmentation from "./components/projects/Segmentation";
import CampusMap from "./components/projects/Campusmap";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/campusmap" element={<CampusMap />} />
        <Route path="/traffic-emission-simulation" element={<TrafficSimulation />} />
        <Route path="/eo-browser" element={<EOBrowser />} />
        <Route path="/sen2cube" element={<Sen2Cube />} />
        <Route path="/segmentation" element={<Segmentation />} />
        <Route path="/" element={
          <div>
            <Navbar />
            <About />
            <Background />
            <Gap />
            <Experience />
            <Gap />
            <Skills />
            <Gap />
            <Projects />
            <Gap />
            <Publications />
            <Gap />
            <Conferences />
            <Gap />
            <Courses />
            <Gap />
            <Contact />
          </div>}
        />
      </Routes>
    </Router>

  );
}

export default App;
