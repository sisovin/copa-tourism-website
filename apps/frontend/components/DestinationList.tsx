import React, { useEffect, useState } from 'react';
import DestinationCard from './DestinationCard';

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('/destinations');
        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} name={destination.name} description={destination.description} location={destination.location} />
        ))}
      </div>
    </div>
  );
};

export default DestinationList;
