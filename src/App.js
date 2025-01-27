import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Background from "./components/Background";
import Gap from "./components/Gap";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Conferences from "./components/Conferences";
import Contact from "./components/Contact";
import TrafficSimulation from "./components/projects/TrafficSimulation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/traffic-emission-simulation" element={<TrafficSimulation />} />
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
            <Contact />
          </div>}
        />
      </Routes>
    </Router>

  );
}

export default App;
