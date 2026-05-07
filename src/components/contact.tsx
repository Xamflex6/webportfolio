import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="w-full py-14 md:py-20">
      <div className="w-full px-4">
        <div className="flex flex-col items-center text-center gap-3 mb-10 max-w-6xl mx-auto">
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase">// contact</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            Internship, project, collaboration, or just a chat — I&apos;m always happy to connect.
          </p>
        </div>

        <div className="flex flex-col items-center md:grid md:grid-cols-2 gap-8 md:max-w-5xl mx-auto">
          {/* Email Card */}
          <div className="animated-border-card group w-[320px] md:w-auto">
            <div className="animated-border-content">
              <div className="flex flex-col items-center text-center p-8">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-3 tracking-tight mt-4">
                  Send an Email
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-3">
                  A question, an internship opportunity, or a project idea?
                </p>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                  <Mail className="w-4 h-4" />
                  <span className="font-mono text-xs">max.decamps@std.heh.be</span>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold h-12 md:h-14 text-sm md:text-base tracking-wider transition-all duration-200 hover:-translate-y-0.5 border-none mb-4"
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
                <h3 className="text-white text-xl md:text-2xl font-bold mb-3 tracking-tight mt-4">
                  Find Me Online
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                  Check out my code on GitHub or connect with me on LinkedIn.
                </p>
                <div className="flex flex-row justify-center gap-3 w-full max-w-sm mb-4">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="flex-1 bg-transparent border-white/20 text-white hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-300 transition-all duration-200 hover:-translate-y-0.5 font-semibold"
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
                    className="flex-1 bg-transparent border-white/20 text-white hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-300 transition-all duration-200 hover:-translate-y-0.5 font-semibold"
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
