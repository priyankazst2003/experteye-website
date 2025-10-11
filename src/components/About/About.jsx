import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Three Sections with Reduced Width */}
          <div className="lg:w-2/5">
            <div className="space-y-4">
              {/* Vision Section */}
              <div className="bg-white p-4 ">
                <div className="flex items-center gap-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                      <img 
                        src="/images/vision.png" 
                        alt="Our Vision" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Section - Indented */}
              <div className="bg-white  p-4  ml-6">
                <div className="flex items-center gap-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                      <img 
                        src="/images/mission.png" 
                        alt="Our Mission" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality Section */}
              <div className="bg-white p-4 ">
                <div className="flex items-center gap-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                      <img 
                        src="/images/quality.png" 
                        alt="Our Quality" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Quality</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - About Us Centered */}
          <div className="lg:w-3/5 flex items-center">
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-sky-500 bg-clip-text text-transparent">
                About Us
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book.It has survived not only five centuries, but also the leap into electronic 
                  typesetting, remaining essentially unchanged.
                </p>
              </div>
              
              {/* Contact Us Button */}
              <div className="mt-8 flex justify-center lg:justify-start">
                <button className="bg-sky-400 text-white px-6 py-3 rounded-tl-2xl rounded-br-2xl hover:bg-blue-200 transition duration-200 font-medium shadow-md hover:shadow-lg flex items-center space-x-2 border border-blue-200">
                  <span>Contact Us</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;