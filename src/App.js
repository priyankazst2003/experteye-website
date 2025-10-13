import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ContactForm from './Pages/ContactForm';
import AboutPage from './Pages/AboutPage';
import ElectricalServices from './Pages/ElectricalServices';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={
            <>
              <Hero />
              <Welcome />
              <About />
              <Services />
              <Testimonials />
              <Contact />
            </>
          } />
          
          {/* About Page Route */}
          <Route path="/about" element={<AboutPage />} />
          
          {/* Electrical Services Page Route */}
          <Route path="/electrical-services" element={<ElectricalServices />} />
          
          {/* Contact Page Route */}
          <Route path="/contact" element={<ContactForm />} />
          
          {/* Other Service Pages (you can create these later) */}
          <Route path="/mechanical-services" element={
            <div className="py-16 text-center">
              <h1 className="text-3xl font-bold">Mechanical Services</h1>
              <p className="text-gray-600 mt-4">This page is under construction.</p>
            </div>
          } />
          
          <Route path="/maintenance" element={
            <div className="py-16 text-center">
              <h1 className="text-3xl font-bold">Maintenance Services</h1>
              <p className="text-gray-600 mt-4">This page is under construction.</p>
            </div>
          } />
          
          <Route path="/consultation" element={
            <div className="py-16 text-center">
              <h1 className="text-3xl font-bold">Consultation Services</h1>
              <p className="text-gray-600 mt-4">This page is under construction.</p>
            </div>
          } />
          
          {/* Apply Page Route */}
          <Route path="/apply" element={
            <div className="py-16 text-center">
              <h1 className="text-3xl font-bold">Apply Now Page</h1>
              <p className="text-gray-600 mt-4">This page is under construction.</p>
            </div>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;