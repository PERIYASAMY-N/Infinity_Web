import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Work Experience" 
          subtitle="My Journey" 
        />
        
        <p className="text-gray-400 mb-12 max-w-2xl">
          Where I've worked and learned
        </p>

        <div className="max-w-3xl relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-4 top-2 bottom-0 w-px bg-dark-700"></div>
          
          <div className="space-y-12">
            {experience.map((exp) => (
              <div key={exp.id} className="relative pl-6 md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] md:left-[11px] top-2 w-2.5 h-2.5 rounded-full bg-accent-DEFAULT ring-4 ring-dark-900 z-10"></div>
                
                <div className="clean-card p-6 md:p-8">
                  {exp.type && (
                    <span className="inline-block px-3 py-1 mb-4 rounded bg-dark-900 border border-dark-700 text-xs font-semibold text-accent-DEFAULT uppercase tracking-wider">
                      {exp.type}
                    </span>
                  )}
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-gray-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-gray-500 text-sm whitespace-nowrap font-medium mt-1 md:mt-0">
                      {exp.duration}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6 mt-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                        <span className="text-accent-DEFAULT mt-1 text-[10px]">■</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-700">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 text-xs font-medium bg-dark-900 border border-dark-700 text-gray-400 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
