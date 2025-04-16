import React from 'react';
import PackageList from '../../components/PackageList';

const PackagesPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Travel Packages</h1>
      <PackageList />
    </div>
  );
};

export default PackagesPage;
