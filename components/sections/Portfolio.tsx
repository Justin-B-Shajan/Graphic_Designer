'use client';

import { useState, useRef, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const categories = ['All', 'Branding', 'Posters', 'UI Design', 'Social Media'];

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

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="portfolio" ref={ref} className="py-16 lg:py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 lg:mb-16 space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 mb-4 scroll-animate ${isVisible ? 'visible' : ''}`}>
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Featured Work</span>
          </div>
          <h2 className={`text-4xl sm:text-6xl font-bold scroll-animate scroll-animate-delay-100 ${isVisible ? 'visible' : ''}`}>
            Creative{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
              Portfolio
            </span>
          </h2>
          <p className={`text-gray-400 text-lg max-w-2xl mx-auto scroll-animate scroll-animate-delay-200 ${isVisible ? 'visible' : ''}`}>
            Explore my latest design work crafted with passion and precision.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, idx) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`group relative px-6 py-2.5 rounded-full transition-all duration-300 overflow-hidden ${activeCategory === category
                ? 'text-white scale-105'
                : 'text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
                } scroll-animate scroll-animate-delay-${(idx + 3) * 100} ${isVisible ? 'visible' : ''}`}
            >
              {activeCategory === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 animate-gradient" />
              )}
              <span className="relative z-10 font-medium">{category}</span>
            </button>
          ))}
        </div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {filteredProjects.map((project, index) => {
            return (
              <div
                key={project.id}
                onClick={() => setSelectedImage({ image: project.image, title: project.title })}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={(e) => {
                  handleMouseLeave(e);
                  setHoveredCard(null);
                }}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 aspect-square scroll-animate scroll-animate-delay-${(index % 3 + 1) * 100} ${isVisible ? 'visible' : ''}`}
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.3s ease-out'
                }}
              >
                {/* Glassmorphic border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent p-[1px]">
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-xl overflow-hidden">
                    {/* Image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Animated gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-cyan-600/0 group-hover:from-purple-600/20 group-hover:via-pink-600/10 group-hover:to-cyan-600/20 transition-all duration-500" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      {/* Category badge */}
                      <div className={`mb-3 transition-all duration-300 ${hoveredCard === project.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md border border-white/20 text-white">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className={`text-xl lg:text-2xl font-bold text-white mb-2 transition-all duration-300 ${hoveredCard === project.id ? 'translate-y-0' : 'translate-y-4'
                        }`}>
                        {project.title}
                      </h3>

                      {/* View indicator */}
                      <div className={`flex items-center gap-2 text-cyan-400 text-sm font-medium transition-all duration-300 ${hoveredCard === project.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}>
                        <span>View Full Size</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state for filtered results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && typeof document !== 'undefined' && createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:rotate-90 z-10 backdrop-blur-md border border-white/10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="relative w-[95vw] h-[90vh] animate-in zoom-in-95 duration-500 cursor-zoom-out"
              onClick={() => setSelectedImage(null)}
            >
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
}
