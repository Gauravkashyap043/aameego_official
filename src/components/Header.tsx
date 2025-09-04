import React from "react";
import logo from "../assets/logo.png"; // apna actual logo yaha import karo

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="KarPragati Logo" className="h-10 w-auto" />
            
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8 font-medium">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100 transition">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
