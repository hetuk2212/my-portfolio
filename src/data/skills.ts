import { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: 'react', category: 'frontend' },
  { name: 'Next.js', icon: 'nextjs', category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', category: 'frontend' },
  { name: 'JavaScript', icon: 'code', category: 'frontend' },
  { name: 'HTML5', icon: 'file-code', category: 'frontend' },
  { name: 'CSS3', icon: 'palette', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'wind', category: 'frontend' },
  { name: 'Redux', icon: 'layers', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: 'server', category: 'backend' },
  { name: 'Express', icon: 'server', category: 'backend' },
  { name: 'RESTful APIs', icon: 'rocket', category: 'backend' },
  { name: 'GraphQL', icon: 'git-branch', category: 'backend' },
  
  // Database
  { name: 'MongoDB', icon: 'database', category: 'database' },
  { name: 'PostgreSQL', icon: 'database', category: 'database' },
  { name: 'MySQL', icon: 'database', category: 'database' },
  
  // DevOps
  { name: 'AWS', icon: 'cloud', category: 'devops' },
  { name: 'Docker', icon: 'box', category: 'devops' },
  { name: 'CI/CD', icon: 'git-merge', category: 'devops' },
  { name: 'Git', icon: 'git-branch', category: 'devops' },
  
  // Other
  { name: 'Agile Methodology', icon: 'trello', category: 'other' },
  { name: 'UI/UX Design', icon: 'figma', category: 'other' },
  { name: 'Testing', icon: 'check-circle', category: 'other' },
  { name: 'Problem Solving', icon: 'puzzle', category: 'other' },
];