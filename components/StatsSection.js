// components/StatsSection.jsx
"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import StatNumber from "./StatNumber";

const stats = [
  { value: 150, label: "Happy Clients", sublabel: "Across 50+ Countries" },
  { value: 5, label: "Years Experience", sublabel: "Since 2019" },
  { value: 200, label: "Projects Delivered", sublabel: "Success Rate 98%" },
  { value: 100, label: "Client Satisfaction", unit: "%", sublabel: "Based on Reviews" },
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
              <motion.div key={index} className="bg-[#0F0F0F] border border-[#2E2E2E] rounded-lg p-6 flex flex-col items-center justify-center min-h-[150px] hover:border-blue-500/50 transition-colors duration-300" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
                <div className="text-[2rem] sm:text-[2.5rem] font-semibold mb-1 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  <StatNumber value={stat.value} unit={stat.unit} sectionRef={sectionRef} />
                </div>
                <div className="text-xl font-medium text-white mb-1">{stat.label}</div>
                {stat.sublabel && <div className="text-sm text-gray-400 text-center">{stat.sublabel}</div>}
              </motion.div>
            ))}
          </div>

          <motion.div className="bg-[#0F0F0F] border border-[#2E2E2E] rounded-lg p-8 flex flex-col justify-center min-h-[312px] md:min-h-full hover:border-blue-500/50 transition-colors duration-300" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h2 className="text-[1.25rem] sm:text-[1.5rem] font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Digital Solutions That Drive Growth</h2>
            <p className="text-[#A0A0A0] text-[0.95rem] leading-relaxed mb-4">
              We design and develop websites that are not only visually stunning but also perform exceptionally well. Every pixel is crafted with purpose to ensure your brand stands out in today is competitive digital landscape.
            </p>
            <p className="text-[#A0A0A0] text-[0.95rem] leading-relaxed mb-4">
              From concept to launch, our team handles every step with precision and expertise, making sure your online presence truly represents your vision and drives measurable business results.
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-[#2E2E2E]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-12 left-8 w-24 sm:w-32 h-24 sm:h-32 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-12 right-8 w-32 sm:w-40 h-32 sm:h-40 bg-cyan-500/10 rounded-full blur-3xl" />
    </section>
  );
}
