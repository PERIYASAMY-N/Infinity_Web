import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="My Education" 
          subtitle="Academic Background" 
        />
        
        <p className="text-gray-400 mb-12 max-w-2xl">
          My learning journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="clean-card p-6 md:p-8">
              <div className="flex flex-col mb-4">
                <span className="text-sm font-medium text-gray-500 mb-2">
                  {edu.duration}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  {edu.institution}
                </h3>
                <p className="text-accent-DEFAULT font-medium">
                  {edu.degree}
                </p>
              </div>
              
              <div className="pt-4 mt-2 border-t border-dark-700">
                <p className="text-gray-400 text-sm">
                  {edu.score}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
