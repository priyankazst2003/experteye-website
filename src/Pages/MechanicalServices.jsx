import React from 'react';

const MechanicalServices = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
              Mechanical Services
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-7xl mx-auto">
              Mechanical services encompass the installation, maintenance, repair, and optimization of mechanical systems in residential, commercial, and industrial facilities. Our certified technicians ensure optimal performance and compliance with industry standards.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-blue-800 to-sky-500 rounded-2xl flex items-center justify-center p-8">
                  <img 
                    src="/images/download (1).jpg" 
                    alt="Mechanical Services" 
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              
              {/* Residential Services Section */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Residential Mechanical Services
                </h3>
                <p className="text-gray-600 mb-4">
                  These services are for private homes and typically involve:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">HVAC Systems</h4>
                      <p className="text-gray-600 text-sm">Installation, maintenance, and repair of heating, ventilation, and air conditioning systems for optimal climate control.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Plumbing Systems</h4>
                      <p className="text-gray-600 text-sm">Installation and repair of water supply lines, drainage systems, fixtures, and water heaters.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Appliance Installation</h4>
                      <p className="text-gray-600 text-sm">Professional installation and hookup of mechanical appliances like water heaters, furnaces, and AC units.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Ductwork Services</h4>
                      <p className="text-gray-600 text-sm">Design, installation, and cleaning of air duct systems for efficient airflow and indoor air quality.</p>
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

export default MechanicalServices;