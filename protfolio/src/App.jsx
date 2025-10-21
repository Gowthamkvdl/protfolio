import React from "react";
import "./App.css"
import AppNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="bg" >
      {/* Navbar */}
      <AppNavbar />

      {/* Hero Section */}
      <Hero />

      {/* {About} */}
      <About />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">
          © {new Date().getFullYear()} G | Built with React & Bootstrap
        </p>
      </footer>
    </div>
  );
}

export default App;
