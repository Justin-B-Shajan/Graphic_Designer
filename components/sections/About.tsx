'use client';

import { Award, Users, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const stats = [
  { icon: Briefcase, label: 'Projects Completed', value: '50+' },
  { icon: Award, label: 'Years of Experience', value: '2+' },
  { icon: Users, label: 'Happy Clients', value: '50+' },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="py-16 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`relative flex justify-center items-center scroll-animate ${isVisible ? 'visible' : ''}`}>
            <div className="relative w-full max-w-md aspect-[4/5] group">
              {/* Simple Offset Border Background */}
              <div className="absolute top-4 left-4 inset-0 border-2 border-purple-500/30 rounded-3xl -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-500" />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gray-900/40 backdrop-blur-sm border border-white/10 shadow-2xl flex justify-center items-center">
                {/* Subtle soft glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-50" />

                <Image
                  src="/About.png"
                  alt="Profile"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Minimal decoration */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>

          <div className="space-y-8">
            <div className={`space-y-4 scroll-animate scroll-animate-delay-100 ${isVisible ? 'visible' : ''}`}>
              <h2 className="text-4xl sm:text-5xl font-bold">
                About{' '}
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                  Me
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm Justin B Shajan, a passionate graphic designer dedicated to
                creating visually stunning designs that help brands stand out.
                My approach combines creativity with strategic thinking to deliver
                solutions that not only look great but also drive results.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Specializing in brand identity, digital marketing creatives, and
                UI design, I focus on crafting designs that tell compelling
                stories and create memorable experiences for audiences.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 group scroll-animate scroll-animate-delay-${(index + 2) * 100} ${isVisible ? 'visible' : ''}`}
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 p-2.5 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-full h-full text-white" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
