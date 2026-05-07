'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  image: string;
  link: string;
  description: string;
  tags: string[];
  type: string;
}

const projects: Project[] = [
  {
    title: 'QrCode Generator',
    image: '/assets/projects/qrcodeflex.png',
    link: 'https://qrcodeflex.vercel.app/',
    description: 'Customisable QR code generator. PNG export, colour picker, and configurable error correction level.',
    tags: ['React', 'TypeScript'],
    type: 'Web App',
  },
  {
    title: 'Make It Clean',
    image: '/assets/projects/makeitclean.png',
    link: 'https://makeitclean-18sv-gold.vercel.app/',
    description: 'Landing page for a car and furniture cleaning service. Fully responsive with an integrated contact form.',
    tags: ['Next.js', 'Tailwind CSS'],
    type: 'Site Vitrine',
  },
  {
    title: 'Pomodoro Timer',
    image: '/assets/projects/TimerXamflex.png',
    link: 'https://github.com/Xamflex6/PomodoroTimer/',
    description: 'Focus timer using the Pomodoro technique. Configurable work and break sessions, sound notifications, minimal UI.',
    tags: ['React', 'CSS'],
    type: 'Productivity',
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-3 mb-10 md:mb-14">
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase">// projects</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            What I&apos;ve Built
          </h2>
          <p className="text-gray-400 text-base leading-normal max-w-2xl">
            Personal and academic projects — click to explore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:bg-white/[0.06] hover:border-blue-500/20 transition-all duration-200 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative w-full h-44 bg-white/5 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`transition-transform duration-300 group-hover:scale-105 ${
                    project.title === 'Make It Clean' ? 'object-contain scale-150' : 'object-cover'
                  }`}
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-mono px-2 py-0.5 rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-base">{project.title}</h3>
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-gray-400 text-[11px] font-mono bg-white/[0.06] border border-white/10 rounded px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="https://github.com/Xamflex6?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-blue-400 text-sm font-mono transition-colors group"
          >
            <span>View all repos on GitHub</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
