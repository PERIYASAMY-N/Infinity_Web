import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="clean-card flex flex-col h-full overflow-hidden group">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-dark-900 border-b border-dark-700">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-dark-800 text-gray-500 transition-colors duration-500 group-hover:bg-dark-700">
            <Code2 size={32} className="opacity-50 group-hover:opacity-100 group-hover:text-accent-DEFAULT transition-all duration-300" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <span className="text-xs font-semibold text-accent-DEFAULT uppercase tracking-wider">
            {project.category}
          </span>
          <h3 className="text-xl font-bold text-white mt-1">
            {project.title}
          </h3>
        </div>
        
        <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium bg-dark-900 text-gray-400 rounded-md border border-dark-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-dark-700">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors font-medium"
            >
              <FaGithub size={16} />
              <span>Code</span>
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-accent-DEFAULT hover:text-accent-light transition-colors font-medium ml-auto"
            >
              <span>Demo</span>
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
