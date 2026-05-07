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

function SkillDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3].map((dot) => (
        <span
          key={dot}
          className={`w-1.5 h-1.5 rounded-full ${dot <= level ? 'bg-blue-400' : 'bg-white/10'}`}
        />
      ))}
    </div>
  );
}

const categories = [
  {
    label: 'Frontend',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB', level: 3 },
      { name: 'React Native', icon: TbBrandReactNative, color: '#61DAFB', level: 2 },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', level: 3 },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 2 },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 3 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 3 },
    ],
  },
  {
    label: 'Backend',
    technologies: [
      { name: 'Python', icon: SiPython, color: '#3776AB', level: 2 },
      { name: 'PHP', icon: SiPhp, color: '#9B7FC8', level: 1 },
      { name: 'Java', icon: FaJava, color: '#ED8B00', level: 2 },
      { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F', level: 2 },
    ],
  },
  {
    label: 'Tools & DevOps',
    technologies: [
      { name: 'Git', icon: SiGit, color: '#F05032', level: 3 },
      { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 1 },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', level: 2 },
      { name: 'Bash', icon: SiGnubash, color: '#4EAA25', level: 1 },
      { name: 'PowerShell', icon: TbBrandPowershell, color: '#5391FE', level: 1 },
    ],
  },
];

export function TechStack() {
  return (
    <section id="techstack" className="w-full py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-3 mb-10 md:mb-14">
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase">// stack</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
            What I work with daily — and my honest skill level on each.
          </p>
          <div className="flex items-center gap-4 text-xs font-mono text-gray-600 mt-1">
            <span className="flex items-center gap-1.5"><span className="flex gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" /><span className="w-1.5 h-1.5 rounded-full bg-white/10 inline-block" /><span className="w-1.5 h-1.5 rounded-full bg-white/10 inline-block" /></span> Beginner</span>
            <span className="flex items-center gap-1.5"><span className="flex gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" /><span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" /><span className="w-1.5 h-1.5 rounded-full bg-white/10 inline-block" /></span> Intermediate</span>
            <span className="flex items-center gap-1.5"><span className="flex gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" /><span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" /><span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" /></span> Advanced</span>
          </div>
        </div>

        <div className="flex flex-col gap-10 max-w-4xl mx-auto">
          {categories.map((category) => (
            <div key={category.label}>
              <p className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-6 text-center">
                {category.label}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                {category.technologies.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 hover:bg-white/[0.06] hover:border-blue-500/20 transition-all duration-200 min-w-[150px]"
                    >
                      <Icon
                        className="w-6 h-6 flex-shrink-0"
                        style={{ color: tech.color }}
                      />
                      <div className="flex flex-col gap-1">
                        <span className="text-white text-sm font-medium leading-none">{tech.name}</span>
                        <SkillDots level={tech.level} />
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
