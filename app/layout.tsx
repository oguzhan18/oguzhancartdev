import React from "react"
import type { Metadata, Viewport } from 'next'
import { Syne, JetBrains_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _syne = Syne({ subsets: ["latin"], variable: '--font-sans', display: 'swap' });
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono', display: 'swap' });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif', display: 'swap' });

const siteUrl = 'https://oguzhancart.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Oguzhan Cart | Frontend Developer & Creative Engineer',
    template: '%s | Oguzhan Cart',
  },
  description: 'Passionate Frontend Developer with 6+ years of experience building scalable web applications. Expert in Angular, React, Next.js, Vue.js, TypeScript, Three.js, and WebGL. Based in Istanbul, Turkey. Specializing in CMS, CRM, FinTech, and e-commerce solutions.',
  keywords: [
    'Oguzhan Cart', 'Oguzhan CART', 'Frontend Developer', 'Frontend Engineer',
    'React Developer', 'Angular Developer', 'Vue.js Developer', 'Next.js Expert',
    'TypeScript Developer', 'Three.js', 'WebGL', 'Creative Developer',
    'Istanbul Developer', 'Turkey', 'CMS Developer', 'CRM Developer',
    'FinTech Developer', 'E-Commerce Developer', 'JavaScript Expert',
    'NestJS', 'Full Stack Developer', 'Web Developer Istanbul',
    'Atomic Design', 'Micro Frontend', 'SEO Expert Frontend',
    'oguzhancart', 'oguzhancart.dev'
  ],
  authors: [{ name: 'Oguzhan Cart', url: 'https://oguzhancart.dev' }],
  creator: 'Oguzhan Cart',
  publisher: 'Oguzhan Cart',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Oguzhan Cart',
    title: 'Oguzhan Cart | Frontend Developer & Creative Engineer',
    description: 'Passionate Frontend Developer with 6+ years of experience. Building scalable, SEO-focused web applications with Angular, React, Next.js, and Vue.js.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Oguzhan Cart - Frontend Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oguzhan Cart | Frontend Developer',
    description: 'Passionate Frontend Developer with 6+ years of experience. Expert in Angular, React, Next.js, Vue.js, TypeScript.',
    images: ['/og-image.jpg'],
    creator: '@oguzhancart',
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
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#0a0a0b' }],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Oguzhan Cart",
  "alternateName": ["Oguzhan CART", "Oguzhan Cart"],
  "givenName": "Oguzhan",
  "familyName": "Cart",
  "jobTitle": "Frontend Developer",
  "description": "Passionate Frontend Developer with 6+ years of experience building responsive and scalable web applications using JavaScript, TypeScript, Angular, React, Next.js, and Vue.js. Expert in CMS, CRM, FinTech, and e-commerce solutions.",
  "url": "https://oguzhancart.dev",
  "sameAs": [
    "https://github.com/oguzhan18",
    "https://www.linkedin.com/in/o%C4%9Fuzhan-%C3%A7art-b73405199/",
    "https://codepen.io/oguzhan1881",
    "https://medium.com/@oguzhancart1",
    "https://oguzhancart.dev"
  ],
  "knowsAbout": [
    "JavaScript", "TypeScript", "Angular", "React", "Next.js", "Vue.js", "NuxtJS", "Astro",
    "Node.js", "NestJS", "Three.js", "WebGL", "GSAP", "SASS", "Tailwind CSS",
    "Docker", "Linux Server Management", "PostgreSQL", "MongoDB", "Firebase", "Supabase",
    "REST API", "WebSocket", "Micro Frontend Architecture", "Atomic Design",
    "SEO Optimization", "CMS Development", "CRM Development", "E-Commerce", "FinTech"
  ],
  "knowsLanguage": [
    { "@type": "Language", "name": "Turkish", "alternateName": "tr" },
    { "@type": "Language", "name": "English", "alternateName": "en" }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Istanbul",
    "addressRegion": "Sultangazi",
    "addressCountry": "TR"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Ataturk University",
    "department": "Computer Programming"
  },
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Frontend Developer",
    "occupationLocation": { "@type": "City", "name": "Istanbul" },
    "skills": "JavaScript, TypeScript, Angular, React, Next.js, Vue.js, Three.js, WebGL, Node.js, NestJS"
  },
  "worksFor": [
    {
      "@type": "Organization",
      "name": "PATH",
      "description": "Turkuvaz Media Group - Frontend Development"
    }
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Oguzhan Cart - Frontend Developer",
  "url": "https://oguzhancart.dev",
  "description": "Portfolio and personal website of Oguzhan Cart, Frontend Developer based in Istanbul.",
  "author": { "@type": "Person", "name": "Oguzhan Cart" },
  "inLanguage": ["en", "tr"]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What technologies does Oguzhan Cart specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oguzhan Cart is a Frontend Developer specializing in Angular, React, Next.js, Vue.js, TypeScript, NestJS, and Three.js. He has extensive experience with Docker, Linux server management, PostgreSQL, MongoDB, Firebase, and Supabase."
      }
    },
    {
      "@type": "Question",
      "name": "What industries has Oguzhan Cart worked in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oguzhan has delivered enterprise-scale projects across media and publishing (Turkuvaz Media Group), human resources (Teamso HR), SEO and AI-powered tools (Dopinger), and custom CRM/e-commerce solutions (Aifa Soft)."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Oguzhan Cart based?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oguzhan Cart is based in Istanbul, Turkey, and is available for both local and international projects. He has experience working with distributed teams across multiple time zones."
      }
    },
    {
      "@type": "Question",
      "name": "What is Oguzhan Cart's approach to frontend architecture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oguzhan follows Atomic Design principles and Micro Frontend architecture patterns to build scalable, maintainable web applications. He emphasizes performance optimization, SEO best practices, and clean code principles."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Oguzhan Cart - Frontend Development Services",
  "url": "https://oguzhancart.dev",
  "description": "Professional frontend development services including CMS, CRM, e-commerce, and FinTech web applications.",
  "provider": { "@type": "Person", "name": "Oguzhan Cart" },
  "areaServed": "Worldwide",
  "serviceType": ["Frontend Development", "Web Application Development", "CMS Development", "E-Commerce Development"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const metaDescription = 'Oguzhan Cart — Frontend Developer with 6+ years building scalable web apps. Expert in Angular, React, Next.js, Vue.js, TypeScript. Istanbul, Turkey. CMS, CRM, FinTech, e-commerce.';

  return (
    <html lang="en">
      <head>
        <meta name="description" content={metaDescription} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
