import React from 'react';

const DestinationCard = ({ name, description, location, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <img src={imageUrl} alt={name} className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-t-lg" />
      <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4">{description}</p>
        <p className="text-gray-500 sm:text-base md:text-lg lg:text-xl xl:text-2xl">{location}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
