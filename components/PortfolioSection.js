// components/PortfolioSection.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, TrendingUp, Users, Zap, Globe, ShoppingCart } from "lucide-react";

const portfolioProjects = [
  {
    image: "/image3.png",
    title: "E-Commerce Revolution",
    industry: "Retail & Shopping",
    description: "Complete online store with 300% sales increase",
    metrics: { sales: "300%", users: "50K+", rating: "4.9" },
    icon: <ShoppingCart className="w-5 h-5" />
  },
  {
    image: "/image2.png",
    title: "SaaS Platform",
    industry: "Technology & Software",
    description: "Modern dashboard with real-time analytics",
    metrics: { growth: "250%", users: "25K+", rating: "5.0" },
    icon: <TrendingUp className="w-5 h-5" />
  }
];

export default function PortfolioSection() {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-white overflow-hidden">
      <motion.div className="text-center mb-8 sm:mb-12 md:mb-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-black leading-tight px-4">
          Our Finest
          <br />
          Creations
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto px-4">
          Real projects that delivered exceptional results for our clients
        </p>
      </motion.div>

      <div className="max-w-[90%] sm:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-8">
          {portfolioProjects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }} 
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 640px) 100vw, 50vw" 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                  {project.icon}
                  {project.industry}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Metrics */}
                <div className="flex flex-wrap gap-4 pb-4 border-b border-gray-100">
                  {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-lg font-bold text-blue-600">{value}{key === 'rating' ? '' : key === 'users' ? '+' : '%'}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                {/* View Project Link */}
                <div className="pt-4 flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-2 transition-transform">
                  View Project Details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div 
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
            <Award className="w-8 h-8 mx-auto mb-3 text-blue-600" />
            <div className="text-3xl font-bold text-gray-900 mb-1">180+</div>
            <div className="text-sm text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
            <TrendingUp className="w-8 h-8 mx-auto mb-3 text-green-600" />
            <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
            <Users className="w-8 h-8 mx-auto mb-3 text-purple-600" />
            <div className="text-3xl font-bold text-gray-900 mb-1">120+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
            <Globe className="w-8 h-8 mx-auto mb-3 text-orange-600" />
            <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
            <div className="text-sm text-gray-600">Countries Served</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
