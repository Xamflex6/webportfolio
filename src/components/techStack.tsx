'use client';

import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiPhp,
  SiSpring,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiGnubash,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbBrandReactNative, TbBrandPowershell } from 'react-icons/tb';

const categories = [
  {
    label: 'Frontend',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'React Native', icon: TbBrandReactNative, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    label: 'Backend',
    technologies: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'PHP', icon: SiPhp, color: '#9B7FC8' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F' },
    ],
  },
  {
    label: 'Tools & DevOps',
    technologies: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Bash', icon: SiGnubash, color: '#4EAA25' },
      { name: 'PowerShell', icon: TbBrandPowershell, color: '#5391FE' },
    ],
  },
];

export function TechStack() {
  return (
    <section id="techstack" className="w-full py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-10 md:mb-14">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            Technologies and tools I use to build projects
          </p>
        </div>

        {/* Grouped Categories */}
        <div className="flex flex-col gap-10 max-w-4xl mx-auto">
          {categories.map((category) => (
            <div key={category.label}>
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-6 text-center">
                {category.label}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6">
                {category.technologies.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="group relative w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-default"
                    >
                      <Icon
                        className="w-8 h-8 md:w-9 md:h-9 transition-all duration-300"
                        style={{ color: tech.color }}
                      />
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/90 text-white px-2.5 py-1 rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                        {tech.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
