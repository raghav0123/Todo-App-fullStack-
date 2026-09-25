import React from 'react';

const CustomLoader = ({ message = "Fetching your tasks..." }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10">
      {/* Animated Spinner Ring */}
      <div className="relative flex items-center justify-center">
        {/* Outer Pulsing Glow Ring */}
        <div className="w-12 h-12 rounded-full border-4 border-blue-500/20 animate-ping absolute"></div>
        
        {/* Main Rotating Gradient Spinner */}
        <div className="w-12 h-12 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-400 animate-spin"></div>
      </div>

      {/* Dynamic Status Message */}
      <p className="text-gray-400 text-sm font-medium tracking-wide animate-pulse">
        {message}
      </p>
    </div>
  );
};

export default CustomLoader;