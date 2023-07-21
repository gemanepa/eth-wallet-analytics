import React from "react";

const WarningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const Banner = () => (
  <div className="flex items-center justify-start w-full py-4 px-6 bg-red-100 rounded-lg mb-4">
    <div className="flex items-center justify-center mr-4 text-red-600">
      <WarningIcon />
    </div>
    <div className="text-red-800 text-sm font-medium">Wallet is old!</div>
  </div>
);

export default Banner;
