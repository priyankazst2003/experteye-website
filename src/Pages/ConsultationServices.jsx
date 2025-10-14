import React from 'react';

const ConsultationServices = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
              Consultation Services
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-7xl mx-auto">
              Expert consultation services to help you make informed decisions about your electrical and mechanical systems. Our experienced consultants provide tailored solutions, technical advice, and strategic planning for optimal system performance and efficiency.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-blue-800 to-sky-500 rounded-2xl flex items-center justify-center p-8">
                  <img 
                    src="/images/images (8).jpg" 
                    alt="Consultation Services" 
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              
              {/* Consultation Services Section */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Professional Consultation Services
                </h3>
                <p className="text-gray-600 mb-4">
                  Our expert consultation services provide comprehensive guidance and include:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">System Design Consultation</h4>
                      <p className="text-gray-600 text-sm">Expert advice on designing efficient electrical and mechanical systems for new construction or renovations.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Energy Efficiency Analysis</h4>
                      <p className="text-gray-600 text-sm">Comprehensive assessment of your systems to identify energy-saving opportunities and reduce operational costs.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Technical Feasibility Studies</h4>
                      <p className="text-gray-600 text-sm">Detailed analysis of project requirements and technical viability for successful implementation.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Compliance and Code Review</h4>
                      <p className="text-gray-600 text-sm">Ensuring all systems meet local building codes, safety standards, and regulatory requirements.</p>
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

export default ConsultationServices;