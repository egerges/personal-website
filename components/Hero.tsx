"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Button from "@components/Button";
import { TextGeneratedEffect } from "@components/TextGeneratedEffect";
// import CustomCursor from "@components/CustomCursor";

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen px-4 md:px-8 overflow-hidden"
      aria-label="Hero Section"
    >
      {/* <CustomCursor /> */}
      
      {/* Animated Background Grid */}
      <motion.div
        className="absolute inset-0 bg-grid-white/[0.02] bg-grid-small pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        aria-hidden="true"
      />
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-blue-400/30 rounded-full blur-sm"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-1/3 right-20 w-6 h-6 bg-pink-400/20 rounded-full blur-sm"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-400/25 rounded-full blur-sm"
        animate={{
          y: [0, -10, 0],
          x: [0, 20, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        aria-hidden="true"
      />
      {/* Beaming Gradient Effect */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      >
        <div className="w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-conic from-blue-500 via-purple-500 via-pink-500 to-blue-500 blur-[150px] animate-spin" style={{ animationDuration: '20s' }}></div>
      </motion.div>

      {/* Secondary Gradient Ring */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
        initial={{ scale: 1.2, opacity: 0.3 }}
        animate={{
          scale: [1.2, 0.9, 1.2],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        aria-hidden="true"
      >
        <div className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full border border-white/10 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm"></div>
      </motion.div>

      {/* Glass Effect Card */}
      <motion.div
        className="relative z-10 w-full max-w-xl p-6 md:p-12 bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] rounded-3xl shadow-2xl md:max-w-5xl lg:max-w-6xl flex flex-col md:flex-row align-middle justify-center items-center before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent before:pointer-events-none"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center relative z-10"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--blue-primary)] via-purple-500 to-[var(--pink-primary)] drop-shadow-2xl">
            <TextGeneratedEffect words="Hey, I'm Elio! \n I turn code into Experiences."/>
          </h1>
          <motion.p 
            className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A Software Engineer exploring the realms of full-stack
            development and crafting user-focused applications with a touch of
            innovation.
          </motion.p>
          <motion.p 
            className="mt-3 text-sm italic text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Fueled by curiosity, inspired by challenges, and guided by the desire
            to make technology more accessible.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="flex justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              text="Work with me!"
              variant="secondary"
              link="/contact"/>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-8 md:p-12 relative"
        >
          {/* Floating Ring Around Image */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          />
          
          <motion.div
            whileHover={{ 
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 }
            }}
            className="relative"
          >
            <Image 
              src={"/hero.png"} 
              alt={"Elio Pic"} 
              height={1080} 
              width={1080} 
              className="drop-shadow-2xl rounded-2xl filter brightness-110 contrast-110"
            />
            {/* Glow Effect Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-2xl blur-2xl -z-10 scale-110"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
