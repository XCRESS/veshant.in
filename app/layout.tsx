import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://veshant.in'),
  title: {
    default: 'Veshant Singh Dahiya',
    template: '%s | Veshant Singh Dahiya'
  },
  description: 'I am a Full-Stack Developer specializing in React, Node.js, Python, and modern web technologies. Building scalable applications with 2+ years of experience in Faridabad, Delhi NCR.',
  keywords: [
    'Veshant Singh Dahiya',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer', 
    'Python Developer',
    'JavaScript Developer',
    'Web Developer',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'Cosmos Financial Group',
    'Faridabad Developer',
    'Delhi NCR Developer',
    'Portfolio',
    'Web Development',
    'Modern Web Technologies'
  ],
  authors: [{ name: 'Veshant Singh Dahiya' }],
  creator: 'Veshant Singh Dahiya',
  publisher: 'Veshant Singh Dahiya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://veshant.in',
    title: 'Veshant Singh Dahiya - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in React, Node.js, Python, and modern web technologies. Currently working at Cosmos Financial Group with 2+ years of experience.',
    siteName: 'Veshant Singh Dahiya Portfolio',
    images: [
      {
        url: '/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Veshant Singh Dahiya - Full-Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veshant Singh Dahiya - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in React, Node.js, Python, and modern web technologies.',
    images: ['/icon-512x512.png'],
    creator: '@veshantdahiya',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'technology',
  alternates: {
    canonical: 'https://veshant.in',
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
    "name": "Veshant Singh Dahiya",
    "url": "https://veshant.in",
    "image": "https://veshant.in/icon-512x512.png",
    "sameAs": [
      "https://github.com/xcress",
      "https://linkedin.com/in/veshant-dahiya"
    ],
    "jobTitle": "Full-Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Cosmos Financial Group"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Faridabad",
      "addressRegion": "Delhi NCR",
      "addressCountry": "IN"
    },
    "knowsAbout": [
      "React",
      "Node.js",
      "Python",
      "JavaScript",
      "TypeScript",
      "Web Development",
      "Full-Stack Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Software Development"
    }
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light" />
        <link rel="canonical" href="https://veshant.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
