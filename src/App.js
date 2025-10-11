import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Welcome />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      {/* We'll add footer section next */}
    </div>
  );
}

export default App;