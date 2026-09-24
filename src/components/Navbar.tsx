import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center">
      <div className="flex items-center gap-6 px-6 py-2 rounded-full border border-gray-200 shadow-sm bg-white text-sm font-medium text-gray-600">
        <a href="#home" className="hover:text-gray-900 transition-colors">Home</a>
        <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
        <a href="#skills" className="hover:text-gray-900 transition-colors">Skills</a>
      </div>
    </nav>
  );
};