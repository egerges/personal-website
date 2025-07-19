"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

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
    completed: "from-emerald-400 to-cyan-400",
    "in-progress": "from-blue-400 to-cyan-400",
    concept: "from-purple-400 to-pink-400"
  };

  const statusLabels = {
    completed: "OPERATIONAL",
    "in-progress": "DEVELOPING",
    concept: "PROTOTYPE"
  };

  const statusGlow = {
    completed: "rgba(16, 185, 129, 0.5)",
    "in-progress": "rgba(59, 130, 246, 0.5)",
    concept: "rgba(168, 85, 247, 0.5)"
  };

  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden"
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
      whileHover={{ 
        scale: 1.02,
        rotateX: 2,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Futuristic Container */}
      <div className="relative bg-slate-900/20 rounded-3xl overflow-hidden border border-slate-200/10">
        {/* Animated Tech Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isHovered ? [
              "linear-gradient(45deg, rgba(0, 212, 255, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)",
              "linear-gradient(45deg, rgba(139, 92, 246, 0.05) 0%, rgba(6, 254, 250, 0.05) 100%)",
              "linear-gradient(45deg, rgba(6, 254, 250, 0.05) 0%, rgba(0, 212, 255, 0.05) 100%)"
            ] : "linear-gradient(45deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.02) 100%)"
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Circuit Pattern Overlay */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 95%, rgba(0, 212, 255, 0.3) 96%, transparent 97%),
              linear-gradient(0deg, transparent 95%, rgba(0, 212, 255, 0.3) 96%, transparent 97%)
            `,
            backgroundSize: "30px 30px",
          }}
          animate={{
            backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : ["0% 0%"],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Holographic Glass Layer */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(255, 255, 255, 0.1) 0%,
                rgba(255, 255, 255, 0.05) 50%,
                rgba(0, 212, 255, 0.08) 100%
              )
            `,
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
          }}
        />

        {/* Neon Border Animation */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `
              linear-gradient(45deg, 
                transparent 30%, 
                rgba(0, 212, 255, 0.4) 50%, 
                transparent 70%
              )
            `,
            padding: "1px",
          }}
          animate={{
            rotate: isHovered ? [0, 360] : 0,
            opacity: isHovered ? [0.3, 0.8, 0.3] : 0.3,
          }}
          transition={{ 
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-full h-full rounded-3xl bg-white/80 backdrop-blur-xl" />
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Image Section with Holographic Effect */}
          <div className="relative h-48 md:h-56 overflow-hidden rounded-t-3xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
            
            {/* Holographic Overlay */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(45deg, 
                    rgba(0, 212, 255, 0.1) 0%, 
                    transparent 50%, 
                    rgba(139, 92, 246, 0.1) 100%
                  )
                `,
              }}
              animate={{
                opacity: isHovered ? [0.3, 0.7, 0.3] : 0.2,
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Scanning Line Effect */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              style={{ pointerEvents: "none" }}
            >
              <motion.div
                className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm"
                animate={{
                  y: isHovered ? [-10, 240, -10] : -10,
                  opacity: isHovered ? [0, 1, 0] : 0,
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            {/* Futuristic Status Badge */}
            <div className="absolute top-4 right-4">
              <motion.div
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold text-white bg-gradient-to-r ${statusColors[status]} backdrop-blur-sm border border-white/20`}
                animate={{
                  scale: isHovered ? [1, 1.05, 1] : 1,
                  boxShadow: isHovered ? 
                    `0 0 20px ${statusGlow[status]}, 0 0 40px ${statusGlow[status]}30` : 
                    "0 4px 15px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {statusLabels[status]}
              </motion.div>
            </div>

            {/* Tech Category & Year */}
            <div className="absolute bottom-4 left-4">
              <motion.div
                className="flex items-center gap-2 text-white font-mono text-sm backdrop-blur-sm bg-black/30 px-3 py-1 rounded-lg border border-cyan-400/30"
                animate={{
                  borderColor: isHovered ? "rgba(6, 254, 250, 0.6)" : "rgba(6, 254, 250, 0.3)",
                  boxShadow: isHovered ? "0 0 15px rgba(6, 254, 250, 0.3)" : "none"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-cyan-400"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>{category}</span>
                <span className="text-cyan-300">•</span>
                <span>{year}</span>
              </motion.div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-4">
            {/* Futuristic Title */}
            <motion.h3
              className="text-xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent"
              animate={{
                textShadow: isHovered ? 
                  "0 0 20px rgba(0, 212, 255, 0.3)" : 
                  "none"
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>

            {/* Short Description */}
            <motion.p
              className="text-slate-600 text-sm leading-relaxed"
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
                  className="overflow-hidden space-y-4"
                >
                  {/* Full Description */}
                  <motion.p
                    className="text-slate-700 text-sm leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {fullDescription}
                  </motion.p>

                  {/* Futuristic Tech Stack */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="text-xs font-mono font-semibold text-cyan-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <motion.div
                        className="w-2 h-2 rounded-full bg-cyan-400"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-slate-100 to-blue-50 text-slate-700 text-xs rounded-full border border-cyan-200/50 font-mono"
                          whileHover={{ 
                            scale: 1.05,
                            borderColor: "rgba(6, 254, 250, 0.5)",
                            boxShadow: "0 0 10px rgba(6, 254, 250, 0.2)"
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Futuristic Action Buttons */}
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
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs rounded-xl font-mono font-medium border border-cyan-400/50 backdrop-blur-sm"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <EyeIcon className="w-3 h-3" />
                          DEMO
                        </motion.a>
                      )}
                      {links.github && (
                        <motion.a
                          href={links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-900 text-white text-xs rounded-xl font-mono font-medium border border-slate-500/50 backdrop-blur-sm"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(71, 85, 105, 0.5)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <CodeBracketIcon className="w-3 h-3" />
                          CODE
                        </motion.a>
                      )}
                      {links.details && (
                        <motion.a
                          href={links.details}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-xl font-mono font-medium border border-purple-400/50 backdrop-blur-sm"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                          DATA
                        </motion.a>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Futuristic Interaction Indicator */}
            <motion.div
              className="flex items-center justify-center pt-3 border-t border-slate-200/20"
              animate={{
                opacity: isHovered ? 1 : 0.6,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-xs text-slate-500 flex items-center gap-3 font-mono"
                animate={{
                  y: isHovered ? -2 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <span>{isExpanded ? "COLLAPSE_DATA" : "SCAN_FOR_INFO"}</span>
                <motion.div
                  className="flex gap-1"
                  animate={{
                    opacity: isHovered ? [0.3, 1, 0.3] : 0.5,
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                  <div className="w-1 h-1 bg-blue-400 rounded-full" />
                  <div className="w-1 h-1 bg-purple-400 rounded-full" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Corner Tech Accents */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-400/60" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyan-400/60" />
      </div>
    </motion.div>
  );
};