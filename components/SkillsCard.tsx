"use client";

import React, { useState } from "react";
import Image from "next/image";
import Tooltip from "./Tooltip";

export const SkillsCard: React.FC<{
  title: string;
  images: { src: string; alt: string }[];
}> = ({ title, images }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className="flex flex-col items-center gap-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/10 min-h-full relative overflow-hidden group hover:shadow-3xl transition-all duration-300"
      aria-labelledby={`skills-card-${title}`}
    >
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
      
      {/* Floating particles */}
      <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-pink-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <h3 id={`skills-card-${title}`} className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent relative z-10">
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-pink-400/20 rounded-xl blur-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 scale-150"></div>
            
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
              className="z-50 backdrop-blur-sm"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
