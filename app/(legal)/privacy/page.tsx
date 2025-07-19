"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheckIcon, EyeIcon, LockClosedIcon } from "@heroicons/react/24/solid";

const PrivacyPolicy: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
      
      {/* Animated Tech Grid */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 98%, rgba(0, 212, 255, 0.1) 100%),
            linear-gradient(0deg, transparent 98%, rgba(0, 212, 255, 0.1) 100%)
          `,
          backgroundSize: "50px 50px",
          opacity: 0.3,
        }}
      />

      <div className="relative z-10 py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <motion.div
            className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <ShieldCheckIcon className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-6">
            Privacy Policy
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-cyan-300">
            <div className="flex items-center gap-2">
              <EyeIcon className="w-4 h-4" />
              <span className="font-mono text-sm">Effective: January 1, {currentYear}</span>
            </div>
            <div className="flex items-center gap-2">
              <LockClosedIcon className="w-4 h-4" />
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
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10"></div>
          
          <div className="text-gray-100 space-y-8">
        <p>
          Your privacy is important. This Privacy Policy explains how we collect, use, and protect your personal information when you visit the portfolio website of Elio Gerges (&quot;the Website&quot;). By using the Website, you agree to the terms of this Privacy Policy.
        </p>

            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 rounded-2xl p-6 border border-cyan-500/20"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-mono text-sm">1</span>
                Information We Collect
              </h2>
        <p className="mb-4">
          <strong>1.1 Personal Information:</strong> We may collect personal information that you voluntarily provide through the Website, including:
        </p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Messages submitted via the contact form</li>
        </ul>

        <p className="mb-4">
          <strong>1.2 Non-Personal Information:</strong> We may collect non-personal information automatically, such as:
        </p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device type and operating system</li>
          <li>Pages viewed, visit duration, and click behavior</li>
        </ul>

        <p>
          <strong>1.3 Cookies and Similar Technologies:</strong> The Website uses cookies to enhance functionality and user experience.
        </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 rounded-2xl p-6 border border-blue-500/20"
            >
              <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-mono text-sm">2</span>
                How We Use Your Information
              </h2>
        <p className="mb-4">Your information is used for:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Responding to inquiries submitted through the contact form</li>
          <li>Analyzing Website performance to improve functionality</li>
          <li>Enhancing user experience with personalization</li>
        </ul>
        <p>We do not sell or rent your personal data to third parties.</p>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 rounded-2xl p-6 border border-purple-500/20"
            >
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-mono text-sm">3</span>
          3. Legal Basis for Processing Personal Data (GDPR Compliance)
              </h2>
        <p className="mb-4">Under GDPR, we process your data on the following legal bases:</p>
              <ul className="list-disc ml-6 space-y-1">
          <li><strong>Consent:</strong> Explicit consent for data collection (e.g., submitting a contact form).</li>
          <li><strong>Legitimate Interest:</strong> To improve website performance and understand user behavior.</li>
          <li><strong>Legal Obligations:</strong> To comply with applicable laws and regulations.</li>
        </ul>
            </motion.div>

            {/* Continue with remaining sections in similar style */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white/5 rounded-2xl p-6 border border-cyan-500/20"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-mono text-sm">4</span>
                How We Share Your Information
              </h2>
        <p className="mb-4">We only share your information in limited circumstances:</p>
              <ul className="list-disc ml-6 space-y-1">
          <li><strong>Service Providers:</strong> Trusted third-party services for hosting, analytics, or email delivery.</li>
          <li><strong>Legal Compliance:</strong> When required by law or regulatory authorities.</li>
          <li><strong>Business Transfers:</strong> In case of a website transfer or sale.</li>
        </ul>
            </motion.div>

            {/* Remaining sections with similar styling pattern */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-mono text-sm">5</span>
                Your Privacy Rights
              </h2>
        <h3 className="text-xl font-semibold mt-6 text-cyan-300">5.1 GDPR Rights (EU Visitors)</h3>
        <p className="mb-4">
          EU residents have the right to access, correct, delete, restrict processing, and more. Contact us at <a href="mailto:legal@eliogerges.com" className="text-blue-500 underline">legal@eliogerges.com</a> to exercise these rights.
        </p>

        <h3 className="text-xl font-semibold mt-6 text-cyan-300">5.2 CCPA Rights (California Residents)</h3>
        <p className="mb-4">
          California residents have the right to know, delete, and opt-out of data collection. Submit requests at <a href="mailto:legal@eliogerges.com" className="text-blue-500 underline">legal@eliogerges.com</a>.
        </p>

        <h3 className="text-xl font-semibold mt-6 text-cyan-300">5.3 Dubai and Lebanon</h3>
        <p className="mb-4">
          Visitors may request access, correction, or deletion of personal information by contacting <a href="mailto:legal@eliogerges.com" className="text-blue-500 underline">legal@eliogerges.com</a>.
        </p>

        <h2 className="text-xl font-semibold mt-8 text-purple-400">6. Cookies and Tracking Technologies</h2>
        <p className="mb-4">We use cookies to improve your experience. Manage cookies through your browser settings.</p>

        <h2 className="text-xl font-semibold mt-8 text-cyan-400">7. Data Retention</h2>
        <p className="mb-4">Personal data is retained as long as necessary for outlined purposes or required by law.</p>

        <h2 className="text-xl font-semibold mt-8 text-blue-400">8. Data Security</h2>
        <p className="mb-4">We implement measures to protect your data, including encryption and regular updates.</p>

        <h2 className="text-xl font-semibold mt-8 text-purple-400">9. Contact Us</h2>
        <p className="mb-4">
          For questions, contact us at:
          <br />
                <strong>Email:</strong> <a href="mailto:legal@eliogerges.com" className="text-cyan-400 underline hover:text-cyan-300 transition-colors">legal@eliogerges.com</a>
          <br />
          <strong>Address:</strong> California, US
        </p>
            </div>
          </div>
        </motion.div>

        <motion.p 
          className="mt-12 text-center text-cyan-300 font-mono"
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

export default PrivacyPolicy;