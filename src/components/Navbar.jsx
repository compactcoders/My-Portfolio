import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-left">
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
      </div>

      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Navbar;
