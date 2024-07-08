// src/components/ImageSlider.jsx
import React, { useState } from 'react';
import './ImageSlider.css';

const images = [
  {
    src: '/image1.jpg',  // Path relative to the public directory
    heading: 'Welcome to Our Hotel',
    paragraph: 'Experience the luxury and comfort.',
    button: 'Learn More'
  },
  {
    src: '/image2.jpg',  // Path relative to the public directory
    heading: 'Relax and Unwind',
    paragraph: 'Enjoy our world-class amenities.',
    button: 'View Services'
  },
  {
    src: '/image3.jpg',  // Path relative to the public directory
    heading: 'Book Your Stay',
    paragraph: 'Reserve your room today.',
    button: 'Book Now'
  }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  const nextSlide = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          className={`slide ${index === currentIndex ? 'active' : ''} ${index === prevIndex ? 'prev' : ''}`}
          key={index}
        >
          <img src={image.src} alt={image.heading} />
          <div className="content">
            <h2>{image.heading}</h2>
            <p>{image.paragraph}</p>
            <button>{image.button}</button>
          </div>
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default ImageSlider;
