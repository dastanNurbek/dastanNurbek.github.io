import React  from "react";
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

function App() {
  return (
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
    </div>
  );
}

export default App;
