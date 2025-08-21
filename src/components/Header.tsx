import React from 'react';

const Header: React.FC = () => {
  return (
    <a href="/" className="text-center mb-6 lg:mb-8">
      <div className="flex items-center justify-center gap-2 md:gap-4 mb-3">
        <div className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-indigo-500 to-orange-600 rounded-2xl text-white shadow-lg">
          <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-orange-700 to-purple-600 bg-clip-text text-transparent">
          Leadership Style Assessment
        </h1>
      </div>
      <p className="text-sm md:text-base text-gray-600 max-w-lg mx-auto leading-relaxed mb-3">
        Discover your unique leadership approach and unlock your potential
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
    </a>
  );
};

export default Header; 