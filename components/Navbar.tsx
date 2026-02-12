'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import GooeyNav from './GooeyNav';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-black/40 backdrop-blur-xl border-b border-white/10'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer -ml-8 translate-y-2" onClick={() => handleNavClick('#home')}>
            <div className="relative w-32 h-32">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text uppercase tracking-wider">
              JUSTIN B SHAJAN
            </span> */}
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <GooeyNav
              items={navItems}
              onItemClick={handleNavClick}
              colors={[400, 500, 600]} // This is a bit arbitrary, but let's see. 
            // Actually, looking at GooeyNav.css, it expects --color-1, --color-2 etc.
            />
            <Button
              onClick={() => handleNavClick('#contact')}
              className="relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 overflow-hidden group"
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick('#contact')}
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
            >
              Hire Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
