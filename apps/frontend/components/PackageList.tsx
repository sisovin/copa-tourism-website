import React, { useState } from 'react';
import useSWR from 'swr';
import PackageCard from './PackageCard';
import LoadingSkeleton from './LoadingSkeleton';
import ToastNotification from './ToastNotification';

const fetcher = (url) => fetch(url).then((res) => res.json());

const PackageList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: packages, error } = useSWR(`/packages/search?query=${searchQuery}`, fetcher);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (error) return <ToastNotification message="Error fetching packages" />;
  if (!packages) return <LoadingSkeleton />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Travel Packages</h1>
      <input
        type="text"
        placeholder="Search packages..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} name={pkg.name} description={pkg.description} price={pkg.price} slug={pkg.slug} />
        ))}
      </div>
    </div>
  );
};

export default PackageList;
