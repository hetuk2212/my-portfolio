import React from 'react';
import Section from './ui/Section';
import { CheckCircle, Calendar, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading the frontend development team, implementing modern React applications, and establishing coding standards.',
      icon: <Briefcase className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: 'Fullstack Developer',
      company: 'Digital Innovations',
      period: '2019 - 2022',
      description: 'Developed and maintained web applications using React, Node.js, and MongoDB, implementing RESTful APIs.',
      icon: <Briefcase className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: 'Junior Web Developer',
      company: 'Creative Web Studio',
      period: '2017 - 2019',
      description: 'Built responsive websites and implemented frontend features using HTML, CSS, and JavaScript.',
      icon: <Briefcase className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    },
  ];

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '30+', label: 'Projects Completed' },
    { value: '15+', label: 'Happy Clients' },
    { value: '5+', label: 'Technologies Mastered' },
  ];

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Learn more about my background and experience"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">My Journey</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm a passionate developer with over 5 years of experience in building web and mobile applications. 
            I specialize in creating responsive, user-friendly interfaces and robust backend systems.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            My journey in development started with a curiosity about how websites work, which evolved into a
            deep passion for creating digital solutions that solve real-world problems.
          </p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">What I Offer</h3>
          <ul className="space-y-3">
            {[
              'Modern, responsive web applications',
              'Mobile app development with React Native',
              'Backend services with Node.js',
              'Database design and implementation',
              'Cloud deployment and DevOps',
              'Collaborative approach and clear communication',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6">Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">{exp.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold">{exp.title}</h4>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                    <span>{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold mt-10 mb-6">Education</h3>
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <GraduationCap className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="text-xl font-semibold">Bachelor of Science in Computer Science</h4>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                <span>University of Technology</span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  2013 - 2017
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Studied computer science with focus on software engineering, database systems, and web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;