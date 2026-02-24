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
            duration: 'Concept Project — 1 Day',
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
            duration: 'Concept Project — 1 Day',
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
            duration: 'Concept Project — 1 Day',
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
            duration: 'Concept Project — 1 Day',
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
    {
        slug: 'shape-your-body',
        title: 'Shape Your Body',
        category: 'Fitness Poster Design',
        tagline: 'Elevate your potential.',
        heroImage: '/shape_your_body.png',
        accentColor: '#ec4899',
        overview: {
            type: 'Advertising Poster',
            tools: ['Adobe Photoshop', 'Adobe Illustrator'],
            duration: 'Concept Project — 1 Day',
            role: 'Graphic Designer',
        },
        problem: `Fitness advertising often falls into clichés. The challenge was to design a high-impact promotional poster for a premium fitness club that feels modern, energetic, and high-fashion — moving away from dated gym aesthetics.`,
        objective: `Create a dynamic visual system that captures the essence of motion and transformation. The design needs to be bold enough for street billboards while maintaining a refined editorial quality.`,
        process: [
            {
                step: '01',
                title: 'Conceptualization',
                description: `Defined the core theme as "The Art of Motion". Researched modernist typography and kinetic graphic design to find a way to represent energy visually.`,
            },
            {
                step: '02',
                title: 'Visual Strategy',
                description: `Isolated high-action fitness photography and integrated it with distorted, overlaid type. Used a palette of high-contrast pinks and deep blacks to command attention.`,
            },
            {
                step: '03',
                title: 'Typography & Layout',
                description: `Experimented with large-scale cropping and layered sans-serif fonts to create a sense of depth and three-dimensionality on a flat medium.`,
            },
            {
                step: '04',
                title: 'Post-Production',
                description: `Added half-tone patterns and light leak textures to give the posters a raw, high-energy print feeling. Refined the hierarchy for clear messaging.`,
            },
        ],
        solution: `A series of high-energy fitness posters that combine kinetic typography with bold photography. The result is a premium visual identity that feels more like an editorial spread than a traditional gym advertisement.`,
        outcome: `The project successfully redefined the fitness club's visual tone, proving that bold, experimental design can effectively communicate health and transformation to a premium audience.`,
        mockups: ['/shape_your_body.png'],
    },
    {
        slug: 'lunaglow',
        title: 'LunaGlow Night Serum',
        category: 'Skincare Branding',
        tagline: 'Radiance while you sleep.',
        heroImage: '/Night serum.jpeg',
        accentColor: '#64748b',
        overview: {
            type: 'Product Branding & Identity',
            tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Lightroom'],
            duration: 'Concept Project — 1 Day',
            role: 'Brand Designer',
        },
        problem: `The skincare market is crowded with minimalist brands that often blend together. LunaGlow needed a brand identity that felt both scientifically advanced and deeply soothing — appealing to the premium self-care market.`,
        objective: `Design a cohesive brand world for 'LunaGlow' including packaging, logo identity, and art direction that evokes the peaceful radiance of moonlight.`,
        process: [
            {
                step: '01',
                title: 'Brand Persona',
                description: `Developed a brand voice that is calm, expert, and luxurious. Mapped the visual language to the concepts of "soft light" and "restoration".`,
            },
            {
                step: '02',
                title: 'Visual Identity',
                description: `Created a wordmark using a combination of a light serif and a clean geometric sans. Selected a palette of muted silvers, deep indigos, and cloud whites.`,
            },
            {
                step: '03',
                title: 'Art Direction',
                description: `Defined a photography style that uses soft, diffused light and macro textures of the serum itself to communicate fluidity and purity.`,
            },
            {
                step: '04',
                title: 'Packaging Execution',
                description: `Applied the identity to a premium glass bottle and outer carton using high-end materials like frosted glass and silver foil stamping in the mockups.`,
            },
        ],
        solution: `A soothing, premium brand identity for 'LunaGlow' that stands out through its sophisticated use of light and texture. The result is a product world that feels effective, luxurious, and calming.`,
        outcome: `The project demonstrates how a niche-focused identity can create a strong emotional narrative, positioning LunaGlow as a leader in the luxury night-care segment.`,
        mockups: ['/Night serum.jpeg'],
    },
    {
        slug: 'firebolt',
        title: 'FireBolt UI Design',
        category: 'Wearable UI Design',
        tagline: 'Precision on your wrist.',
        heroImage: '/watch.png',
        accentColor: '#3b82f6',
        overview: {
            type: 'Smartwatch Interface Design',
            tools: ['Figma', 'Adobe Illustrator', 'Protopie'],
            duration: 'Concept Project — 1 Day',
            role: 'UI Designer',
        },
        problem: `Smartwatch interfaces often struggle with information density on small screens. The challenge for FireBolt was to create a fitness-tracking interface that is readable at a glance during high-intensity activity while maintaining a premium tech aesthetic.`,
        objective: `Redesign the core workout and health tracking screens for the FireBolt smartwatch concept, focusing on high-contrast visuals and intuitive interactions.`,
        process: [
            {
                step: '01',
                title: 'Contextual Research',
                description: `Analysed user behavior during workouts to identify the "3-second read" requirement. Researched high-contrast UI patterns from performance automotive dashboards.`,
            },
            {
                step: '02',
                title: 'Interaction Design',
                description: `Designed a system of large, swipe-friendly cards and color-coded data points (heart rate, pace, distance) to reduce cognitive load during use.`,
            },
            {
                step: '03',
                title: 'Visual Styling',
                description: `Used a vibrant electric blue accent against a deep OLED black background for maximum contrast. Implemented custom iconography for fitness categories.`,
            },
            {
                step: '04',
                title: 'Prototyping',
                description: `Built high-fidelity interactions to test transitions between workout metrics and music controls, ensuring a fluid and responsive feel on the wrist.`,
            },
        ],
        solution: `A high-performance wearable UI that balances data density with immediate legibility. The FireBolt interface feels like a professional training tool while looking modern and sleek.`,
        outcome: `The design proved that wearable UI can be both visually striking and highly functional, providing a scalable design system for future smart device expansions.`,
        mockups: ['/watch.png'],
    },
    {
        slug: 'hot-burger',
        title: 'Hot Burger Poster',
        category: 'Food Advertising',
        tagline: 'Taste the heat.',
        heroImage: '/hot_burger_poster.jpeg',
        accentColor: '#ef4444',
        overview: {
            type: 'Promotional Advertising',
            tools: ['Adobe Photoshop', 'Adobe Lightroom'],
            duration: 'Concept Project — 1 Day',
            role: 'Graphic Designer',
        },
        problem: `Food advertising is highly competitive. To launch the 'Hot Burger' campaign, we needed a poster that didn't just show the product, but actually made the viewer feel the intensity of flavor and "heat" from across a room.`,
        objective: `Create a bold, appetizing promotional poster that uses dramatic lighting and color to communicate a "spicy and bold" flavor profile.`,
        process: [
            {
                step: '01',
                title: 'Art Direction',
                description: `Planned a high-drama lighting setup focusing on textures—the crispiness of the bread, the juice of the meat, and the steam—to create visceral appeal.`,
            },
            {
                step: '02',
                title: 'Color Grading',
                description: `Enhanced the reds and oranges in Lightroom to lean into the "hot" theme. Used selective saturation to make the fresh ingredients pop against the dark background.`,
            },
            {
                step: '03',
                title: 'Composition',
                description: `Used aggressive, tight cropping to put the product center stage. Added custom typography with a weathered, "sizzling" texture to reinforce the brand name.`,
            },
            {
                step: '04',
                title: 'Final Compositing',
                description: `Added subtle smoke and ember effects in Photoshop to enhance the "hot" atmosphere without distracting from the main product shot.`,
            },
        ],
        solution: `A high-contrast, visceral food poster that commands attention through dramatic lighting and a bold color palette. The burger feels present, appetizing, and powerfully flavorful.`,
        outcome: `The campaign visual successfully built instant brand recognition for 'Hot Burger', creating a high-impact template for future promotional material in the F&B sector.`,
        mockups: ['/hot_burger_poster.jpeg'],
    },
    {
        slug: 'instagram-creative',
        title: 'Instagram Creative',
        category: 'Social Media Design',
        tagline: 'Scroll-stopping engagement.',
        heroImage: '/Social media post.jpeg',
        accentColor: '#8b5cf6',
        overview: {
            type: 'Social Media Advertising',
            tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva'],
            duration: 'Concept Project — 1 Day',
            role: 'Social Media Designer',
        },
        problem: `With users scrolling rapidly, a social media post has less than a second to grab attention. The goal was to create a series of Instagram visuals that are high-impact, brand-consistent, and optimized for mobile viewing.`,
        objective: `Design a set of social media templates and custom posts that maintain a high-fashion, editorial aesthetic while being optimized for high conversion and engagement.`,
        process: [
            {
                step: '01',
                title: 'Layout Strategy',
                description: `Researched high-performing Instagram layout patterns. Focused on clear focal points and a "Rule of Thirds" approach to guide the user's eye instantly.`,
            },
            {
                step: '02',
                title: 'Visual System',
                description: `Defined a consistent use of typography and framing devices that work across different content types while allowing the individual imagery to shine.`,
            },
            {
                step: '03',
                title: 'Content Creation',
                description: `Composited high-quality lifestyle imagery with strategic text overlays. Balanced white space to ensure the posts didn't feel cluttered on small screens.`,
            },
            {
                step: '04',
                title: 'Platform Optimization',
                description: `Tested readability across various devices. Refined colors to ensure they remained vibrant and true to the brand across different screen technologies.`,
            },
        ],
        solution: `A collection of premium social media creatives that bridge the gap between high-fashion editorial and performance-driven advertising. The visuals are clean, bold, and unmistakable.`,
        outcome: `The creative system provided a significant boost in engagement metrics, proving that premium design aesthetics are a key driver for performance on social platforms.`,
        mockups: ['/Social media post.jpeg'],
    },
];

export function getCaseStudy(slug: string): CaseStudyProject | undefined {
    return caseStudies.find((cs) => cs.slug === slug);
}
