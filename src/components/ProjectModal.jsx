import React, { useEffect } from 'react';
import { X, ExternalLink, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm transition-opacity" 
      onClick={onClose}
    >
      <div 
        className="bg-dark-900 border border-dark-700 rounded-2xl overflow-hidden w-full max-w-5xl max-h-[90vh] flex flex-col shadow-[0_0_40px_rgba(0,0,0,0.5)] animate-fade-up relative"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-gray-300 hover:text-white hover:bg-black/80 transition-all backdrop-blur-sm"
        >
          <X size={24} />
        </button>
        
        <div className="overflow-y-auto flex-grow flex flex-col custom-scrollbar">
          {/* Hero Image Area */}
          <div className="w-full bg-dark-800 relative">
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full max-h-[50vh] object-cover object-top border-b border-dark-700" 
              />
            ) : (
              <div className="w-full h-[40vh] flex items-center justify-center bg-dark-800 border-b border-dark-700">
                <Code2 size={64} className="opacity-20 text-accent-DEFAULT" />
              </div>
            )}
          </div>
          
          {/* Content Area */}
          <div className="p-6 sm:p-10 flex-grow bg-dark-900">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div>
                <span className="text-sm font-bold text-accent-DEFAULT uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  {project.title}
                </h2>
              </div>
              
              <div className="flex gap-4 shrink-0">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-dark-800 hover:bg-dark-700 text-white transition-colors font-medium border border-dark-600 shadow-sm"
                  >
                    <FaGithub size={20} />
                    <span>Code</span>
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-DEFAULT hover:bg-accent-light text-white transition-colors font-medium shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-accent-DEFAULT rounded-full block"></span>
                  About the Project
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="bg-dark-800/50 p-6 rounded-xl border border-dark-700 h-fit">
                <h3 className="text-lg font-bold text-white mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1.5 text-sm font-medium bg-dark-900 text-gray-200 rounded-lg border border-dark-700/50 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
