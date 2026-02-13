'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Marquee from '@/components/Marquee';

export default function RedTransition() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-40 bg-white overflow-hidden"
    >
      {/* Top Marquee */}
      <div className="absolute top-0 left-0 right-0 py-4 hidden sm:block">
        <Marquee
          text="✦ DESIGN ✦ STRATEGY ✦ CREATIVITY ✦ INNOVATION ✦"
          speed={30}
          direction="left"
          className="text-black/5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider"
          repeat={4}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-tight tracking-tight px-4">
            <span className="block">Design Is Not</span>
            <span className="block mt-2">Decoration.</span>
            <span className="block mt-3 sm:mt-4 text-[#B91C1C]">It's Communication.</span>
          </h2>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-4 hidden sm:block">
        <Marquee
          text="✦ VISUAL STORYTELLING ✦ BRAND IDENTITY ✦"
          speed={35}
          direction="right"
          className="text-black/5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider"
          repeat={4}
        />
      </div>
    </section>
  );
}
