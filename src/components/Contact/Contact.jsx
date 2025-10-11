import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Gradient Container */}
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
          </div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
              
              {/* Left Side - Email */}
              <div className="lg:w-2/5 text-center lg:text-left mb-8 lg:mb-0">
                <div className="text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Get in Touch:</h3>
                  <p className="text-2xl md:text-3xl font-semibold bg-white bg-opacity-20 rounded-lg px-4 py-2 inline-block">
                    info@experteye.com
                  </p>
                </div>
              </div>

              {/* Center Circle */}
              <div className="lg:w-1/5 flex justify-center mb-8 lg:mb-0">
                <div className="bg-white rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center shadow-2xl border-4 border-blue-200">
                  <svg className="w-12 h-12 md:w-16 md:h-16 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Right Side - Phone */}
              <div className="lg:w-2/5 text-center lg:text-right">
                <div className="text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Call Us Via:</h3>
                  <p className="text-2xl md:text-3xl font-semibold bg-white bg-opacity-20 rounded-lg px-4 py-2 inline-block">
                    +12345 67890
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;