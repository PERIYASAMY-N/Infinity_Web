import React, { useState, useEffect } from "react";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import CanvasBackground from "./components/CanvasBackground";
import BackToTop from "./components/BackToTop";

// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import LeadershipAndSoftball from "./sections/LeadershipAndSoftball";
import Contact from "./sections/Contact";

export default function App() {
  const [theme, setTheme] = useState(() => {
    // Check local storage or system preferences
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const [activeSection, setActiveSection] = useState("home");

  // Sync theme status to HTML document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Toggle theme controller
  const toggleTheme = () => {
    const root = document.documentElement;
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
      });
    } else {
      root.classList.add("theme-transitioning");
      setTheme((prev) => (prev === "dark" ? "light" : "dark"));
      setTimeout(() => {
        root.classList.remove("theme-transitioning");
      }, 800);
    }
  };

  // Scrollspy observer logic
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "-25% 0px -60% 0px", // Trigger when section occupies the key layout area
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  // Cinematic scroll reveal (entering and leaving sections)
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal-on-scroll");
    const options = {
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: [0, 0.05, 0.95, 1]
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.05) {
          entry.target.classList.add("active");
          entry.target.classList.remove("leaving");
        } else {
          // If leaving to the top
          if (entry.boundingClientRect.top < 0) {
            entry.target.classList.add("leaving");
            entry.target.classList.remove("active");
          } else {
            // Below viewport
            entry.target.classList.remove("active");
            entry.target.classList.remove("leaving");
          }
        }
      });
    }, options);

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      revealItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <>
      {/* Dynamic connecting node background layer */}
      <CanvasBackground />

      {/* Persistent global layout header */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Pages Flow */}
      <main>
        {/* Each section wraps itself inside suitable padding boxes */}
        <div className="reveal-on-scroll reveal active">
          <Hero />
        </div>
        
        <div className="reveal-on-scroll reveal">
          <About />
        </div>
        
        <div className="reveal-on-scroll reveal">
          <Skills />
        </div>
        
        <div className="reveal-on-scroll reveal">
          <Projects />
        </div>
        
        <div className="reveal-on-scroll reveal">
          <Experience />
        </div>
        
        <div className="reveal-on-scroll reveal">
          <Education />
        </div>
        
        <div className="reveal-on-scroll reveal">
          <Certifications />
        </div>
        
        <div className="reveal-on-scroll reveal">
          <LeadershipAndSoftball />
        </div>
        
        <div className="reveal-on-scroll reveal">
          <Contact />
        </div>
      </main>

      {/* Footer info panel */}
      <footer className="global-footer">
        <div className="container footer-content-wrap">
          <p>© {new Date().getFullYear()} Periyasamy N. All Rights Reserved.</p>
          <p className="designed-by">Built with React.js & Pure CSS</p>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <BackToTop />
    </>
  );
}
