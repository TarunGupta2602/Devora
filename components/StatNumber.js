// components/StatNumber.jsx
"use client";
import React, { useRef, useEffect } from "react";
import { motion, useSpring, useTransform, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function StatNumber({ value = 0, unit = "", sectionRef = null }) {
  const statRef = useRef(null);
  const [inViewRef, inView] = useInView({ triggerOnce: true, root: null, threshold: 0.5 });
  // merge refs
  useEffect(() => {
    if (statRef.current) inViewRef(statRef.current);
  }, [inViewRef]);

  const count = useSpring(0, { stiffness: 100, damping: 30 });
  const formatted = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    if (inView) {
      count.set(value);
    }
  }, [inView, count, value]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const color = useTransform(scrollYProgress, [0, 0.5, 1], ['rgb(59,130,246)', 'rgb(139,92,246)', 'rgb(255,255,255)']);

  return (
    <motion.div ref={statRef} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} transition={{ duration: 0.5 }}>
      <motion.span style={{ color }} className="inline-block">
        <motion.span>{formatted}</motion.span>
        {unit && <span className="text-xl sm:text-2xl md:text-3xl">{unit}</span>}
      </motion.span>
    </motion.div>
  );
}
