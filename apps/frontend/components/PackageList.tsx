import React, { useEffect, useState } from 'react';
import PackageCard from './PackageCard';

const PackageList = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/packages');
        const data = await response.json();
        setPackages(data);
      } catch (error) {
        setError('Error fetching packages');
        console.error('Error fetching packages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Travel Packages</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} name={pkg.name} description={pkg.description} price={pkg.price} slug={pkg.slug} />
        ))}
      </div>
    </div>
  );
};

export default PackageList;
