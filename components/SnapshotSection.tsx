"use client";

import React from "react";
import { motion } from "framer-motion";
import { TextGeneratedEffect } from "@components/TextGeneratedEffect";
import Button from "@components/Button";

const SnapshotSection: React.FC = () => {
  const milestones = [
    {
      year: "2023-Present",
      title: "Full-Stack Developer at Proof of ID",
      description: "Delivered SaaS solutions with a focus on efficiency and innovation.",
    },
    {
      year: "2023",
      title: "Completed Postgraduate Certificate in Web Design and Development",
      description: "Humber College, Toronto",
    },
    {
      year: "2022", 
      title: "University Innovation Fellow at Stanford University",
      description: "Fostered innovation and entrepreneurship.",
    },
    {
      year: "2021-2023",
      title: "Frontend Developer at BitsProof", 
      description: "Enhanced user interface designs and optimized task completion speeds.",
    },
    {
      year: "2021",
      title: "Graduated from Saint Joseph University",
      description: "Earned a BA in Computer Science with a Minor in Business.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-12">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-2xl">
          <TextGeneratedEffect words="Journey Through Time"/>
        </h1>
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          From curious beginnings to crafting innovative solutions, this timeline showcases 
          the key moments that shaped my journey as a developer and entrepreneur.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-white border-opacity-10 shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-blue-400 text-sm font-medium mb-2">
                {milestone.year}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                {milestone.title}
              </h3>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                {milestone.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center flex-col items-center gap-6 mt-16 px-4 sm:px-6 lg:px-8">
        <p className="text-lg italic text-gray-700 leading-relaxed text-center max-w-2xl">
          Have a story to add? Let's collaborate and create the next milestone together.
        </p>
        <Button
          text="Let's create something together"
          variant="secondary"
          link="/contact" 
        />
      </div>
    </section>
  );
};

export default SnapshotSection;