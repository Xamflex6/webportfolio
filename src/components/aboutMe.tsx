'use client';

import { School, Code, Rocket, Briefcase } from 'lucide-react';

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
      description: 'Expanded my skills to backend technologies, databases, and REST API development. Started building complete applications with Java Spring Boot and React Native for mobile apps.',
      icon: Briefcase,
      tag: 'Fullstack',
    },
  ];

  return (
    <section id="about" className="w-full py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-8 md:mb-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            My Journey
          </h2>
          <p className="text-gray-400 text-base leading-normal max-w-2xl">
            A timeline of my growth in computer science, from foundational learning to advanced applications.
          </p>
        </div>

        {/* Short Bio */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-center mb-8 md:mb-10">
          I&apos;m a CS student based in Belgium, building things across the entire stack — from polished user interfaces to backend systems and APIs. I enjoy turning ideas into functional, well-crafted software.
        </p>

        {/* Timeline as Cards */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-white text-base font-semibold">{step.title}</p>
                    <span className="flex-shrink-0 text-gray-500 text-xs font-mono pt-0.5">{step.date}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{step.description}</p>
                  <span className="inline-flex self-start items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                    {step.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
