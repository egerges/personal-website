"use client";

import React from "react";
import { motion } from "framer-motion";

import { WobbleCard } from "@components/WobbleCard";
import { LargeWobbleCard } from "@components/LargeWobbleCard";
import { SmallWobbleCard } from "@components/SmallWobbleCard";
import { LargeWobbleCardWithNoise } from "@components/LargeWobbleCardWithNoise";
import { TextGeneratedEffect } from "@components/TextGeneratedEffect";
import Button from "@components/Button";

interface projects {
  type: string;
  title: string;
  content: string;
  image: string;
  cta: string;
}

const projects: projects[] = [
  {
    type: "large",
    title: "E-Commerce Application with Store Management and eShop",
    content:
      "Built a web and mobile e-commerce platform with robust store management tools, enabling businesses to manage inventory, track orders, and enhance customer engagement seamlessly.",
    image: "/ecommerce.png",
    cta: "Learn More",
  },
  {
    type: "small",
    title: "AI-Based Liveness Detection System",
    content:
      "Developed an AI-powered liveness detection solution to enhance security by verifying user authenticity and reducing fraudulent activities in identity verification processes.",
    image: "",
    cta: "Explore",
  },
  {
    type: "largeWithNoise",
    title: "UChange Community Platform",
    content:
      "Co-founded UChange, a student-driven initiative focused on solving campus challenges through innovation, design thinking, and community collaboration, fostering a culture of empowerment and impact.",
    image: "/uchange.png",
    cta: "See Project",
  },
];

export const FeatureSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto py-16 px-6 text-center"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--blue-primary)] via-purple-500 to-[var(--pink-primary)] drop-shadow-2xl">
          <TextGeneratedEffect words="Crafting Impactful Solutions."/>
        </h1>
        <motion.p 
          className="mt-6 text-base sm:text-lg lg:text-xl text-[var(--color-gray-darker)] max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
            Every project is a story, and every story leaves an impact. Here are the solutions
            I’ve crafted—each one blending creativity, technical expertise, and a drive to deliver
            meaningful results.
        </motion.p>
      </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {projects.map((project, index) => {
            switch (project.type) {
              case "large":
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <WobbleCard containerClassName="col-span-1 lg:col-span-2 hover:shadow-2xl transition-all duration-300">
                    <LargeWobbleCard
                      title={project.title}
                      content={project.content}
                      image={project.image}
                      cta={project.cta}
                    />
                    </WobbleCard>
                  </motion.div>
                );
              case "small":
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <WobbleCard containerClassName="hover:shadow-2xl transition-all duration-300">
                    <SmallWobbleCard
                      title={project.title}
                      content={project.content}
                      cta={project.cta}
                    />
                    </WobbleCard>
                  </motion.div>
                );
              case "largeWithNoise":
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <WobbleCard
                      containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 hover:shadow-2xl transition-all duration-300"
                    >
                    <LargeWobbleCardWithNoise
                      title={project.title}
                      content={project.content}
                      image={project.image}
                      cta={project.cta}
                    />
                    </WobbleCard>
                  </motion.div>
                );
              default:
                return null;
            }
          })}
        </motion.div>
        
        <motion.div 
          className="flex justify-center flex-col items-center gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="mt-4 italic text-[var(--color-gray-darker)] text-center text-lg max-w-2xl">
            Want to see how these solutions came to life?
            <br />
            Dive into the details and discover the stories behind the code.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              text="Start a conversation"
              variant="secondary"
              link="/contact"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
