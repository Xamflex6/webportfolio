'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  rotation: number;
  image: string;
  link: string;
  description: string;
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
      link: 'https://example.com/project1',
      description: 'A simple and efficient QR code generator',
    },
    {
      id: 2,
      title: 'Make It Clean',
      rotation: 0,
      image: '/assets/projects/makeitclean.png',
      link: 'https://makeitclean-18sv-gold.vercel.app/',
      description: 'Car and furniture cleaning service website',
    },
    {
      id: 3,
      title: 'Pomodoro Timer',
      rotation: 15,
      image: '/assets/projects/TimerXamflex.png',
      link: 'https://github.com/Xamflex6/PomodoroTimer/',
      description: 'Focus timer using the Pomodoro technique',
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
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextProject();
    }
    if (isRightSwipe) {
      previousProject();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section id="projects" className="w-full py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white text-center mb-16 mt-12">
          My Projects
        </h2>
        
        {/* Desktop View - Overlapping Cards */}
        <div className="hidden md:flex relative justify-center items-center min-h-[300px] group overflow-x-hidden">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              data-text={project.title}
              style={
                {
                  '--r': project.rotation,
                } as React.CSSProperties
              }
              className="glass-card relative w-[180px] h-[200px] bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-[0_25px_25px_rgba(0,0,0,0.25)] flex justify-center items-center transition-all duration-500 rounded-lg -mx-[45px] backdrop-blur-md [transform:rotate(calc(var(--r)*1deg))] group-hover:rotate-0 group-hover:mx-2.5 overflow-hidden cursor-pointer hover:scale-105"
            >
              <div className="absolute inset-0 p-4">
                <div className="relative w-full h-[calc(100%-60px)] rounded-md overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={project.id === 2 ? "object-contain scale-200" : "object-cover"}
                  />
                </div>
              </div>
              {/* Title bar */}
              <div className="absolute bottom-0 w-full h-10 bg-white/5 flex justify-center items-center text-white text-sm font-medium">
                {project.title}
              </div>
              {/* Description on hover */}
              <div className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white text-center text-sm">{project.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden relative max-w-sm mx-auto">
          {/* Carousel Container */}
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
                translateX = '0%';
                scale = '1';
                opacity = '1';
                zIndex = '30';
              } else if (isPrev) {
                translateX = '-90%';
                scale = '0.85';
                opacity = '0.5';
                zIndex = '20';
              } else if (isNext) {
                translateX = '90%';
                scale = '0.85';
                opacity = '0.5';
                zIndex = '20';
              }

              return (
                <a
                  key={project.id}
                  href={isActive ? project.link : undefined}
                  target={isActive ? "_blank" : undefined}
                  rel={isActive ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (!isActive) {
                      e.preventDefault();
                      setCurrentIndex(index);
                    }
                  }}
                  className="absolute w-[280px] h-[340px] bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.4)] rounded-xl backdrop-blur-md overflow-hidden cursor-pointer transition-all duration-500 ease-out"
                  style={{
                    transform: `translateX(${translateX}) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                    pointerEvents: isActive || isPrev || isNext ? 'auto' : 'none',
                  }}
                >
                  <div className="absolute inset-0 p-5">
                    <div className="relative w-full h-[calc(100%-70px)] rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={project.id === 2 ? "object-contain scale-200" : "object-cover"}
                      />
                    </div>
                  </div>
                  {/* Title and Description */}
                  <div className="absolute bottom-0 w-full h-[70px] bg-gradient-to-t from-black/80 to-black/40 backdrop-blur-sm flex flex-col justify-center items-center px-4 py-2">
                    <h3 className="text-white text-base font-bold mb-1">{project.title}</h3>
                    <p className="text-gray-300 text-xs text-center line-clamp-2">{project.description}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={previousProject}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 active:scale-95"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/30 hover:bg-white/50'
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

          {/* Swipe Hint */}
          <p className="text-gray-500 text-xs text-center mt-6">Swipe or tap arrows to navigate</p>
        </div>
      </div>
    </section>
  );
}
