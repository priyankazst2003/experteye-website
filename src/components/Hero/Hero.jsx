import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            {/* Main Heading - Sky Blue and smaller */}
            <h1 className="text-3xl md:text-2xl font-bold text-sky-500 mb-4">
              EXPERT EYE
            </h1>
            
            {/* Subheading - Blue */}
            <h2 className="text-xl md:text-3xl text-blue-800 mb-2 font-bold">
              Electrical & Mechanical Contracting- Sole Proprietorship LLC
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text
            </p>
            
            {/* Contact Us Button */}
            <button className="bg-sky-400 text-white px-6 py-3 rounded-tl-2xl rounded-br-2xl hover:bg-blue-200 transition duration-200 font-medium shadow-md hover:shadow-lg flex items-center space-x-2 border border-blue-200">
              <span>Contact Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
          </div>
          
          {/* Right Image */}
          <div className="md:w-1/2">
            <img 
              src="/images/banner.png" 
              alt="Expert Eye Electrical & Mechanical Services" 
              
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;