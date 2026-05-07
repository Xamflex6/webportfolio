'use client';

import { School, Code, Rocket, Briefcase } from 'lucide-react';

export function AboutMe() {
  const journeySteps = [
    {
      date: '2022',
      title: 'Starting Bac1 in Computer Science',
      description: 'Enrolled at HEH Mons in the application development track. Discovered algorithmics, fundamentals of C and Python, and the logic of programming.',
      icon: School,
      tag: 'Bac1',
    },
    {
      date: '2023',
      title: 'Web & Object-Oriented Programming',
      description: 'HTML, CSS, JavaScript, PHP. First concrete web projects. Introduction to Java and OOP. Git and first team collaborations.',
      icon: Code,
      tag: 'Bac2',
    },
    {
      date: '2024',
      title: 'Modern Frameworks',
      description: 'Picked up React and Next.js. Tailwind CSS, TypeScript. First projects deployed to production. Deep dive into component-based architecture.',
      icon: Rocket,
      tag: 'Bac3 — S5',
    },
    {
      date: '2025',
      title: 'Fullstack & Mobile',
      description: 'Spring Boot for REST APIs, React Native for mobile, PostgreSQL and Docker. Building complete applications end-to-end. Final year project in progress.',
      icon: Briefcase,
      tag: 'Bac3 — S6',
    },
  ];

  return (
    <section id="about" className="w-full py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-3 mb-8 md:mb-10">
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase">// about</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            My Journey
          </h2>
          <p className="text-gray-400 text-base leading-normal max-w-2xl">
            3 years of CS studies at HEH Mons — from zero to fullstack.
          </p>
        </div>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-center mb-8 md:mb-10">
          I&apos;m a final-year CS student specialising in application development. I build projects across the full stack — React interfaces, Spring Boot APIs, databases, deployment. I care about clean code and applications that solve real problems.
        </p>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-blue-500/20 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-white text-base font-semibold">{step.title}</p>
                    <span className="flex-shrink-0 text-gray-500 text-xs font-mono pt-0.5">{step.date}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{step.description}</p>
                  <span className="inline-flex self-start items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-mono text-blue-400">
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
