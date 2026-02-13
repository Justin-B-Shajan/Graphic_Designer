'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import RedNavbar from '@/components/RedNavbar';
import RedHero from '@/components/sections/RedHero';

// Lazy load non-critical components
const RedTransition = dynamic(() => import('@/components/sections/RedTransition'));
const RedFeaturedWorks = dynamic(() => import('@/components/sections/RedFeaturedWorks'));
const RedAbout = dynamic(() => import('@/components/sections/RedAbout'));
const RedServices = dynamic(() => import('@/components/sections/RedServices'));
const RedMidStatement = dynamic(() => import('@/components/sections/RedMidStatement'));
const RedContact = dynamic(() => import('@/components/sections/RedContact'));
const RedFooter = dynamic(() => import('@/components/sections/RedFooter'));

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
    <main className="relative overflow-x-hidden">
      <RedNavbar scrolled={scrolled} />
      <RedHero />
      <RedTransition />
      <RedFeaturedWorks />
      <RedAbout />
      <RedServices />
      <RedMidStatement />
      <RedContact />
      <RedFooter />
    </main>
  );
}
