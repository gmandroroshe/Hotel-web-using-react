// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import FullSizeSection from './components/FullSizeSection';
import HotelCardSection from './components/HotelCardSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageSlider />
      <FullSizeSection />
      <HotelCardSection />
      <Footer />
      {/* Other components or content */}
    </div>
  );
}

export default App;
