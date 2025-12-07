import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          © 2025 Mahesh V. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
           <a 
             href="https://github.com/mahesh-v185" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-gray-400 hover:text-academic-dark transition-colors"
             aria-label="GitHub"
           >
             <Github size={18} />
           </a>
           <a 
             href="https://www.linkedin.com/in/mr-mahesh-4209b4284/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-gray-400 hover:text-academic-blue transition-colors"
             aria-label="LinkedIn"
           >
             <Linkedin size={18} />
           </a>
        </div>
      </div>
    </footer>
  );
};