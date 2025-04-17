import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DestinationDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      const fetchDestination = async () => {
        try {
          const response = await axios.get(`/destinations/${slug}`);
          setDestination(response.data);
        } catch (err) {
          setError('Error fetching destination');
        } finally {
          setLoading(false);
        }
      };

      fetchDestination();
    }
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4">
      {destination ? (
        <>
          <h1 className="text-2xl font-bold mb-4">{destination.name}</h1>
          <p className="text-gray-700 mb-4">{destination.description}</p>
          <p className="text-gray-500">{destination.location}</p>
        </>
      ) : (
        <p>Destination not found</p>
      )}
    </div>
  );
};

export default DestinationDetail;
