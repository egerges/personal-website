"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLinkIcon, CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

interface ExpandableCardProps {
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

export const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  shortDescription,
  fullDescription,
  image,
  technologies,
  category,
  year,
  status,
  links
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const statusColors = {
    completed: "from-green-500 to-emerald-500",
    "in-progress": "from-blue-500 to-cyan-500",
    concept: "from-purple-500 to-pink-500"
  };

  const statusLabels = {
    completed: "Completed",
    "in-progress": "In Progress",
    concept: "Concept"
  };

  return (
    <motion.div
      className="relative group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`Expand ${title} project details`}
      onClick={() => setIsExpanded(!isExpanded)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }
      }}
    >
      {/* Card Container with Scaling Animation */}
      <motion.div
        className="relative bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl overflow-hidden shadow-lg origin-center"
        animate={{
          scale: isHovered ? 1.03 : 1,
          rotateY: isHovered ? 2 : 0,
          z: isHovered ? 10 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
        style={{
          transformStyle: "preserve-3d",
          zIndex: isHovered ? 10 : 1,
        }}
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
          style={{ zIndex: -1 }}
        />

        {/* Main Content */}
        <div className="relative z-10">
          {/* Image Section */}
          <div className="relative h-48 md:h-56 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <motion.div
                className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${statusColors[status]} shadow-lg`}
                animate={{
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                {statusLabels[status]}
              </motion.div>
            </div>

            {/* Category & Year */}
            <div className="absolute bottom-4 left-4">
              <motion.div
                className="text-white text-sm font-medium"
                animate={{
                  y: isHovered ? -5 : 0,
                  opacity: isHovered ? 1 : 0.9,
                }}
                transition={{ duration: 0.3 }}
              >
                {category} • {year}
              </motion.div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            {/* Title */}
            <motion.h3
              className="text-xl font-bold text-gray-900 mb-3 line-clamp-2"
              animate={{
                color: isHovered ? "#1e40af" : "#111827",
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>

            {/* Short Description (Always Visible) */}
            <motion.p
              className="text-gray-600 text-sm leading-relaxed mb-4"
              animate={{
                opacity: isExpanded ? 0.7 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {shortDescription}
            </motion.p>

            {/* Expandable Content */}
            <AnimatePresence>
              {(isExpanded || isHovered) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  {/* Full Description */}
                  <motion.p
                    className="text-gray-700 text-sm leading-relaxed mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {fullDescription}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div
                    className="mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs rounded-full border border-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  {links && (
                    <motion.div
                      className="flex gap-3"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {links.demo && (
                        <motion.a
                          href={links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs rounded-lg hover:shadow-lg transition-shadow"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <EyeIcon className="w-3 h-3" />
                          Demo
                        </motion.a>
                      )}
                      {links.github && (
                        <motion.a
                          href={links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-xs rounded-lg hover:shadow-lg transition-shadow"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <CodeBracketIcon className="w-3 h-3" />
                          Code
                        </motion.a>
                      )}
                      {links.details && (
                        <motion.a
                          href={links.details}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-lg hover:shadow-lg transition-shadow"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLinkIcon className="w-3 h-3" />
                          Details
                        </motion.a>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expand Indicator */}
            <motion.div
              className="flex items-center justify-center mt-4 pt-3 border-t border-gray-200"
              animate={{
                opacity: isHovered ? 1 : 0.6,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-xs text-gray-500 flex items-center gap-2"
                animate={{
                  y: isHovered ? -2 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <span>{isExpanded ? "Click to collapse" : "Hover to explore"}</span>
                <motion.div
                  className="w-1 h-1 bg-gray-400 rounded-full"
                  animate={{
                    scale: isHovered ? [1, 1.5, 1] : 1,
                  }}
                  transition={{
                    duration: 1,
                    repeat: isHovered ? Infinity : 0,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Interactive Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 opacity-0"
          style={{
            background: isHovered 
              ? "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))"
              : "transparent",
            padding: "2px",
            borderRadius: "16px",
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};