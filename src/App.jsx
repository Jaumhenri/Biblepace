import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { CountdownSection } from './components/sections/CountdownSection';
import { PlatformPreview } from './components/sections/PlatformPreview';
import { TargetAudience } from './components/sections/TargetAudience';
import { Pillars } from './components/sections/Pillars';
import { Curriculum } from './components/sections/Curriculum';
import { WhatYouGet } from './components/sections/WhatYouGet';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/layout/Footer';
import './styles/global.css';

export function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Hero />
        <CountdownSection />
        <PlatformPreview />
        <TargetAudience />
        <Pillars />
        <Curriculum />
        <WhatYouGet />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
