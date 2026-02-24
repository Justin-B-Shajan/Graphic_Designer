'use client';

import FadeUp from './FadeUp';

interface OverviewProps {
    type: string;
    tools: string[];
    duration: string;
    role: string;
    accentColor: string;
}

export default function CaseStudyOverview({
    type,
    tools,
    duration,
    role,
    accentColor,
}: OverviewProps) {
    const items = [
        { label: 'Project Type', value: type },
        { label: 'My Role', value: role },
        { label: 'Duration', value: duration },
        { label: 'Tools Used', value: tools.join(' · ') },
    ];

    return (
        <section className="bg-white dark:bg-[#0f0f0f] border-b border-black/10 dark:border-white/10 py-12 px-6 sm:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                {items.map((item, i) => (
                    <FadeUp key={item.label} delay={i * 0.08}>
                        <p className="text-xs uppercase tracking-widest text-black/40 dark:text-white/40 mb-2">
                            {item.label}
                        </p>
                        <p
                            className="text-sm sm:text-base font-semibold text-black dark:text-white leading-snug"
                            style={{ borderLeft: `2px solid ${accentColor}`, paddingLeft: '10px' }}
                        >
                            {item.value}
                        </p>
                    </FadeUp>
                ))}
            </div>
        </section>
    );
}
