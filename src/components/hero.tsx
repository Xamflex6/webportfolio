import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="w-full py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-4xl mx-auto px-4">

          {/* Left: Identity */}
          <div className="flex flex-col gap-6 flex-1 text-center md:text-left items-center md:items-start">

            <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-300 text-sm font-mono">Open to opportunities</span>
            </div>

            <div className="flex flex-col gap-1.5">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter animated-gradient-text">
                Decamps Max
              </h1>
              <p className="text-gray-400 font-mono text-sm">
                <span className="text-blue-400">student</span>
                {' · '}
                Bac3 Computer Science
                {' · '}
                <span className="text-gray-500">HEH Mons</span>
              </p>
              <p className="text-gray-600 font-mono text-xs">
                Application Development Track
              </p>
            </div>

            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              I build web and mobile applications — from front to back. I care about clean code and projects that actually solve problems.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold h-11 text-sm tracking-wider transition-all duration-200 hover:-translate-y-0.5 border-none"
                style={{ paddingLeft: '2rem', paddingRight: '2rem' }}
              >
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white font-medium h-11 text-sm tracking-wider transition-all duration-200 hover:bg-white/5 hover:border-white/30"
                style={{ paddingLeft: '2rem', paddingRight: '2rem' }}
              >
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/Xamflex6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm font-medium">GitHub</span>
              </Link>
              <div className="w-px h-4 bg-white/20" />
              <Link
                href="https://www.linkedin.com/in/maxdecamps/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm font-medium">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Right: Code block */}
          <div className="w-full md:w-auto flex-shrink-0">
            <div className="bg-[#0d1117] border border-white/10 rounded-xl p-5 font-mono w-full md:w-[360px]">
              <div className="flex items-center gap-1.5 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-gray-600 text-xs">about.ts</span>
              </div>
              <div className="space-y-1 text-[13px]">
                <p>
                  <span className="text-blue-400">const</span>
                  {' '}
                  <span className="text-white">me</span>
                  {' '}
                  <span className="text-gray-400">=</span>
                  {' '}
                  <span className="text-gray-400">{'{'}</span>
                </p>
                <p className="pl-4">
                  <span className="text-green-400">name</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-orange-300">&quot;Max Decamps&quot;</span>
                  <span className="text-gray-400">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-green-400">degree</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-orange-300">&quot;Bac3 Computer Science&quot;</span>
                  <span className="text-gray-400">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-green-400">track</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-orange-300">&quot;App Development&quot;</span>
                  <span className="text-gray-400">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-green-400">school</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-orange-300">&quot;HEH Mons&quot;</span>
                  <span className="text-gray-400">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-green-400">stack</span>
                  <span className="text-gray-400">: [</span>
                  <span className="text-orange-300">&quot;React&quot;</span>
                  <span className="text-gray-400">, </span>
                  <span className="text-orange-300">&quot;Spring&quot;</span>
                  <span className="text-gray-400">, </span>
                  <span className="text-orange-300">&quot;Next.js&quot;</span>
                  <span className="text-gray-400">],</span>
                </p>
                <p className="pl-4">
                  <span className="text-green-400">status</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-orange-300">&quot;open to work&quot;</span>
                  <span className="text-gray-400">,</span>
                </p>
                <p>
                  <span className="text-gray-400">{'}'}</span>
                  <span className="text-gray-600">;</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
