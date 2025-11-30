'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { School, Code, Rocket, Briefcase, Award } from 'lucide-react';

export function AboutMe() {
  const journeySteps = [
    {
      date: '2023',
      title: 'First Steps in Programming',
      description: 'Started learning the basics of programming with Python and algorithms.',
      icon: School,
      tag: 'Learning',
    },
    {
      date: '2024',
      title: 'Web Development Journey',
      description: 'Dove into web development, learning HTML, CSS, and JavaScript. Built my first websites.',
      icon: Code,
      tag: 'Development',
    },
    {
      date: '2024',
      title: 'Modern Frameworks',
      description: 'Explored React and Next.js, discovering the power of modern web frameworks and component-based architecture.',
      icon: Rocket,
      tag: 'Frameworks',
    },
    {
      date: '2025',
      title: 'Fullstack Development',
      description: 'Expanded my skills to backend technologies, databases, and RestAPI development. Started building complete applications with Java Spring Boot and React Native for mobile apps.',
      icon: Briefcase,
      tag: 'Fullstack',
    },
  ];

  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            My Journey
          </h2>
          <p className="text-gray-400 text-base leading-normal max-w-2xl">
            A timeline of my growth in computer science, from foundational learning to advanced applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-[40px_1fr] gap-x-4 max-w-3xl mx-auto">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === journeySteps.length - 1;

            return (
              <div key={index} className="contents">
                {/* Icon column */}
                <div className={`flex flex-col items-center gap-1 ${index === 0 ? 'pt-3' : ''} ${isLast ? 'pb-3' : ''}`}>
                  {index !== 0 && (
                    <div className="w-[1.5px] bg-white/10 h-2"></div>
                  )}
                  <div className="text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  {!isLast && (
                    <div className="w-[1.5px] bg-white/10 h-2 grow"></div>
                  )}
                </div>

                {/* Content column */}
                <div className="flex flex-1 flex-col py-3">
                  <p className="text-gray-400 text-sm font-normal mb-1">
                    {step.date}
                  </p>
                  <p className="text-white text-base md:text-lg font-medium mb-2">
                    {step.title}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                      {step.tag}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}