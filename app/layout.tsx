import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Reid Lentz - Technology & Engineering Executive | AI & Digital Transformation Leader",
    template: "%s | Reid Lentz"
  },
  description: "Technology & Engineering Executive with 15+ years of experience in AI, digital transformation, and enterprise modernization. Led $100M+ platform implementations, 250+ global teams, and achieved 50%+ efficiency gains across global operations.",
  keywords: [
    "Reid Lentz",
    "Technology Executive",
    "Engineering Executive", 
    "Chief Technology Officer",
    "CTO",
    "AI Strategy",
    "Digital Transformation",
    "Enterprise Architecture",
    "Cloud Architecture",
    "Machine Learning",
    "SaaS Platforms",
    "DevOps",
    "Team Leadership",
    "Global Operations",
    "FedEx",
    "Logistics Technology",
    "Enterprise Modernization",
    "Platform Architecture",
    "System Reliability",
    "Cost Optimization"
  ],
  authors: [{ name: "Reid Lentz" }],
  creator: "Reid Lentz",
  publisher: "Reid Lentz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://reidlentz.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://reidlentz.com',
    title: 'Reid Lentz - Technology & Engineering Executive | AI & Digital Transformation Leader',
    description: 'Technology & Engineering Executive with 15+ years of experience in AI, digital transformation, and enterprise modernization. Led $100M+ platform implementations and 250+ global teams.',
    siteName: 'Reid Lentz - Technology Executive',
    images: [
      {
        url: '/images/reid-lentz-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Reid Lentz - Technology & Engineering Executive',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reid Lentz - Technology & Engineering Executive',
    description: 'Technology & Engineering Executive with 15+ years of experience in AI, digital transformation, and enterprise modernization.',
    images: ['/images/reid-lentz-og.jpg'],
    creator: '@reidlentz',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Reid Lentz",
    "jobTitle": "Technology & Engineering Executive",
    "description": "Technology & Engineering Executive with 15+ years of experience in AI, digital transformation, and enterprise modernization.",
    "url": "https://reidlentz.com",
    "sameAs": [
      "https://www.linkedin.com/in/reid-r-lentz",
      "https://github.com/reid-oooo"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Cephas Partners"
      }
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Digital Transformation", 
      "Enterprise Architecture",
      "Cloud Computing",
      "Machine Learning",
      "DevOps",
      "Team Leadership",
      "Platform Architecture"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "West Palm Beach",
      "addressRegion": "FL",
      "addressCountry": "US"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
