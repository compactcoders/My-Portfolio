import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);
  const location = useLocation();

  const playClickSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const toggleMenu = () => {
    playClickSound();
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    playClickSound();
    setIsOpen(false);
  };

  const scrollTo = (path) => {
    if (location.pathname !== path) {
      window.history.pushState({}, "", path); // manually update URL
    }

    const id = path === "/" ? "home" : path.slice(1); // "/about" → "about"
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <header className="navbar">
      {/* 🔊 Click Sound */}
      <audio ref={audioRef} src="/button.mp3" preload="auto" />

      <div className="navbar-logo">
        <h2>Renusri Sivakumar</h2>
      </div>

      <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
        <button onClick={() => scrollTo("/")}>Home</button>
        <button onClick={() => scrollTo("/about")}>About</button>
        <button onClick={() => scrollTo("/highlights")}>Highlights</button>
        <button onClick={() => scrollTo("/projects")}>Projects</button>
        <button onClick={() => scrollTo("/resume")}>Resume</button>
        <button onClick={() => scrollTo("/contact")}>Contact</button>
      </nav>

      <div
        className={`navbar-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Navbar;
