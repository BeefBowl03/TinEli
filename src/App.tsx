import React from 'react';
import HeroBanner from './components/HeroBanner';
import AboutSection from './components/AboutSection';
import WeddingEvents from './components/WeddingEvents';
import OurStory from './components/OurStory';
import WeddingGallery from './components/WeddingGallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <AboutSection />
      <WeddingEvents />
      <OurStory />
      <WeddingGallery />
    </div>
  );
}

export default App; 