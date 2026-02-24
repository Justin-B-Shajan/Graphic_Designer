// Central data file for all case study projects

export interface CaseStudyProject {
    slug: string;
    title: string;
    category: string;
    tagline: string;
    heroImage: string;
    overview: {
        type: string;
        tools: string[];
        duration: string;
        role: string;
    };
    problem: string;
    objective: string;
    process: {
        step: string;
        title: string;
        description: string;
    }[];
    solution: string;
    outcome: string;
    mockups: string[];
    accentColor: string;
}

export const caseStudies: CaseStudyProject[] = [
    {
        slug: 'bmw-m3',
        title: 'BMW M3 Competition',
        category: 'Automotive Branding',
        tagline: 'Power, Precision, Presence.',
        heroImage: '/BMW_branding.jpeg',
        accentColor: '#1a56db',
        overview: {
            type: 'Brand Visual Campaign',
            tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Lightroom'],
            duration: 'Concept Project — 5 Days',
            role: 'Graphic Designer',
        },
        problem: `BMW's M3 Competition is one of the most iconic performance sedans in automotive history. The challenge was to create a brand visual campaign that communicates raw power and German engineering precision — without relying on technical copy. The design needed to speak to enthusiasts and lifestyle buyers alike.`,
        objective: `Craft an editorial-style visual system that elevates the M3 Competition beyond a car advertisement — making it feel like a luxury lifestyle statement. Every frame should feel like it belongs in a premium automotive magazine.`,
        process: [
            {
                step: '01',
                title: 'Research & Moodboarding',
                description: `Analysed BMW M Division's existing brand language, competitor luxury automotive campaigns (Porsche, Mercedes-AMG), and high-fashion editorial photography to establish a visual tone.`,
            },
            {
                step: '02',
                title: 'Concept Development',
                description: `Explored three directions: cinematic dark studio, urban night racing, and minimal architectural contrast. The dark studio + motion blur direction was selected for maximum premium impact.`,
            },
            {
                step: '03',
                title: 'Composition & Typography',
                description: `Placed the M3 against deep-black environments with selective colour grading on the signature M-stripe accents. Bold, condensed sans-serif typography reinforces the performance narrative.`,
            },
            {
                step: '04',
                title: 'Final Refinement',
                description: `Applied chromatic aberration, grain texture, and vignetting for a cinematic finish. Colour graded for both print and digital use cases.`,
            },
        ],
        solution: `A dark, cinematic visual campaign featuring the BMW M3 Competition in high-contrast studio compositions. The result is a series of editorial frames that feel premium, aspirational, and unmistakably BMW — built to stop the scroll and demand attention.`,
        outcome: `The campaign concept demonstrates how automotive branding can transcend product photography to become visual storytelling — a replicable framework for any performance vehicle launch.`,
        mockups: ['/BMW_branding.jpeg'],
    },
    {
        slug: 'perfume-branding',
        title: 'Perfume Branding',
        category: 'Luxury Product Branding',
        tagline: 'Scent made visible.',
        heroImage: '/PERFUME.jpeg',
        accentColor: '#b45309',
        overview: {
            type: 'Product Brand Identity',
            tools: ['Adobe Photoshop', 'Adobe Illustrator', 'After Effects'],
            duration: 'Concept Project — 4 Days',
            role: 'Brand Designer',
        },
        problem: `Fragrance is an invisible product — you can't see or touch a scent in a visual medium. The design challenge was to communicate the sensory experience of a luxury perfume purely through visual language: colour, texture, form, and light.`,
        objective: `Build a premium brand identity for a fictional luxury fragrance that feels exclusive, sensory, and shelf-worthy. The visual system should translate the olfactory experience into a design language that commands presence both digitally and in retail.`,
        process: [
            {
                step: '01',
                title: 'Sensory Mapping',
                description: `Mapped the fragrance's scent profile (warm amber, oud, vanilla) to a visual palette: deep golds, burnt sienna, and rich blacks — colours that evoke warmth, depth, and exclusivity.`,
            },
            {
                step: '02',
                title: 'Identity Architecture',
                description: `Developed the wordmark in a refined serif typeface with custom letterspacing. The bottle silhouette was used as a graphic device across all touchpoints.`,
            },
            {
                step: '03',
                title: 'Art Direction',
                description: `Shot-style compositions using macro textures (velvet, gold leaf, raw mineral) as backgrounds to create luxurious, tactile digital visuals. Light was treated as a design element.`,
            },
            {
                step: '04',
                title: 'Brand System',
                description: `Extended the identity into a packaging mockup, social media templates, and a product poster — ensuring consistency from shelf to screen.`,
            },
        ],
        solution: `A complete luxury brand identity for a premium fragrance — featuring a refined visual language of deep golds, rich blacks, and warm textures. The brand feels handcrafted and exclusive without losing modern clarity.`,
        outcome: `The identity system demonstrates how luxury product branding can bridge sensory experience and visual design, creating a coherent and aspirational brand world that speaks before the product does.`,
        mockups: ['/PERFUME.jpeg', '/Night serum.jpeg'],
    },
    {
        slug: 'realme',
        title: 'Realme UI Design',
        category: 'UI / UX Design',
        tagline: 'Intuitive. Bold. Real.',
        heroImage: '/realme.jpeg',
        accentColor: '#059669',
        overview: {
            type: 'Mobile UI Concept',
            tools: ['Figma', 'Adobe Photoshop', 'Illustrator'],
            duration: 'Concept Project — 6 Days',
            role: 'UI/UX Designer',
        },
        problem: `Realme's brand is energetic, youthful, and tech-forward — but their default UI design language often felt generic and underdesigned. The opportunity was to create a UI concept that reflects the brand's boldness while remaining clean, usable, and premium.`,
        objective: `Redesign key UI screens for a Realme smartphone concept — delivering a visual system that feels premium and cohesive, with Realme's signature energy baked into every interaction.`,
        process: [
            {
                step: '01',
                title: 'Brand Audit & Benchmarking',
                description: `Reviewed Realme's existing Realme UI, compared with OnePlus OxygenOS, Nothing OS, and MIUI for design quality benchmarks. Identified gaps in typography, iconography, and spacing.`,
            },
            {
                step: '02',
                title: 'Design System Setup',
                description: `Established a 4pt grid, a dual-tone palette (Realme yellow + deep neutral), Inter typeface for system UI, and a custom icon set with rounded geometry.`,
            },
            {
                step: '03',
                title: 'Screen Design',
                description: `Designed home screen, quick settings panel, notification drawer, and app icon grid. Balanced density with breathing room to prevent cognitive overload.`,
            },
            {
                step: '04',
                title: 'Micro-interactions',
                description: `Defined swipe gestures, tap responses, and transition principles — ensuring the UI felt responsive and satisfying without unnecessary flair.`,
            },
        ],
        solution: `A bold, clean UI concept for Realme smartphones featuring a refined design system with consistent spacing, deliberate typography, and a high-energy yet premium visual tone — a significant step up from the device's stock interface.`,
        outcome: `The concept validates how a considered UI redesign can dramatically improve brand perception — showing that Realme's youthful energy and premium build quality can coexist in the software experience.`,
        mockups: ['/realme.jpeg', '/watch.png'],
    },
    {
        slug: 'blueberry-icecream',
        title: 'Blueberry Ice Cream',
        category: 'FMCG Brand Identity',
        tagline: 'Sweet. Bold. Irresistible.',
        heroImage: '/Blueberry Icecream.jpeg',
        accentColor: '#7c3aed',
        overview: {
            type: 'Food & Beverage Branding',
            tools: ['Adobe Illustrator', 'Adobe Photoshop', 'InDesign'],
            duration: 'Concept Project — 3 Days',
            role: 'Brand & Packaging Designer',
        },
        problem: `The FMCG ice cream category is saturated — brands compete on colour, personality, and instant shelf appeal. A new blueberry ice cream product needed a brand identity that stood out from generic supermarket packaging and built an emotional connection with consumers from first glance.`,
        objective: `Create a vibrant, personality-driven brand identity and packaging concept for a premium blueberry ice cream product — one that feels indulgent, fresh, and distinctive on a crowded freezer shelf.`,
        process: [
            {
                step: '01',
                title: 'Market Research',
                description: `Analysed competing ice cream brands (Ben & Jerry's, Häagen-Dazs, Magnum) across packaging design, colour language, and typography. Identified white space in the "bold fruit" segment.`,
            },
            {
                step: '02',
                title: 'Identity Design',
                description: `Developed a playful-but-premium brand persona built around deep purple and electric blue from the blueberry palette. Custom lettering with a scoop-inspired curve in the logo.`,
            },
            {
                step: '03',
                title: 'Packaging Concept',
                description: `Designed a pint container and bar wrapper. Used a layered illustration style — whole blueberries, cream swirls, and botanical elements — to communicate naturalness and indulgence together.`,
            },
            {
                step: '04',
                title: 'Photography & Mockup',
                description: `Composited the packaging design onto realistic product mockups, using dramatic overhead lighting and fresh fruit props for an editorial food photography feel.`,
            },
        ],
        solution: `A bold, fruit-forward brand identity and packaging concept for a premium blueberry ice cream product — rich in personality, vibrant in colour, and premium in execution. The result is a freezer shelf-ready identity that earns attention without shouting.`,
        outcome: `The project proves that FMCG branding doesn't need to choose between playful and premium — with the right visual system, a product can occupy both spaces and appeal to modern, design-aware consumers.`,
        mockups: ['/Blueberry Icecream.jpeg', '/hot_burger_poster.jpeg'],
    },
];

export function getCaseStudy(slug: string): CaseStudyProject | undefined {
    return caseStudies.find((cs) => cs.slug === slug);
}
