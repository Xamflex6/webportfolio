import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="w-full text-center py-12 md:py-16">
        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto px-4">

          {/* Availability Badge */}
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-gray-300 text-sm font-medium">Open to opportunities</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter animated-gradient-text">
              Decamps Max
            </h1>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter text-white">
              CS Student & Developer
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
              Passionate about building modern web applications and solving complex problems. Currently studying CS in Belgium and exploring fullstack development.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-black font-bold h-12 md:h-14 text-sm md:text-base tracking-wider transition-all duration-200 hover:shadow-[9px_9px_33px_#d1d1d1,-9px_-9px_33px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 border-none"
              style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
            >
              <Link href="#projects" className="flex items-center justify-center">View My Work</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white/20 text-white font-bold h-12 md:h-14 text-sm md:text-base tracking-wider transition-all duration-200 hover:shadow-[9px_9px_33px_rgba(209,209,209,0.3),-9px_-9px_33px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
              style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
            >
              <Link href="#contact" className="flex items-center justify-center">Get In Touch</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/Xamflex6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </Link>
            <div className="w-px h-4 bg-white/20" />
            <Link
              href="https://www.linkedin.com/in/maxdecamps/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
