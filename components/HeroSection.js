"use client";
import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import BackgroundShapes from "./BackgroundShapes";

export default function HeroSection() {
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth >= 640 && heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) heroElement.addEventListener("mousemove", handleMouseMove);
    return () => {
      if (heroElement) heroElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const ParallaxWrapper = ({ children, intensity = 20, className, animate, transition, style, ...props }) => {
    const x = useTransform(mouseX, [-0.5, 0.5], [-intensity, intensity]);
    const y = useTransform(mouseY, [-0.5, 0.5], [-intensity, intensity]);
    return (
      <motion.div className={className} style={{ x, y, pointerEvents: "none", ...style }} animate={animate} transition={transition} {...props}>
        {children}
      </motion.div>
    );
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, rotate: -5 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  return (
    <div 
      ref={heroRef} 
      className="relative min-h-[60vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/71ef47140fab5931b5d767bb4c3f3406.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/10 z-10" /> {/* Light white overlay for subtle softening */}
      <BackgroundShapes />

      <div className="relative z-50 text-center max-w-[90%] sm:max-w-4xl mx-auto px-4 py-6 sm:py-8 bg-white/70 sm:bg-transparent rounded-xl sm:rounded-none">
        <motion.h1 className="mb-6 sm:mb-8 leading-none" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
          <div className="hidden sm:block">
            {["D","e","v","o","r","a"].map((c,i) => (
              <motion.span key={i} variants={letterVariants} custom={i} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-gray-950 to-blue-900 bg-clip-text text-transparent">
                {c}
              </motion.span>
            ))}
            <br />
            {["S","t","u","d","i","o"].map((c,i)=>(
              <motion.span key={i+6} variants={letterVariants} custom={i+6} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-gray-950 to-blue-900 bg-clip-text text-transparent">
                {c}
              </motion.span>
            ))}
          </div>

          <div className="block sm:hidden">
            <div className="text-3xl font-bold leading-tight">
              {["D","e","v","o","r","a"].map((c,i)=>(
                <motion.span key={i} variants={letterVariants} custom={i} className="bg-gradient-to-r from-gray-950 to-blue-900 bg-clip-text text-transparent">{c}</motion.span>
              ))}
              <br />
              {["S","t","u","d","i","o"].map((c,i)=>(
                <motion.span key={i+6} variants={letterVariants} custom={i+6} className="bg-gradient-to-r from-gray-950 to-blue-900 bg-clip-text text-transparent">
                {c}
              </motion.span>
            ))}
          </div>
          </div>
        </motion.h1>

        <motion.div className="mb-6 sm:mb-8 space-y-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-bold leading-relaxed max-w-2xl mx-auto">
            Creating award-winning websites that drive real business results.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-semibold leading-relaxed max-w-2xl mx-auto">
            Trusted by 150+ businesses across 50+ countries. Average 250% increase in conversions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-gray-700 font-medium">5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-gray-700 font-medium">98% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              <span className="text-gray-700 font-medium">200+ Projects Delivered</span>
            </div>
          </div>
        </motion.div>

        <motion.a 
          href="/contact" 
          className="inline-flex items-center justify-center bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-blue-700 transition-colors duration-300 group shadow-md hover:shadow-lg relative z-60 touch-action-auto focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-blue-800" 
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }} 
          whileTap={{ scale: 0.95 }} 
          transition={{ duration: 0.2 }} 
          style={{ pointerEvents: 'auto', touchAction: 'auto' }}
        >
          Start Your Project
          <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>
      </div>

      {/* small accent shapes (left/right/bottom etc) */}
      <ParallaxWrapper className="absolute top-12 sm:top-16 left-4 sm:left-8 w-12 sm:w-16 h-12 sm:h-16 bg-blue-200 rounded-full opacity-40 animate-pulse" intensity={15} />
      <ParallaxWrapper className="absolute bottom-12 sm:bottom-16 right-4 sm:right-8 w-10 sm:w-14 h-10 sm:h-14 bg-purple-200 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} intensity={20} />
      <ParallaxWrapper className="absolute top-[20%] sm:top-[25%] right-8 sm:right-12 w-8 sm:w-10 h-8 sm:h-10 bg-cyan-200 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }} intensity={25} />
      <ParallaxWrapper className="absolute top-[5%] left-[80%] w-14 sm:w-18 h-14 sm:h-18 bg-yellow-200 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }} intensity={18} />
      <ParallaxWrapper className="absolute bottom-[10%] left-[5%] w-12 sm:w-16 h-12 sm:h-16 bg-green-200 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2.5s' }} intensity={22} />
    </div>
  );
}