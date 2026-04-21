'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  rotation: number;
  image: string;
  link: string;
  description: string;
  tags: string[];
}

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: 'QrCode Generator',
      rotation: -15,
      image: '/assets/projects/qrcodeflex.png',
      link: 'https://qrcodeflex.vercel.app/',
      description: 'A simple and efficient QR code generator',
      tags: ['React', 'TypeScript'],
    },
    {
      id: 2,
      title: 'Make It Clean',
      rotation: 0,
      image: '/assets/projects/makeitclean.png',
      link: 'https://makeitclean-18sv-gold.vercel.app/',
      description: 'Car and furniture cleaning service website',
      tags: ['Next.js', 'Tailwind'],
    },
    {
      id: 3,
      title: 'Pomodoro Timer',
      rotation: 15,
      image: '/assets/projects/TimerXamflex.png',
      link: 'https://github.com/Xamflex6/PomodoroTimer/',
      description: 'Focus timer using the Pomodoro technique',
      tags: ['React', 'CSS'],
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    if (distance > 50) nextProject();
    if (distance < -50) previousProject();

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section id="projects" className="w-full py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            My Projects
          </h2>
          <p className="text-gray-400 text-base leading-normal max-w-2xl">
            A selection of things I&apos;ve built — click to explore.
          </p>
        </div>

        {/* Desktop View - Overlapping Cards */}
        <div className="hidden md:flex relative justify-center items-center min-h-[340px] group overflow-x-hidden">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ '--r': project.rotation } as React.CSSProperties}
              className="relative w-[220px] h-[270px] bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-[0_25px_25px_rgba(0,0,0,0.25)] flex justify-center items-center transition-all duration-500 rounded-xl -mx-[50px] backdrop-blur-md [transform:rotate(calc(var(--r)*1deg))] group-hover:rotate-0 group-hover:mx-3 overflow-hidden cursor-pointer hover:scale-105"
            >
              <div className="absolute inset-0 p-4">
                <div className="relative w-full h-[calc(100%-62px)] rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={project.id === 2 ? 'object-contain scale-200' : 'object-cover'}
                  />
                </div>
              </div>
              {/* Title + tags bar */}
              <div className="absolute bottom-0 w-full bg-white/5 border-t border-white/10 flex flex-col items-center justify-center gap-1 px-3 py-2" style={{ height: '62px' }}>
                <span className="text-white text-sm font-semibold">{project.title}</span>
                <div className="flex gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-gray-400 text-[10px] bg-white/10 rounded px-1.5 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Description overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-5">
                <p className="text-white text-center text-sm leading-relaxed">{project.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* View all link */}
        <div className="hidden md:flex justify-center mt-10">
          <Link
            href="https://github.com/Xamflex6?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-medium transition-colors group"
          >
            View all on GitHub
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden relative max-w-sm mx-auto">
          <div
            className="relative h-[400px] flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {projects.map((project, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + projects.length) % projects.length;
              const isNext = index === (currentIndex + 1) % projects.length;

              let translateX = '0%';
              let scale = '0.85';
              let opacity = '0';
              let zIndex = '0';

              if (isActive) {
                translateX = '0%'; scale = '1'; opacity = '1'; zIndex = '30';
              } else if (isPrev) {
                translateX = '-90%'; scale = '0.85'; opacity = '0.5'; zIndex = '20';
              } else if (isNext) {
                translateX = '90%'; scale = '0.85'; opacity = '0.5'; zIndex = '20';
              }

              return (
                <a
                  key={project.id}
                  href={isActive ? project.link : undefined}
                  target={isActive ? '_blank' : undefined}
                  rel={isActive ? 'noopener noreferrer' : undefined}
                  onClick={(e) => {
                    if (!isActive) { e.preventDefault(); setCurrentIndex(index); }
                  }}
                  className="absolute w-[280px] h-[340px] bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.4)] rounded-xl backdrop-blur-md overflow-hidden cursor-pointer transition-all duration-500 ease-out"
                  style={{
                    transform: `translateX(${translateX}) scale(${scale})`,
                    opacity,
                    zIndex,
                    pointerEvents: isActive || isPrev || isNext ? 'auto' : 'none',
                  }}
                >
                  <div className="absolute inset-0 p-5">
                    <div className="relative w-full h-[calc(100%-80px)] rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={project.id === 2 ? 'object-contain scale-200' : 'object-cover'}
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full h-[80px] bg-gradient-to-t from-black/80 to-black/40 backdrop-blur-sm flex flex-col justify-center items-center px-4 py-2 gap-1.5">
                    <h3 className="text-white text-base font-bold">{project.title}</h3>
                    <p className="text-gray-300 text-xs text-center line-clamp-1">{project.description}</p>
                    <div className="flex gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-gray-400 text-[10px] bg-white/10 rounded px-1.5 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={previousProject}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 active:scale-95"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white w-8' : 'bg-white/30 w-2 hover:bg-white/50'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 active:scale-95"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <p className="text-gray-500 text-xs text-center mt-4">Swipe or tap arrows to navigate</p>

          <div className="flex justify-center mt-6">
            <Link
              href="https://github.com/Xamflex6?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-medium transition-colors group"
            >
              View all on GitHub
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
