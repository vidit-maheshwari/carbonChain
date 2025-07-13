import React from 'react';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import HowItWorks from '../components/landing/HowItWorks';
import Statistics from '../components/landing/Statistics';
import Testimonials from '../components/landing/Testimonials';

interface LandingPageProps {
  onAuth: (mode: 'login' | 'register', type: 'retailer' | 'assetOwner') => void;
}

function LandingPage({ onAuth }: LandingPageProps) {
  return (
    <div>
      <Hero onAuth={onAuth} />
      <Features />
      <HowItWorks />
      <Statistics />
      <Testimonials />
    </div>
  );
}

export default LandingPage;