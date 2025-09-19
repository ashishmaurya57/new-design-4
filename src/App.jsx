import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import Reviews from './components/Reviews';
import About from './components/About';
import CTA from './components/CTA';
import Consultation from './components/Consultation';
import Instagram from './components/Instagram';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Intro />
      <Services />
      <Reviews />
      <About />
      <CTA />
      <Consultation />
      <Instagram />
      <Footer />
    </div>
  );
}

export default App;