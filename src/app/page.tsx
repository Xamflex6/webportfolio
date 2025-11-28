import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[#0a0a0a] bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)]" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col w-full max-w-6xl flex-1">
            <Header />
            <Hero />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
