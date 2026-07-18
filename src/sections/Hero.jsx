import React, { useState, useEffect } from "react";
import { ArrowRight, FileDown, Mail } from "lucide-react";

export default function Hero() {
  const [taglineText, setTaglineText] = useState("");
  const taglines = ["Building Intelligent Digital Experiences", "Integrating AI & Neural Systems", "Crafting High-Performance APIs"];
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typing speed controllers
  useEffect(() => {
    let speed = isDeleting ? 30 : 70;
    
    // Pause on complete phrase
    if (!isDeleting && charIndex === taglines[currentTaglineIndex].length) {
      speed = 1800; // Pause showing the tagline
      const timer = setTimeout(() => setIsDeleting(true), speed);
      return () => clearTimeout(timer);
    }
    
    // Switch to next phrase
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
      return;
    }

    const timer = setTimeout(() => {
      setTaglineText(
        isDeleting
          ? taglines[currentTaglineIndex].substring(0, charIndex - 1)
          : taglines[currentTaglineIndex].substring(0, charIndex + 1)
      );
      setCharIndex((prev) => (prev + (isDeleting ? -1 : 1)));
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentTaglineIndex]);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Intro Text Block */}
        <div className="hero-content">
          <div className="hero-badge">Available for Internships & Projects</div>
          
          <h1 className="hero-name">
            Hi, I'm <span className="text-gradient">Periyasamy N</span>
          </h1>
          
          <h2 className="hero-headline">
            {taglineText}
            <span className="typing-cursor">|</span>
          </h2>
          
          <p className="hero-description">
            Information Technology student passionate about full-stack development, AI-powered systems, 
            and solving real-world challenges through clean, scalable engineering solutions.
          </p>

          <div className="hero-ctas">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "#projects")}
              className="btn btn-primary"
            >
              View My Projects <ArrowRight size={16} />
            </a>
            
            <a
              href="/assets/documents/Periyasamy_N_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FileDown size={16} /> View Resume
            </a>
            
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="btn btn-ghost"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>

          <div className="hero-tech-pills">
            <span>React.js</span>
            <span>Spring Boot</span>
            <span>Node.js</span>
            <span>Java</span>
            <span>Python</span>
            <span>MySQL</span>
          </div>
        </div>

        {/* Right Developer Avatar/Profile Card */}
        <div className="hero-visual">
          <div className="developer-profile-card">
            <div className="avatar-glow-ring" />
            
            <div className="avatar-circle">
              <span className="avatar-initials">PN</span>
            </div>

            <div className="profile-details-card">
              <h3>Periyasamy N</h3>
              <p className="subtitle">Full-Stack Web Dev &amp; AI Enthusiast</p>
              
              <div className="profile-meta-grid">
                <div className="meta-row">
                  <span className="label">Focus</span>
                  <span className="val">Spring Boot / React</span>
                </div>
                <div className="meta-row">
                  <span className="label">Location</span>
                  <span className="val">Palani, TN, India</span>
                </div>
                <div className="meta-row">
                  <span className="label">Status</span>
                  <span className="val">Seeking Internships</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
