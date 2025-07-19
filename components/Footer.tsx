"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  MapPinIcon,
  GlobeAltIcon,
  BuildingOfficeIcon
} from "@heroicons/react/24/solid";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: "./blog", label: "Blog" },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      aria-labelledby="footer-heading"
    >
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl"></div>
      
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

      {/* Holographic Top Border */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: `linear-gradient(90deg, 
            rgba(6, 254, 250, 0.8) 0%, 
            rgba(59, 130, 246, 0.8) 50%, 
            rgba(139, 92, 246, 0.8) 100%
          )`,
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
        }}
      />

      {/* Scanning Line Effect */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ pointerEvents: "none" }}
      >
        <motion.div
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm"
          animate={{
            y: [-10, 400, -10],
            opacity: [0, 0.8, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          {/* Navigation Links */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 id="footer-heading" className="text-lg font-bold mb-6 text-white relative">
              Navigation
              <motion.div
                className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <motion.li 
                  key={link.href + link.label}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={`/${link.href}`}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm font-medium relative group"
                    aria-label={`Navigate to ${link} page`}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6 text-white relative">
              Contact
              <motion.div
                className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              />
            </h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <EnvelopeIcon className="w-4 h-4 text-white" />
                </motion.div>
                <a
                  href="mailto:info@eliogerges.com"
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm"
                  aria-label="Email Elio Gerges"
                >
                  info@eliogerges.com
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <MapPinIcon className="w-4 h-4 text-white" />
                </motion.div>
                <p className="text-gray-300 text-sm" aria-label="Location information">
                  Los Angeles, California, USA
                </p>
              </motion.li>
            </ul>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6 text-white relative">
              Follow Me
              <motion.div
                className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              />
            </h3>
            <div className="flex space-x-4">
              {[
                {
                  href: "https://www.linkedin.com/in/elio-gerges",
                  label: "LinkedIn",
                  icon: <GlobeAltIcon className="w-5 h-5" />,
                  gradient: "from-cyan-400 to-blue-500",
                },
                {
                  href: "https://github.com/egerges",
                  label: "GitHub",
                  icon: <BuildingOfficeIcon className="w-5 h-5" />,
                  gradient: "from-blue-500 to-purple-500",
                },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.gradient} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 group`}
                  aria-label={`Follow on ${social.label}`}
                  style={{
                    boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  {social.icon}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Legal Section */}
        <motion.div
          className="text-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          
          <motion.p 
            className="mb-6 italic text-gray-300 text-lg"
            animate={{
              textShadow: ["0 0 0px rgba(6, 254, 250, 0)", "0 0 10px rgba(6, 254, 250, 0.3)", "0 0 0px rgba(6, 254, 250, 0)"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Let’s create something amazing together!
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white rounded-xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              aria-label="Contact Elio Gerges"
              style={{
                boxShadow: "0 8px 32px rgba(59, 130, 246, 0.4)",
              }}
            >
              {/* Button shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative z-10">Contact Me</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Footer Legal Info */}
        <motion.div
          className="mt-12 text-center text-sm text-gray-400 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Tech corner accents */}
          <div className="absolute top-0 left-4 w-4 h-4 border-t border-l border-cyan-400/30"></div>
          <div className="absolute top-0 right-4 w-4 h-4 border-t border-r border-cyan-400/30"></div>
          
          <motion.p
            className="font-mono"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            © {currentYear} Elio Gerges. All Rights Reserved.
          </motion.p>
          <p className="mt-3 text-xs">
            By using this website, you agree to the{" "}
            <Link
              href="/privacy"
              className="text-cyan-400 hover:text-cyan-300 underline transition-colors duration-300"
              aria-label="Navigate to Privacy Policy"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms"
              className="text-cyan-400 hover:text-cyan-300 underline transition-colors duration-300"
              aria-label="Navigate to Terms of Service"
            >
              Terms and Conditions
            </Link>
            .
          </p>
          
          {/* Status indicators */}
          <motion.div
            className="mt-4 flex justify-center items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-cyan-400"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs font-mono text-gray-500">SYSTEM_ONLINE</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
