import React from 'react';

const LoadingSpinner = ({ size = 'w-10 h-10', color = 'text-blue-500', message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div
        className={`animate-spin rounded-full border-t-4 border-l-4 border-gray-200 ${color} ${size}`}
      ></div>
      {message && <p className="text-sm font-medium text-gray-600">{message}</p>}
    </div>
  );
};

export default LoadingSpinner;
