'use client';

import Spline from '@splinetool/react-spline/next';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import ProblemSolution from '@/components/ProblemSolution';
import CoreFeatures from '@/components/CoreFeatures';
import Gamification from '@/components/Gamification';
import Roadmap from '@/components/Roadmap';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main className="relative w-full">
      <section className="relative w-full h-screen flex items-center justify-center">
        <Spline
          scene="https://prod.spline.design/IBGkggvzssDclj7X/scene.splinecode"
          onWheel={(e) => {}}
          style={{ pointerEvents: 'auto' }}
        />
        {/* Bottom fade to black to blend into body */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-black/60 to-black" />
      </section>
      
      {/* New Content Sections */}
      <HeroSection />
      <HowItWorks />
      <ProblemSolution />
      <CoreFeatures />
      <Gamification />
      <Roadmap />
      <FinalCTA />
      
      {/* Original Features Section */}

    </main>
  );
}

