import React from 'react';
import SectionHeading from '../components/SectionHeading';

// Group skills by category based on user requirement
const skillCategories = [
  {
    title: "Programming",
    items: ["Java", "JavaScript", "Python", "SQL"]
  },
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "React.js", "Tailwind CSS"]
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "FastAPI"]
  },
  {
    title: "Database",
    items: ["MongoDB", "MySQL"]
  },
  {
    title: "AI / ML",
    items: ["NLP", "LLM Integration", "Computer Vision", "AI Applications"]
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="My Skills" 
          subtitle="What I Know" 
        />
        
        <p className="text-gray-400 mb-12 max-w-2xl">
          Technologies I work with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="clean-card p-6">
              <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-dark-700">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-DEFAULT mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
