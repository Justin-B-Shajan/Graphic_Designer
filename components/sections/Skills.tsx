'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skills = [
  { name: 'Photoshop', level: 95, color: 'from-blue-500 to-cyan-500' },
  { name: 'Illustrator', level: 90, color: 'from-orange-500 to-yellow-500' },
  { name: 'Figma', level: 88, color: 'from-purple-500 to-pink-500' },
  { name: 'Canva', level: 99, color: 'from-cyan-500 to-blue-500' },
  { name: 'After Effects', level: 82, color: 'from-purple-500 to-blue-500' },
  { name: 'Picsart', level: 99, color: 'from-purple-500 to-cyan-500' },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" ref={ref} className="py-16 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16 space-y-4">
          <h2 className={`text-4xl sm:text-5xl font-bold scroll-animate ${isVisible ? 'visible' : ''}`}>
            Skills &{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Tools
            </span>
          </h2>
          <p className={`text-gray-400 text-lg max-w-2xl mx-auto scroll-animate scroll-animate-delay-100 ${isVisible ? 'visible' : ''}`}>
            Proficient in industry-leading design tools and software.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 scroll-animate scroll-animate-delay-${(index % 3 + 1) * 100} ${isVisible ? 'visible' : ''}`}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">
                    {skill.name}
                  </h3>
                  <span
                    className={`text-lg font-bold bg-gradient-to-r ${skill.color} text-transparent bg-clip-text transition-all duration-300 ${hoveredSkill === skill.name
                      ? 'scale-125'
                      : 'scale-100'
                      }`}
                  >
                    {skill.level}%
                  </span>
                </div>

                <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                    }}
                  />
                </div>

                <div className="grid grid-cols-5 gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${index < Math.floor(skill.level / 20)
                        ? `bg-gradient-to-r ${skill.color}`
                        : 'bg-white/10'
                        }`}
                    />
                  ))}
                </div>
              </div>

              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
