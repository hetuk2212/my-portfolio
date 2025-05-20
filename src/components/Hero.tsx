import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-8 animate-fade-in">
              <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:text-blue-400 dark:bg-gray-800">
                Web & Mobile Developer
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight animate-fade-in">
              Turning <span className="text-blue-600 dark:text-blue-400">ideas</span> into
              <br /> digital <span className="text-blue-600 dark:text-blue-400">realities</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl animate-fade-in-delay-1">
              I'm a fullstack developer specializing in building exceptional digital experiences.
              Currently, I'm focused on creating responsive web and mobile applications that solve real problems.
            </p>
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-delay-2">
              <Button href="#projects">
                View My Work <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button href="#contact" variant="outline">
                Get In Touch
              </Button>
            </div>
            <div className="flex items-center space-x-4 animate-fade-in-delay-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <Twitter size={22} />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7241428/pexels-photo-7241428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Developer Portrait" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
    </section>
  );
};

export default Hero;