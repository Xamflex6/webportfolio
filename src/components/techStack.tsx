'use client';

import React from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiPython,
  SiSpring,
  SiGit,
  SiDocker,
  SiPostgresql
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export function TechStack() {
  const technologies = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  ];

  return (
    <section className="w-full py-32 md:py-40 mt-20 md:mt-32">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-32 md:mb-40">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            Technologies and tools I use to build projects
          </p>
        </div>

        {/* Tech Icons Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 max-w-4xl mx-auto">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group relative w-20 h-20 md:w-24 md:h-24 bg-[#2c2c2c] rounded-none flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Icon 
                  className="w-10 h-10 md:w-12 md:h-12 text-white transition-all duration-300" 
                />
                
                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black/90 text-white px-3 py-1 rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
                  {tech.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}