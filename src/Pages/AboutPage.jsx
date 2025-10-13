import React from 'react';
import Welcome from '../components/Welcome/Welcome';
import About from '../components/About/About';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Welcome Section */}
      <section id="welcome">
        <Welcome />
      </section>
      
      {/* About Section */}
      <section id="about">
        <About />
      </section>
    </div>
  );
};

export default AboutPage;