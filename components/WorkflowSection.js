// components/WorkflowSection.jsx
"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import WorkflowStep from "./WorkflowStep";

const workflowSteps = [
  { number: 1, title: "Discovery & Strategy", description: "We deep-dive into your business goals, target audience, and competitors to create a data-driven strategy that will maximize your ROI and online presence." },
  { number: 2, title: "Design & Prototyping", description: "Our award-winning designers craft visually stunning layouts that align with your brand identity. You'll see interactive prototypes before we code a single line." },
  { number: 3, title: "Development & Architecture", description: "Using modern technologies, we build a scalable, secure website with clean code. Your site will be fast, mobile-friendly, and SEO-optimized from day one." },
  { number: 4, title: "Quality Assurance", description: "Rigorous testing across devices, browsers, and scenarios ensures everything works flawlessly. We check performance, security, accessibility, and user experience." },
  { number: 5, title: "Launch & Support", description: "After your final approval, we launch your site to the world with 99.9% uptime hosting. Plus 30 days of free support to ensure everything runs smoothly." },
];

export default function WorkflowSection() {
  return (
    <section className="relative bg-white py-12 sm:py-16">
      <div className="sticky top-[40vh] sm:top-[40vh] transform -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm py-6 sm:py-8">
        <div className="text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-3xl md:text-4xl font-medium lg:text-5xl text-gray-800 ">
            Our Creative
            <br />
            Process
          </h1>
        </div>
      </div>

      <div className="relative z-10">
        <div className="h-[50vh] sm:h-[80vh]" />
        {workflowSteps.map((step, index) => (
          <WorkflowStep key={step.number} step={step} index={index} totalSteps={workflowSteps.length} />
        ))}
        <div className="h-[50vh] sm:h-[80vh]" />
      </div>
    </section>
  );
}
