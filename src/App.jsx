import React, { useState } from 'react';
import Header from './components/Header';
import GlobeView from './components/GlobeView';
import LeftPanel from './components/LeftPanel';
import StatsPanel from './components/StatsPanel';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isAutoRotate, setIsAutoRotate] = useState(true);

  const handleSelectCountry = (countryData) => {
    setSelectedCountry(countryData);
  };

  const handleRecenter = () => {
    if (window.__recenterGlobe) {
      window.__recenterGlobe();
    }
  };

  return (
    <div className="app-container">
      {/* Invisible Background Audio Player */}
      <AudioPlayer />

      {/* Top Navigation Bar */}
      <Header 
        onSelectCountry={handleSelectCountry}
      />

      {/* Single Page Layout: 3D Globe + Side Panels */}
      <main className="main-content">
        <GlobeView 
          selectedCountry={selectedCountry}
          onSelectCountry={handleSelectCountry}
          isAutoRotate={isAutoRotate}
          setIsAutoRotate={setIsAutoRotate}
        />

        {/* Left Side Panel: Map Controls & Trends */}
        <LeftPanel 
          onSelectCountry={handleSelectCountry}
          isAutoRotate={isAutoRotate}
          setIsAutoRotate={setIsAutoRotate}
          onRecenter={handleRecenter}
        />

        {/* Right Side Panel: Selected Country Card + Rankings + Safety Index */}
        <StatsPanel 
          selectedCountry={selectedCountry}
          onSelectCountry={handleSelectCountry}
          onCloseSelected={() => setSelectedCountry(null)}
        />
      </main>
    </div>
  );
}
