import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Project } from '../types';
import { 
  MessageCircleHeart, 
  Sprout, 
  Users, 
  LineChart, 
  BookOpen, 
  Mic, 
  ExternalLink,
  LucideIcon
} from 'lucide-react';

interface ProjectWithIcon extends Project {
  icon: LucideIcon;
}

const projects: ProjectWithIcon[] = [
  {
    title: "Solace",
    description: "Memory-based AI companion for natural, emotionally aware conversations.",
    stack: ["Python", "HTML", "JavaScript", "GPT API"],
    link: "https://solace-giw5uyb6y-maheshs-projects-81a5a75f.vercel.app/",
    icon: MessageCircleHeart
  },
  {
    title: "FarmConnect",
    description: "Digital platform bridging the gap between farmers and marketplaces for efficient trade.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/mahesh-v185/FarmConnect-",
    icon: Sprout
  },
  {
    title: "Campus Kizuna",
    description: "Role-based communication platform for students & faculty.",
    stack: ["Kotlin", "Firebase"],
    link: "https://campus-izuna.vercel.app/",
    icon: Users
  },
  {
    title: "LifeScript",
    description: "AI-powered tool for generating structured chapters and eBooks.",
    stack: ["React", "Node.js", "Firebase"],
    link: "https://lifescript-two.vercel.app/",
    icon: BookOpen
  },
  {
    title: "Booster",
    description: "Voice-controlled AI chatbot with context and natural language understanding.",
    stack: ["Python", "SpeechRecognition", "GPT API"],
    link: "https://github.com/mahesh-v185/Booster---voice-chat-bot.git",
    icon: Mic
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Featured Projects" subtitle="true" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl p-6 shadow-sm border border-academic-light hover:shadow-academic-hover hover:border-academic-blue/40 transition-all duration-300 flex flex-col h-full relative"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-academic-bg rounded-xl text-gray-600 group-hover:text-white group-hover:bg-academic-blue transition-colors duration-300 border border-gray-100">
                    <project.icon size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-academic-dark leading-tight">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-academic-blue transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>
                </div>
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-academic-blue transition-colors p-1"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              
              <p className="text-academic-medium text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="pt-4 border-t border-gray-100 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 bg-academic-bg text-xs text-gray-600 font-semibold rounded border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};