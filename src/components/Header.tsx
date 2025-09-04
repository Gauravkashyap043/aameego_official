import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Top blue line */}
      {/* <div className="h-1 bg-blue-600"></div> */}
      
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-3">
            {/* Dummy logo - lightning bolt icon */}
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-800">KarPragati</h1>
              <p className="text-sm text-gray-600">Driving Progress Together</p>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Terms & Conditions</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact Us</a>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
