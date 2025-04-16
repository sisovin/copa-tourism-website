import React from 'react';
import DestinationList from '../../components/DestinationList';

const DestinationsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Destinations</h1>
      <DestinationList />
    </div>
  );
};

export default DestinationsPage;
