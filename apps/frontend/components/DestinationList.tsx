import React from 'react';
import useSWR from 'swr';
import DestinationCard from './DestinationCard';

const fetcher = (url) => fetch(url).then((res) => res.json());

const DestinationList = () => {
  const { data: destinations, error } = useSWR('/destinations', fetcher);

  if (error) return <div>Error fetching destinations</div>;
  if (!destinations) return <div>Loading...</div>;

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
