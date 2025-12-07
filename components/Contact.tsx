import React, { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-academic-bg border-t border-academic-light scroll-mt-24">
      <div className="max-w-2xl mx-auto px-6">
        <SectionTitle title="Get In Touch" subtitle="true" />
        
        <div className="bg-white rounded-2xl shadow-academic p-8 border border-academic-light">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-academic-blue focus:ring-1 focus:ring-academic-blue outline-none transition-all bg-gray-50 text-gray-800 placeholder-gray-400"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-academic-blue focus:ring-1 focus:ring-academic-blue outline-none transition-all bg-gray-50 text-gray-800 placeholder-gray-400"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-academic-blue focus:ring-1 focus:ring-academic-blue outline-none transition-all bg-gray-50 text-gray-800 placeholder-gray-400 resize-none"
                placeholder="How can we collaborate?"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-lg text-white font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-0.5 ${
                submitted ? 'bg-green-600' : 'bg-academic-blue hover:bg-blue-700'
              } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                'Sending...'
              ) : submitted ? (
                'Message Sent!'
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col items-center gap-4 text-academic-medium">
             <div className="flex items-center gap-2 text-sm font-medium">
                <Mail size={16} />
                <a href="mailto:vk143264.v@gmail.com" className="hover:text-academic-blue transition-colors text-gray-700">
                  vk143264.v@gmail.com
                </a>
             </div>
             
             <div className="flex items-center gap-6">
               <a 
                 href="https://github.com/mahesh-v185" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-black text-gray-500 transition-colors"
                 aria-label="GitHub"
               >
                 <Github size={22} />
               </a>
               <a 
                 href="https://www.linkedin.com/in/mr-mahesh-4209b4284/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-academic-blue text-gray-500 transition-colors"
                 aria-label="LinkedIn"
               >
                 <Linkedin size={22} />
               </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};