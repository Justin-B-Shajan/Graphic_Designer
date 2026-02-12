'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import Navbar from '@/components/Navbar';
import DarkVeil from '@/components/DarkVeil';

// Lazy load non-critical components
const Services = dynamic(() => import('@/components/sections/Services'));
const Portfolio = dynamic(() => import('@/components/sections/Portfolio'));
const About = dynamic(() => import('@/components/sections/About'));
const Skills = dynamic(() => import('@/components/sections/Skills'));
const CallToAction = dynamic(() => import('@/components/sections/CallToAction'));
const Contact = dynamic(() => import('@/components/sections/Contact'));
const Footer = dynamic(() => import('@/components/sections/Footer'));

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative bg-[#0a0a0f] text-white overflow-x-hidden">
      <div className="fixed inset-0 z-0 opacity-40">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />
      </div>

      <div className="relative z-10">
        <Navbar scrolled={scrolled} />
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Skills />
        <CallToAction />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
