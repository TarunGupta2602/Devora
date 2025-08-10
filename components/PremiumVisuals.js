// components/PremiumVisuals.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PremiumVisuals() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[40vh] bg-gradient-to-b from-[#141014] via-[#393954] to-[#141014] text-gray-100 py-10 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-[90%] sm:max-w-6xl mx-auto">
        <motion.div className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 sm:p-6 md:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 font-medium md:mb-6">Premium Visuals</h2>
              <p className="text-gray-200 leading-relaxed text-sm sm:text-base md:text-lg">
                We curate high-quality images and animations to make your website visually captivating, reflecting your brand’s unique story.
              </p>
            </div>
            <div className="flex justify-center mt-4 sm:mt-6">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <Image src="/computer.png" alt="Laptop showcasing a devora Studio website" width={400} height={400} sizes="(max-width: 640px) 100vw, 400px" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
