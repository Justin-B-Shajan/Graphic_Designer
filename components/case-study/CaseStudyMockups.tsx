'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeUp from './FadeUp';

interface CaseStudyMockupsProps {
    mockups: string[];
    title: string;
    accentColor: string;
}

export default function CaseStudyMockups({
    mockups,
    title,
    accentColor,
}: CaseStudyMockupsProps) {
    return (
        <section className="bg-[#0a0a0a] py-20 sm:py-28 px-6 sm:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto">
                <FadeUp>
                    <p
                        className="text-xs uppercase tracking-[0.3em] font-semibold mb-4"
                        style={{ color: accentColor }}
                    >
                        Visual Mockups
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-black text-white leading-none mb-12 tracking-tight">
                        Final Deliverables
                    </h2>
                </FadeUp>

                <div
                    className={`grid gap-4 sm:gap-6 ${mockups.length === 1
                            ? 'grid-cols-1'
                            : mockups.length === 2
                                ? 'grid-cols-1 sm:grid-cols-2'
                                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                        }`}
                >
                    {mockups.map((src, i) => (
                        <FadeUp key={src} delay={i * 0.1}>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className={`relative overflow-hidden rounded-lg bg-[#111] ${i === 0 && mockups.length > 2 ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                                    }`}
                            >
                                <Image
                                    src={src}
                                    alt={`${title} mockup ${i + 1}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {/* Subtle hover overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    className="absolute inset-0 bg-white/5 transition-opacity duration-300"
                                />
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}
