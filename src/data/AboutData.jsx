// src/data/AboutData.jsx

import profileImage from "../assets/Mypic/renu.jpg";
import htmlIcon from "../assets/skills/html.png";
import cIcon from "../assets/skills/c.png";  // same icon for placeholders
import javaIcon from "../assets/skills/java.png"; 
import jsIcon from "../assets/skills/js.png"; 
import pyIcon from "../assets/skills/py.png"; 
import nodeIcon from "../assets/skills/node.png"; 
import spIcon from "../assets/skills/spring.png"; 
import reactIcon from "../assets/skills/react.png"; 
import flaskIcon from "../assets/skills/flask.png";
import mongoIcon from "../assets/skills/mongo1.png"; 
import unityIcon from "../assets/skills/unity.png";  
import matIcon from "../assets/skills/mat.png"; 
import slIcon from "../assets/skills/sl.png"; 
import gitIcon from "../assets/skills/git.png"; 
import vsIcon from "../assets/skills/vs.png"; 
import pmIcon from "../assets/skills/pm.png"; 
import figmaIcon from "../assets/skills/figma.png";
import canvaIcon from "../assets/skills/canva.png";
import dotIcon from "../assets/skills/dotNet.png"


export const aboutInfo = {
  name: "Renusri Sivakumar",
  intro: [
  "Hi! 👋",
  "I'm Renusri Sivakumar, a final-year Computer Science student and aspiring tech innovator with a strong foundation in full-stack development. I'm passionate about solving real-world problems, especially in healthcare and education, through practical and user-focused solutions.",
  "With experience in hackathons, freelance projects, and technologies like React, Python, GenAI, and VR, I enjoy building impactful tools—from voice assistants for elderly care to AI-driven learning platforms."
],

  contact: {
    email: "renusrisivakumar100@gmail.com",
    phone: "+91 98423 84692",
    linkedin: "https://www.linkedin.com/in/renusri-s-413938246/"
  },
  profileImage
};

export const skills = {
  Languages: ["java","JavaScript", "C#", "Python"],
  Frameworks: ["React", "Node.js", "Spring Boot","Flask", "DotNet"],
  Tools: ["GitHub", "VS Code", "Postman", "MongoDB", "Unity 3D","Matlab", "Streamlit", "Figma","Canva"]
};

export const skillIcons = {
  java:javaIcon,
  JavaScript: jsIcon,
  "C#": cIcon,
  Python: pyIcon,
  React: reactIcon,
  "Node.js": nodeIcon,
  "Spring Boot": spIcon,
  Flask: flaskIcon,
  GitHub: gitIcon,
  "VS Code": vsIcon,
  Postman: pmIcon,
  Figma: figmaIcon,
  Canva: canvaIcon,
  MongoDB: mongoIcon,
  "Unity 3D": unityIcon,
  Matlab: matIcon,
  Streamlit: slIcon,
  DotNet: dotIcon
};

export const otherCards = [
  {
    title: "EDUCATION",
    subtitle: "2022-2026 - Present",
    content: "Sathyabama Institute of Science and Technology - B.E CSE"
  },
  {
    title: "Soft Skills",
    content: "Teamwork, Communication, Critical Thinking, Time Management"
  },
  {
    title: "Interests",
    content: "Generative and Agentic AI, AR/VR, Full-stack Development"
  }
];
