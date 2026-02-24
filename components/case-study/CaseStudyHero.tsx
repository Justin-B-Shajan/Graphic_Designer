'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface CaseStudyHeroProps {
    title: string;
    category: string;
    tagline: string;
    heroImage: string;
    accentColor: string;
}

export default function CaseStudyHero({
    title,
    category,
    tagline,
    heroImage,
    accentColor,
}: CaseStudyHeroProps) {
    return (
        <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black">
            {/* Hero Image */}
            <Image
                src={heroImage}
                alt={title}
                fill
                priority
                className="object-cover opacity-50"
                sizes="100vw"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />

            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute top-8 left-6 sm:left-10 z-20"
            >
                <Link
                    href="/#portfolio"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium uppercase tracking-widest transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Portfolio
                </Link>
            </motion.div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end px-6 sm:px-12 lg:px-20 pb-16 z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xs uppercase tracking-[0.3em] mb-4 font-medium"
                    style={{ color: accentColor }}
                >
                    {category}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-6 max-w-4xl"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                    className="text-lg sm:text-2xl text-white/60 font-light max-w-2xl"
                >
                    {tagline}
                </motion.p>
            </div>

            {/* Scroll hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/30 text-xs"
            >
                <span className="uppercase tracking-widest rotate-90 origin-center">Scroll</span>
                <div className="w-px h-12 bg-white/20 animate-pulse mt-2" />
            </motion.div>
        </section>
    );
}
