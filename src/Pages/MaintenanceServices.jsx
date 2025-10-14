import React from 'react';

const MaintenanceServices = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
              Maintenance Services
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-7xl mx-auto">
              Comprehensive maintenance services to ensure the longevity, efficiency, and reliability of your electrical and mechanical systems. Our preventive and corrective maintenance programs help avoid costly breakdowns and extend equipment lifespan.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-blue-800 to-sky-500 rounded-2xl flex items-center justify-center p-8">
                  <img 
                    src="/images/images (7).jpg" 
                    alt="Maintenance Services" 
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              
              {/* Maintenance Services Section */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Comprehensive Maintenance Services
                </h3>
                <p className="text-gray-600 mb-4">
                  Our maintenance services cover all aspects of system upkeep and include:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Preventive Maintenance</h4>
                      <p className="text-gray-600 text-sm">Regular scheduled inspections and servicing to prevent equipment failures and ensure optimal performance.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Corrective Maintenance</h4>
                      <p className="text-gray-600 text-sm">Prompt repair and restoration services for malfunctioning systems and equipment breakdowns.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Predictive Maintenance</h4>
                      <p className="text-gray-600 text-sm">Advanced monitoring and diagnostics to predict potential failures before they occur.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Emergency Maintenance</h4>
                      <p className="text-gray-600 text-sm">24/7 emergency response for urgent maintenance needs and system failures.</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MaintenanceServices;