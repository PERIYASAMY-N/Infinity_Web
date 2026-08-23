import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

import profilePhoto from '../assets/profile-photo.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-900 border-t border-dark-800">
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
                   <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Projects</p>
                 </div>
                 <div className="bg-dark-900 p-4 rounded-md border border-dark-700 text-center">
                   <h4 className="text-2xl font-bold text-white">{personalInfo.cgpa.split('/')[0].trim()}</h4>
                   <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">CGPA</p>
                 </div>
                 <div className="bg-dark-900 p-4 rounded-md border border-dark-700 text-center">
                   <h4 className="text-2xl font-bold text-white">2</h4>
                   <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Internships</p>
                 </div>
                 <div className="bg-dark-900 p-4 rounded-md border border-dark-700 text-center">
                   <h4 className="text-2xl font-bold text-white">90.66%</h4>
                   <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">HSC</p>
                 </div>
               </div>
            </div>
          </div>
          
          {/* Right Column: Content */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Full-Stack Developer
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              {personalInfo.aboutText}
            </p>
            
            <h3 className="text-xl font-bold text-white mb-4">
              Career Objective
            </h3>
            <p className="text-gray-400 leading-relaxed mb-10">
              {personalInfo.careerObjective}
            </p>
            
            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-accent-DEFAULT">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
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
                  <p className="text-sm text-gray-500 font-medium">Phone</p>
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
                  <p className="text-sm text-gray-500 font-medium">Location</p>
                  <p className="text-white">{personalInfo.location}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 text-accent-DEFAULT">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Education</p>
                  <p className="text-white">{personalInfo.education}</p>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4">
              <a 
                href="#contact"
                className="px-6 py-3 bg-white text-dark-900 font-semibold rounded-md hover:bg-gray-200 transition-colors duration-300"
              >
                Hire Me
              </a>
              <a 
                href="/assets/documents/Periyasamy_N_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-dark-600 text-white font-semibold rounded-md hover:bg-dark-800 transition-colors duration-300"
              >
                Resume
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
