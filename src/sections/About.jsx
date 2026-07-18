import React from "react";
import { profile } from "../data/profileData";
import { Code2, Brain, CheckSquare, GraduationCap, MapPin } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Code2 size={24} className="card-icon-indigo" />,
      title: "Full-Stack Development",
      description: "Building responsive frontend templates in React and integrating robust APIs in Spring Boot and Node.js."
    },
    {
      icon: <Brain size={24} className="card-icon-cyan" />,
      title: "AI Integration",
      description: "Incorporating chatbot channels, natural language processing engines, and computer vision trackers into web layers."
    },
    {
      icon: <CheckSquare size={24} className="card-icon-indigo" />,
      title: "Problem Solving",
      description: "Approaching feature requirements logically, seeking optimal database indices and cleaning modular architectures."
    },
    {
      icon: <GraduationCap size={24} className="card-icon-cyan" />,
      title: "Continuous Learning",
      description: "Enhancing skills through NPTEL certifications and hands-on project head roles at college."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        
        {/* Section Title */}
        <div className="section-header">
          <span className="section-pre">About Me</span>
          <h2 className="section-title">My Professional Journey</h2>
          <div className="section-underline" />
        </div>

        {/* content split grid */}
        <div className="about-grid">
          
          {/* Left Bio Details */}
          <div className="about-bio-panel">
            <h3>Who I Am & What I Drive For</h3>
            {profile.bio.map((para, i) => (
              <p key={i} className="about-paragraph">{para}</p>
            ))}
            
            {/* Quick Profile Indicators */}
            <div className="profile-metadata-pills">
              <div className="meta-pill">
                <MapPin size={16} /> <span>{profile.location}</span>
              </div>
              <div className="meta-pill">
                <GraduationCap size={16} /> <span>VSB Engineering College (CGPA 8.79)</span>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="about-highlights-grid">
            {cards.map((card, idx) => (
              <div key={idx} className="about-highlight-card">
                <div className="card-icon-wrapper">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
