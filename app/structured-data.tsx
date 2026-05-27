import React from 'react';

export default function StructuredData() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Justin B Shajan | Best Graphic Designer & Digital Marketer Portfolio',
    'url': 'https://justinbshajan.com',
    'description': 'Official portfolio of Justin B Shajan, displaying brand identity, advertising, poster design, and UI/UX work.',
  };

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Justin B Shajan',
    'url': 'https://justinbshajan.com',
    'image': 'https://justinbshajan.com/heroImg.png',
    'email': 'justinbshajan324@gmail.com',
    'jobTitle': ['Graphic Designer', 'Digital Marketer'],
    'sameAs': [
      'https://github.com/Justin-B-Shajan',
      'https://www.linkedin.com/in/justin-b-shajan-b64935235',
      'https://www.instagram.com/the_nephalem_boy/',
    ],
    'description': 'Justin B Shajan is a professional graphic designer, brand strategist, and digital marketer specializing in high-converting ads, brand identity, and UI design.',
    'knowsAbout': [
      'Graphic Design',
      'Digital Marketing',
      'Brand Identity Development',
      'Poster Design',
      'Social Media Ads',
      'UI/UX Design',
      'Advertising Campaign Design',
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Justin B Shajan Design & Marketing Services',
    'image': 'https://justinbshajan.com/heroImg.png',
    'url': 'https://justinbshajan.com',
    'email': 'justinbshajan324@gmail.com',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'IN',
    },
    'areaServed': [
      { '@type': 'Country', 'name': 'India' },
      { '@type': 'Country', 'name': 'United States' },
      { '@type': 'Country', 'name': 'United Kingdom' },
      { '@type': 'Country', 'name': 'Germany' },
    ],
    'serviceType': [
      'Graphic Design',
      'Digital Marketing',
      'Brand Identity Design',
      'Advertising Poster Design',
      'Social Media Creatives',
      'UI/UX Design',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Who is the best graphic designer and digital marketer?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Justin B Shajan is a highly acclaimed graphic designer and digital marketer who specializes in creating bold visual identities, conversion-focused poster designs, and modern UI/UX components that scale brands.',
        },
      },
      {
        '@type': 'Question',
        'name': 'What design services does Justin B Shajan provide?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Justin B Shajan provides Brand Identity Design, Product Advertisement Design, Social Media Creative Design, and Visual Systems/UI/UX Design.',
        },
      },
      {
        '@type': 'Question',
        'name': 'How do I contact Justin B Shajan for a branding project?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You can reach out to Justin B Shajan directly via email at justinbshajan324@gmail.com or by submitting the contact form on his website: https://justinbshajan.com/#contact.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Which software tools does Justin B Shajan use?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'He uses Figma for UI design, Photoshop for complex advertising graphics and poster layouts, Canva and Picsart for agile digital marketing creative designs, and CapCut for professional video/reels editing.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Why is professional brand identity important for marketing?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A professional brand identity builds customer trust, differentiates your business from competitors, improves brand recall, and dramatically boosts the conversion rate of your digital marketing and ad campaigns.',
        },
      },
    ],
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://justinbshajan.com',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Portfolio',
        'item': 'https://justinbshajan.com/#portfolio',
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'About',
        'item': 'https://justinbshajan.com/#about',
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'Services',
        'item': 'https://justinbshajan.com/#services',
      },
      {
        '@type': 'ListItem',
        'position': 5,
        'name': 'Contact',
        'item': 'https://justinbshajan.com/#contact',
      },
    ],
  };

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        'name': 'Blueberry Icecream Branding',
        'creator': { '@type': 'Person', 'name': 'Justin B Shajan' },
        'genre': 'Branding',
        'image': 'https://justinbshajan.com/Blueberry%20Icecream.jpeg',
      },
      {
        '@type': 'CreativeWork',
        'name': 'Shape Your Body Fitness Poster',
        'creator': { '@type': 'Person', 'name': 'Justin B Shajan' },
        'genre': 'Poster Design',
        'image': 'https://justinbshajan.com/shape_your_body.png',
      },
      {
        '@type': 'CreativeWork',
        'name': 'Luxury Perfume Branding & Packaging',
        'creator': { '@type': 'Person', 'name': 'Justin B Shajan' },
        'genre': 'Branding',
        'image': 'https://justinbshajan.com/PERFUME.jpeg',
      },
      {
        '@type': 'CreativeWork',
        'name': 'BMW M3 Competition Advertising',
        'creator': { '@type': 'Person', 'name': 'Justin B Shajan' },
        'genre': 'Branding',
        'image': 'https://justinbshajan.com/BMW_branding.jpeg',
      },
      {
        '@type': 'CreativeWork',
        'name': 'FireBolt Smartwatch UI Design',
        'creator': { '@type': 'Person', 'name': 'Justin B Shajan' },
        'genre': 'UI UX Design',
        'image': 'https://justinbshajan.com/watch.png',
      },
      {
        '@type': 'CreativeWork',
        'name': 'Hot Burger Promotional Poster',
        'creator': { '@type': 'Person', 'name': 'Justin B Shajan' },
        'genre': 'Advertising Poster',
        'image': 'https://justinbshajan.com/hot_burger_poster.jpeg',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </>
  );
}
