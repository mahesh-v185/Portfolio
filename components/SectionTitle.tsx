import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold text-academic-dark tracking-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <div className="w-16 h-1 bg-academic-blue mx-auto rounded-full opacity-80"></div>
      )}
    </div>
  );
};