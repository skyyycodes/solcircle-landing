'use client';

import Spline from '@splinetool/react-spline/next';
import Features from './features';

export default function Home() {
  return (
    <main className="relative w-full">
      <section className="relative w-full h-screen flex items-center justify-center">
        <Spline
          scene="https://prod.spline.design/IBGkggvzssDclj7X/scene.splinecode"
          onWheel={(e) => {}}
          style={{ pointerEvents: 'auto' }}
        />
      </section>
      <Features />
    </main>
  );
}

