'use client';

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFullPageScroll } from '@/hooks/useFullPageScroll';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Section {
    id: string;
    label: string;
    content: ReactNode;
}

interface FullPageScrollProps {
    sections: Section[];
    /** Dot indicator position. Defaults to 'right'. Pass null to hide. */
    dotPosition?: 'left' | 'right' | null;
    /** Transition duration in seconds */
    duration?: number;
    /** Cooldown between slides in ms */
    cooldown?: number;
}

// ─── Animation Variants ────────────────────────────────────────────────────────

/**
 * Cover transition: the incoming section slides OVER the current one.
 * direction =  1 → scrolling down: new section enters from bottom
 * direction = -1 → scrolling up:   new section enters from top
 */
const variants = {
    enter: (direction: number) => ({
        y: direction > 0 ? '100%' : '-100%',
        zIndex: 2,
    }),
    center: {
        y: 0,
        zIndex: 2,
        transition: { duration: 0 }, // instant after animation completes
    },
    exit: {
        y: 0,
        zIndex: 1,
        transition: { duration: 0 },
    },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function FullPageScroll({
    sections,
    dotPosition = 'right',
    duration = 0.75,
    cooldown = 900,
}: FullPageScrollProps) {
    const { currentIndex, direction, goTo } = useFullPageScroll({
        totalSections: sections.length,
        cooldown,
    });

    const currentSection = sections[currentIndex];

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* ── Sections ── */}
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                    key={currentSection.id}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate={{ y: 0, zIndex: 2 }}
                    exit="exit"
                    transition={{
                        y: {
                            type: 'tween',
                            ease: [0.76, 0, 0.24, 1], // smooth cubic bezier
                            duration,
                        },
                    }}
                    className="absolute inset-0 w-full h-full"
                    aria-label={currentSection.label}
                >
                    {currentSection.content}
                </motion.div>
            </AnimatePresence>

            {/* ── Dot Navigation ── */}
            {dotPosition && (
                <nav
                    aria-label="Scroll navigation"
                    className={`fixed top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 ${dotPosition === 'right' ? 'right-6' : 'left-6'
                        }`}
                >
                    {sections.map((section, i) => (
                        <button
                            key={section.id}
                            onClick={() => goTo(i)}
                            aria-label={`Go to ${section.label}`}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border-2 ${i === currentIndex
                                    ? 'bg-white border-white scale-125'
                                    : 'bg-transparent border-white/60 hover:border-white hover:scale-110'
                                }`}
                        />
                    ))}
                </nav>
            )}

            {/* ── Progress Bar ── */}
            <div className="fixed bottom-0 left-0 z-50 h-0.5 bg-white/20 w-full">
                <motion.div
                    className="h-full bg-white"
                    animate={{
                        width: `${((currentIndex + 1) / sections.length) * 100}%`,
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
            </div>
        </div>
    );
}
