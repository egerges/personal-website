"use client";

import React from "react";
import { motion } from "framer-motion";

import { ContactForm } from "@components/ContactForm";
import { TextGeneratedEffect } from "@components/TextGeneratedEffect";
import Link from "next/link";

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
            <div className="text-center text-gray-500 text-sm m-6">
                <Link href="https://calendly.com/elio-gerges-uio5/30min" target="_blank" className="text-gray-500">Book with Calendly</Link>
            </div>
            {/* <!-- Calendly inline widget begin --> */}
            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/elio-gerges-uio5/30min"
                style={{ minWidth: "320px", height: "700px" }}>
            </div>
            <script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async>
            </script>
            {/* <!-- Calendly inline widget end --> */}

            <div className="text-center text-gray-500 text-sm m-6">
                OR
            </div>

            <ContactForm />
      </motion.section>
    </main>
  );
}
