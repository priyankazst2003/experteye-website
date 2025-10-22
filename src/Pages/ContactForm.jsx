import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔥 REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_4muab7i', // From EmailJS > Email Services
    TEMPLATE_ID_ORG: 'template_0udbabg', // Template for info@experteye.com
    TEMPLATE_ID_USER: 'template_v9nu2in', // Template for user thank you
    PUBLIC_KEY: '9TIsHV4sTEjMYUrG9' // From EmailJS > Account > API Keys
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const now = new Date();
    const submissionTime = now.toLocaleString();

    console.log('Sending emails with config:', EMAILJS_CONFIG);

    // Send to organization
    const orgResponse = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_ORG,
      {
        from_name: formData.name,
        from_email: formData.email,
        from_address: formData.address || 'Not provided',
        message: formData.message || 'Not provided',
        submission_time: submissionTime
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    console.log('Organization email sent:', orgResponse);

    // Send to user
    const userResponse = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_USER,
      {
        to_name: formData.name,
        to_email: formData.email,
        address: formData.address || 'Not provided',
        message: formData.message || 'Not provided',
        submission_date: now.toLocaleDateString()
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    console.log('User email sent:', userResponse);

    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', address: '', message: '' });

  } catch (error) {
    console.error('Detailed EmailJS Error:', error);
    console.error('Error details:', {
      text: error.text,
      status: error.status,
      serviceId: EMAILJS_CONFIG.SERVICE_ID,
      templateIdOrg: EMAILJS_CONFIG.TEMPLATE_ID_ORG,
      templateIdUser: EMAILJS_CONFIG.TEMPLATE_ID_USER,
      publicKey: EMAILJS_CONFIG.PUBLIC_KEY ? 'Set' : 'Missing'
    });
    alert('Sorry, there was an error sending your message. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <div className="w-20 h-1 bg-blue-800 mx-auto mt-4"></div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Enter your address (optional)"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-vertical"
                  placeholder="Enter your message (optional)"
                ></textarea>
              </div>

              {/* Submit Button - UPDATED */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-800 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {/* Required Fields Note */}
              <p className="text-sm text-gray-500 text-center">
                * Required fields
              </p>
            </form>
          </div>

          {/* Additional Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-blue-50 rounded-lg p-6">
                <svg className="w-8 h-8 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
                <p className="text-gray-600">info@experteye.com</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 rounded-lg p-6">
                <svg className="w-8 h-8 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-600">+12345 67890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;