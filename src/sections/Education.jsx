import React from "react";
import { profile } from "../data/profileData";
import { GraduationCap, Award, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pre">Qualifications</span>
          <h2 className="section-title">Educational Foundation</h2>
          <div className="section-underline" />
        </div>

        {/* Education Panels Grid */}
        <div className="education-grid">
          {profile.education.map((edu, number) => (
            <div key={number} className="education-card">
              <div className="education-card-icon">
                <GraduationCap size={28} />
              </div>

              <div className="education-card-body">
                {/* Meta details */}
                <div className="education-meta">
                  <span className="edu-duration">
                    <Calendar size={14} /> {edu.duration}
                  </span>
                  
                  <span className="edu-grade">
                    <Award size={14} /> {edu.grade}
                  </span>
                </div>

                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-institution">{edu.institution}</h4>
                <p className="edu-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
