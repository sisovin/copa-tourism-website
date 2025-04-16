import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DestinationCard from '../../components/DestinationCard';

const DestinationPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    if (slug) {
      const fetchDestination = async () => {
        try {
          const response = await fetch(`/destinations/${slug}`);
          const data = await response.json();
          setDestination(data);
        } catch (error) {
          console.error('Error fetching destination:', error);
        }
      };

      fetchDestination();
    }
  }, [slug]);

  if (!destination) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <DestinationCard
        name={destination.name}
        description={destination.description}
        location={destination.location}
      />
    </div>
  );
};

export default DestinationPage;
