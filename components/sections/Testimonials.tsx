'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Working with this designer was an absolute pleasure. The brand identity they created exceeded our expectations and perfectly captured our vision.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director, BrandCo',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Exceptional creativity and attention to detail. Our social media engagement increased by 200% after implementing their designs.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder, Creative Studios',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'A true professional who understands both aesthetics and business goals. Highly recommend for any design project.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" ref={ref} className="py-16 lg:py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16 space-y-4">
          <h2 className={`text-4xl sm:text-5xl font-bold scroll-animate ${isVisible ? 'visible' : ''}`}>
            Client{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Testimonials
            </span>
          </h2>
          <p className={`text-gray-400 text-lg max-w-2xl mx-auto scroll-animate scroll-animate-delay-100 ${isVisible ? 'visible' : ''}`}>
            What my clients say about working with me.
          </p>
        </div>

        <div className="relative">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
            <div className="absolute top-8 left-8 text-purple-500/20">
              <Quote className="w-16 h-16" />
            </div>

            <div className="relative space-y-8">
              <div className="flex gap-1">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
                {currentTestimonial.text}
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/30">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-400">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'w-8 bg-gradient-to-r from-purple-600 to-cyan-600'
                  : 'w-2 bg-white/20 hover:bg-white/30'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
