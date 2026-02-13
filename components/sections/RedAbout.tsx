'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const stats = [
  { label: 'Projects Completed', value: 50, suffix: '+' },
  { label: 'Years of Experience', value: 2, suffix: '+' },
  { label: 'Happy Clients', value: 50, suffix: '+' },
];

function AnimatedCounter({
  value,
  suffix,
  isVisible,
}: {
  value: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  const duration = 2000;
  const steps = 60;
  const increment = value / steps;
  const stepDuration = duration / steps;

  useEffect(() => {
    if (!isVisible) return;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newValue = Math.min(Math.floor(increment * currentStep), value);
      setCount(newValue);

      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(value);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value, increment, stepDuration, steps]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function RedAbout() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="relative bg-white py-16 sm:py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div
            className={`transition-all duration-1000 order-1 lg:order-1 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none rounded-lg overflow-hidden shadow-2xl group">
              <Image
                src="/About.png"
                alt="Justin B Shajan"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-2xl order-2 lg:order-2">
            {/* Bio */}
            <div
              className={`mb-12 sm:mb-16 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 sm:mb-8">
                About
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-black/80 leading-relaxed">
                Justin B Shajan is a strategic graphic designer focused on creating bold brand visuals and high-converting advertising creatives. With strong typography, structured layouts, and modern aesthetics, he builds visual systems that stand out and perform.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-1 sm:mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      isVisible={isVisible}
                    />
                  </div>
                  <p className="text-[10px] sm:text-xs md:text-sm text-black/60 uppercase tracking-wider leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
