import React, { useState } from 'react';
import useSWR from 'swr';
import DestinationCard from './DestinationCard';
import LoadingSkeleton from './LoadingSkeleton';
import ToastNotification from './ToastNotification';
import { Container, Grid, Title } from '@copa/ui';

const fetcher = (url) => fetch(url).then((res) => res.json());

const DestinationList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const { data: destinations, error } = useSWR(`/destinations/search?query=${searchQuery}`, fetcher);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (error) return <ToastNotification message="Error fetching destinations" />;
  if (!destinations) return <LoadingSkeleton />;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDestinations = destinations.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(destinations.length / itemsPerPage);

  return (
    <Container>
      <Title level={1} className="text-2xl font-bold mb-4">Destinations</Title>
      <input
        type="text"
        placeholder="Search destinations..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <Grid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
        {currentDestinations.map((destination) => (
          <DestinationCard key={destination.id} name={destination.name} description={destination.description} location={destination.location} imageUrl={destination.imageUrl} />
        ))}
      </Grid>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </Container>
  );
};

export default DestinationList;
