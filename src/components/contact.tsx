import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 mt-20 md:mt-32">
      <div className="w-full px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
          </p>
        </div>

        {/* Contact Cards with animated border */}
        <div className="flex flex-col items-center md:grid md:grid-cols-2 gap-8 md:gap-8 md:max-w-5xl mx-auto">
          {/* Email Card */}
          <div className="animated-border-card group w-[320px] md:w-auto">
            <div className="animated-border-content">
              <div className="flex flex-col items-center text-center p-8">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-4 tracking-tight mt-4">
                  Start a Conversation
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                  Have a question or a project in mind? Let's connect. I'm excited to hear from you.
                </p>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-white text-black font-bold h-12 md:h-14 text-sm md:text-base tracking-wider transition-all duration-200 hover:shadow-[9px_9px_33px_#d1d1d1,-9px_-9px_33px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 border-none mb-4 mt-4"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                >
                  <Link href="mailto:max.decamps@std.heh.be" className="flex items-center justify-center gap-2">
                    <span>Email Me</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Social Card */}
          <div className="animated-border-card group w-[320px] md:w-auto">
            <div className="animated-border-content">
              <div className="flex flex-col items-center text-center p-8">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-4 tracking-tight mt-4">
                  Find Me Online
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                  Explore my work and connect with me on my professional social networks.
                </p>
                <div className="flex flex-row justify-center gap-3 w-full max-w-sm mb-4 mt-4">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="flex-1 bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200 hover:-translate-y-0.5 font-semibold"
                  >
                    <Link href="https://github.com/Xamflex6" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="flex-1 bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200 hover:-translate-y-0.5 font-semibold"
                  >
                    <Link href="https://www.linkedin.com/in/maxdecamps/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}