"use client";

import React from "react";
import { motion } from "framer-motion";
import { DocumentTextIcon, ScaleIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

const TermsAndConditions: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <motion.div
            className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <ScaleIcon className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 mb-6">
            Terms and Conditions
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-purple-300">
            <div className="flex items-center gap-2">
              <DocumentTextIcon className="w-4 h-4" />
              <span className="font-mono text-sm">Effective: January 1, {currentYear}</span>
            </div>
            <div className="flex items-center gap-2">
              <GlobeAltIcon className="w-4 h-4" />
              <span className="font-mono text-sm">Updated: January 1, {currentYear}</span>
            </div>
          </div>
        </motion.div>

        {/* Content Container */}
        <motion.div
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl blur-xl -z-10"></div>
          
          <div className="text-gray-800 space-y-8">
        <p>
          Welcome to the personal portfolio website of Elio Gerges ("the Website"). By accessing or using this Website, you agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using the Website.
        </p>

            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 rounded-2xl p-6 border border-purple-500/20"
            >
              <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-mono text-sm">1</span>
                Website Use
              </h2>
        <h3 className="text-xl font-semibold mb-3 text-pink-300">1.1 Purpose</h3>
        <p>This Website is intended to showcase the professional portfolio of Elio Gerges, including information about his projects, skills, and contact details.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-pink-300">1.2 Restrictions</h3>
        <p className="mb-4">By using the Website, you agree not to:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Use the Website for any unlawful purpose.</li>
          <li>Attempt to disrupt the functionality of the Website through hacking, phishing, or malware.</li>
          <li>Copy, distribute, or reproduce any content without prior permission.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-pink-300">1.3 Eligibility</h3>
        <p>You must be at least 13 years old to access or use this Website.</p>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 rounded-2xl p-6 border border-blue-500/20"
            >
              <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-mono text-sm">2</span>
                Intellectual Property
              </h2>
        <h3 className="text-xl font-semibold mb-3 text-cyan-300">2.1 Ownership</h3>
        <p>All content on this Website, including but not limited to text, images, graphics, and code, is the intellectual property of Elio Gerges unless otherwise stated.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-cyan-300">2.2 Limited License</h3>
        <p>You are granted a limited, non-exclusive, non-transferable license to access and view the Website for personal, non-commercial purposes.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-cyan-300">2.3 Prohibited Actions</h3>
              <ul className="list-disc ml-6 space-y-1">
          <li>Use content for commercial purposes without explicit permission.</li>
          <li>Modify, distribute, or republish any materials without prior consent.</li>
        </ul>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 rounded-2xl p-6 border border-cyan-500/20"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-mono text-sm">3</span>
                Privacy
              </h2>
        <p>Your privacy is important to us. Please review our <a href="/privacy" className="text-cyan-400 underline hover:text-cyan-300 transition-colors">Privacy Policy</a> to understand how your information is collected, used, and protected while using this Website.</p>
            </motion.div>

            {/* Continue with remaining sections */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-mono text-sm">4</span>
                Disclaimer of Warranties
              </h2>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-pink-300">4.1 "As-Is" Basis</h3>
        <p>This Website is provided on an "as-is" and "as-available" basis. Elio Gerges makes no representations or warranties of any kind regarding the Website or its content.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-pink-300">4.2 No Guarantee</h3>
        <p>While efforts are made to ensure the accuracy and reliability of the content, no guarantees are provided regarding the completeness, accuracy, or suitability of the information.</p>

        <h2 className="text-xl font-semibold mt-8 text-blue-400">5. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Elio Gerges shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of or inability to use the Website.</p>

        <h2 className="text-xl font-semibold mt-8 text-cyan-400">6. Third-Party Links</h2>
        <p>The Website may include links to external websites for informational purposes. These links are provided as a convenience, and Elio Gerges is not responsible for the content or policies of third-party websites. Use these links at your own discretion.</p>

        <h2 className="text-xl font-semibold mt-8 text-purple-400">7. User Contributions</h2>
        <h3 className="text-lg font-semibold mt-4 text-pink-300">7.1 Submissions</h3>
        <p>If you submit any content (e.g., contact form inquiries), you grant Elio Gerges a non-exclusive, royalty-free, worldwide license to use, reproduce, and display the content for the intended purpose.</p>

        <h3 className="text-lg font-semibold mt-4 text-pink-300">7.2 Prohibited Content</h3>
        <p className="mb-2">You may not submit content that is:</p>
              <ul className="list-disc ml-6 space-y-1">
          <li>Unlawful, abusive, defamatory, or obscene.</li>
          <li>Violates intellectual property rights.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 text-cyan-400">8. Modifications to the Website</h2>
        <p>Elio Gerges reserves the right to modify, suspend, or discontinue any part of the Website at any time without notice.</p>

        <h2 className="text-xl font-semibold mt-8 text-blue-400">9. Termination</h2>
        <p>Elio Gerges reserves the right to terminate or suspend access to the Website for users who violate these Terms and Conditions or engage in prohibited conduct.</p>

        <h2 className="text-xl font-semibold mt-8 text-purple-400">10. Governing Law</h2>
        <h3 className="text-lg font-semibold mt-4 text-pink-300">10.1 Jurisdiction</h3>
        <p>These Terms and Conditions are governed by the laws of California, US. Any disputes shall be resolved in the courts of California.</p>

        <h3 className="text-lg font-semibold mt-4 text-pink-300">10.2 International Use</h3>
        <p>If you are accessing the Website from outside the US, you are responsible for compliance with local laws.</p>

        <h2 className="text-xl font-semibold mt-8 text-cyan-400">11. Indemnification</h2>
        <p>You agree to indemnify and hold harmless Elio Gerges from any claims, damages, or expenses (including legal fees) arising out of your use of the Website or violation of these Terms and Conditions.</p>

        <h2 className="text-xl font-semibold mt-8 text-blue-400">12. Changes to Terms and Conditions</h2>
        <p>Elio Gerges may update these Terms and Conditions periodically. Changes will be posted with a new "Effective Date," and continued use of the Website constitutes acceptance of the updated Terms.</p>

        <h2 className="text-xl font-semibold mt-8 text-purple-400">13. Contact Information</h2>
        <p className="mb-4">
          For questions or concerns about these Terms and Conditions, please contact:
          <br />
          <strong>Email:</strong> <a href="mailto:legal@eliogerges.com" className="text-blue-600 underline hover:text-blue-500 transition-colors">legal@eliogerges.com</a>
          <br />
          <strong>Address:</strong> California, US
        </p>
            </div>
          </div>
        </motion.div>

        <motion.p 
          className="mt-12 text-center text-purple-300 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          © {currentYear} Elio Gerges. All Rights Reserved.
        </motion.p>
      </div>
    </main>
  );
};

export default TermsAndConditions;