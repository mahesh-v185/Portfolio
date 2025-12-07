import React from 'react';
import { SectionTitle } from './SectionTitle';
import { SkillCategory } from '../types';

const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "HTML", "CSS", "Java (Basics)"]
  },
  {
    category: "Frameworks",
    items: ["Node.js", "Express.js", "Firebase"]
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "REST APIs"]
  },
  {
    category: "Research-Relevant Skills",
    items: ["Neural Computation", "Timing-Based Models", "Emotion-Aware Interaction", "Cognitive Modeling Foundations"]
  },
  {
    category: "Soft Skills",
    items: ["Initiative", "Problem-Solving", "Consistency", "Adaptability", "Self-Learning"]
  },
  {
    category: "Foundations",
    items: ["Basic Linear Algebra", "Basic Probability"]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-academic-bg scroll-mt-24 border-y border-academic-light">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Technical Skills & Competencies" subtitle="true" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillSet, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-academic-light hover:shadow-academic transition-shadow duration-300"
            >
              <h3 className="text-sm font-bold text-academic-blue uppercase tracking-wider mb-4 border-b border-gray-100 pb-3">
                {skillSet.category}
              </h3>
              <ul className="space-y-2.5">
                {skillSet.items.map((item) => (
                  <li key={item} className="flex items-center text-academic-medium text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2.5"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};