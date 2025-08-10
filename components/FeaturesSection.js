// components/FeaturesSection.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-b from-[#141014] via-[#393954] to-[#565661] text-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="relative z-10 max-w-[90%] sm:max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <motion.div className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 sm:p-6 shadow-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-4">Efficient Code</h2>
            <div className="bg-gray-950/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm border border-gray-700">
              <div className="flex items-center mb-1">
                <div className="text-gray-400 w-6 text-right mr-3">1</div>
                <div><span className="text-blue-400">{"<ul>"}</span></div>
              </div>
              <div className="flex items-center mb-1">
                <div className="text-gray-400 w-6 text-right mr-3">2</div>
                <div className="ml-4"><span className="text-blue-400">{"<li>"}</span><span className="text-white">Clean HTML</span><span className="text-blue-400">{"</li>"}</span></div>
              </div>
              <div className="flex items-center mb-1">
                <div className="text-gray-400 w-6 text-right mr-3">3</div>
                <div className="ml-4"><span className="text-blue-400">{"<li>"}</span><span className="text-white">BEM Naming</span><span className="text-blue-400">{"</li>"}</span></div>
              </div>
              <div className="flex items-center mb-1">
                <div className="text-gray-400 w-6 text-right mr-3">4</div>
                <div className="ml-4"><span className="text-blue-400">{"<li>"}</span><span className="text-white">Modern JS</span><span className="text-blue-400">{"</li>"}</span></div>
              </div>
              <div className="flex items-center">
                <div className="text-gray-400 w-6 text-right mr-3">5</div>
                <div><span className="text-blue-400">{"</ul>"}</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 sm:p-6 shadow-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-4">Fast Delivery</h2>
            <div className="flex flex-col items-center justify-center h-32 sm:h-40">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400 line-through mb-3 opacity-50">Months</div>
              <motion.div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                Days
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 sm:p-6 shadow-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-4">Responsive Design</h2>
            <p className="text-gray-200 mb-4 text-sm sm:text-base leading-relaxed">
              Our websites adapt seamlessly to any device, ensuring a perfect user experience.
            </p>
            <div className="flex items-center justify-center space-x-4 sm:space-x-6">
              <div className="relative">
                <div className="bg-gray-700 rounded-xl p-1 shadow-md border border-gray-600">
                  <div className="bg-blue-500 rounded-lg w-12 sm:w-16 h-20 sm:h-28 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute top-1 w-6 h-1 bg-gray-300 rounded-full opacity-50"></div>
                    <div className="w-8 sm:w-10 h-12 sm:h-16 bg-white/10 rounded-lg flex flex-col justify-between p-1">
                      <div className="w-full h-1.5 bg-white/20 rounded"></div>
                      <div className="w-full h-1.5 bg-white/20 rounded"></div>
                      <div className="w-full h-1.5 bg-white/20 rounded"></div>
                    </div>
                    <div className="absolute bottom-1 w-4 sm:w-6 h-1 bg-gray-300 rounded-full opacity-50"></div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-700 rounded-lg p-1.5 shadow-md border border-gray-600">
                  <div className="bg-gray-600 rounded-lg w-24 sm:w-32 h-16 sm:h-20 flex flex-col relative overflow-hidden">
                    <div className="bg-gray-500 h-2 rounded-t-lg flex items-center px-1.5">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1 bg-white/5 p-1.5 grid grid-cols-3 gap-1">
                      <div className="bg-white/10 rounded"></div>
                      <div className="bg-white/10 rounded"></div>
                      <div className="bg-white/10 rounded"></div>
                      <div className="bg-white/10 rounded col-span-3 h-1.5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 sm:p-6 shadow-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-4">Optimal Performance</h2>
            <p className="text-gray-200 mb-4 text-sm sm:text-base leading-relaxed">
              We optimize for speed, delivering lightning-fast websites for superior user experiences.
            </p>
            <div className="bg-gray-950/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-700">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"><div className="w-1.5 h-1.5 bg-white rounded-full"></div></div>
                  <div className="text-green-400 font-medium text-xs sm:text-sm">Performance: 98</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"><div className="w-1.5 h-1.5 bg-white rounded-full"></div></div>
                  <div className="text-green-400 font-medium text-xs sm:text-sm">Accessibility: 95</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center"><div className="w-1.5 h-1.5 bg-white rounded-full"></div></div>
                  <div className="text-orange-400 font-medium text-xs sm:text-sm">Best Practices: 90</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
