// components/Showcase.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Showcase() {
  return (
    <div className="w-full flex justify-center items-center bg-white py-6 sm:py-10 lg:py-14">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex justify-center items-center w-full px-4 sm:px-6 lg:px-8">
        <Image src="/image.png" alt="Showcase of a devora Studio website design" width={900} height={900} sizes="(max-width: 640px) 95vw, (max-width: 1024px) 85vw, 900px" className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-[900px] h-auto object-contain" />
      </motion.div>
    </div>
  );
}
