import React from 'react';
import { personalInfo } from '../data/portfolioData';

import profilePhoto from '../assets/profile-photo.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative overflow-hidden bg-dark-900">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column: Text Content */}
          <div className="flex flex-col space-y-6 order-2 lg:order-1 max-w-2xl">
            <div>
              <p className="text-accent-DEFAULT font-medium mb-3 tracking-wide">
                &#128075; Hello, I'm
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-4">
                {personalInfo.name.toUpperCase()}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
                {personalInfo.role}
              </h2>
            </div>
            
            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
              {personalInfo.heroText}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#projects"
                className="px-6 py-3 bg-white text-dark-900 font-semibold rounded-md hover:bg-gray-200 transition-colors duration-300"
              >
                View Projects
              </a>
              <a 
                href="/assets/documents/Periyasamy_N_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-dark-600 text-white font-semibold rounded-md hover:bg-dark-800 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          
          {/* Right Column: Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-dark-800 shadow-xl bg-dark-800 flex items-center justify-center">
               <img 
                 src={profilePhoto} 
                 alt="Periyasamy N" 
                 className="w-full h-full object-cover"
               />
               
               {/* Availability Badge */}
               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-dark-900/80 backdrop-blur-sm border border-dark-600 px-4 py-2 rounded-full flex items-center gap-2">
                 <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                 <span className="text-xs text-white font-medium">Available for Internships</span>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
