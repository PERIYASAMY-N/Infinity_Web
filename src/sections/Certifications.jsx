import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { certifications } from '../data/portfolioData';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="My Certifications" 
          subtitle="Credentials" 
        />
        
        <p className="text-gray-400 mb-12 max-w-2xl">
          Verified achievements
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="clean-card p-6 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-dark-900 rounded-md border border-dark-700 text-accent-DEFAULT">
                  <Award size={24} />
                </div>
                {cert.badge && (
                  <span className="inline-block px-3 py-1 bg-dark-900 border border-dark-700 rounded text-xs font-semibold text-gray-300">
                    {cert.badge}
                  </span>
                )}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                {cert.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4">
                {cert.issuer}
              </p>
              
              <div className="mt-auto pt-4 border-t border-dark-700 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">{cert.year}</span>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-accent-DEFAULT hover:text-accent-light transition-colors"
                  >
                    <span>View</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
