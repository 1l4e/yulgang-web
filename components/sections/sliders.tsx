"use client"
import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, height }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const goToPreviousImage = () => {
    const previousIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(previousIndex);
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="image-slider relative w-full" style={{ height }}>
      <img
        src={images[currentImageIndex]}
        alt="Slider"
        className="slider-image w-full h-full object-cover"
      />

      

    </div>
  );
};

export default ImageSlider;
