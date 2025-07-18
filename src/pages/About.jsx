import React from "react";
import "../styles/About.css";
import { aboutInfo, skills, skillIcons, otherCards } from "../data/AboutData";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About me</h1>
      </div>

      <div className="about-main">
        <div className="about-content">
          {aboutInfo.intro.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          <div className="about-contact">
            <h3>Contact</h3>
            <p>📧 {aboutInfo.contact.email}</p>
            <p>📱 {aboutInfo.contact.phone}</p>
            <p>🔗 {aboutInfo.contact.linkedin}</p>
          </div>
        </div>

        <div className="about-profile">
          <img src={aboutInfo.profileImage} alt={aboutInfo.name} />
        </div>
      </div>

      <div className="skills-box">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skills-item" key={category}>
              <h4>{category}</h4>
              <div className="skills-icons">
                {items.map((tech) => (
                  <img key={tech} src={skillIcons[tech]} alt={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-card">
        {otherCards.map((card, index) => (
          <div className="card-section" key={index}>
            <h3>{card.title}</h3>
            {card.subtitle && <p>{card.subtitle}</p>}
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
