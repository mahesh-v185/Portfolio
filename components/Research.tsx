import React from 'react';
import { SectionTitle } from './SectionTitle';
import { FlaskConical, Microscope, ArrowUpRight } from 'lucide-react';
import { ResearchProject } from '../types';

const researchData: ResearchProject = {
  title: "CerebroPulse Engine",
  description: "A long-term experimental framework exploring timing-based neuron-like computation, adaptive signal behavior, and emotion-conditioned variation.",
  details: "Designed to study simplified cognitive models and emergent behavior in artificial systems.",
  stack: ["Python", "NumPy", "Matplotlib"],
  link: "https://github.com/mahesh-v185/NNE.git"
};

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-16 bg-academic-bg scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Research Projects" subtitle="true" />

        <div className="bg-white rounded-2xl shadow-academic hover:shadow-academic-hover transition-all duration-300 overflow-hidden border border-academic-light">
          <div className="bg-blue-50/50 border-b border-blue-100 flex items-center justify-center gap-2 py-3 text-academic-blue text-xs font-bold uppercase tracking-widest">
            <Microscope size={14} /> Research Highlight
          </div>
          
          <div className="p-8 md:p-12 grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 bg-blue-50 rounded-lg text-academic-blue border border-blue-100">
                    <FlaskConical size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-academic-dark">
                    {researchData.title}
                  </h3>
                </div>
                <p className="text-lg text-academic-medium font-medium leading-relaxed">
                  {researchData.description}
                </p>
              </div>
              
              <div className="bg-academic-bg p-6 rounded-xl border border-academic-light">
                <p className="text-academic-medium leading-relaxed">
                  {researchData.details}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {researchData.stack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white text-gray-700 text-xs font-semibold rounded-full border border-gray-300 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-1 flex flex-col justify-center h-full border-t md:border-t-0 md:border-l border-academic-light md:pl-8 pt-8 md:pt-0">
               <div className="space-y-5 text-center md:text-left">
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Status</h4>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full border border-green-200">
                      Active Research
                    </span>
                  </div>
                  
                  <div className="pt-2">
                    <a 
                      href={researchData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-academic-dark text-white text-sm font-semibold rounded-lg shadow-md hover:bg-black transition-all transform hover:-translate-y-0.5"
                    >
                      View Prototype <ArrowUpRight size={16} />
                    </a>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};