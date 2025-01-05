"use client";

import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { AcademicCapIcon, BriefcaseIcon, CodeBracketIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";

import { TextGeneratedEffect } from "@components/TextGeneratedEffect";
import Button from "@components/Button";

interface Milestone {
  year: string;
  title: string;
  description: string;
  details: string;
  achievements: string[];
  icon: React.ReactNode;
}

const milestones: Milestone[] = [
  {
    year: "2021",
    title: "Graduated from Saint Joseph University",
    description: "Earned a BA in Computer Science with a Minor in Business.",
    details:
      "Graduated with honors, gaining a strong foundation in programming, algorithms, and business principles.",
    achievements: [
      "Dean's List for 3 consecutive years",
      "Recipient of the Computer Science Excellence Award",
      "Led the university's coding club to victory in a national hackathon",
      "Interned at a local tech startup, developing a web application for real-time collaboration",
    ],
    icon: <AcademicCapIcon className="h-10 w-10 text-pink-500" />,
  },
  {
    year: "2022",
    title: "Transitioned into the Financial Sector",
    description: "Personal Banking Associate at TD Canada Trust.",
    details:
      "Developed excellent organizational and client-facing skills, managing a high volume of tasks.",
    achievements: [
      "Top performer in the region for customer satisfaction",
      "Led a team of 5 associates in a successful client retention initiative",
      "Completed the Canadian Securities Course (CSC) with honors",
      "Developed a financial literacy workshop for local schools",
    ],
    icon: <BriefcaseIcon className="h-10 w-10 text-blue-500" />,
  },
  {
    year: "2023",
    title: "Full-Stack Developer at BitsProof Inc.",
    description: "Delivered cutting-edge ID management solutions.",
    details:
      "Deployed secure web and mobile applications using AWS and GoLang, improving ID processing efficiency by 30%.",
    achievements: [
      "Developed a scalable microservices architecture",
      "Led the implementation of a CI/CD pipeline for automated testing",
      "Mentored 3 junior developers in best practices and coding standards",
      "Secured a patent for an innovative ID verification algorithm",
    ],
    icon: <CodeBracketIcon className="h-10 w-10 text-green-500" />,
  },
  {
    year: "2024",
    title: "Launched Novygen",
    description: "Founded Novygen to empower small businesses.",
    details:
      "Built a SaaS platform focused on digital transformation to help small businesses thrive.",
    achievements: [
      "Secured $1M in seed funding from venture capitalists",
      "Grew the user base to 10,000 businesses in the first year",
      "Won the Best Startup Award at the Tech Innovation Summit",
      "Featured in Forbes for innovative solutions in the SMB sector",
    ],
    icon: <RocketLaunchIcon className="h-10 w-10 text-yellow-500" />,
  },
];

const SnapshotTimeline: React.FC = () => {
  return (
    <div className="relative w-full px-6">
      {/* Header Section */}
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto py-12 px-6"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--blue-primary)] to-[var(--pink-primary)]">
          <TextGeneratedEffect words="Milestones in the Making..."/>
        </h1>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-[var(--color-gray-darker)]">
        From curious beginnings to crafting innovative solutions, this timeline showcases 
        the key moments that shaped my journey as a developer and entrepreneur. Dive into 
        the highlights that define where I've been and where I'm headed.
        </p>
      </motion.div>

      {/* Timeline Section */}
      <div className="relative max-w-5xl mx-auto flex flex-col px-6">
        {/* Left-Aligned Vertical Line */}
        <div className="absolute left-[60px] h-full w-1 bg-gradient-to-b from-blue-500 via-pink-500 to-transparent"></div>

        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className="relative flex items-center gap-8 mb-12"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center bg-gray-800 p-4 rounded-full shadow-lg">
                {milestone.icon}
              </div>
            </div>

            {/* Milestone Content */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="text-gray-800 text-sm text-left h-[100%] sm:max-w-[150px]">
                {milestone.year}
                <h3 className="text-gray-900 text-lg font-semibold">{milestone.title}</h3>
              </span>
              <div>
                <p className="text-gray-700 text-sm text-start">{milestone.description}</p>
                {milestone.achievements.length > 0 && (
                  <ul className="text-gray-500 text-xs mt-2">
                    {milestone.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center gap-1">
                        <span className="text-gray-400">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center flex-col items-center gap-4 mt-6">
        <p className="mt-2 italic text-[var(--color-gray-darker)] text-center">
          Want to add to this Timeline?
          <br />
          Dive into the details and discover the stories behind the code.
        </p>
        <Button text="Let's get in touch" variant="secondary" />
      </div>
    </div>
  );
};

export default SnapshotTimeline;
