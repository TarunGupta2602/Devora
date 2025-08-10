// components/WorkflowSection.jsx
"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import WorkflowStep from "./WorkflowStep";

const workflowSteps = [
  { number: 1, title: "Vision", description: "We explore your goals and audience to create a tailored strategy for your website." },
  { number: 2, title: "Design", description: "Our designers craft visually stunning layouts that align with your brand’s identity." },
  { number: 3, title: "Structure", description: "We plan the site’s architecture, ensuring intuitive navigation and functionality." },
  { number: 4, title: "Build", description: "Using clean code, we develop a responsive, high-performance website." },
  { number: 5, title: "Launch", description: "After thorough testing and your approval, we launch your site to the world." },
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
