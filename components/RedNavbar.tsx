'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface RedNavbarProps {
  scrolled: boolean;
}

export default function RedNavbar({ scrolled }: RedNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Work', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#B91C1C]/95 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavClick('#home')}
            className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-white uppercase tracking-wider hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            JUSTIN B SHAJAN
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-white/90 hover:text-white font-medium uppercase tracking-wider text-sm underline-hover transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="px-6 py-2 border-2 border-white text-white font-semibold text-sm rounded-sm hover:bg-white/10 transition-all duration-300"
            >
              Let's Work Together
            </button>
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
        <div className="md:hidden bg-[#B91C1C]/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-white/90 hover:text-white transition-colors duration-200 py-2 uppercase tracking-wider text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full px-6 py-3 border-2 border-white text-white font-semibold text-sm rounded-sm hover:bg-white/10 transition-all duration-300"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
