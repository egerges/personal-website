'use client';

import React from "react";
import { motion } from 'framer-motion';

export default function Loading() {
    return (
      <section className="py-20 text-center">
        <motion.div
          className="relative inline-block w-24 h-24"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatType: 'reverse' }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-purple-600 opacity-70 blur-xl"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-200 to-blue-300 opacity-60"></div>
        </motion.div>
      </section>
    );
  }
