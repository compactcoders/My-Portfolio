
// HomePage.jsx
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Highlights from "../pages/Highlights";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";

export default function HomePage() {
  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="highlights"><Highlights /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}
