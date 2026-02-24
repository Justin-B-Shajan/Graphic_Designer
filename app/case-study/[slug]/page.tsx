import { notFound } from 'next/navigation';
import { getCaseStudy, caseStudies } from '@/app/case-study/data';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import CaseStudyOverview from '@/components/case-study/CaseStudyOverview';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import CaseStudyMockups from '@/components/case-study/CaseStudyMockups';
import FadeUp from '@/components/case-study/FadeUp';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

// ─── Static Params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
    return caseStudies.map((cs) => ({ slug: cs.slug }));
}

// ─── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const project = getCaseStudy(params.slug);
    if (!project) return {};
    return {
        title: `${project.title} — Case Study`,
        description: project.problem.slice(0, 155),
        openGraph: {
            title: `${project.title} | Justin B Shajan`,
            description: project.problem.slice(0, 155),
            images: [{ url: project.heroImage }],
        },
    };
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function CaseStudyPage({
    params,
}: {
    params: { slug: string };
}) {
    const project = getCaseStudy(params.slug);
    if (!project) notFound();

    const { accentColor } = project;

    // Find adjacent projects for next/prev navigation
    const currentIdx = caseStudies.findIndex((cs) => cs.slug === project.slug);
    const nextProject = caseStudies[(currentIdx + 1) % caseStudies.length];

    return (
        <main className="bg-white dark:bg-[#0f0f0f] overflow-x-hidden">
            {/* 1. Hero */}
            <CaseStudyHero
                title={project.title}
                category={project.category}
                tagline={project.tagline}
                heroImage={project.heroImage}
                accentColor={accentColor}
            />

            {/* 2. Overview */}
            <CaseStudyOverview
                type={project.overview.type}
                tools={project.overview.tools}
                duration={project.overview.duration}
                role={project.overview.role}
                accentColor={accentColor}
            />

            {/* 3. Problem & Objective */}
            <CaseStudySection label="01 — Challenge" title="The Problem" accentColor={accentColor}>
                <p className="text-lg sm:text-xl text-black/70 dark:text-white/70 leading-relaxed mb-8">
                    {project.problem}
                </p>
                <div
                    className="border-l-4 pl-6 py-2"
                    style={{ borderColor: accentColor }}
                >
                    <p className="text-sm uppercase tracking-widest text-black/40 dark:text-white/40 mb-2">
                        Objective
                    </p>
                    <p className="text-base sm:text-lg text-black/80 dark:text-white/80 leading-relaxed font-medium">
                        {project.objective}
                    </p>
                </div>
            </CaseStudySection>

            {/* 4. Design Process */}
            <CaseStudySection
                label="02 — Process"
                title="Design Process"
                accentColor={accentColor}
                light
            >
                <div className="space-y-10">
                    {project.process.map((step, i) => (
                        <FadeUp key={step.step} delay={i * 0.1}>
                            <div className="flex gap-6 sm:gap-10 items-start group">
                                <span
                                    className="text-3xl sm:text-4xl font-black leading-none tabular-nums flex-shrink-0"
                                    style={{ color: accentColor, opacity: 0.4 }}
                                >
                                    {step.step}
                                </span>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-[#B91C1C] transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-base text-black/65 dark:text-white/65 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                            {i < project.process.length - 1 && (
                                <div className="mt-10 ml-[52px] sm:ml-[84px] h-px bg-black/10 dark:bg-white/10" />
                            )}
                        </FadeUp>
                    ))}
                </div>
            </CaseStudySection>

            {/* 5. Final Solution */}
            <CaseStudySection label="03 — Result" title="The Solution" accentColor={accentColor}>
                <p className="text-lg sm:text-xl text-black/70 dark:text-white/70 leading-relaxed mb-12">
                    {project.solution}
                </p>

                {/* Outcome callout */}
                <div
                    className="rounded-lg p-8 sm:p-10"
                    style={{ backgroundColor: `${accentColor}12`, border: `1px solid ${accentColor}30` }}
                >
                    <p className="text-xs uppercase tracking-widest mb-3" style={{ color: accentColor }}>
                        Key Takeaway
                    </p>
                    <p className="text-base sm:text-lg text-black/80 dark:text-white/80 leading-relaxed">
                        {project.outcome}
                    </p>
                </div>
            </CaseStudySection>

            {/* 6. Visual Mockups */}
            <CaseStudyMockups
                mockups={project.mockups}
                title={project.title}
                accentColor={accentColor}
            />

            {/* 7. Next Project */}
            <section className="bg-[#B91C1C] py-20 sm:py-28 px-6 sm:px-12 lg:px-20">
                <FadeUp>
                    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                        <div>
                            <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Next Project</p>
                            <h3 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                                {nextProject.title}
                            </h3>
                            <p className="text-white/60 mt-2 text-sm">{nextProject.category}</p>
                        </div>
                        <Link
                            href={`/case-study/${nextProject.slug}`}
                            className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-white/90 transition-all duration-300 hover:gap-5 rounded-sm"
                        >
                            View Case Study
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </FadeUp>
            </section>

            {/* Footer strip */}
            <div className="bg-black py-6 px-6 sm:px-12 lg:px-20 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                >
                    ← Back to Portfolio
                </Link>
                <p className="text-white/30 text-xs">Justin B Shajan © {new Date().getFullYear()}</p>
            </div>
        </main>
    );
}
