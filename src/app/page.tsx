import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { AboutMe } from '@/components/aboutMe';
import { TechStack } from '@/components/techStack';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[#0a0a0a] bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)]" />

      {/* Content */}
      <div className="relative z-10 flex h-full grow flex-col">
        {/* Header is full-width so the sticky blur covers the entire viewport */}
        <Header />

        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center">
          <div className="flex flex-col w-full max-w-6xl flex-1">
            <Hero />
            <AboutMe />
            <TechStack />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
