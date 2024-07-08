// src/components/HotelCardSection.jsx
import React from 'react';
import './HotelCardSection.css';

const services = [
  { title: 'Luxury Rooms', description: 'Experience the ultimate in comfort and luxury in our beautifully appointed rooms.' },
  { title: 'Spa & Wellness', description: 'Relax and rejuvenate with our world-class spa and wellness services.' },
  { title: 'Gourmet Dining', description: 'Enjoy exquisite cuisine prepared by our top chefs at our gourmet restaurant.' },
  { title: 'Event Hosting', description: 'Host your events in our state-of-the-art facilities with exceptional service.' },
  { title: 'Swimming Pool', description: 'Take a dip in our stunning pool and enjoy the beautiful surroundings.' },
  { title: 'Fitness Center', description: 'Stay fit and active with our fully equipped fitness center.' }
];

const HotelCardSection = () => {
  return (
    <div className="hotel-card-section">
      {services.map((service, index) => (
        <div className="card" key={index}>
          <div className="card-image" style={{ backgroundImage: 'url(/image1.jpg)' }}></div>
          <div className="card-content">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelCardSection;
