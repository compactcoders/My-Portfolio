// Import thumbnails from assets
import aboutThumbnail from "../assets/projectCovers/mittre.png";
import mazeThumbnail from "../assets/projectCovers/maze.png";
import videoGenThumbnail from "../assets/projectCovers/coming.jpg";
import vitalCareThumbnail from "../assets/projectCovers/vital.png";
import crisisConnectThumbnail from "../assets/projectCovers/disaster.png";
import romanticBotThumbnail from "../assets/projectCovers/chat.png";
import studentChapterThumbnail from "../assets/projectCovers/acmW.png";
import travelAppThumbnail from "../assets/projectCovers/travel.png";



const ProjectData = [
   {
    title: "GenAI for Long Video Generation with Multi-language Translation",
    thumbnail: videoGenThumbnail,
    description: "Ongoing: Building a GenAI pipeline capable of generating 10+ minute videos from prompts, supporting multilingual dubbing. Targeting scalable use in content automation for education and storytelling.",
    techStack: ["Generative AI", "NLP", "Video Synthesis"]
  },
  {
    title: "GenAI for Cyber Threat Report Analysis-Securin in-house project",
    thumbnail: aboutThumbnail,
    description: "Developed a GenAI tool for Securin that analyzed threat reports using BERT trained on MITRE ATT&CK. Automated tactic and technique extraction reduced SOC manual workload by ~40%, improving triage speed using a Streamlit UI.",
    techStack: ["BERT", "Streamlit","MITRE ATT&CK"],
    github: "https://github.com/compactcoders/GenAI-for-Cyber-Threat-Report-Analysis-Securin-in-house-project",
    
  },
  {
    title: "3D Haunted Maze Game – “Lemon’s Ghostly Getaway”",
    thumbnail: mazeThumbnail,
    description: "Developed a cognitive-enhancing adventure game with gesture-based controls, animated 3D environment, and real-time feedback. Focused on engaging gameplay and cognitive stimulation through interactive storytelling.",
    techStack: ["Unity 3D", "C#","UI/UX"],
    demo: "https://renusris-01.itch.io/lemons-ghostly-getaway01",
  },
 
  {
    title: "Voice-Activated AI Companion for Elderly – “The Vital Care”",
    thumbnail: vitalCareThumbnail,
    description: "Created a voice-activated assistant that automated medication alerts, schedules, and SOS triggers. Piloted with elderly users, demonstrating a 25% improvement in routine compliance. Future goals include adding fall detection through computer vision.",
    techStack: ["Voice AI", "NLP", "Scheduling API", "Python"],
    github: "https://github.com/compactcoders/Voice-Activated-AI-Companion-for-Elderly-The-Vital-Care",
  },
    {
    title: "Crisis Connect – Post-Disaster Management System",
    thumbnail: crisisConnectThumbnail,
    description: "An AI-powered disaster response platform that runs offline and connects victims with local rescue teams, volunteers, and admins. Features include location sharing, verified news updates, and requests for food or aid.",
    techStack: ["Flutter", "FastAPI", "LLAMA 3.1", "RAG"],
    github: "https://github.com/compactcoders/crisis_connect",
  },
  {
    title: "Romantic Bot – Fun Conversational Companion",
    thumbnail: romanticBotThumbnail,
    description: "A playful conversational bot designed for lighthearted chit-chat and flirting, without crossing limits. Built entirely in Python with speech recognition for voice interaction.",
    techStack: ["Python", "Speech Recognition"],
    github: "https://github.com/compactcoders/Romantic_Bot",
  }, 
  {
    title: "ACM-W Student Chapter Website",
    thumbnail: studentChapterThumbnail,
    description: "A full-stack application for ACM-W Sathyabama, developed to showcase chapter initiatives, events, and impacts. Features include user registration, event notifications, testimonial submissions, event gallery, and optional admin dashboard for content moderation.",
    techStack: ["React.js", "Node.js", "Full-Stack Development"],
    github: "https://github.com/compactcoders/ACM-W-Student-Chapter-Website",
    demo: "https://acm-w-sathyabama-web.vercel.app/ACM-W/",
  },
 
  {
    title: "Travel Management WebAPP",
    thumbnail: travelAppThumbnail,
    description: "A feature-rich web application for travelers enabling ticket booking, cancellations, reselling, and food ordering for nearby stops. Includes a local guide powered by GPT API to answer area-specific queries. Built using MongoDB, React, Node.js, FastAPI, and GPT APIs.",
    techStack: ["MongoDB", "React", "Node.js", "FastAPI"],
    github: "https://github.com/compactcoders/Travel-Management-WebAPP",
  }
];

export default ProjectData;
