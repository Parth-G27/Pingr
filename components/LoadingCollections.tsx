import React from "react";

const LoadingCollection = () => {
  return (
    <>
      <div className="bg-white dark:bg-black text-black dark:text-white font-semibold rounded-lg shadow-lg border dark:border-gray-700 px-6 py-3 flex items-center justify-center space-x-2 animate-pulse">
        <svg
          className="w-5 h-5 text-black dark:text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        <span>Loading Collections...</span>
      </div>
    </>
  );
};

export default LoadingCollection;
