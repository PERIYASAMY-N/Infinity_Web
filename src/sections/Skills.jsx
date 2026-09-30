import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { 
  FaJava, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaReact, 
  FaNodeJs, FaBrain, FaRobot, FaEye, FaMagic, FaGitAlt, FaGithub 
} from 'react-icons/fa';
import { 
  SiJavascript, SiTailwindcss, SiExpress, SiFastapi, 
  SiMongodb, SiMysql, SiPostman
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

// Group skills by category based on user requirement
const skillCategories = [
  {
    title: "Programming",
    items: [
      { name: "Java", icon: <FaJava className="text-[#5382a1]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#f7df1e]" /> },
      { name: "Python", icon: <FaPython className="text-[#3776ab]" /> },
      { name: "SQL", icon: <FaDatabase className="text-[#f29111]" /> }
    ]
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-[#e34f26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572b6]" /> },
      { name: "React.js", icon: <FaReact className="text-[#61dafb]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06b6d4]" /> }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> }
    ]
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47a248]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479a1]" /> }
    ]
  },
  {
    title: "AI / ML",
    items: [
      { name: "NLP", icon: <FaBrain className="text-[#ff9800]" /> },
      { name: "LLM Integration", icon: <FaRobot className="text-[#9c27b0]" /> },
      { name: "Computer Vision", icon: <FaEye className="text-[#2196f3]" /> },
      { name: "AI Applications", icon: <FaMagic className="text-[#e91e63]" /> }
    ]
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-[#f05032]" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "VS Code", icon: <VscVscode className="text-[#007acc]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#ff6c37]" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative border-t border-dark-800/30">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="My Skills" 
          subtitle="What I Know" 
        />
        
        <p className="text-gray-200 mb-12 max-w-2xl text-center mx-auto">
          Technologies I work with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="clean-card p-6">
              <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-dark-700 flex items-center">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="group relative flex items-center p-2 rounded-lg transition-all duration-500 hover:translate-x-2 cursor-default overflow-hidden">
                    {/* Colorful glowing background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 animate-gradient-x transition-opacity duration-500 rounded-lg"></div>
                    
                    <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-dark-700/60 mr-4 text-xl shadow-inner border border-dark-600/30 transition-all duration-500 group-hover:bg-dark-600 group-hover:border-purple-500/50 group-hover:rotate-[360deg] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                      <div className="transition-transform duration-500 group-hover:animate-pulse">
                        {item.icon}
                      </div>
                    </div>
                    
                    <span className="relative z-10 font-medium text-lg tracking-wide text-gray-100 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-light group-hover:to-purple-400">
                      {item.name}
                    </span>
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
