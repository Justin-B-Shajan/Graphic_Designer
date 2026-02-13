'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Marquee from '@/components/Marquee';

export default function RedMidStatement() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative bg-[#B91C1C] py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Grain texture overlay */}
      <div className="absolute inset-0 grain-texture opacity-20" />

      {/* Top Marquee */}
      <div className="absolute top-0 left-0 right-0 py-4 sm:py-6 hidden sm:block">
        <Marquee
          text="✦ ATTENTION ✦ DESIGN ✦ IMPACT ✦ RESULTS ✦"
          speed={30}
          direction="left"
          className="text-white/10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider"
          repeat={4}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white leading-tight tracking-tight px-4">
            <span className="block">Attention Is Earned.</span>
            <span className="block mt-3 sm:mt-4">Design Is How You Earn It.</span>
          </h2>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-4 sm:py-6 hidden sm:block">
        <Marquee
          text="✦ CREATIVITY ✦ STRATEGY ✦ EXCELLENCE ✦"
          speed={35}
          direction="right"
          className="text-white/10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider"
          repeat={4}
        />
      </div>
    </section>
  );
}
