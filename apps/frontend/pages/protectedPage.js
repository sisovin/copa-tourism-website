import React from 'react';
import authMiddleware from '../middleware/authMiddleware';

const ProtectedPage = () => {
  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is protected and requires authentication to access.</p>
    </div>
  );
};

export default authMiddleware(ProtectedPage);
