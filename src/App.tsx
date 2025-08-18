import React from 'react';
import HeroBanner from './components/HeroBanner';
import AboutSection from './components/AboutSection';
import WeddingEvents from './components/WeddingEvents';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <AboutSection />
      <WeddingEvents />
    </div>
  );
}

export default App; 