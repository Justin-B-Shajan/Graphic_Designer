import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = 'https://justin-b-shajan.netlify.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Justin B Shajan | Graphic Designer & Brand Identity Expert',
    template: '%s | Justin B Shajan',
  },
  description:
    'Justin B Shajan is a strategic graphic designer specializing in bold brand identities, advertising creatives, and visual systems. Available for freelance projects worldwide.',
  keywords: [
    'graphic designer',
    'brand identity',
    'advertising design',
    'visual storytelling',
    'social media creatives',
    'UI design',
    'product design',
    'Justin B Shajan',
    'freelance designer',
    'logo design',
    'poster design',
  ],
  authors: [{ name: 'Justin B Shajan', url: siteUrl }],
  creator: 'Justin B Shajan',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Justin B Shajan — Graphic Designer',
    title: 'Justin B Shajan | Graphic Designer & Brand Identity Expert',
    description:
      'Strategic graphic designer creating bold brand visuals and high-converting advertising creatives. Strong typography, structured layouts, modern aesthetics.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Justin B Shajan — Graphic Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Justin B Shajan | Graphic Designer & Brand Identity Expert',
    description:
      'Strategic graphic designer creating bold brand visuals and high-converting advertising creatives.',
    creator: '@justinbshajan',
    images: [
      {
        url: '/logo.png',
        alt: 'Justin B Shajan — Graphic Designer',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Justin B Shajan',
      url: siteUrl,
      jobTitle: 'Graphic Designer',
      description:
        'Strategic graphic designer specializing in brand identity, advertising creatives, and visual systems.',
      sameAs: [
        'https://github.com/Justin-B-Shajan',
        'https://www.linkedin.com/in/justin-b-shajan-b64935235',
        'https://www.instagram.com/the_nephalem_boy/',
      ],
      knowsAbout: [
        'Brand Identity',
        'Graphic Design',
        'Advertising',
        'UI Design',
        'Visual Storytelling',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Justin B Shajan — Graphic Designer',
      description:
        'Portfolio of Justin B Shajan, a strategic graphic designer.',
      author: { '@id': `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
