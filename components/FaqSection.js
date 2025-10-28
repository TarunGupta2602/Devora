"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  { 
    question: "What makes Team Devora different from other web development agencies?", 
    answer: "We combine 5+ years of experience with cutting-edge technology to deliver custom solutions. Our team focuses on measurable results—on average, our clients see 200-300% increases in online engagement. We offer end-to-end services from design to deployment, ensuring consistent quality and seamless execution throughout your project." 
  },
  { 
    question: "How long does it typically take to complete a website project?", 
    answer: "Timeline varies based on complexity: Simple business websites take 2-3 weeks, while complex e-commerce platforms require 4-6 weeks. We provide detailed project timelines at the start and keep you updated through our transparent communication process. Premium packages include express 1-week delivery options." 
  },
  { 
    question: "What technologies and platforms do you work with?", 
    answer: "We specialize in modern frameworks including Next.js, React, Node.js, and TypeScript for performance. For content management, we use WordPress, Shopify for e-commerce, and can integrate with any platform. All our sites are mobile-responsive, SEO-optimized, and follow industry best practices for security and performance." 
  },
  { 
    question: "Do you provide ongoing maintenance and support?", 
    answer: "Yes! We offer comprehensive maintenance plans including regular updates, security monitoring, performance optimization, and 24/7 technical support. Our maintenance packages start at $99/month and include monthly reports on your site's performance metrics, uptime, and user analytics." 
  },
  { 
    question: "Can you help with SEO and digital marketing?", 
    answer: "Absolutely! We provide full-service digital marketing including SEO optimization, social media management, Google Ads campaigns, content creation, and email marketing. Our integrated approach ensures your website and marketing efforts work together to maximize conversions and brand visibility." 
  },
  { 
    question: "What's included in your standard website package?", 
    answer: "Our standard package includes responsive design, SEO optimization, fast-loading performance, contact forms, analytics integration, social media integration, and basic security features. We also provide 3 rounds of revisions, 30 days of post-launch support, and comprehensive documentation for managing your site." 
  },
  { 
    question: "How do you handle payment and project milestones?", 
    answer: "We use a transparent milestone-based payment system: 30% deposit to start, 40% upon design approval, and 30% final payment upon launch. We accept all major payment methods and can provide detailed invoices for tax purposes. Enterprise clients can arrange custom payment terms." 
  },
  { 
    question: "Do you work with international clients?", 
    answer: "Yes! We've successfully served clients across 50+ countries including USA, UK, Canada, Australia, and throughout Europe. We accommodate different time zones and are fluent in English. We can integrate region-specific features like multi-currency support, local payment gateways, and compliance requirements." 
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative bg-white text-gray-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-[90%] sm:max-w-4xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 md:mb-16 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Got Questions?
          <br />
          We’ve Got Answers
        </motion.h2>

        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full text-left py-4 sm:py-6 focus:outline-none flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 min-h-[48px]"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="flex-1 text-sm sm:text-base md:text-lg lg:text-xl font-medium pr-4 leading-relaxed">
                  {faq.question}
                </span>

                {/* Mobile: Big + icon, Desktop: Small circle */}
                <motion.div
                  className={`
                    flex items-center justify-center transition-all duration-200
                    ${openIndex === index ? "rotate-45" : "rotate-0"}
                    text-2xl sm:text-lg sm:w-8 sm:h-8 sm:rounded-full sm:border-2 sm:border-gray-300
                  `}
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                >
                  +
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pb-4 sm:pb-6 pr-8 sm:pr-12">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
