"use client";

import React from 'react';

export const LoadingSpinner = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-purple-500 animate-spin"></div>
        <div className="absolute inset-0 w-12 h-12 rounded-full border-4 border-transparent border-r-blue-500 animate-spin animation-delay-75"></div>
      </div>
    </div>
  );
};

export const SectionLoadingPlaceholder = ({ height = "h-96" }: { height?: string }) => {
  return (
    <div className={`${height} flex flex-col items-center justify-center space-y-4 animate-pulse`}>
      <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full animate-pulse"></div>
      <div className="w-32 h-4 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded"></div>
      <div className="w-24 h-3 bg-gradient-to-r from-gray-400/20 to-gray-500/20 rounded"></div>
    </div>
  );
};