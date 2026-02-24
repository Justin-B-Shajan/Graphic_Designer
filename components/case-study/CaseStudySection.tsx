'use client';

import { ReactNode } from 'react';
import FadeUp from './FadeUp';

interface CaseStudySectionProps {
    label: string;
    title: string;
    children: ReactNode;
    accentColor: string;
    /** Light background variant */
    light?: boolean;
}

export default function CaseStudySection({
    label,
    title,
    children,
    accentColor,
    light = false,
}: CaseStudySectionProps) {
    return (
        <section
            className={`py-20 sm:py-28 px-6 sm:px-12 lg:px-20 ${light
                    ? 'bg-[#f8f8f8] dark:bg-[#111]'
                    : 'bg-white dark:bg-[#0f0f0f]'
                }`}
        >
            <div className="max-w-4xl mx-auto">
                <FadeUp>
                    <p
                        className="text-xs uppercase tracking-[0.3em] font-semibold mb-4"
                        style={{ color: accentColor }}
                    >
                        {label}
                    </p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black dark:text-white leading-none mb-10 tracking-tight">
                        {title}
                    </h2>
                </FadeUp>
                <FadeUp delay={0.1}>{children}</FadeUp>
            </div>
        </section>
    );
}
