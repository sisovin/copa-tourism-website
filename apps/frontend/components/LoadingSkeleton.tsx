import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="loading-skeleton flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
      <div className="skeleton-header w-full h-4 sm:h-6 md:h-8 lg:h-10 xl:h-12 bg-gray-300 rounded"></div>
      <div className="skeleton-content w-full h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 bg-gray-300 rounded"></div>
    </div>
  );
};

export default LoadingSkeleton;
