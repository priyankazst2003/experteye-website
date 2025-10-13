import React from 'react';

const ElectricalServices = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Electrical Services
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional installation, maintenance, repair, and upgrades of electrical systems for residential, commercial, and industrial settings.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-sky-200 rounded-2xl flex items-center justify-center p-8">
                  <img 
                    src="/images/download.jpg" 
                    alt="Electrical Services" 
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">
                Comprehensive Electrical Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Electrical services include installation, maintenance, repair, and upgrades of electrical 
                systems in residential, commercial, and industrial settings. These services are performed 
                by licensed professionals to ensure safety and compliance with building codes.
              </p>
              
              {/* Residential Services Section */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Residential Electrical Services
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
                      <h4 className="font-semibold text-gray-800">Wiring and Rewiring</h4>
                      <p className="text-gray-600 text-sm">Installation of new wiring and replacement of old, faulty, or outdated wiring for safety and efficiency.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Lighting Installation</h4>
                      <p className="text-gray-600 text-sm">Installation of fixtures, ceiling fans, and specialized lighting like landscape or emergency lighting.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Panel Upgrades</h4>
                      <p className="text-gray-600 text-sm">Service and replacement of outdated circuit breaker panels to meet increased power demands.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Appliance Hookups</h4>
                      <p className="text-gray-600 text-sm">Installation of wiring and connections for new home appliances like washers, dryers, and air conditioners.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Safety Inspections</h4>
                      <p className="text-gray-600 text-sm">Regular inspections to identify and mitigate potential electrical hazards.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Emergency Repairs</h4>
                      <p className="text-gray-600 text-sm">Troubleshooting and fixing sudden electrical problems, such as power outages and electrical faults.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105">
                  Schedule Electrical Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalServices;