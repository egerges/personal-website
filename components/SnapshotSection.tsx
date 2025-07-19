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
        return "from-blue-600 to-blue-400";
      case "education":
        return "from-purple-600 to-purple-400";
      case "achievement":
        return "from-emerald-600 to-emerald-400";
      default:
        return "from-gray-600 to-gray-400";
    }
  };

  const getTypeIcon = (type: string) => {
    const iconClass = "w-4 h-4 text-white";
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
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.15) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      {/* Elegant Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/80 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/80 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 mb-6">
            <TextGeneratedEffect words="Professional Journey"/>
          </h1>
          <motion.p 
            className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A timeline of growth, innovation, and professional excellence
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-blue-300 via-purple-300 to-blue-300 h-full hidden sm:block" />

          {/* Milestones */}
          <div className="space-y-12 sm:space-y-16">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  className="relative flex items-center justify-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden sm:block">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${getTypeColor(milestone.type)} shadow-lg flex items-center justify-center`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {getTypeIcon(milestone.type)}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full max-w-md mx-auto sm:mx-0 ${
                    isLeft 
                      ? "sm:mr-auto sm:pr-8 lg:pr-16" 
                      : "sm:ml-auto sm:pl-8 lg:pl-16"
                  }`}>
                    <motion.div
                      className="group relative"
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Card Background */}
                      <div className="relative bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                        {/* Gradient Border Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${getTypeColor(milestone.type)} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
                        
                        {/* Mobile Icon */}
                        <div className="flex items-center gap-3 mb-4 sm:hidden">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${getTypeColor(milestone.type)} flex items-center justify-center`}>
                            {getTypeIcon(milestone.type)}
                          </div>
                          <span className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(milestone.type)} rounded-full text-white text-sm font-medium`}>
                            {milestone.year}
                          </span>
                        </div>

                        {/* Year Badge - Desktop */}
                        <div className="hidden sm:block">
                          <motion.span
                            className={`inline-block px-4 py-2 bg-gradient-to-r ${getTypeColor(milestone.type)} rounded-full text-white text-sm font-medium mb-4 shadow-lg`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {milestone.year}
                          </motion.span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-tight">
                          {milestone.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 leading-relaxed mb-4">
                          {milestone.description}
                        </p>

                        {/* Status Indicator */}
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            milestone.status === "active" 
                              ? "bg-emerald-400 shadow-lg shadow-emerald-400/50 animate-pulse" 
                              : "bg-slate-300"
                          }`} />
                          <span className="text-sm text-slate-500 capitalize font-medium">
                            {milestone.status}
                          </span>
                        </div>

                        {/* Subtle Inner Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl pointer-events-none" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="flex flex-col items-center gap-6 mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Ready to add the next chapter to this story?
            <br />
            Let's collaborate and create something exceptional.
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

export default SnapshotSection;