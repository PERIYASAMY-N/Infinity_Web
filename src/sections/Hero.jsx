import React from 'react';
import { personalInfo } from '../data/portfolioData';
import TypeWriter from '../components/TypeWriter';

import profilePhoto from '../assets/profile-photo.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column: Text Content */}
          <div className="flex flex-col space-y-6 order-2 lg:order-1 max-w-2xl animate-fade-up">
            <div>
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-pink-400/30 bg-pink-500/10 backdrop-blur-sm">
                <p className="text-pink-400 font-medium tracking-wide flex items-center gap-2">
                  <span className="text-lg">&#128075;</span> Hello, I'm
                </p>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 drop-shadow-sm">
                {personalInfo.name.toUpperCase()}
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 bg-[length:200%_auto] animate-gradient-x drop-shadow-[0_0_15px_rgba(16,185,129,0.4)] h-10 md:h-12 flex items-center">
                <TypeWriter words={["Full-Stack Developer", "AI Enthusiast", "Creative Problem Solver"]} />
              </h2>
            </div>
            
            <p className="text-base md:text-lg text-gray-100 leading-relaxed mb-8 max-w-xl">
              {personalInfo.heroText}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#projects"
                className="group relative px-6 py-3 bg-white text-dark-900 font-semibold rounded-lg overflow-hidden shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-all duration-300"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-400 to-purple-400 group-hover:scale-105 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-2 text-white">
                  View Projects
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
              <a 
                href={`${import.meta.env.BASE_URL}assets/documents/Periyasamy_N_Resume.pdf`}
                download="Periyasamy_N_Resume.pdf"
                className="group px-6 py-3 border border-emerald-400/50 bg-emerald-500/10 backdrop-blur-sm text-emerald-300 font-semibold rounded-lg hover:bg-emerald-500/20 hover:border-emerald-300 transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <span>Download CV</span>
                <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Column: Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative group">
              {/* Animated multi-color glow behind image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-emerald-500 rounded-[2rem] blur-md opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border border-dark-600 bg-dark-800 flex items-center justify-center transform group-hover:-translate-y-2 transition-all duration-500 shadow-2xl">
                 <img 
                   src={profilePhoto} 
                   alt="Periyasamy N" 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                 />
                 
                 {/* Availability Badge */}
                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-dark-900/80 backdrop-blur-md border border-dark-600/50 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                   <span className="relative flex h-3 w-3">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                   </span>
                   <span className="text-xs text-gray-200 font-medium tracking-wide">Open to Work</span>
                 </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
