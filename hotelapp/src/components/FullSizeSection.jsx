// src/components/FullSizeSection.jsx
import React from 'react';
import './FullSizeSection.css';

const FullSizeSection = () => {
  return (
    <div className="full-size-section">
      <div className="section-part image-part" style={{ backgroundImage: 'url(/image1.jpg)' }}></div>
      <div className="section-part text-part">
        <p>Welcome to our hotel! Experience the ultimate in luxury and comfort. Our dedicated staff is here to provide you with an unforgettable stay. From our world-class amenities to our exquisite dining options, every aspect of our hotel is designed to offer you a unique and memorable experience.</p>
        <h2>Our Story</h2>
      </div>
      <div className="section-part image-part" style={{ backgroundImage: 'url(/image2.jpg)' }}></div>
    </div>
  );
};

export default FullSizeSection;
