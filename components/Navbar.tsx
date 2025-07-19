"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      {/* Floating Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-2" 
            : "py-4"
        }`}
        aria-label="Main Navigation"
      >
        {/* Animated background blur container */}
        <motion.div
          className={`mx-4 sm:mx-6 lg:mx-8 transition-all duration-500 ${
            isScrolled
              ? "bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl"
              : "bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-xl"
          }`}
          style={{
            boxShadow: isScrolled 
              ? "0 8px 32px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)"
              : "0 4px 24px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)"
          }}
        >
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-inherit bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-sm -z-10"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/"
                className="relative group"
                aria-label="Navigate to Home"
              >
                <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Elio Gerges
                </span>
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-pink-500/20 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
            </motion.div>

        {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {links.map((link) => (
              <motion.div
                key={link.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-gray-700 hover:text-white font-medium transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:backdrop-blur-sm group"
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                  {/* Underline animation */}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></span>
                </Link>
              </motion.div>
          ))}
              
          {/* Contact Me Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4"
              >
                <Link
                  href="/contact"
                  className="relative px-6 py-2.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  aria-label="Navigate to Contact Page"
                >
                  {/* Button shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  <span className="relative z-10">Contact Me</span>
                </Link>
              </motion.div>
            </div>

        {/* Mobile Hamburger Menu */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden relative p-2 rounded-xl bg-gradient-to-r from-blue-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="w-6 h-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="w-6 h-6 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile menu panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-xl border-l border-white/20 shadow-2xl z-50 md:hidden"
              style={{
                boxShadow: "-10px 0 50px rgba(0, 0, 0, 0.15)"
              }}
            >
              {/* Menu content */}
              <div className="flex flex-col h-full pt-20 px-8">
                {/* Navigation links */}
                <nav className="flex flex-col space-y-6">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <Link
                        href={link.href}
                        className="relative block text-gray-800 hover:text-blue-600 text-xl font-medium transition-all duration-300 group"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label={`Navigate to ${link.label}`}
                      >
                        <span className="relative z-10">{link.label}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                
                {/* Contact button */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Navigate to Contact Page"
                  >
                    Contact Me
                  </Link>
                </motion.div>
                
                {/* Decorative elements */}
                <div className="flex-1 flex items-end justify-center pb-8">
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full opacity-30"></div>
                </div>
              </div>
              
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 right-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-8 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl"></div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

            aria-label="Mobile Navigation Menu"
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-blue-500 transition"
                onClick={() => setIsMenuOpen(false)}
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </Link>
            ))}
            {/* Contact Me Button */}
            <Link
              href="/contact"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-xl transition"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Navigate to Contact Page"
            >
              Contact Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
