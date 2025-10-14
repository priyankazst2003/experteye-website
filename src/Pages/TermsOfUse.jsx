import React from 'react';

const TermsOfUse = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
              Terms of Use
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                Welcome to Expert Eye. By accessing our website and using our services, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">2. Services Description</h2>
              <p className="text-gray-600 mb-4">
                Expert Eye provides professional electrical and mechanical services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Electrical installation, maintenance, and repair services</li>
                <li>Mechanical system installation and servicing</li>
                <li>HVAC system maintenance and repair</li>
                <li>Plumbing system services</li>
                <li>Preventive maintenance programs</li>
                <li>Emergency repair services</li>
                <li>Technical consultation and feasibility studies</li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Provide accurate and complete information for service requests</li>
                <li>Ensure safe access to service areas for our technicians</li>
                <li>Disclose any known hazards or safety concerns</li>
                <li>Make necessary arrangements for service appointments</li>
                <li>Pay for services rendered as per agreed terms</li>
              </ul>
            </div>

            {/* Service Appointments & Cancellations */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">4. Service Appointments & Cancellations</h2>
              <p className="text-gray-600 mb-4">
                <strong>Scheduling:</strong> Service appointments are scheduled based on availability. We strive to accommodate preferred time slots but cannot guarantee specific times.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Cancellation Policy:</strong> Appointments may be cancelled or rescheduled with at least 24 hours notice. Late cancellations may be subject to a cancellation fee.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Emergency Services:</strong> Emergency service calls are prioritized based on safety criticality and availability.
              </p>
            </div>

            {/* Payments & Billing */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">5. Payments & Billing</h2>
              <p className="text-gray-600 mb-4">
                <strong>Quotes:</strong> Service quotes are valid for 30 days from the date of issue. Final pricing may vary based on actual work required.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Payment Terms:</strong> Payment is due upon completion of services unless otherwise agreed in writing. We accept cash, credit cards, and electronic transfers.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Late Payments:</strong> Accounts not paid within 30 days may be subject to late fees and interest charges.
              </p>
            </div>

            {/* Warranties & Guarantees */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">6. Warranties & Guarantees</h2>
              <p className="text-gray-600 mb-4">
                <strong>Workmanship Warranty:</strong> We provide a 90-day warranty on all workmanship from the date of service completion.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Parts Warranty:</strong> Parts and materials used in our services are covered by manufacturer warranties. We will assist with warranty claims for defective parts.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Warranty Limitations:</strong> Warranties do not cover damage caused by misuse, neglect, unauthorized repairs, or acts of nature.
              </p>
            </div>

            {/* Liability Limitations */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">7. Liability Limitations</h2>
              <p className="text-gray-600 mb-4">
                Expert Eye shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Pre-existing conditions not disclosed before service</li>
                <li>Damage caused by improper use or maintenance after service</li>
                <li>Acts of nature or circumstances beyond our control</li>
                <li>Unauthorized modifications to serviced systems</li>
              </ul>
            </div>

            {/* Safety & Compliance */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">8. Safety & Compliance</h2>
              <p className="text-gray-600 mb-4">
                All services are performed in compliance with applicable building codes, safety standards, and regulatory requirements. Our technicians are licensed, insured, and follow industry best practices for safety.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">9. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content on this website, including text, graphics, logos, and images, is the property of Expert Eye and protected by copyright laws. You may not reproduce, distribute, or use any content without our written permission.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms of Use at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 rounded-lg p-6 mt-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-2">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <p className="text-gray-600 mb-1"><strong>Email:</strong> info@experteye.com</p>
              <p className="text-gray-600 mb-1"><strong>Phone:</strong> +12345 67890</p>
              <p className="text-gray-600"><strong>Address:</strong> [Your Company Address]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;