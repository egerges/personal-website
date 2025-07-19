"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";

export const SkillsCard: React.FC<{
  title: string;
  images: { src: string; alt: string }[];
}> = ({ title, images }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      className="relative flex flex-col items-center gap-6 h-full overflow-hidden group cursor-pointer"
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      aria-labelledby={`skills-card-${title}`}
    >
      {/* Card Container */}
      <div className="relative w-full h-full p-6 sm:p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.15) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }} />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 h-full">
          {/* Title */}
          <motion.div
            className="text-center"
          >
            <h3 
              id={`skills-card-${title}`} 
              className="text-xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              {title}
            </h3>
          </motion.div>

          {/* Tech Icons Grid */}
          <div className="grid grid-cols-3 gap-4 relative">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative group/icon flex items-center justify-center p-2"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ 
                  scale: 1.2,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                role="button"
                aria-label={image.alt}
              >
                {/* Hover Background */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50"
                  animate={{
                    opacity: hoveredIndex === index ? 0.5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Tech Icon */}
                <motion.div
                  className="relative z-10 w-10 h-10 flex items-center justify-center"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={40}
                    height={40}
                    className="object-contain filter drop-shadow-sm"
                    style={{ backgroundColor: 'transparent' }}
                  />
                </motion.div>


                <Tooltip
                  content={image.alt}
                  isVisible={hoveredIndex === index}
                  position="top"
                  className="z-50"
                />
              </motion.div>
            ))}
          </div>

          {/* Data Display */}
          <motion.div
            className="flex items-center gap-2 text-xs text-slate-500 mt-auto"
          >
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span>{images.length} Technologies</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};