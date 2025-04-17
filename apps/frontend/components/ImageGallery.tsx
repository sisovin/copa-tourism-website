import React, { useState } from 'react';

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
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="w-full h-auto object-cover rounded-lg" />
      <div className="flex justify-between w-full mt-4">
        <button onClick={handlePrev} className="p-2 bg-blue-500 text-white rounded">Previous</button>
        <button onClick={handleNext} className="p-2 bg-blue-500 text-white rounded">Next</button>
      </div>
    </div>
  );
};

export default ImageGallery;
