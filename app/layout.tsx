import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://justinbshajan.com'), // Replace with actual domain when deployed
  title: 'Justin B Shajan | Best Graphic Designer & Digital Marketer',
  description: 'Justin B Shajan is a leading graphic designer and digital marketer specializing in high-converting brand identities, stunning posters, social media creatives, and premium UI/UX designs.',
  keywords: [
    'best graphic designer',
    'best digital marketer',
    'graphic designer India',
    'digital marketer India',
    'brand identity designer',
    'logo designer',
    'freelance graphic designer',
    'visual designer India',
    'top poster designer',
    'UI designer India',
    'social media creative designer',
    'Justin B Shajan',
    'justinbshajan'
  ],
  authors: [{ name: 'Justin B Shajan', url: 'https://justinbshajan.com' }],
  creator: 'Justin B Shajan',
  publisher: 'Justin B Shajan',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://justinbshajan.com',
    title: 'Justin B Shajan | Best Graphic Designer & Digital Marketer',
    description: 'Elevate your brand with award-winning graphic design, brand identity, and high-impact digital marketing campaigns.',
    siteName: 'Justin B Shajan Portfolio',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Justin B Shajan - Best Graphic Designer & Digital Marketer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Justin B Shajan | Best Graphic Designer & Digital Marketer',
    description: 'Leading brand identity designer and digital marketer crafting visual stories that scale brands.',
    creator: '@justinbshajan', // Replace if different
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://justinbshajan.com',
  },
};

import StructuredData from './structured-data';
import SeoContent from './seo-content';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="author" href="/humans.txt" />
        <meta name="theme-color" content="#B91C1C" />
      </head>
      <body className={inter.className}>
        <StructuredData />
        <SeoContent />
        {children}
      </body>
    </html>
  );
}
