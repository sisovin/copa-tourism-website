import React from 'react';
import { useSession } from 'next-auth/react';
import authMiddleware from '../middleware/authMiddleware';

const ProtectedPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You need to be authenticated to view this page.</div>;
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Protected Page</h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">This page is protected and requires authentication to access.</p>
    </div>
  );
};

export default authMiddleware(ProtectedPage);
