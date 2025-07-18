import React from "react";
import "../styles/Highlights.css";
import HighlightsData from "../data/HighlightsData";
import bgImage from "../assets/backgrounds/bg.jpg";

const Highlights = () => {
  return (
    <div
      className="highlights-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="highlight-title">Highlights ✨</h1>

      <div className="highlight-grid">
        {HighlightsData.map((section, idx) => (
          <div className="highlight-card" key={idx}>
            <h2>{section.category}</h2>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="highlight-image"
                    />
                  )}
                  <h3>{item.title}</h3>
                  {item.issuer && <p>📝 {item.issuer}</p>}
                  {item.description && <p>💡 {item.description}</p>}
                  <span>{item.date}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
