import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What types of electrical services do you offer for residential properties?",
      answer: "We offer comprehensive residential electrical services including wiring and rewiring, lighting installation, panel upgrades, appliance hookups, safety inspections, and emergency repairs. All our services are performed by licensed electricians to ensure safety and compliance with building codes."
    },
    {
      question: "How often should I schedule maintenance for my mechanical systems?",
      answer: "We recommend preventive maintenance for HVAC systems every 6 months (before summer and winter seasons), plumbing systems annually, and electrical systems every 1-2 years. However, the frequency may vary based on system age, usage, and manufacturer recommendations. Our technicians can provide a customized maintenance schedule during your initial consultation."
    },
    {
      question: "Do you provide emergency services and what is your response time?",
      answer: "Yes, we offer 24/7 emergency services for both electrical and mechanical systems. Our typical response time is within 2 hours for urgent emergencies. We prioritize safety-critical issues such as electrical hazards, no power, heating system failures in winter, and AC breakdowns in summer. Our emergency team is always on standby to address critical situations."
    },
    {
      question: "Are your technicians licensed and insured?",
      answer: "Absolutely. All our electricians and mechanical technicians are fully licensed, certified, and insured. We carry comprehensive liability insurance and workers' compensation coverage. Our technicians undergo regular training and certification updates to stay current with the latest industry standards, safety protocols, and technological advancements."
    },
    {
      question: "What is included in your consultation service and how much does it cost?",
      answer: "Our consultation service includes a comprehensive site assessment, system evaluation, energy efficiency analysis, technical recommendations, and project planning. The initial basic consultation is free of charge. For detailed technical feasibility studies or complex project planning, we offer paid consultations starting at $150, which is credited toward any subsequent work you choose to proceed with."
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
              Frequently Asked Questions
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our electrical and mechanical services
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-blue-500 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="w-full h-px bg-gray-200 mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Help Section */}
          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? Please contact our team and we'll be happy to assist you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply" className="bg-sky-400 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Contact Us
                </Link>
                <button className="border border-blue-800 text-blue-800 hover:bg-sky-200 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Call Now: +12345 67890
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;