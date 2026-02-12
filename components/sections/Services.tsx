'use client';

import { Palette, FileImage, Layout, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Creating unique and memorable brand identities that stand out in the market.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: FileImage,
    title: 'Poster & Ad Design',
    description: 'Eye-catching posters and advertisements that capture attention and drive engagement.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Layout,
    title: 'UI / Web Design',
    description: 'Modern, intuitive user interfaces that provide exceptional user experiences.',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing Creatives',
    description: 'Strategic visual content that boosts your digital presence and conversions.',
    gradient: 'from-pink-500 to-cyan-500',
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="py-16 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16 space-y-4">
          <h2 className={`text-4xl sm:text-5xl font-bold scroll-animate ${isVisible ? 'visible' : ''}`}>
            Services I{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Offer
            </span>
          </h2>
          <p className={`text-gray-400 text-lg max-w-2xl mx-auto scroll-animate scroll-animate-delay-100 ${isVisible ? 'visible' : ''}`}>
            Comprehensive design solutions tailored to elevate your brand and
            engage your audience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const delays = ['scroll-animate-delay-100', 'scroll-animate-delay-200', 'scroll-animate-delay-300', 'scroll-animate-delay-400'];
            return (
              <div
                key={service.title}
                className={`group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 scroll-animate ${delays[index]} ${isVisible ? 'visible' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative space-y-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
