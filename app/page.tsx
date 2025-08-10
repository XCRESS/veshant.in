'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import GeometricBackground from '@/components/GeometricBackground';
import GridOverlay from '@/components/GridOverlay';
import { MobileScrollIndicator } from '@/components/MobileEnhancements';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen bg-white text-black overflow-x-hidden">
      {/* Mobile Enhancements */}
      <MobileScrollIndicator />
      
      {/* Background Layers */}
      <div className="fixed inset-0 -z-10">
        <GeometricBackground />
      </div>
      
      <div className="fixed inset-0 -z-5 opacity-5">
        <GridOverlay />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>

    </main>
  );
}
