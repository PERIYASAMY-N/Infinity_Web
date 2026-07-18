import React, { useState } from "react";
import { profile } from "../data/profileData";
import Modal from "../components/UI/Modal";
import { Milestone, Award, Calendar, CircleUser } from "lucide-react";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const getBadgeColor = (title) => {
    if (title.toLowerCase().includes("gold")) {
      return "medal-gold";
    }
    return "medal-silver";
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pre">Credentials</span>
          <h2 className="section-title">NPTEL Certifications</h2>
          <div className="section-underline" />
        </div>

        {/* Certification Cards Grid */}
        <div className="certifications-grid">
          {profile.certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="cert-header-layout">
                <div className="cert-icon-wrapper">
                  <Award size={32} className={cert.grade.includes("Gold") ? "gold-aw" : "silver-aw"} />
                </div>
                
                <span className={`cert-medal-pill ${getBadgeColor(cert.grade)}`}>
                  {cert.grade}
                </span>
              </div>

              <h3>{cert.title}</h3>
              <h4>{cert.issuer}</h4>

              <div className="cert-meta">
                <Calendar size={14} /> Completed {cert.date}
              </div>

              <p className="cert-summary-text">{cert.description.slice(0, 75)}...</p>

              <button
                onClick={() => setSelectedCert(cert)}
                className="btn-cert-verify"
              >
                View Credential details
              </button>
            </div>
          ))}
        </div>

        {/* Modal Verification Preview */}
        <Modal
          isOpen={selectedCert !== null}
          onClose={() => setSelectedCert(null)}
          title="Digital Certificate Info"
        >
          {selectedCert && (
            <div className="cert-verification-modal-view">
              <div className="cert-badge-frame">
                <Award size={64} className={selectedCert.grade.includes("Gold") ? "gold-badge-svg" : "silver-badge-svg"} />
                <h3>{selectedCert.grade}</h3>
                <span className="issuer">{selectedCert.issuer}</span>
              </div>

              <div className="cert-details-block">
                <h4>{selectedCert.title}</h4>
                <p>{selectedCert.description}</p>

                <div className="cert-timeline-info">
                  <div className="info-row">
                    <Milestone size={16} />
                    <span><strong>Platform:</strong> National Programme on Technology Enhanced Learning (IIT)</span>
                  </div>
                  <div className="info-row">
                    <Calendar size={16} />
                    <span><strong>Year:</strong> {selectedCert.date}</span>
                  </div>
                  <div className="info-row">
                    <CircleUser size={16} />
                    <span><strong>Candidate:</strong> {profile.name}</span>
                  </div>
                </div>

                <div className="cert-verification-notice">
                  <p>Verified through IIT evaluator board under candidate ID mapping.</p>
                </div>
              </div>
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
}
