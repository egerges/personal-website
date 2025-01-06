"use client";

import React from "react";
import { motion } from "framer-motion";

import { ContactForm } from "@components/ContactForm";
import { TextGeneratedEffect } from "@components/TextGeneratedEffect";

export default function ContactPage() {
  return (
    <main className="min-h-screen mt-16">
      <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-12 px-5 md:px-0 text-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--blue-primary)] to-[var(--pink-primary)]">
            <TextGeneratedEffect words="Contact Me!"/>
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-[var(--color-gray-darker)]">
            Have a question or want to work together? Fill out the form below and I'll get back to you.
          </p>
        </motion.section>
      <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto">
        <ContactForm />
      </motion.section>
    </main>
  );
}
