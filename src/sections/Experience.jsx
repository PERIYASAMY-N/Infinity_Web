import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { experience } from '../data/portfolioData';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent-DEFAULT/5 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <SectionHeading 
            title="Work Experience" 
            subtitle="My Professional Journey" 
          />
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Glowing Vertical Timeline Line */}
          <div className="absolute left-[26px] md:left-1/2 top-4 bottom-4 w-1 md:-ml-[2px] bg-gradient-to-b from-accent-DEFAULT via-purple-500 to-transparent opacity-40 rounded-full"></div>
          
          <div className="space-y-16 md:space-y-24">
            {experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isAcademic = exp.type?.toLowerCase().includes("academic") || exp.type?.toLowerCase().includes("student");
              
              return (
                <div key={exp.id} className={`relative flex flex-col md:flex-row items-center justify-between group ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node/Icon */}
                  <div className="absolute left-2 md:left-1/2 top-6 md:top-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-dark-900 border-[3px] border-accent-DEFAULT z-20 shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-500 group-hover:scale-110 group-hover:bg-accent-DEFAULT group-hover:shadow-[0_0_30px_rgba(59,130,246,0.9)]">
                    <span className="text-accent-light group-hover:text-white transition-colors duration-300">
                      {isAcademic ? <FaGraduationCap size={22} /> : <FaBriefcase size={20} />}
                    </span>
                  </div>
                  
                  {/* Card Container */}
                  <div className={`ml-20 md:ml-0 md:w-[45%] w-[calc(100%-5rem)]`}>
                    <div className="relative p-8 md:p-10 rounded-2xl bg-dark-800/40 backdrop-blur-md border border-dark-600/30 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)] hover:border-accent-DEFAULT/50 group-hover:bg-dark-800/60 overflow-hidden">
                      
                      {/* Subtle hover gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-DEFAULT/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      <div className="relative z-10">
                        {/* Type Badge & Duration */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                          {exp.type && (
                            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-DEFAULT/10 border border-accent-DEFAULT/30 text-xs font-bold text-accent-light tracking-widest uppercase shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                              {exp.type}
                            </span>
                          )}
                          <span className="text-gray-100 text-sm font-semibold flex items-center gap-2 bg-dark-900/50 px-3 py-1.5 rounded-lg border border-dark-700">
                            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                            {exp.duration}
                          </span>
                        </div>
                        
                        {/* Role & Company */}
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-light transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <h4 className="text-lg text-gray-200 font-medium mb-6 pb-5 border-b border-dark-700/60">
                          {exp.company}
                        </h4>
                        
                        {/* Responsibilities */}
                        <ul className="space-y-4 mb-8">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="text-gray-100 text-sm flex items-start gap-4">
                              <span className="text-purple-400 mt-1.5 text-sm">◆</span>
                              <span className="leading-relaxed opacity-90">{resp}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {/* Technologies */}
                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {exp.technologies.map((tech, i) => (
                              <span key={i} className="px-3 py-1.5 text-xs font-semibold bg-dark-900 border border-dark-600/50 text-gray-200 rounded-lg transition-all duration-300 hover:border-accent-DEFAULT/60 hover:text-white hover:bg-dark-800 cursor-default hover:-translate-y-0.5">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty spacer for alternating layout on desktop */}
                  <div className="hidden md:block w-[45%]"></div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
