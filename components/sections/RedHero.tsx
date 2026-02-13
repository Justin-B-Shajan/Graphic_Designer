'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Marquee from '@/components/Marquee';

export default function RedHero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-[#B91C1C] overflow-hidden"
    >
      {/* Grain texture overlay */}
      <div className="absolute inset-0 grain-texture opacity-30" />

      {/* Top Marquee */}
      <div className="absolute top-16 sm:top-20 left-0 right-0 z-20 hidden sm:block">
        <Marquee
          text="✦ GRAPHIC DESIGNER ✦ BRAND IDENTITY ✦ ADVERTISING ✦ VISUAL STORYTELLING ✦"
          speed={30}
          direction="left"
          className="text-white/20 text-lg sm:text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-wider"
          repeat={4}
        />
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 z-20 hidden sm:block">
        <Marquee
          text="✦ CREATIVE DIRECTION ✦ PRODUCT DESIGN ✦ SOCIAL MEDIA ✦ UI/UX ✦"
          speed={35}
          direction="right"
          className="text-white/20 text-lg sm:text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-wider"
          repeat={4}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 sm:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Side - Text Content */}
          <div
            className={`flex-1 space-y-6 sm:space-y-8 text-center lg:text-left relative z-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {/* Main Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight whitespace-nowrap">
              <span
                className={`inline-block transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: '100ms' }}
              >
                JUSTIN B SHAJAN
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-white/90 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '300ms' }}
            >
              Bold Design. Clear Strategy.
            </p>

            {/* Description */}
            <p
              className={`text-sm sm:text-base md:text-lg lg:text-lg text-white/80 font-light max-w-xl mx-auto lg:mx-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '400ms' }}
            >
              I design powerful brand identities and advertising creatives that demand attention and drive results.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4 sm:pt-6 lg:pt-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '500ms' }}
            >
              <button
                onClick={() => {
                  const element = document.querySelector('#portfolio');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold text-base sm:text-lg rounded-sm hover:bg-white/90 transition-all duration-300 hover:scale-105"
              >
                View Work
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold text-base sm:text-lg rounded-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Let's Work Together
              </button>
            </div>
          </div>

          {/* Right Side - 3D Circular Image Design */}
          <div
            className={`w-full lg:w-1/2 flex justify-center lg:justify-end transition-all duration-1000 z-10 ${isVisible ? 'translate-x-0' : 'translate-x-10'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative w-72 h-72 xs:w-80 xs:h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] group">
              {/* Decorative background glow */}
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse scale-110" />

              {/* The White Circle Base */}
              <div className="absolute inset-8 bg-white rounded-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transform transition-transform duration-700 group-hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 opacity-10 grain-texture" />
              </div>

              {/* The "Projecting" Image */}
              <div className="absolute inset-0 z-20 transform transition-all duration-700 group-hover:-translate-y-8 group-hover:scale-110 drop-shadow-[20px_30px_20px_rgba(0,0,0,0.4)]">
                <Image
                  src="/heroImg.png"
                  alt="Justin B Shajan"
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 300px, 500px"
                  priority
                />
              </div>

              {/* 3D Ring Elements */}
              <div className="absolute inset-0 border-2 border-white/40 rounded-full scale-[1.02] transform -rotate-12 transition-transform duration-700 group-hover:rotate-12 pointer-events-none z-10" />
              <div className="absolute inset-0 border-2 border-white/20 rounded-full scale-[1.1] transform rotate-45 transition-transform duration-700 group-hover:-rotate-45 pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-1.5 sm:mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
