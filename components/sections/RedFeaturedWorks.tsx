'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Marquee from '@/components/Marquee';

const projects = [
  {
    id: 1,
    title: 'Blueberry Icecream',
    category: 'Branding',
    image: '/Blueberry Icecream.jpeg',
  },
  {
    id: 2,
    title: 'Shape Your Body',
    category: 'Posters',
    image: '/shape_your_body.png',
  },
  {
    id: 3,
    title: 'Perfume Branding',
    category: 'Branding',
    image: '/PERFUME.jpeg',
  },
  {
    id: 4,
    title: 'BMW M3 Competition',
    category: 'Branding',
    image: '/BMW_branding.jpeg',
  },
  {
    id: 5,
    title: 'LunaGlow Night Serum',
    category: 'Branding',
    image: '/Night serum.jpeg',
  },
  {
    id: 6,
    title: 'Realme',
    category: 'UI Design',
    image: '/realme.jpeg',
  },
  {
    id: 7,
    title: 'FireBolt',
    category: 'UI Design',
    image: '/watch.png',
  },
  {
    id: 8,
    title: 'Hot Burger Poster',
    category: 'Posters',
    image: '/hot_burger_poster.jpeg',
  },
  {
    id: 9,
    title: 'Instagram Post',
    category: 'Social Media',
    image: '/Social media post.jpeg',
  },
];

export default function RedFeaturedWorks() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="portfolio" ref={ref} className="relative">
      {/* Image Marquee Section */}
      <div className="bg-white py-8 sm:py-12 overflow-hidden">
        <div
          className="flex gap-4 sm:gap-6 animate-marquee-left"
          style={{ animationDuration: '40s' }}
        >
          {projects.map((project) => (
            <div
              key={`marquee-${project.id}`}
              className="flex-shrink-0 w-48 sm:w-64 md:w-80 h-36 sm:h-48 md:h-64 rounded-lg overflow-hidden shadow-lg group"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={320}
                height={256}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
          {projects.map((project) => (
            <div
              key={`marquee-dup-${project.id}`}
              className="flex-shrink-0 w-48 sm:w-64 md:w-80 h-36 sm:h-48 md:h-64 rounded-lg overflow-hidden shadow-lg group"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={320}
                height={256}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Section 1: White Background */}
      <div className="bg-white py-16 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Featured Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {projects.slice(0, 6).map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gray-100 group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                </div>
                <div className="mt-3 sm:mt-4">
                  <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-black mt-1 group-hover:text-[#B91C1C] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Red Background - Featured Project */}
      <div className="bg-[#B91C1C] py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 py-4 hidden sm:block">
          <Marquee
            text="✦ FEATURED PROJECT ✦ PREMIUM DESIGN ✦"
            speed={25}
            direction="left"
            className="text-white/10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider"
            repeat={4}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <p className="text-white/80 uppercase tracking-wider text-xs sm:text-sm">
                Featured Project
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                {projects[3].title}
              </h2>
              <p className="text-white/90 text-base sm:text-lg">
                A powerful brand identity that captures attention and drives engagement.
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl group order-1 lg:order-2">
              <Image
                src={projects[3].image}
                alt={projects[3].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: White Background - More Projects */}
      <div className="bg-white py-16 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {projects.slice(6).map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-700`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gray-100 group-hover:shadow-xl transition-all duration-500">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                </div>
                <div className="mt-3 sm:mt-4">
                  <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-black mt-1 group-hover:text-[#B91C1C] transition-colors">
                    {project.title}
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
