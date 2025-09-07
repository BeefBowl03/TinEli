import React from 'react';
import HeroBanner from './components/HeroBanner';
import AboutSection from './components/AboutSection';
import WeddingEvents from './components/WeddingEvents';
import OurStory from './components/OurStory';
import WeddingGallery from './components/WeddingGallery';
import MapSection from './components/MapSection';
import WeddingDetails from './components/WeddingDetails';
import './App.css';
import ClosingSection from './components/ClosingSection';
import UploadQR from './components/UploadQR';

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <AboutSection />
      <WeddingEvents />
      <OurStory />
      <WeddingGallery />
      <MapSection />
      <WeddingDetails />
      <UploadQR />
      <ClosingSection />
    </div>
  );
}

export default App; 