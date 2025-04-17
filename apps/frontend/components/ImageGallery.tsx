import React, { useState } from 'react';
import { ImageGallery as CopaImageGallery } from '@copa/ui';

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-gallery flex flex-col items-center">
      <CopaImageGallery images={images} currentIndex={currentIndex} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
};

export default ImageGallery;
