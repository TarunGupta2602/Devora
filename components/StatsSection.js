// components/StatsSection.jsx
"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import StatNumber from "./StatNumber";

const stats = [
  { value: 120, label: "Happy Clients" },
  { value: 5, label: "Years Experience" },
  { value: 180, label: "Projects Delivered" },
  { value: 100, label: "Commitment", unit: "%" },
];

export default function StatsSection() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-b from-[#565661] via-[#393954] to-[#141014] text-white py-20 px-6 sm:px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div className="text-center mb-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-medium leading-tight">
            Build smarter <br />
            <span className="font-medium">digital experiences</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="grid grid-cols-2 gap-6 md:col-span-2">
            {stats.map((stat, index) => (
              <motion.div key={index} className="bg-[#0F0F0F] border border-[#2E2E2E] rounded-lg p-6 flex flex-col items-center justify-center min-h-[150px]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
                <div className="text-[2rem] sm:text-[2.5rem] font-semibold mb-1">
                  <StatNumber value={stat.value} unit={stat.unit} sectionRef={sectionRef} />
                </div>
                <div className="text-2xl font-medium text-white">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div className="bg-[#0F0F0F] border border-[#2E2E2E] rounded-lg p-8 flex flex-col justify-center min-h-[312px] md:min-h-full" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h2 className="text-[1.25rem] sm:text-[1.5rem] font-semibold mb-4">Websites that deliver results.</h2>
            <p className="text-[#A0A0A0] text-[0.95rem] leading-relaxed mb-4">
              I design and develop websites that are not only visually appealing but also perform exceptionally well. Every element is crafted with purpose to ensure your brand stands out and connects with your audience.
            </p>
            <p className="text-[#A0A0A0] text-[0.95rem] leading-relaxed">
              From concept to launch, I handle every step with precision, making sure your online presence truly represents your vision and drives growth.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-12 left-8 w-24 sm:w-32 h-24 sm:h-32 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-12 right-8 w-32 sm:w-40 h-32 sm:h-40 bg-cyan-500/10 rounded-full blur-3xl" />
    </section>
  );
}
