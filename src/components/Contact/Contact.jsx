import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Gradient Container */}
        <div className="bg-gradient-to-r from-blue-900 to-sky-500 rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
              
              {/* Left Side - Email */}
              <div className="lg:w-2/5 text-center lg:text-right mb-8 lg:mb-0">
                <div className="text-white">
                  <h3 className="text-xl md:text-2xl  mb-2">Get in Touch:</h3>
                  <p className="text-xl md:text-2xl font-medium">
                    info@experteye.com
                  </p>
                </div>
              </div>

              {/* Center Circle */}
              <div className="lg:w-1/5 flex justify-center mb-8 lg:mb-0">
                <div className="bg-white rounded-full w-24 h-24 md:w-18 md:h-18 flex items-center justify-center ">
                  <span className="text-black-50 text-xl md:text-2xl ">
                    Or
                  </span>
                </div>
              </div>

              {/* Right Side - Phone */}
              <div className="lg:w-2/5 text-center lg:text-left">
                <div className="text-white">
                  <h3 className="text-xl md:text-2xl  mb-2">Call Us Via:</h3>
                  <p className="text-xl md:text-2xl font-medium">
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