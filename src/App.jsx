import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Footer from "./components/Footer";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Highlights from "../src/pages/Highlights";
import Projects from "../src/pages/Projects";
import Resume from "../src/pages/Resume";
import Contact from "../src/pages/Contact";

function App() {
  const audioRef = useRef();

  useEffect(() => {
    const enableAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((e) => {
          console.warn("Audio play blocked:", e);
        });
      }
      window.removeEventListener("click", enableAudio);
    };

    window.addEventListener("click", enableAudio);

    return () => window.removeEventListener("click", enableAudio);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      {/* 🔊 Background music with sound enabled after first click */}
      <audio ref={audioRef} loop>
        <source src="/background.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </Router>
  );
}

export default App;
