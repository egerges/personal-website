"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BriefcaseIcon, 
  AcademicCapIcon, 
  TrophyIcon,
  StarIcon 
} from "@heroicons/react/24/solid";

import { TextGeneratedEffect } from "@components/TextGeneratedEffect";
import Button from "@components/Button";

const SnapshotSection: React.FC = () => {
  const milestones = [
    {
      year: "2023-Present",
      title: "Full-Stack Developer at Proof of ID",
      description: "Delivered SaaS solutions with a focus on efficiency and innovation.",
      type: "work",
      status: "active"
    },
    {
      year: "2023",
      title: "Completed Postgraduate Certificate in Web Design and Development",
      description: "Humber College, Toronto",
      type: "education",
      status: "completed"
    },
    {
      year: "2022", 
      title: "University Innovation Fellow at Stanford University",
      description: "Fostered innovation and entrepreneurship.",
      type: "achievement",
      status: "completed"
    },
    {
      year: "2021-2023",
      title: "Frontend Developer at BitsProof", 
      description: "Enhanced user interface designs and optimized task completion speeds.",
      type: "work",
      status: "completed"
    },
    {
      year: "2021",
      title: "Graduated from Saint Joseph University",
      description: "Earned a BA in Computer Science with a Minor in Business.",
      type: "education",
      status: "completed"
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "from-blue-500 to-cyan-400";
      case "education":
        return "from-purple-500 to-pink-400";
      case "achievement":
        return "from-green-500 to-emerald-400";
      default:
        return "from-gray-500 to-slate-400";
    }
  };

  const getTypeIcon = (type: string) => {
    const iconClass = "w-3 h-3 text-white";
    switch (type) {
      case "work":
        return <BriefcaseIcon className={iconClass} />;
      case "education":
        return <AcademicCapIcon className={iconClass} />;
      case "achievement":
        return <TrophyIcon className={iconClass} />;
      default:
        return <StarIcon className={iconClass} />;
    }
  };

  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-small pointer-events-none" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-10 left-4 sm:top-20 sm:left-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl sm:blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full blur-2xl sm:blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-2xl mb-4 sm:mb-6 lg:mb-8">
            <TextGeneratedEffect words="Neural Journey Timeline"/>
          </h1>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Mapping the synapses of innovation through time and space
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Beam */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 shadow-lg shadow-blue-500/50 hidden sm:block"
            style={{ height: "100%" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Milestones */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  className="relative flex items-center justify-center sm:justify-start lg:justify-center"
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden sm:block lg:block"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r ${getTypeColor(milestone.type)} shadow-lg relative`}>
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${getTypeColor(milestone.type)} opacity-30 blur-lg`}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      />
                      <div className="absolute inset-1 sm:inset-2 bg-slate-900 rounded-full flex items-center justify-center text-xs">
                        {getTypeIcon(milestone.type)}
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className={`w-full max-w-sm sm:max-w-md px-4 sm:px-0 ${
                      isLeft 
                        ? "sm:mr-auto sm:pr-8 lg:pr-16" 
                        : "sm:ml-auto sm:pl-8 lg:pl-16"
                    }`}
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: window.innerWidth >= 1024 ? (isLeft ? 5 : -5) : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative group">
                      {/* Glowing Border */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${getTypeColor(milestone.type)} rounded-2xl opacity-30 blur-lg group-hover:opacity-60 transition-opacity duration-300`} />
                      
                      {/* Card Content */}
                      <div className="relative bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl">
                        {/* Year Badge */}
                        <motion.div
                          className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r ${getTypeColor(milestone.type)} rounded-full text-white text-xs sm:text-sm font-bold mb-3 sm:mb-4 shadow-lg`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {milestone.year}
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                          {milestone.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4">
                          {milestone.description}
                        </p>

                        {/* Status Indicator */}
                        <div className="flex items-center gap-2">
                          <motion.div
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                              milestone.status === "active" 
                                ? "bg-green-400 shadow-lg shadow-green-400/50" 
                                : "bg-gray-400"
                            }`}
                            animate={milestone.status === "active" ? {
                              opacity: [1, 0.3, 1],
                            } : {}}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          />
                          <span className="text-xs sm:text-sm text-gray-400 capitalize">
                            {milestone.status}
                          </span>
                        </div>

                        {/* Holographic Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl pointer-events-none" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="flex flex-col items-center gap-6 sm:gap-8 mt-12 sm:mt-16 lg:mt-20 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl relative z-10"
              animate={{
                textShadow: [
                  "0 0 10px rgba(59, 130, 246, 0.5)",
                  "0 0 20px rgba(147, 51, 234, 0.5)",
                  "0 0 10px rgba(59, 130, 246, 0.5)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Ready to add the next chapter to this neural pathway?
              <br />
              Let's architect the future together.
            </motion.p>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl -z-10" />
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              text="Initialize Connection"
              variant="secondary"
              link="/contact" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SnapshotSection;