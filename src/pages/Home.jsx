import React from "react";
import "../styles/Home.css";
import HomeData from "../data/HomeData";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import bgImage from "../assets/backgrounds/home1.png"; // 👈 import bg from assets

const Home = () => {
  return (
    <section
      className="home-container"
      style={{
        backgroundImage: `url(${bgImage})`, // 👈 set bg in JSX
      }}
    >
      <div className="overlay">
        <h1>{HomeData.name}</h1>
        <h2>
          I&apos;m a{" "}
          <span className="animated-role">
            <Typewriter
              words={HomeData.roles}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <p>{HomeData.description}</p>
        <div className="social-icons">
          <a href={HomeData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href={HomeData.socialLinks.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={HomeData.socialLinks.email}>
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
