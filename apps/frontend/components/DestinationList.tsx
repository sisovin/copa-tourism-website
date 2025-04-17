import React, { useState } from 'react';
import useSWR from 'swr';
import DestinationCard from './DestinationCard';
import LoadingSkeleton from './LoadingSkeleton';
import ToastNotification from './ToastNotification';

const fetcher = (url) => fetch(url).then((res) => res.json());

const DestinationList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: destinations, error } = useSWR(`/destinations/search?query=${searchQuery}`, fetcher);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (error) return <ToastNotification message="Error fetching destinations" />;
  if (!destinations) return <LoadingSkeleton />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Destinations</h1>
      <input
        type="text"
        placeholder="Search destinations..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} name={destination.name} description={destination.description} location={destination.location} />
        ))}
      </div>
    </div>
  );
};

export default DestinationList;
