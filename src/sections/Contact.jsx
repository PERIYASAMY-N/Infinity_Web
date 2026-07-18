import React, { useState } from "react";
import { profile } from "../data/profileData";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

const Github = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "inline-block", verticalAlign: "middle" }}
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "inline-block", verticalAlign: "middle" }}
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const freshErrors = {};
    if (!formData.name.trim()) freshErrors.name = "Full name is required.";
    
    if (!formData.email.trim()) {
      freshErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      freshErrors.email = "Please input a valid email formatting.";
    }

    if (!formData.message.trim()) {
      freshErrors.message = "Message details are required.";
    } else if (formData.message.trim().length < 10) {
      freshErrors.message = "Please input at least 10 characters.";
    }

    return freshErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error message if user begins typing changes
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API posting backend delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Auto close message
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pre">Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-underline" />
        </div>

        {/* Contact Split layout */}
        <div className="contact-grid">
          
          {/* Left panel: details info */}
          <div className="contact-info-panel">
            <h3>Let's collaborate on code.</h3>
            <p>
              I am open to internships, projects, and junior software engineer opportunities. 
              Drop me a note, and let's build something intelligent.
            </p>

            <div className="contact-links-list">
              <div className="contact-detail-row">
                <div className="contact-icon-frame">
                  <Mail size={18} />
                </div>
                <div className="contact-detail-text">
                  <span className="label">Mail Direct</span>
                  <a href={`mailto:${profile.email}`} className="value">{profile.email}</a>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-frame">
                  <MapPin size={18} />
                </div>
                <div className="contact-detail-text">
                  <span className="label">Location Base</span>
                  <span className="value">{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="contact-socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github"
                aria-label="Visit Github connection"
              >
                <Github size={20} /> Github
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin"
                aria-label="Visit Linkedin connection"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right panel: Contact Form */}
          <div className="contact-form-panel">
            {isSubmitted ? (
              <div className="form-success-box">
                <CheckCircle2 size={40} className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out, Periyasamy will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="contact-form">
                
                {/* Name */}
                <div className="input-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? "error" : ""}
                    disabled={isSubmitting}
                    placeholder="Enter name"
                  />
                  {errors.name && <span className="input-error-msg">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="input-group">
                  <label htmlFor="mail">Your Email</label>
                  <input
                    type="email"
                    id="mail"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? "error" : ""}
                    disabled={isSubmitting}
                    placeholder="name@example.com"
                  />
                  {errors.email && <span className="input-error-msg">{errors.email}</span>}
                </div>

                {/* Message */}
                <div className="input-group">
                  <label htmlFor="msg">Your Message</label>
                  <textarea
                    id="msg"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={errors.message ? "error" : ""}
                    disabled={isSubmitting}
                    placeholder="How can Periyasamy assist you?"
                  />
                  {errors.message && <span className="input-error-msg">{errors.message}</span>}
                </div>

                {/* Submit action */}
                <button
                  type="submit"
                  className="btn btn-primary btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
