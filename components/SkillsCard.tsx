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
    <div
      className="flex flex-col items-center gap-6 bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl min-h-full relative overflow-hidden group transition-all duration-300"
      aria-labelledby={`skills-card-${title}`}
    >
      {/* Subtle hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      
      {/* Subtle accent dots */}
      <div className="absolute top-3 right-3 w-1 h-1 bg-slate-400/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-blue-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <h3 id={`skills-card-${title}`} className="text-xl font-bold text-slate-900 relative z-10">
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-8 relative z-10">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative group/icon"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ 
              scale: 1.2,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
            role="button"
            aria-label={image.alt}
          >
            {/* Icon glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-400/20 to-blue-400/20 rounded-xl blur-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 scale-150"></div>
            
            <Image
              src={image.src}
              alt={image.alt}
              width={50}
              height={50}
              className="relative z-10 filter drop-shadow-lg group-hover/icon:drop-shadow-2xl transition-all duration-300"
            />
            <Tooltip
              content={image.alt}
              isVisible={hoveredIndex === index}
              position="top"
              className="z-50"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
