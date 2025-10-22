import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200); // 200ms delay before closing
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="/images/logo.png" 
                  alt="Expert Eye Logo" 
                  className="h-16 w-auto"
                />
              </Link>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8 items-center">
              {/* Home */}
              <Link to="/" className="text-blue-800 font-medium transition duration-200 border-b-2 border-blue-800 pb-1">
                Home
              </Link>
              
              {/* About Us */}
              <Link to="/about" className="text-gray-700 hover:text-blue-800 font-medium transition duration-200">
                About Us
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-800 font-medium transition duration-200"
                >
                  Services
                  <svg 
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isServicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200"
                  >
                    <Link 
                      to="/electrical-services" 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition duration-200"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Electrical Services
                    </Link>
                    <Link 
                      to="/mechanical-services" 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition duration-200"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Mechanical Services
                    </Link>
                    <Link 
                      to="/maintenance" 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition duration-200"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Maintenance
                    </Link>
                    <Link 
                      to="/consultation" 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition duration-200"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Consultation
                    </Link>
                  </div>
                )}
              </div>

               {/* Projects */}
              <Link to="/projects" className="text-gray-700 hover:text-blue-800 font-medium transition duration-200">
                Projects
              </Link>
              
              {/* Contact Us */}
              <Link to="/contact" className="text-gray-700 hover:text-blue-800 font-medium transition duration-200">
                Contact Us
              </Link>
              
              {/* Apply Now Button */}
              <Link to="/apply" className="bg-sky-400 text-white px-6 py-3 rounded-tl-2xl rounded-br-2xl hover:bg-blue-200 transition duration-200 font-medium shadow-md hover:shadow-lg flex items-center space-x-2 border border-blue-200">
                <span>Apply Now</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;