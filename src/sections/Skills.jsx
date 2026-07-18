import React from "react";
import { profile } from "../data/profileData";
import { Terminal, Layout, Database, Bot, Wrench } from "lucide-react";

export default function Skills() {
  const categoryMeta = {
    languages: { title: "Programming Languages", icon: <Terminal size={22} className="text-secondary" /> },
    webTechnologies: { title: "Web Technologies", icon: <Layout size={22} className="text-secondary" /> },
    databases: { title: "Databases", icon: <Database size={22} className="text-secondary" /> },
    aiMl: { title: "AI / ML Concepts", icon: <Bot size={22} className="text-secondary" /> },
    tools: { title: "Tools", icon: <Wrench size={22} className="text-secondary" /> }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pre">Capabilities</span>
          <h2 className="section-title">My Technical Stack</h2>
          <div className="section-underline" />
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {Object.entries(profile.skills).map(([key, list]) => {
            const meta = categoryMeta[key] || { title: key, icon: <Terminal size={22} /> };
            return (
              <div key={key} className="skill-category-card">
                {/* Header */}
                <div className="skill-card-header">
                  <div className="skill-category-icon">{meta.icon}</div>
                  <h3>{meta.title}</h3>
                </div>
                
                {/* Items Tag Cloud */}
                <div className="skill-pills-grid">
                  {list.map((skill, index) => (
                    <div key={index} className="skill-pill-badge">
                      <span className="skill-pill-dot" />
                      <span className="skill-pill-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
