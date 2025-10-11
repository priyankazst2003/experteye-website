import React from 'react';

const Welcome = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side - Image with White Container */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <img 
                src="/images/welcome.jpg" 
                alt="Expert Eye Team" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="md:w-1/2 md:pl-8">
            {/* Gradient Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-sky-500 bg-clip-text text-transparent">
              Welcome to Expert Eye
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book.
              </p>
              <p>
                It has survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;