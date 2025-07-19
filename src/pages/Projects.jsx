import React, { useRef } from "react";
import "../styles/Projects.css";
import ProjectData from "../data/ProjectsData";

const Projects = () => {
  const audioRef = useRef(new Audio("/card.mp3"));

  const playCardSound = () => {
    const audio = audioRef.current;
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div className="projects-section">
      <h1 className="section-title">Projects</h1>
      <div className="flip-card-grid">
        {ProjectData.map((project, index) => (
          <div className="flip-card" key={index} onMouseEnter={playCardSound}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={project.thumbnail} alt={project.title} />
                <h2>{project.title}</h2>
              </div>
              <div className="flip-card-back">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
