import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Certification } from '../types';
import { Award, ExternalLink } from 'lucide-react';

const certifications: Certification[] = [
  { 
    title: "Developer & Technology Experience",
    issuer: "Accenture",
    link: "https://www.theforage.com/completion-certificates/ovyvuqqNRQKBjNxbj/3xnZEj9kfpoQKW885_ovyvuqqNRQKBjNxbj_BtRS8jq8NLYuEmGzY_1751251417456_completion_certificate.pdf" 
  },
  { 
    title: "Google Cloud: Introduction to Generative AI",
    issuer: "SimpliLearn",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzODA3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODk1ODc4OF85MTgwNzg5MTc1NzYwNTcxNzEwNy5wbmciLCJ1c2VybmFtZSI6Ik1BSEVTSCBWIn0%3D&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6750%2FIntroduction-to-Generative-AI%2Fcertificate%2Fdownload-skillup&%24web_only=true"
  },
  { 
    title: "Oracle AI Foundations",
    issuer: "Oracle University",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=9DC2E9F13B3168C5DF229F3A88D05DE2D6FD1A455F397586CA6F031DA41C23CA"
  },
  { 
    title: "Web Development Job Simulation", 
    issuer: "Moreton Bay",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/2t4QruSmKkrN8jr7G/7q8DN5enMzSHqLwev_2t4QruSmKkrN8jr7G_BtRS8jq8NLYuEmGzY_1751224123652_completion_certificate.pdf"
  },
  { 
    title: "Data Analytics Job Simulation", 
    issuer: "Deloitte",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_BtRS8jq8NLYuEmGzY_1752741494605_completion_certificate.pdf"
  },
  { 
    title: "International Computer Science Competition – Qualified",
    link: "https://media.licdn.com/dms/image/v2/D5622AQFHS0rq6-66yA/feedshare-shrink_2048_1536/B56ZlseRdFG0Aw-/0/1758461501173?e=1766620800&v=beta&t=vmOb0poEjv2wAayDejbHBKZJPK1rqvZz6A8ngzDI1iw"
  }
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 bg-white scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle title="Certifications & Achievements" subtitle="true" />
        
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group flex items-center justify-between p-5 bg-white border border-academic-light rounded-lg shadow-sm hover:shadow-academic hover:border-academic-blue/30 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 text-gray-400 group-hover:text-academic-violet transition-colors">
                  <Award size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-academic-dark group-hover:text-academic-blue transition-colors">
                    {cert.title}
                  </h4>
                  {cert.issuer && (
                    <p className="text-sm text-gray-500 mt-1 font-medium">{cert.issuer}</p>
                  )}
                </div>
              </div>
              
              {cert.link && (
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-academic-blue text-sm font-semibold flex items-center gap-1.5"
                >
                  <span className="hidden sm:inline">View Certificate</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};