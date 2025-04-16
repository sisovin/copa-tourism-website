import React from 'react';
import Link from 'next/link';

const PackageCard = ({ name, description, price, slug }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-gray-500 mb-4">${price}</p>
      <Link href={`/packages/${slug}`}>
        <a className="text-blue-500 hover:underline">View Details</a>
      </Link>
    </div>
  );
};

export default PackageCard;
