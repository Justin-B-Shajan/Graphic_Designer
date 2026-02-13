'use client';

import Marquee from '@/components/Marquee';

export default function RedFooter() {
  return (
    <footer className="relative bg-black text-white py-12 sm:py-16 overflow-hidden">
      {/* Top Marquee */}
      <div className="absolute top-0 left-0 right-0 py-3 sm:py-4 border-b border-white/10">
        <Marquee
          text="✦ LET'S CREATE SOMETHING POWERFUL TOGETHER ✦"
          speed={30}
          direction="left"
          className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-black uppercase tracking-wider"
          repeat={4}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4">JUSTIN B SHAJAN</h3>
            <p className="text-white/60 text-xs sm:text-sm">
              Strategic graphic designer creating bold brand visuals and high-converting advertising creatives.
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-white/60 text-xs sm:text-sm">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-white/60 text-xs sm:text-sm">
              <li>
                <a href="mailto:justinbshajan324@gmail.com" className="hover:text-white transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="https://github.com/Justin-B-Shajan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/justin-b-shajan-b64935235" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/the_nephalem_boy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center">
          <p className="text-white/40 text-xs sm:text-sm">
            © {new Date().getFullYear()} Justin B Shajan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
