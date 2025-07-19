import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  const playClickSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // restart sound if clicked rapidly
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

  return (
    <header className="navbar">
      {/* Audio Element */}
      <audio ref={audioRef} src="/button.mp3" preload="auto" />

      <div className="navbar-logo">
        <h2>Renusri Sivakumar</h2>
      </div>

      <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/highlights" onClick={closeMenu}>Highlights</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/resume" onClick={closeMenu}>Resume</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
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
