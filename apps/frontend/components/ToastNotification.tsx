import React from 'react';

const ToastNotification = ({ message }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-md shadow-md">
      {message}
    </div>
  );
};

export default ToastNotification;
