"use client";

import React from "react";
import { motion } from "framer-motion";

import { TextGeneratedEffect } from "@components/TextGeneratedEffect";
import Button from "@components/Button";
import { SkillsCard } from "@components/SkillsCard";

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
    <section className="relative w-full py-16 sm:py-20 lg:py-24 max-w-[100vw]" aria-labelledby="skills-section-title">
      {/* Minimal Texture */}

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h1
            id="skills-section-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 mb-6"
          >
            <TextGeneratedEffect words="The Tools of My Trade." />
          </h1>
          <motion.p 
            className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Behind every successful consultation is a comprehensive toolkit. Here&apos;s a look at the technologies
            and methodologies I leverage to deliver strategic, impactful solutions for my clients.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SkillsCard title={skill.title} images={skill.images} />
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col items-center gap-6 mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
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
