import React from "react";
import { profile } from "../data/profileData";
import { Calendar, Briefcase, ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pre">Work History</span>
          <h2 className="section-title">Internships & Roles</h2>
          <div className="section-underline" />
        </div>

        {/* Timeline Path */}
        <div className="timeline-container">
          <div className="timeline-center-line" />

          {profile.experience.map((exp, val) => (
            <div key={val} className={`timeline-item ${val % 2 === 0 ? "left" : "right"}`}>
              {/* Timeline marker node dot */}
              <div className="timeline-marker">
                <Briefcase size={16} />
              </div>

              {/* Timeline Card */}
              <div className="timeline-card">
                {/* Header info */}
                <div className="timeline-card-header">
                  <span className="timeline-term">
                    <Calendar size={14} /> {exp.duration}
                  </span>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                </div>

                {/* Bullet details */}
                <ul className="timeline-card-details">
                  {exp.highlights.map((point, i) => (
                    <li key={i}>
                      <ChevronRight size={14} className="timeline-bullet-icon" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="timeline-tech-wrap">
                  {exp.technologies.map((t, i) => (
                    <span key={i} className="timeline-tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
