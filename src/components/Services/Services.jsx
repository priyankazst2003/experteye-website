import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Electrical Contracting",
      image: "/images/s1.png"
    },
    {
      id: 2,
      name: "Metal Construction",
      image: "/images/s2.png"
    },
    {
      id: 3,
      name: "Inspection Services",
      image: "/images/s3.png"
    },
    {
      id: 4,
      name: "Manpower Outsourcing",
      image: "/images/s4.png"
    },
    {
      id: 5,
      name: "Civil Contracting Works",
      image: "/images/s5.png"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Heading with Gradient */}
        <div className="text-center mb-12 md:mb-16  ">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-sky-500 bg-clip-text text-transparent">
            Services
          </h2>
          
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {services.map((service) => (
            <div key={service.id} className="group text-center">
              {/* Service Image */}
              <div className="mb-4">
                  {
                  <img 
                    src={service.image} 
                    alt={service.name}   
                  />
                  }
              </div>
              
              {/* Service Name in Sky Blue */}
              <h3 className="text-lg font-normal text-blue-800 group-hover:text-sky-600 transition duration-200">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;