import React from 'react';
import Hero from '@/components/home/Hero';
import ServicesPreview from '@/components/home/ServicesPreview';
import AboutPreview from '@/components/home/AboutPreview';
import CTASection from '@/components/home/CTASection';
import SEOHead from '@/components/SEOHead';

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEOHead page="Home" />
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <CTASection />
    </div>
  );
}