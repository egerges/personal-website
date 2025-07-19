"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  RocketLaunchIcon, 
  SparklesIcon,
  CalendarIcon,
  CheckBadgeIcon
} from "@heroicons/react/24/solid";

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
    year: "2023-Present",
    title: "Full-Stack Developer at Proof of ID",
    description: "Delivered SaaS solutions with a focus on efficiency and innovation.",
    details: "Optimized applications, reducing render times by 30%, while building scalable software.",
    achievements: ["Reduced render times by 30%.", "Built scalable SaaS software solutions."],
    icon: <BriefcaseIcon className="h-10 w-10 text-green-500" />,
  },
  {
    year: "2023",
    title: "Completed Postgraduate Certificate in Web Design and Development",
    description: "Humber College, Toronto",
    details: "Strengthened skills in web design and multimedia, focusing on front-end and responsive development techniques.",
    achievements: [
      "Learned advanced responsive development techniques.",
      "Specialized in multimedia design.",
    ],
    icon: <AcademicCapIcon className="h-10 w-10 text-blue-500" />,
  },
  {
    year: "2022",
    title: "University Innovation Fellow at Stanford University",
    description: "Fostered innovation and entrepreneurship.",
    details: "Participated in the Stanford UIF program. Organized workshops and developed interdisciplinary projects impacting the university ecosystem.",
    achievements: [
      "Organized workshops on innovation.",
      "Developed impactful interdisciplinary projects.",
    ],
    icon: <SparklesIcon className="h-10 w-10 text-purple-500" />,
  },
  {
    year: "2021-2023",
    title: "Frontend Developer at BitsProof",
    description: "Enhanced user interface designs and optimized task completion speeds.",
    details: "Collaborated with cross-functional teams to improve UI and enhance productivity.",
    achievements: ["Improved UI designs.", "Optimized task completion speeds by 20%."],
    icon: <BriefcaseIcon className="h-10 w-10 text-yellow-500" />,
  },
  {
    year: "2021",
    title: "Graduated from Saint Joseph University",
    description: "Earned a BA in Computer Science with a Minor in Business.",
    details: "Graduated with a strong foundation in programming, algorithms, and business principles. Actively engaged in student initiatives and innovation programs.",
    achievements: [
      "Actively participated in student initiatives and innovation programs.",
    ],
    icon: <AcademicCapIcon className="h-10 w-10 text-pink-500" />,
  },
  {
    year: "2020",
    title: "Full-Stack Developer at CMA CGM",
    description: "Developed a Virtual Business Card management system for HR.",
    details: "Automated workflows and created a seamless interface for employees.",
    achievements: [
      "Automated HR workflows.",
      "Created a virtual business card management system.",
    ],
    icon: <BriefcaseIcon className="h-10 w-10 text-purple-500" />,
  },
  {
    year: "2019",
    title: "Co-Founder and CEO of UChange Community",
    description: "Founded a junior enterprise to address student challenges.",
    details: "Led initiatives, including networking events and mentorship programs, in collaboration with the USJ Alumni Federation.",
    achievements: [
      "Organized mentorship programs.",
      "Strengthened the university community.",
      "Inspired student-led projects.",
    ],
    icon: <RocketLaunchIcon className="h-10 w-10 text-teal-500" />,
  },
  {
    year: "2019",
    title: "Co-Founder of Likalo App",
    description: "Designed and developed a tourism app connecting travelers with local guides.",
    details: "Enabled locals to monetize knowledge while offering tourists authentic cultural experiences.",
    achievements: [
      "Designed a tourism app.",
      "Enabled locals to monetize knowledge.",
      "Provided authentic cultural experiences to tourists.",
    ],
    icon: <RocketLaunchIcon className="h-10 w-10 text-blue-500" />,
  },
  {
    year: "2019",
    title: "Assistant Sales and Project Manager at Netiks International",
    description: "Coordinated project timelines and implemented CI/CD pipelines.",
    details: "Demonstrated teamwork and problem-solving capabilities across multiple projects.",
    achievements: ["Implemented CI/CD pipelines.", "Coordinated project timelines."],
    icon: <BriefcaseIcon className="h-10 w-10 text-orange-500" />,
  },
];

const SnapshotSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden py-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-2xl">
          <TextGeneratedEffect words="Journey Through Time"/>
        </h1>
        <motion.p 
          className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          From curious beginnings to crafting innovative solutions, this timeline showcases 
          the key moments that shaped my journey as a developer and entrepreneur.
        </motion.p>
      </motion.div>

      {/* Timeline Section */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Timeline Line */}
        <div className="absolute left-8 lg:left-1/2 lg:-ml-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full hidden sm:block">
          <div className="absolute inset-0 w-3 bg-gradient-to-b from-blue-400/30 via-purple-400/30 to-pink-400/30 blur-md -ml-1"></div>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 lg:space-y-16">
          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline Node */}
                <div className="relative flex-shrink-0 z-10">
                  {/* Pulsing Animation */}
                  <motion.div
                    className="absolute inset-0 w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-blue-400/20"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                  
                  {/* Icon Container */}
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative text-white">
                      {milestone.icon}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <motion.div 
                  className={`flex-1 bg-white/8 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-white/10 shadow-2xl relative overflow-hidden group ${
                    isEven ? 'lg:mr-8' : 'lg:ml-8'
                  }`}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Gradient Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Year Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <CalendarIcon className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {milestone.year}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                    {milestone.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-4">
                    {milestone.description}
                  </p>
                  
                  {/* Details */}
                  <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-6">
                    {milestone.details}
                  </p>
                  
                  {/* Achievements */}
                  {milestone.achievements.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-blue-300 flex items-center gap-2">
                        <CheckBadgeIcon className="w-4 h-4" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {milestone.achievements.map((achievement, achievementIndex) => (
                          <motion.li 
                            key={achievementIndex} 
                            className="flex items-start gap-3 text-gray-300 text-sm lg:text-base"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: achievementIndex * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Call to Action */}
      <motion.div 
        className="flex justify-center flex-col items-center gap-6 mt-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center max-w-2xl">
          <p className="text-lg italic text-gray-700 leading-relaxed">
            Have a story to add? Let's collaborate and create the next milestone together.
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            text="Let's create something together"
            variant="secondary"
            link="/contact" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SnapshotSection;