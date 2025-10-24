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
import MechanicalServices from './Pages/MechanicalServices';
import MaintenanceServices from './Pages/MaintenanceServices';
import ConsultationServices from './Pages/ConsultationServices';
import FAQ from './Pages/FAQ';
import TermsOfUse from './Pages/TermsOfUse';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import AdminLogin from './components/Admin/AdminLogin';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Admin login route without header/footer */}
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          
          {/* All other routes with header/footer */}
          <Route path="*" element={
            <>
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
                
                {/* Services Pages */}
                <Route path="/electrical-services" element={<ElectricalServices />} />
                <Route path="/mechanical-services" element={<MechanicalServices />} />
                <Route path="/maintenance" element={<MaintenanceServices />} />
                <Route path="/consultation" element={<ConsultationServices />} />
                
                {/* Legal Pages */}
                <Route path="/faq" element={<FAQ />} />
                <Route path="/terms-of-use" element={<TermsOfUse />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                
                {/* Contact Page Route */}
                <Route path="/contact" element={<ContactForm />} />
                
                {/* Apply Page Route */}
                <Route path="/apply" element={<ContactForm />} />
              </Routes>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;