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
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.15) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      {/* Elegant Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/80 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 mb-6">
          <TextGeneratedEffect words="Crafting Impactful Solutions."/>
        </h1>
        <motion.p 
          className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Every project is a story, and every story leaves an impact. Here are the solutions
          I've crafted—each one blending creativity, technical expertise, and a drive to deliver
          meaningful results.
        </motion.p>
      </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
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
                    <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-white/70 backdrop-blur-sm border border-white/50 hover:shadow-2xl hover:bg-white/80 transition-all duration-500">
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
                    <WobbleCard containerClassName="bg-white/70 backdrop-blur-sm border border-white/50 hover:shadow-2xl hover:bg-white/80 transition-all duration-500">
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
                      containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-slate-800 via-blue-900 to-purple-900 hover:shadow-2xl hover:from-slate-700 hover:via-blue-800 hover:to-purple-800 transition-all duration-500"
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
          className="flex flex-col items-center gap-6 mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Want to see how these solutions came to life?
            <br />
            Dive into the details and discover the stories behind the code.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              text="Start a Conversation"
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
