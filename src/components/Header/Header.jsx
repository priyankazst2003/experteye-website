import React, { useState } from 'react';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <nav className="py-4">
          <div className="flex justify-between items-center">
            {/* Logo with Image */}
            <div className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Expert Eye Logo" 
                className="h-16 w-auto"
              />
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8 items-center">
              {/* Home - Active by default */}
              <a 
                href="#home" 
                className="text-blue-600 font-medium transition duration-200 border-b-2 border-blue-600 pb-1"
              >
                Home
              </a>
              
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
              >
                About Us
              </a>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition duration-200">
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
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
                    <a href="#electrical" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200">
                      Electrical Services
                    </a>
                    <a href="#mechanical" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200">
                      Mechanical Services
                    </a>
                    <a href="#maintenance" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200">
                      Maintenance
                    </a>
                    <a href="#consultation" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200">
                      Consultation
                    </a>
                  </div>
                )}
              </div>
              
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
              >
                Contact Us
              </a>
              
              {/* Apply Now Button with custom curve and arrow */}
<a 
  href="#apply" 
  className="bg-sky-400 text-white px-6 py-3 rounded-tl-2xl rounded-br-2xl hover:bg-blue-200 transition duration-200 font-medium shadow-md hover:shadow-lg flex items-center space-x-2 border border-blue-200"
>
  <span>Apply Now</span>
  <svg 
    className="w-4 h-4" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
</a>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;