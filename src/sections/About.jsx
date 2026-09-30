import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, GraduationCap } from 'lucide-react';
import TypeWriter from '../components/TypeWriter';

import profilePhoto from '../assets/profile-photo.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 relative border-t border-dark-800/50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="About Me" 
          subtitle="Get To Know" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* Left Column: Image */}
          <div className="lg:col-span-4">
            <div className="bg-dark-800 rounded-lg p-2 border border-dark-700 h-full flex flex-col justify-center items-center">
               <div className="w-full aspect-square rounded-md overflow-hidden bg-dark-900 mb-6">
                 <img 
                   src={profilePhoto} 
                   alt="Periyasamy N" 
                   className="w-full h-full object-cover"
                 />
               </div>
               
               {/* Quick Stats */}
               <div className="grid grid-cols-2 gap-4 w-full">
                 <div className="bg-dark-900 p-4 rounded-md border border-dark-700 text-center">
                   <h4 className="text-2xl font-bold text-white">6+</h4>
                   <p className="text-xs text-gray-200 mt-1 uppercase tracking-wider">Projects</p>
                 </div>
                 <div className="bg-dark-900 p-4 rounded-md border border-dark-700 text-center">
                   <h4 className="text-2xl font-bold text-white">{personalInfo.cgpa.split('/')[0].trim()}</h4>
                   <p className="text-xs text-gray-200 mt-1 uppercase tracking-wider">CGPA</p>
                 </div>
                 <div className="bg-dark-900 p-4 rounded-md border border-dark-700 text-center">
                   <h4 className="text-2xl font-bold text-white">2</h4>
                   <p className="text-xs text-gray-200 mt-1 uppercase tracking-wider">Internships</p>
                 </div>
                 <div className="bg-dark-900 p-4 rounded-md border border-dark-700 text-center">
                   <h4 className="text-2xl font-bold text-white">90.66%</h4>
                   <p className="text-xs text-gray-200 mt-1 uppercase tracking-wider">HSC</p>
                 </div>
               </div>
            </div>
          </div>
          
          {/* Right Column: Content */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-[length:200%_auto] animate-gradient-x h-8 flex items-center drop-shadow-sm">
              <TypeWriter words={["Full-Stack Developer", "AI Enthusiast", "Creative Problem Solver"]} />
            </h3>
            <p className="text-gray-200 leading-relaxed mb-8">
              {personalInfo.aboutText}
            </p>
            
            <h3 className="text-xl font-bold text-white mb-4">
              Career Objective
            </h3>
            <p className="text-gray-200 leading-relaxed mb-10">
              {personalInfo.careerObjective}
            </p>
            
            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-accent-DEFAULT">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-100 font-medium">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-accent-DEFAULT transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 text-accent-DEFAULT">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-100 font-medium">Phone</p>
                  <a href={`tel:${personalInfo.phone}`} className="text-white hover:text-accent-DEFAULT transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 text-accent-DEFAULT">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-100 font-medium">Location</p>
                  <p className="text-white">{personalInfo.location}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 text-accent-DEFAULT">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-100 font-medium">Education</p>
                  <p className="text-white">{personalInfo.education}</p>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4">
              <a 
                href="#contact"
                className="group relative px-6 py-3 bg-white text-dark-900 font-semibold rounded-lg overflow-hidden shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-all duration-300"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-400 to-purple-400 group-hover:scale-105 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-2 text-white">
                  Hire Me
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
                <span>Download Resume</span>
                <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
