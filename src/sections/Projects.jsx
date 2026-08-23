import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Full Stack', 'AI / Python', 'Systems'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="My Work" 
        />
        
        <p className="text-gray-400 mb-10 max-w-2xl">
          Things I've built
        </p>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-accent-DEFAULT text-white' 
                  : 'bg-dark-800 text-gray-400 border border-dark-700 hover:border-gray-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Results count */}
        <div className="text-center mb-8 text-gray-500 text-sm">
          Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
        </div>
        
        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="animate-fade-up">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
