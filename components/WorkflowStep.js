// components/WorkflowStep.jsx
"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WorkflowStep({ step, index, totalSteps }) {
  const cardRef = useRef(null);
  const cardIsInView = useInView(cardRef, { once: false, amount: 0.1, margin: "-5% 0px -5% 0px" });

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      // helpful debug while developing
      // eslint-disable-next-line no-console
      console.log(`WorkflowStep ${index + 1}: step.number = ${step.number}`);
    }
  }, [step.number, index]);

  const cardStyles = [
    "w-[80%] sm:w-[600px] min-h-[220px] sm:min-h-[220px] mt-1",
    "w-[85%] sm:w-[620px] min-h-[240px] sm:min-h-[240px] mt-10",
    "w-[90%] sm:w-[640px] min-h-[260px] sm:min-h-[260px] mt-20",
    "w-[95%] sm:w-[660px] min-h-[280px] sm:min-h-[280px] mt-30",
    "w-full sm:w-[680px] min-h-[300px] sm:min-h-[300px] mt-40",
  ];

  return (
    <div ref={cardRef} className="sticky top-[40vh] sm:top-[40vh] transform -translate-y-1/2 mb-[30vh] sm:mb-[25vh] flex justify-center">
      <div className={`px-4 sm:px-6 ${cardStyles[index]}`}>
        <motion.div initial="hidden" animate={cardIsInView ? "visible" : "hidden"} variants={cardVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300" style={{ zIndex: totalSteps - index, transform: `translateY(${index * 8}px)`, boxShadow: `0 ${4 + index * 2}px ${8 + index * 4}px rgba(0,0,0,${0.1 + index * 0.02})`, boxSizing: "border-box" }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-0 sm:mr-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {step.number}
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-3">{step.title}</h2>
              <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4">{step.description}</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" initial={{ width: 0 }} animate={cardIsInView ? { width: `${((index + 1) / totalSteps) * 100}%` } : { width: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
