// components/PortfolioSection.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PortfolioSection({ images = ["/image3.png","/image2.png"] }) {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-white overflow-hidden">
      <motion.div className="text-center mb-8 sm:mb-12 md:mb-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-black leading-tight px-4">
          Our Finest
          <br />
          Creations
        </h2>
      </motion.div>

      <div className="max-w-[90%] sm:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {images.map((image, index) => (
            <motion.div key={index} className="relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300" style={{ aspectRatio: '3/2', maxWidth: '100%', width: '100%' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} whileHover={{ scale: 1.02 }}>
              <div className="w-full h-full overflow-hidden relative">
                <Image src={image} alt={`Portfolio project ${index+1}`} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 via-orange-200/20 to-blue-200/20 opacity-70 mix-blend-overlay rounded-xl" />
              <div className="absolute inset-0 border-2 border-white rounded-xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
