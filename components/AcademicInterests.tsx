import React from 'react';
import { SectionTitle } from './SectionTitle';
import { BrainCircuit, HeartHandshake, Brain, Activity } from 'lucide-react';

export const AcademicInterests: React.FC = () => {
  const interests = [
    { 
      title: "Neural Computation", 
      icon: BrainCircuit 
    },
    { 
      title: "Human-Centered Intelligent Systems", 
      icon: HeartHandshake 
    },
    { 
      title: "Cognitive Modeling", 
      icon: Brain 
    },
    { 
      title: "Adaptive Signal-Based Systems", 
      icon: Activity 
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-academic-light scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Academic Interests" subtitle="true" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center text-center p-8 bg-academic-bg rounded-xl border border-academic-light hover:border-academic-blue hover:shadow-academic-hover transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-4 bg-white rounded-full text-academic-blue mb-5 shadow-sm border border-blue-50 group-hover:bg-academic-blue group-hover:text-white transition-colors duration-300">
                <interest.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-academic-dark leading-tight group-hover:text-academic-blue transition-colors">
                {interest.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};