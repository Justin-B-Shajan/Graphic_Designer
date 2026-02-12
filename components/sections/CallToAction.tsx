'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CallToAction() {
  const { ref, isVisible } = useScrollAnimation();

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="py-16 lg:py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative p-8 sm:p-16 rounded-3xl overflow-hidden scroll-animate ${isVisible ? 'visible' : ''}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 opacity-90" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

          <div className="relative text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let's collaborate to create stunning visuals that make your brand
              unforgettable and drive real results.
            </p>
            <Button
              onClick={handleContactClick}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 group shadow-2xl"
            >
              <span className="flex items-center gap-2 font-semibold">
                Let's Work Together
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
