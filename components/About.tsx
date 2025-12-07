import React from 'react';
import { SectionTitle } from './SectionTitle';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white border-y border-academic-light scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle title="About Me" subtitle="true" />
        
        <div className="bg-academic-bg rounded-2xl p-8 md:p-12 border border-academic-light shadow-sm">
          <h3 className="text-xl font-bold text-academic-dark mb-6 text-center leading-relaxed">
            Aspiring Computer Scientist | Human-Centered AI Enthusiast | Research-Oriented Developer
          </h3>
          
          <div className="space-y-6 text-academic-medium leading-relaxed text-left">
            <p>
              I’m a developer who builds projects to learn, not the other way around. My journey includes creating intelligent systems like Solace, a memory-based AI companion, and the CerebroPulse Engine, a research prototype exploring timing-based neural behavior.
            </p>
            <p>
              I am deeply interested in neural computation, cognitive modeling, and human-centered intelligent systems. Over the past two years, I have worked independently on full-stack applications, mobile development, and AI prototypes that align with these research directions.
            </p>
            <p>
              I aim to pursue undergraduate studies in China, where I can contribute to research while strengthening my foundations in computer science and intelligent systems.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200 text-center">
            <p className="text-academic-blue font-semibold italic">
              “Precision, consistency, and purpose — my approach to technology and learning.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};