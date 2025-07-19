"use client";

import React from "react";
import { motion } from "framer-motion";

import { ExpandableCard } from "@components/ExpandableCard";
import { TextGeneratedEffect } from "@components/TextGeneratedEffect";
import Button from "@components/Button";

interface Project {
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  category: string;
  year: string;
  status: "completed" | "in-progress" | "concept";
  links?: {
    demo?: string;
    github?: string;
    details?: string;
  };
}

const projects: Project[] = [
  {
    title: "E-Commerce Application with Store Management and eShop",
    shortDescription: "Full-stack e-commerce platform with comprehensive management tools",
    fullDescription: "Built a complete web and mobile e-commerce platform with robust store management tools, enabling businesses to manage inventory, track orders, process payments, and enhance customer engagement seamlessly. Features include real-time analytics, automated notifications, and multi-vendor support.",
    image: "/ecommerce.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "React Native"],
    category: "E-Commerce",
    year: "2023",
    status: "completed",
    links: {
      demo: "#",
      github: "#",
      details: "#"
    }
  },
  {
    title: "AI-Based Liveness Detection System",
    shortDescription: "AI-powered security solution for identity verification",
    fullDescription: "Developed an advanced AI-powered liveness detection solution using computer vision and machine learning to enhance security by verifying user authenticity and reducing fraudulent activities in identity verification processes. Implemented real-time face analysis with 99.7% accuracy.",
    image: "/hero.png", // Using available image as placeholder
    technologies: ["Python", "TensorFlow", "OpenCV", "AWS Rekognition", "FastAPI"],
    category: "AI/Security",
    year: "2023",
    status: "completed",
    links: {
      details: "#"
    }
  },
  {
    title: "UChange Community Platform",
    shortDescription: "Student-driven innovation platform for campus challenges",
    fullDescription: "Co-founded UChange, a comprehensive student-driven initiative and platform focused on solving campus challenges through innovation, design thinking, and community collaboration. The platform facilitates project collaboration, mentorship matching, and resource sharing, fostering a culture of empowerment and meaningful impact across universities.",
    image: "/uchange.png",
    technologies: ["Vue.js", "Firebase", "Node.js", "Socket.io", "Figma"],
    category: "Community",
    year: "2022",
    status: "completed",
    links: {
      demo: "#",
      details: "#"
    }
  },
  {
    title: "Real-Time Analytics Dashboard",
    shortDescription: "Interactive dashboard for business intelligence and data visualization",
    fullDescription: "Created a comprehensive real-time analytics dashboard that processes and visualizes complex business data streams. Features interactive charts, customizable widgets, real-time notifications, and automated reporting capabilities to help businesses make data-driven decisions.",
    image: "/hero.png", // Using available image as placeholder
    technologies: ["React", "D3.js", "WebSockets", "PostgreSQL", "Docker"],
    category: "Data Analytics",
    year: "2023",
    status: "in-progress",
    links: {
      github: "#"
    }
  },
];

export const FeatureSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24">
      {/* Subtle Background Pattern */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <ExpandableCard
                title={project.title}
                shortDescription={project.shortDescription}
                fullDescription={project.fullDescription}
                image={project.image}
                technologies={project.technologies}
                category={project.category}
                year={project.year}
                status={project.status}
                links={project.links}
              />
            </motion.div>
          ))}
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
