import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
              Privacy Policy
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                At Expert Eye, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our electrical and mechanical services, visit our website, or interact with us.
              </p>
              <p className="text-gray-600">
                By using our services, you consent to the data practices described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
              <p className="text-gray-600 mb-4">
                We may collect the following types of personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Contact details (name, address, email, phone number)</li>
                <li>Property information for service locations</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Service history and maintenance records</li>
                <li>Emergency contact information</li>
                <li>Insurance information when required for claims</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Information</h3>
              <p className="text-gray-600 mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website information</li>
                <li>Device information and operating system</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>To provide and schedule electrical and mechanical services</li>
                <li>To process payments and send invoices</li>
                <li>To communicate about service appointments and updates</li>
                <li>To send important safety notices and maintenance reminders</li>
                <li>To improve our services and customer experience</li>
                <li>To comply with legal and regulatory requirements</li>
                <li>To respond to inquiries and provide customer support</li>
                <li>To send promotional materials (with your consent)</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li><strong>Service Providers:</strong> With trusted third parties who assist us in providing services (e.g., payment processors, scheduling software)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental regulations</li>
                <li><strong>Safety Emergencies:</strong> In emergency situations where safety is concerned</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Insurance Claims:</strong> With insurance companies for claim processing when necessary</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">5. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Encryption of sensitive data during transmission</li>
                <li>Secure storage of physical and digital records</li>
                <li>Access controls and authentication procedures</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection practices</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">6. Data Retention</h2>
              <p className="text-gray-600 mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Specific retention periods include:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Service records: 7 years for warranty and legal purposes</li>
                <li>Financial transactions: 7 years for tax and accounting purposes</li>
                <li>Customer communications: 3 years for service quality purposes</li>
                <li>Inactive accounts: 2 years after last service</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">7. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Restriction:</strong> Request restriction of processing your information</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
              </ul>
              <p className="text-gray-600">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 mb-4">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. You can control cookie preferences through your browser settings.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">9. Third-Party Links</h2>
              <p className="text-gray-600 mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">10. Children's Privacy</h2>
              <p className="text-gray-600 mb-4">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to remove that information.
              </p>
            </div>

            {/* Policy Updates */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new effective date.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 rounded-lg p-6 mt-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-600"><strong>Expert Eye</strong></p>
                <p className="text-gray-600"><strong>Email:</strong> privacy@experteye.com</p>
                <p className="text-gray-600"><strong>Phone:</strong> +12345 67890</p>
                <p className="text-gray-600"><strong>Address:</strong> [Your Company Address]</p>
                <p className="text-gray-600"><strong>Data Protection Officer:</strong> [Name of DPO if applicable]</p>
              </div>
            </div>

            {/* Complaints */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Complaints</h2>
              <p className="text-gray-600">
                If you are not satisfied with our response to any privacy-related concern, you have the right to lodge a complaint with the relevant data protection authority in your jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;