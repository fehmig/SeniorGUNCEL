import React, { useState, useEffect } from 'react';
import './BannerSlider.css';

const BannerSlider = ({ images, duration }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, images.length]);

  return (
    <div className="banner-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default BannerSlider;
