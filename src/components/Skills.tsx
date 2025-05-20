import React, { useState } from 'react';
import Section from './ui/Section';
import { skills } from '../data/skills';
import { Skill } from '../types';
import { Code, Database, Server, Cloud, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All', icon: <Layers className="w-5 h-5 mr-2" /> },
    { id: 'frontend', label: 'Frontend', icon: <Code className="w-5 h-5 mr-2" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-5 h-5 mr-2" /> },
    { id: 'database', label: 'Database', icon: <Database className="w-5 h-5 mr-2" /> },
    { id: 'devops', label: 'DevOps', icon: <Cloud className="w-5 h-5 mr-2" /> },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  const getIconComponent = (iconName: string) => {
    const icons: Record<string, any> = {
      react: <Code className="w-5 h-5" />,
      nextjs: <Code className="w-5 h-5" />,
      typescript: <Code className="w-5 h-5" />,
      code: <Code className="w-5 h-5" />,
      'file-code': <Code className="w-5 h-5" />,
      palette: <Layers className="w-5 h-5" />,
      wind: <Layers className="w-5 h-5" />,
      layers: <Layers className="w-5 h-5" />,
      server: <Server className="w-5 h-5" />,
      rocket: <Server className="w-5 h-5" />,
      'git-branch': <Code className="w-5 h-5" />,
      database: <Database className="w-5 h-5" />,
      cloud: <Cloud className="w-5 h-5" />,
      box: <Cloud className="w-5 h-5" />,
      'git-merge': <Code className="w-5 h-5" />,
      trello: <Layers className="w-5 h-5" />,
      figma: <Layers className="w-5 h-5" />,
      'check-circle': <Layers className="w-5 h-5" />,
      puzzle: <Layers className="w-5 h-5" />,
    };
    
    return icons[iconName] || <Code className="w-5 h-5" />;
  };
  
  const renderSkillItem = (skill: Skill) => (
    <div 
      key={skill.name}
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow flex items-center"
    >
      <div className="rounded-full bg-blue-100 dark:bg-gray-700 p-2 mr-3 text-blue-600 dark:text-blue-400">
        {getIconComponent(skill.icon)}
      </div>
      <span className="font-medium text-black dark:text-white">{skill.name}</span>
    </div>
  );
  
  return (
    <Section
      id="skills"
      title="My Skills"
      subtitle="Technologies and tools I work with"
      dark
    >
      <div className="mb-10">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${activeCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }
              `}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>
        
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredSkills.map(renderSkillItem)}
        </div>
      </div>
      
      <div className="mt-16 mx-auto max-w-3xl text-center">
        <h3 className="text-2xl font-bold mb-4">My Development Approach</h3>
        <p className="text-gray-300 mb-8">
          I believe in writing clean, maintainable code and following best practices. My development process involves understanding requirements thoroughly, planning the architecture, implementing with attention to detail, and rigorous testing.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'User-Centered',
              description: 'I prioritize the end-user experience in every project I undertake.',
            },
            {
              title: 'Performance Focused',
              description: 'I optimize code and assets to ensure applications run smoothly.',
            },
            {
              title: 'Clean Architecture',
              description: 'I build scalable applications with maintainable code structure.',
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;