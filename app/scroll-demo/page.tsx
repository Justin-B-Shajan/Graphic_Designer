/**
 * FullPageScrollDemo — Drop this into `app/scroll-demo/page.tsx` (or anywhere in your Next.js app).
 *
 * How to use:
 *  1. Copy this file + FullPageScroll.tsx + hooks/useFullPageScroll.ts into your project.
 *  2. Install framer-motion:  npm install framer-motion
 *  3. Customize the `sections` array below with your own content.
 */

'use client';

import FullPageScroll, { Section } from '@/components/FullPageScroll';

// ─── Section Content ──────────────────────────────────────────────────────────

function HeroSection() {
    return (
        <section className="w-full h-full bg-[#0f0f0f] flex flex-col items-center justify-center text-white px-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-6">
                Graphic Designer & Brand Strategist
            </p>
            <h1 className="text-6xl sm:text-8xl font-black leading-none tracking-tight mb-8">
                JUSTIN B{' '}
                <span className="text-[#B91C1C]">SHAJAN</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed mb-10">
                Bold design. Clear strategy. I build visual systems that demand
                attention and drive results.
            </p>
            <div className="flex gap-4">
                <a
                    href="#portfolio"
                    className="px-8 py-3 bg-[#B91C1C] text-white font-semibold rounded-sm hover:bg-[#991B1B] transition-colors"
                >
                    View Work
                </a>
                <a
                    href="#contact"
                    className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-sm hover:border-white transition-colors"
                >
                    Let's Talk
                </a>
            </div>
            {/* Scroll hint */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
                <span className="uppercase tracking-widest">Scroll</span>
                <div className="w-px h-10 bg-white/20 animate-pulse" />
            </div>
        </section>
    );
}

function WorksSection() {
    const projects = [
        { title: 'Blueberry Icecream', category: 'Branding', color: 'bg-purple-900' },
        { title: 'BMW M3 Competition', category: 'Branding', color: 'bg-zinc-900' },
        { title: 'LunaGlow Night Serum', category: 'Branding', color: 'bg-slate-900' },
        { title: 'Hot Burger Poster', category: 'Posters', color: 'bg-orange-900' },
        { title: 'FireBolt Smartwatch', category: 'UI Design', color: 'bg-cyan-900' },
        { title: 'Social Media Post', category: 'Social Media', color: 'bg-rose-900' },
    ];

    return (
        <section className="w-full h-full bg-white flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-20">
            <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-4">02 / Works</p>
            <h2 className="text-5xl sm:text-7xl font-black text-black mb-12 leading-none">
                Featured
                <br />
                <span className="text-[#B91C1C]">Projects</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {projects.map((p) => (
                    <div
                        key={p.title}
                        className={`${p.color} rounded-lg p-6 flex flex-col justify-end aspect-square group cursor-pointer hover:scale-[1.02] transition-transform`}
                    >
                        <span className="text-white/40 text-xs uppercase tracking-wider mb-1">
                            {p.category}
                        </span>
                        <span className="text-white font-bold text-sm sm:text-base leading-snug">
                            {p.title}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

function ServicesSection() {
    const services = [
        {
            no: '01',
            title: 'Brand Identity',
            desc: 'Logos, colour systems, typography, and brand guidelines that make you unforgettable.',
        },
        {
            no: '02',
            title: 'Advertising Creatives',
            desc: 'High-converting ad visuals for digital and print campaigns.',
        },
        {
            no: '03',
            title: 'Social Media Design',
            desc: 'Scroll-stopping content crafted for Instagram, LinkedIn, and beyond.',
        },
        {
            no: '04',
            title: 'UI / UX Design',
            desc: 'Clean, intuitive interfaces designed with premium aesthetics.',
        },
    ];

    return (
        <section className="w-full h-full bg-[#B91C1C] flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-20">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">03 / Services</p>
            <h2 className="text-5xl sm:text-7xl font-black text-white mb-12 leading-none">
                What I
                <br />
                Do Best
            </h2>
            <div className="space-y-6">
                {services.map((s) => (
                    <div
                        key={s.no}
                        className="flex gap-6 sm:gap-10 items-start border-b border-white/20 pb-6 group"
                    >
                        <span className="text-white/30 font-black text-2xl tabular-nums">{s.no}</span>
                        <div>
                            <h3 className="text-white font-bold text-xl sm:text-2xl mb-1 group-hover:text-white/80 transition-colors">
                                {s.title}
                            </h3>
                            <p className="text-white/60 text-sm sm:text-base max-w-lg">{s.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function AboutSection() {
    return (
        <section className="w-full h-full bg-[#111] flex flex-col lg:flex-row items-center justify-center gap-12 px-8 sm:px-16 lg:px-24 py-20">
            <div className="flex-1 max-w-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4">04 / About</p>
                <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-none">
                    Design Is
                    <br />
                    <span className="text-[#B91C1C]">Not Art.</span>
                    <br />
                    It's Strategy.
                </h2>
                <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8">
                    I'm Justin B Shajan — a graphic designer who combines strong visual
                    instincts with a strategic mindset. I don't just make things look
                    good; I make them work.
                </p>
                <div className="flex gap-8">
                    {[{ value: '50+', label: 'Projects' },
                    { value: '2+', label: 'Years Exp.' },
                    { value: '50+', label: 'Clients' },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <div className="text-3xl font-black text-white">{stat.value}</div>
                            <div className="text-white/40 text-xs uppercase tracking-wider mt-1">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#B91C1C]/20 border-2 border-[#B91C1C]/40 flex items-center justify-center text-white/10 text-9xl font-black select-none">
                JB
            </div>
        </section>
    );
}

function ContactSection() {
    return (
        <section className="w-full h-full bg-[#0f0f0f] flex flex-col items-center justify-center px-6 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-6">05 / Contact</p>
            <h2 className="text-5xl sm:text-7xl font-black text-white mb-4 leading-none">
                Let's Build
                <br />
                <span className="text-[#B91C1C]">Something.</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-md">
                Ready to elevate your brand? Drop a message and let's get started.
            </p>
            <a
                href="mailto:justinbshajan324@gmail.com"
                className="text-2xl sm:text-3xl font-bold text-white border-b-2 border-[#B91C1C] pb-1 hover:text-[#B91C1C] transition-colors"
            >
                justinbshajan324@gmail.com
            </a>
            <div className="flex gap-6 mt-10 text-white/40 text-sm">
                {[
                    { label: 'GitHub', href: 'https://github.com/Justin-B-Shajan' },
                    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/justin-b-shajan-b64935235' },
                    { label: 'Instagram', href: 'https://www.instagram.com/the_nephalem_boy/' },
                ].map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors uppercase tracking-widest"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </section>
    );
}

// ─── Sections Config ──────────────────────────────────────────────────────────

const sections: Section[] = [
    { id: 'hero', label: 'Home', content: <HeroSection /> },
    { id: 'works', label: 'Works', content: <WorksSection /> },
    { id: 'services', label: 'Services', content: <ServicesSection /> },
    { id: 'about', label: 'About', content: <AboutSection /> },
    { id: 'contact', label: 'Contact', content: <ContactSection /> },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FullPageScrollDemo() {
    return (
        <FullPageScroll
            sections={sections}
            dotPosition="right"
            duration={0.75}
            cooldown={900}
        />
    );
}
