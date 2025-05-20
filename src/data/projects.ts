import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    demoUrl: 'https://example.com/demo1',
    githubUrl: 'https://github.com/example/project1',
    type: 'web'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates. Built with Next.js, TypeScript, and Firebase, with responsive design and offline capabilities.',
    image: 'https://images.pexels.com/photos/6956527/pexels-photo-6956527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    demoUrl: 'https://example.com/demo2',
    githubUrl: 'https://github.com/example/project2',
    type: 'web'
  },
  {
    id: 3,
    title: 'Healthcare Mobile App',
    description: 'A comprehensive healthcare mobile app for patient management and telemedicine. Built with React Native and integrated with backend services.',
    image: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', 'Node.js', 'MongoDB', 'WebRTC'],
    githubUrl: 'https://github.com/example/project3',
    type: 'mobile',
    screenshots: [
      'https://images.pexels.com/photos/4350099/pexels-photo-4350099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4350831/pexels-photo-4350831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  {
    id: 4,
    title: 'Social Media App',
    description: 'A mobile-first social media application with features like user profiles, posts, comments, and real-time notifications, built with React Native and Firebase.',
    image: 'https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
    githubUrl: 'https://github.com/example/project4',
    type: 'mobile',
    screenshots: [
      'https://images.pexels.com/photos/4350831/pexels-photo-4350831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4350099/pexels-photo-4350099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  {
    id: 5,
    title: 'Real Estate Platform',
    description: 'A comprehensive real estate platform featuring property listings, search filters, interactive maps, and agent profiles. Built with Next.js and MongoDB.',
    image: 'https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'MongoDB', 'Google Maps API', 'AWS S3'],
    demoUrl: 'https://example.com/demo5',
    githubUrl: 'https://github.com/example/project5',
    type: 'web'
  },
  {
    id: 6,
    title: 'Finance App',
    description: 'A personal finance management application with expense tracking, budget planning, and visualization tools. Built with React Native and Node.js.',
    image: 'https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'D3.js'],
    githubUrl: 'https://github.com/example/project6',
    type: 'mobile',
    screenshots: [
      'https://images.pexels.com/photos/4350099/pexels-photo-4350099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4350831/pexels-photo-4350831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  }
];