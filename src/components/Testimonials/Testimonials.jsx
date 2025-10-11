import React, { useState } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Harsha",
      role: "Managing Director",
      company: "Tech Solutions Inc.",
      rating: 5,
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum is simply dummy text of the printing and typesetting industry, ever.",
      image: "/images/images (6).jpg"
    },
    {
      id: 2,
      name: "Sharma",
      role: "CEO",
      company: "Construct Pro Ltd.",
      rating: 5,
      content: "Expert Eye delivered exceptional electrical services for our corporate office. Their team was professional, punctual, and the quality of work was outstanding. Highly recommended!",
      image: "/images/images (3).jpg"
    },
    {
      id: 3,
      name: "Raj Kumar",
      role: "Project Manager",
      company: "Metallix Industries",
      rating: 5,
      content: "The metal construction work completed by Expert Eye exceeded our expectations. Their attention to detail and commitment to deadlines made our project successful.",
      image: "/images/images (2).jpg"
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Operations Head",
      company: "Global Builders",
      rating: 5,
      content: "Their manpower outsourcing services helped us scale our operations efficiently. The skilled professionals provided were well-trained and reliable.",
      image: "/images/images.jpg"
    },
    {
      id: 5,
      name: "Anita Patel",
      role: "Director",
      company: "Civil Works Corp",
      rating: 5,
      content: "Expert Eye handled our civil contracting works with utmost professionalism. The project was completed on time and within budget. Great work!",
      image: "/images/images (1).jpg"
    },
    {
      id: 6,
      name: "Sneha Reddy",
      role: "Quality Manager",
      company: "Inspect Pro Services",
      rating: 5,
      content: "The inspection services provided were thorough and detailed. Their reports helped us identify and resolve critical issues in our facility.",
      image: "/images/images (5).jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-sky-500 bg-clip-text text-transparent">
            Testimonials
          </h2>
          
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 relative">
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transition duration-200 hover:bg-gray-50 z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transition duration-200 hover:bg-gray-50 z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonial Content */}
            <div className="text-center">
              {/* Stars Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 italic">
                "{testimonials[currentSlide].content}"
              </p>

              {/* Client Info */}
              <div className="flex flex-col items-center">
                {/* Client Image */}
                <div className="mb-4">
                  <div className="w-18 h-18 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden mx-auto">
                  
                    {
                    <img 
                      src={testimonials[currentSlide].image} 
                      alt={testimonials[currentSlide].name} 
                      className="w-full h-full object-cover"
                    />
                    }
                  </div>
                </div>

                {/* Client Name and Role */}
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-gray-600 font-medium">
                    {testimonials[currentSlide].role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentSlide].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition duration-200 ${
                    index === currentSlide ? 'bg-sky-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;