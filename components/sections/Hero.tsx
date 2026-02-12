'use client';

import { ArrowRight, Download, Sparkles, Target, Zap, Heart, MousePointer2 } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const toolLogos = [
  { name: 'Canva', image: '/images/logos/canva.png', gradient: 'from-[#00C4CC] to-[#7d2ae8]', delay: '0s' },
  { name: 'Figma', image: '/images/logos/figma.png', gradient: 'from-[#F24E1E] via-[#A259FF] to-[#1ABCFE]', delay: '-4s' },
  { name: 'Photoshop', image: '/images/logos/photoshop.png', gradient: 'from-[#31A8FF] to-[#001E36]', delay: '-8s' },
  { name: 'Picsart', image: '/images/logos/picsart.png', gradient: 'from-[#FF3D77] via-[#9C27B0] to-[#2196F3]', delay: '-12s' },
  { name: 'CapCut', image: '/images/logos/capcut.png', gradient: 'from-[#000000] to-[#000000]', delay: '-16s' },
];

export default function Hero() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-12 lg:py-32 relative overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side */}
          <div className="space-y-8 animate-fade-in order-1 lg:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-purple-300 text-xs font-medium uppercase tracking-wider">
                  Available for Immediate Joining
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-purple-400/80 font-medium tracking-[0.2em] uppercase text-sm block ml-1 text-center lg:text-left">
                  Design Lead & Creative
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[0.9] tracking-wider text-white whitespace-nowrap">
                  JUSTIN B{' '}
                  <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text animate-gradient pb-2 inline-block">
                    SHAJAN
                  </span>
                </h1>
              </div>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {[
                  { label: 'Branding', icon: Sparkles, color: 'text-purple-400', bg: 'bg-purple-500/5', border: 'border-purple-500/10' },
                  { label: 'Posters', icon: Target, color: 'text-cyan-400', bg: 'bg-cyan-500/5', border: 'border-cyan-400/20' },
                  { label: 'Digital Creatives', icon: Zap, color: 'text-blue-400', bg: 'bg-blue-500/5', border: 'border-blue-400/20' },
                  { label: 'UI Design', icon: Heart, color: 'text-purple-400', bg: 'bg-purple-500/5', border: 'border-purple-500/10' },
                ].map((skill, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 px-4 py-2 rounded-2xl ${skill.bg} ${skill.border} border backdrop-blur-sm hover:border-white/20 transition-all duration-300 cursor-default group`}
                  >
                    <skill.icon className={`w-4 h-4 ${skill.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed font-light mx-auto lg:mx-0">
                Crafting <span className="text-white font-normal underline decoration-purple-500/50 underline-offset-4">iconic visual identities</span> and
                digital experiences that define industry leaders and inspire audiences worldwide.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 justify-center lg:justify-start">
              <Button
                onClick={() => handleNavClick('#portfolio')}
                size="lg"
                className="h-12 sm:h-14 px-6 sm:px-8 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white rounded-xl sm:rounded-2xl group relative overflow-hidden shadow-xl shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2 font-semibold text-sm sm:text-base">
                  View Portfolio
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                onClick={() => handleNavClick('#contact')}
                size="lg"
                variant="outline"
                className="h-12 sm:h-14 px-6 sm:px-8 border-white/10 hover:border-purple-500/50 text-white rounded-xl sm:rounded-2xl backdrop-blur-xl bg-white/5 group transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 shadow-xl"
              >
                <span className="flex items-center gap-2 font-medium text-sm sm:text-base">
                  Let's Talk
                  <div className="w-2 h-2 rounded-full bg-green-400 group-hover:animate-ping" />
                </span>
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex items-center justify-center lg:mt-0 mt-32 mb-10 lg:mb-0 order-2 lg:order-2">
            <div className="relative w-full aspect-square max-w-[320px] sm:max-w-[500px] lg:max-w-[700px] animate-float">
              {/* Background Glows */}
              <div className="absolute top-1/4 right-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-purple-600/20 rounded-full blur-[80px] sm:blur-[100px] animate-pulse" />
              <div className="absolute bottom-1/4 left-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-cyan-500/20 rounded-full blur-[80px] sm:blur-[100px] animate-pulse animation-delay-2000" />

              {/* Orbital Ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] border-2 border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
              </div>

              {/* Central Image Containers */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[230px] h-[230px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] transition-transform duration-700 hover:scale-105">
                  {/* Outer Purple Box */}
                  <div className="absolute inset-0 border-2 border-purple-500/30 rounded-[1.5rem] sm:rounded-[2.5rem] backdrop-blur-md bg-white/5 rotate-6 hover:rotate-12 transition-transform duration-500" />

                  {/* Inner Cyan Box with Image */}
                  <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-[1.5rem] sm:rounded-[2.5rem] backdrop-blur-md bg-white/5 -rotate-6 hover:-rotate-12 transition-transform duration-500 overflow-hidden">
                    {/* Hero Image */}
                    <Image
                      src="/images/hero-image.png"
                      alt="Hero Design"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 640px) 230px, (max-width: 1024px) 350px, 450px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Orbital Icons */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {toolLogos.map((tool, index) => (
                  <div
                    key={index}
                    className="absolute w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 animate-orbit-slow group pointer-events-auto"
                    style={{ animationDelay: tool.delay }}
                  >
                    <div className={`w-full h-full rounded-xl sm:rounded-2xl bg-gradient-to-br ${tool.gradient} p-[1px] shadow-lg shadow-black/50 hover:scale-125 transition-transform duration-300`}>
                      <div className="w-full h-full rounded-xl sm:rounded-2xl bg-[#0a0a0f]/80 backdrop-blur-xl flex items-center justify-center relative overflow-hidden group-hover:bg-[#0a0a0f]/40 transition-colors p-2">
                        <div className="relative w-full h-full animate-counter-orbit-slow">
                          <Image
                            src={tool.image}
                            alt={tool.name}
                            fill
                            className="object-contain relative z-10"
                            sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 80px"
                          />
                        </div>
                        <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-20`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}