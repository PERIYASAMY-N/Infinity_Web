import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-800 py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <a href="#home" className="text-xl font-bold text-white tracking-wide">
            Periyasamy N
          </a>
          <p className="text-gray-500 text-sm mt-2">
            © 2026 Periyasamy N. All rights reserved.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex gap-4">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
          
          <div className="text-gray-500 text-sm">
            Built with <span className="text-gray-300">React.js & Tailwind CSS</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
