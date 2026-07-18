import React, { useState } from "react";
import { profile } from "../data/profileData";
import Modal from "../components/UI/Modal";
import { ExternalLink, Search, CheckCircle2, Layers } from "lucide-react";

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

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  // Category tags mapping
  const categories = ["All", "Full Stack", "AI / Python", "Systems"];

  // Filter projects based on search criteria
  const filteredProjects = profile.projects.filter((project) => {
    const matchesCategory = filter === "All" || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(search.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Get color for project categories
  const getCategoryColor = (cat) => {
    switch (cat) {
      case "AI / Python": return "badge-cyan";
      case "Full Stack": return "badge-indigo";
      case "Systems": return "badge-amber";
      default: return "badge-primary";
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pre">Showcase</span>
          <h2 className="section-title">Featured Creations</h2>
          <div className="section-underline" />
        </div>

        {/* Filters and Search controls */}
        <div className="projects-controls">
          {/* Category Tabs */}
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-tab-btn ${filter === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div className="search-bar-wrapper">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Search projects by stack, title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="projects-search-input"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Card visual banner - Custom gradient layout instead of blank img */}
              <div className="project-card-banner">
                <span className={`project-banner-badge ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
                
                <Layers size={48} className="project-banner-icon" />
              </div>

              {/* Info Body */}
              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                
                <p className="project-card-desc">{project.shortDesc}</p>
                
                {/* Tech Badges */}
                <div className="project-tech-badges">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tech-badge-item">{tech}</span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="tech-badge-item-more">+{project.techStack.length - 4}</span>
                  )}
                </div>

                {/* Bottom Trigger Controls */}
                <div className="project-card-footer">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-text-action"
                  >
                    View Details
                  </button>
                  
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-icon"
                      aria-label={`${project.title} github link`}
                    >
                      <Github size={18} />
                    </a>
                    
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-icon"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="no-projects-found">
              <p>No projects match your current filters or query criteria.</p>
            </div>
          )}
        </div>

        {/* Case Study Modal Overlay */}
        <Modal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          title={selectedProject ? selectedProject.title : ""}
        >
          {selectedProject && (
            <div className="project-case-study">
              {/* Category & Tags */}
              <div className="case-study-meta">
                <span className={`case-study-badge ${getCategoryColor(selectedProject.category)}`}>
                  {selectedProject.category}
                </span>
                
                <div className="case-study-stack">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span key={idx} className="case-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Main content grid */}
              <div className="case-study-layout">
                {/* Left Side: Summary and Problems */}
                <div className="case-study-details">
                  <div className="case-study-section">
                    <h4>The Problem</h4>
                    <p>{selectedProject.problem}</p>
                  </div>

                  <div className="case-study-section">
                    <h4>The Solution</h4>
                    <p>{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Right Side: Features */}
                <div className="case-study-features">
                  <h4>Key Features & Implementations</h4>
                  <ul>
                    {selectedProject.keyFeatures.map((feat, index) => (
                      <li key={index}>
                        <CheckCircle2 size={16} className="feature-bullets" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="case-study-footer">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Github size={16} /> View Code Base
                </a>
                
                {selectedProject.live ? (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <ExternalLink size={16} /> Load Live Project
                  </a>
                ) : (
                  <span className="live-demo-disabled-note">
                    Mock deployment and local workspace verified.
                  </span>
                )}
              </div>
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
}
