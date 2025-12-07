import React from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToResearch = () => {
    const element = document.getElementById('research');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-[85vh] flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-academic-bg">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-academic-dark tracking-tight leading-tight">
            Future-Ready Technologist.<br className="hidden sm:block" />
            <span className="text-academic-blue">Research-Driven Learner.</span>
          </h1>
          
          <div className="max-w-3xl mx-auto text-lg sm:text-xl text-academic-medium font-light leading-relaxed space-y-3">
            <p className="font-medium text-gray-800">
              Focused on neural computation, adaptive systems, and intelligent interaction.
            </p>
            <p>
              Building intelligent systems through curiosity, precision, and continuous learning.
            </p>
          </div>
        </div>
        
        <div className="pt-6 flex flex-col items-center gap-6">
          <button
            onClick={scrollToResearch}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-academic-blue text-white text-sm font-medium rounded-full shadow-md hover:bg-[#3b7ac8] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View My Research <ArrowRight size={16} />
          </button>

          <div className="flex items-center gap-5 text-academic-medium">
            <a 
              href="https://github.com/mahesh-v185" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:text-academic-dark transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/mr-mahesh-4209b4284/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:text-academic-blue transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};