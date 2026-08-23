import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { achievements } from '../data/portfolioData';
import { Trophy, CheckCircle2 } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="My Achievements" 
          subtitle="Milestones" 
        />
        
        <p className="text-gray-400 mb-12 max-w-2xl">
          Things I'm proud of
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="clean-card p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-dark-700">
                <div className="p-4 rounded-full bg-dark-900 border border-dark-700 text-accent-DEFAULT">
                  <Trophy size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-accent-DEFAULT text-sm font-medium">
                    {achievement.type}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {achievement.highlights && achievement.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              
              {achievement.image && (
                <div className="mt-8 pt-6 border-t border-dark-700">
                  <div className="aspect-video w-full overflow-hidden rounded-md border border-dark-600">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
