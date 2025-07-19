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
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col items-center gap-6 min-h-full overflow-hidden group cursor-pointer"
      onHoverStart={() => setIsCardHovered(true)}
      onHoverEnd={() => setIsCardHovered(false)}
      whileHover={{ 
        scale: 1.02,
        rotateY: 2,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      aria-labelledby={`skills-card-${title}`}
    >
      {/* Holographic Container */}
      <div className="relative w-full h-full p-6 sm:p-8 rounded-2xl border border-slate-200/20 overflow-hidden">
        {/* Dynamic Background with Tech Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-blue-900/10 to-purple-900/5" />
        
        {/* Animated Tech Grid Background */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: isCardHovered ? ["0% 0%", "100% 100%"] : ["0% 0%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 98%, rgba(0, 212, 255, 0.1) 100%),
              linear-gradient(0deg, transparent 98%, rgba(0, 212, 255, 0.1) 100%)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Holographic Glass Layer */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(255, 255, 255, 0.1) 0%,
                rgba(255, 255, 255, 0.05) 50%,
                rgba(0, 212, 255, 0.05) 100%
              )
            `,
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
          }}
          animate={{
            background: isCardHovered ? [
              `linear-gradient(135deg, 
                rgba(255, 255, 255, 0.1) 0%,
                rgba(0, 212, 255, 0.1) 50%,
                rgba(139, 92, 246, 0.1) 100%
              )`,
              `linear-gradient(135deg, 
                rgba(139, 92, 246, 0.1) 0%,
                rgba(0, 212, 255, 0.1) 50%,
                rgba(255, 255, 255, 0.1) 100%
              )`
            ] : undefined
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Neon Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `
              linear-gradient(45deg, 
                transparent 30%, 
                rgba(0, 212, 255, 0.3) 50%, 
                transparent 70%
              )
            `,
            padding: "1px",
          }}
          animate={{
            rotate: isCardHovered ? [0, 360] : 0,
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full rounded-2xl bg-white/80 backdrop-blur-xl" />
        </motion.div>

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col items-center gap-6 h-full">
          {/* Futuristic Title */}
          <motion.div
            className="text-center"
            animate={{
              textShadow: isCardHovered ? 
                "0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.2)" : 
                "none"
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 
              id={`skills-card-${title}`} 
              className="text-xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              {title}
            </h3>
            
            {/* Tech Line Accent */}
            <motion.div
              className="mt-2 mx-auto h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              initial={{ width: "20%" }}
              animate={{ width: isCardHovered ? "80%" : "20%" }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Holographic Tech Icons Grid */}
          <div className="grid grid-cols-3 gap-6 relative">
            {/* Grid Background Enhancement */}
            <motion.div
              className="absolute inset-0 -m-4 rounded-xl"
              style={{
                background: `
                  radial-gradient(circle at center, 
                    rgba(0, 212, 255, 0.1) 0%, 
                    transparent 70%
                  )
                `,
              }}
              animate={{
                scale: isCardHovered ? [1, 1.1, 1] : 1,
                opacity: isCardHovered ? [0.5, 1, 0.5] : 0.3,
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative group/icon flex items-center justify-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ 
                  scale: 1.2,
                  rotateY: 10,
                  z: 20,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                role="button"
                aria-label={image.alt}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Holographic Platform */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: `
                      linear-gradient(45deg, 
                        rgba(0, 212, 255, 0.1), 
                        rgba(139, 92, 246, 0.1), 
                        rgba(6, 254, 250, 0.1)
                      )
                    `,
                    backdropFilter: "blur(10px)",
                  }}
                  animate={{
                    boxShadow: hoveredIndex === index ? [
                      "0 0 0 rgba(0, 212, 255, 0)",
                      "0 0 30px rgba(0, 212, 255, 0.6)",
                      "0 0 0 rgba(0, 212, 255, 0)"
                    ] : "0 0 0 rgba(0, 212, 255, 0)"
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />

                {/* Tech Icon with Holographic Effect */}
                <motion.div
                  className="relative z-10 w-12 h-12 flex items-center justify-center"
                  animate={{
                    filter: hoveredIndex === index ? 
                      "drop-shadow(0 0 10px rgba(0, 212, 255, 0.8)) brightness(1.2)" : 
                      "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </motion.div>

                {/* Scanning Line Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl overflow-hidden"
                  style={{ pointerEvents: "none" }}
                >
                  <motion.div
                    className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    animate={{
                      y: hoveredIndex === index ? [-20, 68, -20] : -20,
                      opacity: hoveredIndex === index ? [0, 1, 0] : 0,
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>

                <Tooltip
                  content={image.alt}
                  isVisible={hoveredIndex === index}
                  position="top"
                  className="z-50 bg-slate-900 text-cyan-300 border border-cyan-400/50"
                />
              </motion.div>
            ))}
          </div>

          {/* Futuristic Data Display */}
          <motion.div
            className="flex items-center gap-2 text-xs text-slate-500"
            animate={{
              opacity: isCardHovered ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-cyan-400"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-mono">{images.length} Technologies</span>
            <motion.div
              className="ml-2 px-2 py-1 rounded bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-cyan-400/20"
              animate={{
                borderColor: isCardHovered ? 
                  "rgba(6, 254, 250, 0.5)" : 
                  "rgba(6, 254, 250, 0.2)"
              }}
            >
              <span className="text-cyan-600 font-mono">ACTIVE</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Corner Tech Details */}
        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-cyan-400/40" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-cyan-400/40" />
      </div>
    </motion.div>
  );
};