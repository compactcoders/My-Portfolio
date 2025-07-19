import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.slice(1) || "home"; // default to #home
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [location]);

  return null;
}

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
      <ScrollToSection />
      <HomePage />
      <Footer />
      <audio ref={audioRef} loop>
        <source src="/background.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </Router>
  );
}

export default App;
