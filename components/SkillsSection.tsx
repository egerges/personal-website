"use client";

import React from "react";
import { motion } from "framer-motion";

import { InfiniteMovingSkills } from "@components/InfiniteMovingSkills";
import { TextGeneratedEffect } from "@components/TextGeneratedEffect";
import Button from "@components/Button";

export const SkillsSection: React.FC = () => {
  const skills = [
    {
      title: "Frontend Development",
      images: [
        { src: "/icons/html5.png", alt: "HTML5" },
        { src: "/icons/css3.png", alt: "CSS3" },
        { src: "/icons/js.png", alt: "JavaScript" },
        { src: "/icons/ts.png", alt: "TypeScript" },
        { src: "/icons/react.png", alt: "React" },
        { src: "/icons/vue.png", alt: "Vue.js" },
        { src: "/icons/next.png", alt: "Next.js" },
      ],
    },
    {
      title: "Backend Development",
      images: [
        { src: "/icons/node.png", alt: "Node.js" },
        { src: "/icons/go.png", alt: "GoLang" },
        { src: "/icons/java.png", alt: "Java" },
        { src: "/icons/ts.png", alt: "TypeScript (Backend)" },
        { src: "/icons/js.png", alt: "JavaScript (Backend)" },
      ],
    },
    {
      title: "Database Management",
      images: [
        { src: "/icons/mysql.png", alt: "MySQL" },
        { src: "/icons/postgres.png", alt: "PostgreSQL" },
        { src: "/icons/mongo.png", alt: "MongoDB" },
      ],
    },
    {
      title: "Content Management",
      images: [
        { src: "/icons/sanity.webp", alt: "Sanity" },
        { src: "/icons/contentful.jpeg", alt: "Contentful" },
      ],
    },
    {
      title: "Cloud & DevOps",
      images: [
        { src: "/icons/aws.png", alt: "AWS" },
        { src: "/icons/docker.png", alt: "Docker" },
        { src: "/icons/cloud.png", alt: "Cloud Services" },
      ],
    },
    {
      title: "Collaboration & Tools",
      images: [
        { src: "/icons/git.png", alt: "Git" },
        { src: "/icons/github.png", alt: "GitHub" },
        { src: "/icons/jira.png", alt: "Jira" },
        { src: "/icons/confluence.png", alt: "Confluence" },
      ],
    },
    {
      title: "Mobile Development",
      images: [
        { src: "/icons/flutter.png", alt: "Flutter" },
        { src: "/icons/android.png", alt: "Android Studio" },
      ],
    },
    {
      title: "Computer Vision",
      images: [
        { src: "/icons/rekognition.png", alt: "AWS Rekognition" },
        { src: "/icons/opencv.png", alt: "OpenCV" }
      ],
    },
    {
      title: "Testing & Optimization",
      images: [
        { src: "/icons/testing.png", alt: "Testing Frameworks" },
        { src: "/icons/responsive.webp", alt: "Responsive Design" },
      ],
    },
  ];

  return (
    <section className="py-12 max-w-[100vw]" aria-labelledby="skills-section-title">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto py-16 text-center"
        >
          <h1
            id="skills-section-title"
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--blue-primary)] via-purple-500 to-[var(--pink-primary)] drop-shadow-2xl"
          >
            <TextGeneratedEffect words="The Tools of My Trade." />
          </h1>
          <motion.p 
            className="mt-6 text-base sm:text-lg lg:text-xl text-[var(--color-gray-darker)] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Behind every great project is a well-equipped toolbox. Here’s a look at the skills
            and technologies I’ve honed to turn ideas into functional, impactful solutions.
          </motion.p>
        </motion.div>

        {/* Infinite Skills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-xl"></div>
          <InfiniteMovingSkills skills={skills} direction="right" speed="fast" />
        </motion.div>

        {/* Buttons */}
        <motion.div 
          className="flex justify-center flex-col items-center gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="mt-4 italic text-[var(--color-gray-darker)] text-center text-lg max-w-2xl">
            Curious about how these skills translate into results?
            <br />
            Let’s collaborate and build something incredible.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button text="Let's Collaborate" variant="secondary" link="/contact" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
