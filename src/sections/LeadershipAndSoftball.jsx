import React from "react";
import { profile } from "../data/profileData";
import { Users, Shield, Compass, Zap, Target } from "lucide-react";

export default function LeadershipAndSoftball() {
  const leadership = profile.leadership;
  const achievement = profile.achievements[0];

  const icons = [
    <Compass size={18} className="lead-icon" />,
    <Users size={18} className="lead-icon" />,
    <Shield size={18} className="lead-icon" />,
    <Zap size={18} className="lead-icon" />,
    <Target size={18} className="lead-icon" />
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pre">Impact & Achievements</span>
          <h2 className="section-title">Leadership & Sports</h2>
          <div className="section-underline" />
        </div>

        {/* Binary Layout Panels */}
        <div className="achievements-split-grid">
          
          {/* Left panel: Leadership */}
          <div className="leadership-panel">
            <div className="panel-header-wrap">
              <Users size={28} className="panel-header-icon" />
              <h3>Academic Leadership</h3>
            </div>
            
            <h4 className="platform-title">{leadership.role} – {leadership.platform}</h4>
            <p className="platform-desc">
              Led the development of a complex AI-Enhanced Collaborative Platform designed to streamline 
              student mentorship and college project coordination workflows.
            </p>

            <div className="responsibilities-list">
              {leadership.responsibilities.map((resp, index) => (
                <div key={index} className="responsibility-item-card">
                  {icons[index % icons.length]}
                  <div className="resp-text">
                    <h5>{resp.title}</h5>
                    <p>{resp.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel: Softball / Sports */}
          <div className="sports-panel">
            <div className="panel-header-wrap">
              <Target size={28} className="panel-header-icon" />
              <h3>Athletic Achievements</h3>
            </div>

            <div className="sports-achievement-badge-card">
              <div className="sports-medal-icon">🥎</div>
              
              <div className="sports-card-body">
                <span className="sports-sub-title">official certificate</span>
                <h3>Anna University Form-III</h3>
                <h4 className="sports-field">Softball Representation</h4>
                
                <p className="sports-details-text">
                  {achievement.detail}
                </p>

                <div className="sports-skills-box">
                  <span>Team Synergy</span>
                  <span>Tactical Endurance</span>
                  <span>Quick Decision Making</span>
                </div>
              </div>
            </div>

            <div className="sports-insight-callout">
              <p>
                "Representing at the university level instilled a disciplined mindset, high-stress resilience, 
                and a deep appreciation for collaborative goal setting."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
