import React from 'react';

const DestinationCard = ({ name, description, location }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-gray-500">{location}</p>
    </div>
  );
};

export default DestinationCard;
