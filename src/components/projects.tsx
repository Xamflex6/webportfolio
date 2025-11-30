'use client';

import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  rotation: number;
  image: string;
  link: string;
  description: string;
}

export function Projects() {
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

  return (
    <section id="projects" className="w-full py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white text-center mb-16">
          My Projects
        </h2>
        
        <div className="relative flex justify-center items-center min-h-[300px] group">
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
      </div>
    </section>
  );
}
