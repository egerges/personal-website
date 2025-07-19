"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@lib/utils";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1.02, 1.02, 1) rotateY(${mousePosition.x * 0.1}deg)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1) rotateY(0deg)",
        transition: "transform 0.1s ease-out",
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "mx-auto w-full relative rounded-3xl overflow-hidden",
        containerClassName
      )}
    >
      {/* Futuristic Container */}
      <div
        className="relative h-full overflow-hidden rounded-3xl border border-slate-200/20"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(15, 23, 42, 0.9) 0%,
              rgba(30, 41, 59, 0.95) 50%,
              rgba(51, 65, 85, 0.9) 100%
            )
          `,
          backdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        {/* Animated Circuit Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: isHovering ? ["0% 0%", "100% 100%"] : ["0% 0%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 98%, rgba(0, 212, 255, 0.1) 100%),
              linear-gradient(0deg, transparent 98%, rgba(0, 212, 255, 0.1) 100%)
            `,
            backgroundSize: "50px 50px",
            opacity: 0.3,
          }}
        />

        {/* Holographic Overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isHovering ? [
              "linear-gradient(45deg, rgba(0, 212, 255, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
              "linear-gradient(45deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 254, 250, 0.1) 100%)",
              "linear-gradient(45deg, rgba(6, 254, 250, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)"
            ] : "linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)"
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Scanning Line Effect */}
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-3xl"
          style={{ pointerEvents: "none" }}
        >
          <motion.div
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm"
            animate={{
              y: isHovering ? [-20, 400, -20] : -20,
              opacity: isHovering ? [0, 1, 0] : 0,
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

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
            rotate: isHovering ? [0, 360] : 0,
            opacity: isHovering ? [0.3, 0.8, 0.3] : 0.2,
          }}
          transition={{ 
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-full h-full rounded-3xl bg-transparent" />
        </motion.div>

        {/* Content Container */}
        <motion.div
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.01, 1.01, 1)`
              : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
            transition: "transform 0.1s ease-out",
          }}
          className={cn("h-full px-6 py-24 sm:px-12 relative z-10", className)}
        >
          {/* Tech Noise Overlay */}
          <Noise />
          
          {/* Enhanced Content */}
          <div className="relative z-10">
            {children}
          </div>

          {/* Corner Tech Accents */}
          <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-cyan-400/60" />
          <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-cyan-400/60" />
          <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-cyan-400/60" />
          <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-cyan-400/60" />

          {/* Data Indicators */}
          <motion.div
            className="absolute top-8 right-8 flex flex-col gap-1"
            animate={{
              opacity: isHovering ? 1 : 0.7,
            }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-cyan-400"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-blue-400"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-purple-400"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-5 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "30%",
      }}
    ></div>
  );
};