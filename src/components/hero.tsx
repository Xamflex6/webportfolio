import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full text-center py-16 md:py-32">
        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter animated-gradient-text">
              Decamps Max
            </h1>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white">
              CS Student
            </h3>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-black font-bold px-10 h-12 text-base min-w-[180px] tracking-wider transition-all duration-200 hover:shadow-[9px_9px_33px_#d1d1d1,-9px_-9px_33px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 border-none"
            >
              <Link href="#projects" className="flex items-center justify-center">View My Work</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white/20 text-white font-bold px-10 h-12 text-base min-w-[180px] tracking-wider transition-all duration-200 hover:shadow-[9px_9px_33px_rgba(209,209,209,0.3),-9px_-9px_33px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
            >
              <Link href="#contact" className="flex items-center justify-center">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
