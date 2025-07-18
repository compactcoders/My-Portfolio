import React, { useEffect, useState } from "react";
import "../styles/Footer.css";

const Footer = () => {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 1;
      setAtBottom(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`footer ${atBottom ? "static-footer" : "overlay-footer"}`}>
      © Copyright 2025 Renusri Sivakumar
    </footer>
  );
};

export default Footer;
