import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wiśniewski — Czyszczenie i dezynfekcja HVAC (przemysłowo)',
  description: 'Profesjonalne czyszczenie i dezynfekcja instalacji HVAC dla szpitali, farmacji i przemysłu. Raporty, normy, praca 24/7.',
  keywords: 'HVAC, czyszczenie, dezynfekcja, szpitale, farmacja, przemysł, wentylacja',
  authors: [{ name: 'Wiśniewski HVAC' }],
  creator: 'Wiśniewski',
  openGraph: {
    title: 'Wiśniewski — Czyszczenie i dezynfekcja HVAC (przemysłowo)',
    description: 'Profesjonalne czyszczenie i dezynfekcja instalacji HVAC dla szpitali, farmacji i przemysłu. Raporty, normy, praca 24/7.',
    url: 'https://wisniewski-hvac.pl', // TODO: Update with actual domain
    siteName: 'Wiśniewski HVAC',
    images: [
      {
        url: 'https://placehold.co/1600x900?text=Wi%C5%9Bniewski+HVAC',
        width: 1600,
        height: 900,
        alt: 'Wiśniewski HVAC - Czyszczenie instalacji HVAC',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wiśniewski — Czyszczenie i dezynfekcja HVAC (przemysłowo)',
    description: 'Profesjonalne czyszczenie i dezynfekcja instalacji HVAC dla szpitali, farmacji i przemysłu. Raporty, normy, praca 24/7.',
    images: ['https://placehold.co/1600x900?text=Wi%C5%9Bniewski+HVAC'],
  },
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
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://wisniewski-hvac.pl/#organization',
      name: 'Wiśniewski',
      url: 'https://wisniewski-hvac.pl',
      telephone: '+48 500 000 000',
      email: 'kontakt@wisniewski-hvac.pl',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'ul. Przykładowa 1',
        postalCode: '00-000',
        addressLocality: 'Miasto',
        addressCountry: 'PL',
      },
      logo: 'https://wisniewski-hvac.pl/logo.png',
      sameAs: [],
    },
    {
      '@type': 'Service',
      '@id': 'https://wisniewski-hvac.pl/#service',
      name: 'Czyszczenie i dezynfekcja instalacji HVAC',
      description: 'Profesjonalne czyszczenie i dezynfekcja instalacji HVAC w skali przemysłowej',
      provider: {
        '@id': 'https://wisniewski-hvac.pl/#organization',
      },
      areaServed: 'PL',
      serviceType: 'HVAC cleaning and disinfection',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://wisniewski-hvac.pl" />
        {/* TODO: Add favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}