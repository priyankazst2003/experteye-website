import React, { useState } from 'react';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Project categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'residential', name: 'Residential' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'healthcare', name: 'Healthcare' }
  ];

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Commercial Office Building",
      category: "commercial",
      type: "Electrical Installation",
      location: "Downtown Business District",
      image: "/images/projects/office-building.jpg",
      description: "Complete electrical system installation for 20-story commercial tower."
    },
    {
      id: 2,
      title: "Hospital HVAC Systems",
      category: "healthcare",
      type: "Mechanical Contracting",
      location: "Medical Center Campus",
      image: "/images/projects/hospital-hvac.jpg",
      description: "Advanced HVAC and ventilation systems for critical care facilities."
    },
    {
      id: 3,
      title: "Luxury Residential Complex",
      category: "residential",
      type: "Electrical & Mechanical",
      location: "Uptown Residential Area",
      image: "/images/projects/residential-complex.jpg",
      description: "Integrated electrical and mechanical systems for luxury apartments."
    },
    {
      id: 4,
      title: "Manufacturing Plant",
      category: "industrial",
      type: "Industrial Electrical",
      location: "Industrial Zone",
      image: "/images/projects/manufacturing-plant.jpg",
      description: "Power distribution and control systems for manufacturing facility."
    },
    {
      id: 5,
      title: "Shopping Mall Retrofit",
      category: "commercial",
      type: "Electrical Upgrade",
      location: "City Center Mall",
      image: "/images/projects/shopping-mall.jpg",
      description: "Energy-efficient lighting and electrical system modernization."
    },
    {
      id: 6,
      title: "Medical Center Expansion",
      category: "healthcare",
      type: "Mechanical Systems",
      location: "Healthcare District",
      image: "/images/projects/medical-center.jpg",
      description: "HVAC and plumbing systems for hospital expansion project."
    },
    {
      id: 7,
      title: "Hotel Renovation",
      category: "commercial",
      type: "Electrical & Mechanical",
      location: "Hospitality District",
      image: "/images/projects/hotel-renovation.jpg",
      description: "Complete electrical and mechanical systems renovation."
    },
    {
      id: 8,
      title: "Industrial Warehouse",
      category: "industrial",
      type: "Mechanical Systems",
      location: "Logistics Park",
      image: "/images/projects/industrial-warehouse.jpg",
      description: "Ventilation and climate control systems for storage facility."
    },
    {
      id: 9,
      title: "Office Tower Modernization",
      category: "commercial",
      type: "Electrical Systems",
      location: "Financial District",
      image: "/images/projects/office-tower.jpg",
      description: "Smart building electrical systems and energy management."
    },
    {
      id: 10,
      title: "Apartment Complex",
      category: "residential",
      type: "Mechanical Installation",
      location: "Suburban Community",
      image: "/images/projects/apartment-complex.jpg",
      description: "HVAC and plumbing systems for multi-unit residential building."
    },
    {
      id: 11,
      title: "Research Facility",
      category: "industrial",
      type: "Specialized Systems",
      location: "Technology Park",
      image: "/images/projects/research-facility.jpg",
      description: "Specialized electrical and mechanical systems for research labs."
    },
    {
      id: 12,
      title: "Retail Center",
      category: "commercial",
      type: "Electrical Contracting",
      location: "Shopping District",
      image: "/images/projects/retail-center.jpg",
      description: "Complete electrical infrastructure for retail complex."
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-300">
              Showcasing our expertise in electrical and mechanical contracting across various sectors
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'bg-blue-800 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Project Image */}
                <div className="h-64 bg-gray-200 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300/1e40af/ffffff?text=Project+Image';
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <button className="w-full bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                    View Project Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">150+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">50+</div>
              <div className="text-gray-600">Commercial Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring our electrical and mechanical expertise to your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;