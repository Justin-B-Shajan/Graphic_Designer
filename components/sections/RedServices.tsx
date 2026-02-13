'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Marquee from '@/components/Marquee';

const services = [
  'Brand Identity',
  'Product Advertisement Design',
  'Social Media Creatives',
  'Visual Systems & UI Design',
];

export default function RedServices() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="services" ref={ref} className="relative bg-[#B91C1C] py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Marquee */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 hidden sm:block">
        <Marquee
          text="✦ SERVICES ✦ EXPERTISE ✦ SOLUTIONS ✦"
          speed={40}
          direction="left"
          className="text-white/5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wider"
          repeat={4}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Services
          </h2>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {services.map((service, index) => (
              <div
                key={service}
                className={`group transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="underline-hover">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white cursor-pointer py-3 sm:py-4">
                    {service}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
