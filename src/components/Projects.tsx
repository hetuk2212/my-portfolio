import React, { useState } from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import Button from './ui/Button';
import { projects } from '../data/projects';
import { ExternalLink, Github, Search, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  );
  
  // Filter projects based on selected tag
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(filter));
  
  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  
  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  const handleDemoClick = (project: typeof projects[0]) => {
    if (project.type === 'web' && project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    } else if (project.type === 'mobile' && project.screenshots) {
      setSelectedProject(project.id);
      setCurrentImageIndex(0);
    }
  };

  const handleNextImage = () => {
    const project = projects.find(p => p.id === selectedProject);
    if (project?.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === project.screenshots!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    const project = projects.find(p => p.id === selectedProject);
    if (project?.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.screenshots!.length - 1 : prev - 1
      );
    }
  };
  
  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Check out some of my recent work"
    >
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setFilter('all')}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${filter === 'all' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'}
          `}
        >
          All
        </button>
        
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${filter === tag 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'}
            `}
          >
            {tag}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map(project => (
          <Card key={project.id} hoverable className="h-full flex flex-col">
            <div className="relative overflow-hidden group">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                <button 
                  onClick={() => handleDemoClick(project)}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600"
                >
                  <Search size={18} />
                </button>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full dark:bg-gray-700 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 mt-auto">
                {(project.type === 'web' ? project.demoUrl : project.screenshots) && (
                  <Button 
                    onClick={() => handleDemoClick(project)}
                    size="sm"
                    className="flex-1"
                  >
                    {project.type === 'web' ? 'Live Demo' : 'Screenshots'} <ExternalLink size={14} className="ml-1" />
                  </Button>
                )}
                
                {project.githubUrl && (
                  <Button 
                    href={project.githubUrl} 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                  >
                    Code <Github size={14} className="ml-1" />
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {visibleProjects < filteredProjects.length && (
        <div className="mt-12 text-center">
          <Button onClick={handleLoadMore} variant="outline">
            Load More Projects
          </Button>
        </div>
      )}

      {/* Mobile Screenshots Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={24} />
            </button>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">
                {projects.find(p => p.id === selectedProject)?.title} Screenshots
              </h3>
              
              <div className="relative">
                <img
                  src={projects.find(p => p.id === selectedProject)?.screenshots?.[currentImageIndex]}
                  alt="App Screenshot"
                  className="w-full rounded-lg"
                />
                
                <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 p-4">
                  {projects.find(p => p.id === selectedProject)?.screenshots?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex
                          ? 'bg-blue-600'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg"
                >
                  ←
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Projects;