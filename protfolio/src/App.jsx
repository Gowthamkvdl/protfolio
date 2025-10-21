import React from "react";
import "./App.css"
import AppNavbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills";
import AIChatbot from "./components/AIChatbot";

function App() {
  return (
    <div className="bg" >

      {/* Navbar */}
      <AppNavbar />
      <AIChatbot />
      {/* progress */}
      <ScrollProgress />

      {/* Hero Section */}
      <div id="home"></div>
      <Hero />

      {/* {About} */}
      <div id="about"></div>
      <About />

      {/* skills */}
      <div id="skills"></div>
      <Skills />

      {/* Projects */}
      <div id="projects"></div>
      <Projects />

      {/* Contact */}
      <div id="contact"></div>
      <Contact />

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">
          © {new Date().getFullYear()} Gowtham | Built with React & Bootstrap
        </p>
      </footer>
    </div>
  );
}

export default App;
