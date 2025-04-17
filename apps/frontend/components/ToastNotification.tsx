import React from 'react';

const ToastNotification = ({ message }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-md shadow-md sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 xl:bottom-12 xl:right-12">
      {message}
    </div>
  );
};

export default ToastNotification;
