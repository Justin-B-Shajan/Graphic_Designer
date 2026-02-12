'use client';

import { Sparkles, Github, Linkedin, Twitter, Instagram, Dribbble, Globe } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Justin-B-Shajan', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/justin-b-shajan-b64935235', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/the_nephalem_boy/', label: 'Instagram' },
  { icon: Globe, href: 'https://justin-b-shajan-portfolio-by91og2f0.vercel.app', label: 'Website' },
];


const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-20 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="relative">
                <Sparkles className="w-8 h-8 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
                <div className="absolute inset-0 bg-purple-400/20 blur-xl group-hover:bg-cyan-400/20 transition-colors duration-300" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text uppercase tracking-wider">
                JUSTIN B SHAJAN
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Transforming ideas into stunning visual experiences. Creating
              memorable designs that elevate brands and captivate audiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 flex items-center justify-center group transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Brand Identity</li>
              <li className="text-gray-400">Poster Design</li>
              <li className="text-gray-400">UI/UX Design</li>
              <li className="text-gray-400">Digital Marketing</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Justin B Shajan. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
