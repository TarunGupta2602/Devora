// components/FaqSection.jsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  { question: "What makes devora Studio’s web design unique?", answer: "We combine creative design with cutting-edge technology, tailoring each project to your brand’s vision through a collaborative process." },
  { question: "How long does it take to build a website?", answer: "Depending on complexity, most projects are completed in 2-4 weeks, with a focus on quality and precision." },
  { question: "Do you offer branding services alongside web design?", answer: "Yes, we create cohesive branding, including logos and visual identities, to ensure your website stands out." },
  { question: "Are your websites optimized for all devices?", answer: "Every site we build is fully responsive, delivering a seamless experience on mobile, tablet, and desktop." },
  { question: "What post-launch support do you provide?", answer: "We offer ongoing maintenance, including updates, security, and performance enhancements to keep your site at its best." },
  { question: "Which platforms do you recommend for websites?", answer: "We specialize in Next.js and WordPress, choosing the best platform based on your needs for flexibility and growth." },
  { question: "Can you add advanced features like e-commerce?", answer: "Absolutely, we integrate e-commerce, CRMs, and other tools to enhance your website’s functionality." },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative bg-white text-gray-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-[90%] sm:max-w-4xl mx-auto">
        <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 md:mb-16 font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          Got Questions?
          <br />
          We’ve Got Answers
        </motion.h2>

        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <motion.div key={index} className="border-b border-gray-200 last:border-b-0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <button
  className="w-full text-left py-4 sm:py-6 focus:outline-none flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 min-h-[48px]"
  onClick={() => setOpenIndex(openIndex === index ? null : index)}
>
  <span className="flex-1 text-sm sm:text-base md:text-lg lg:text-xl font-medium pr-4 leading-relaxed">
    {faq.question}
  </span>

  <motion.div
    className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all duration-200 ${
      openIndex === index
        ? "bg-blue-600 border-blue-600 text-white"
        : "hover:border-gray-400"
    }`}
    animate={{ rotate: openIndex === index ? 45 : 0 }}
  >
    <span className="text-xl font-light">+</span>
  </motion.div>
</button>


              <motion.div initial={false} animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                <div className="pb-4 sm:pb-6 pr-8 sm:pr-12">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
