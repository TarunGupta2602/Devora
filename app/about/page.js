"use client";
import React from "react";
import { Star, Award, Users, Zap, Target, Heart, Code, Palette, Rocket, CheckCircle } from "lucide-react";
import Image from "next/image";
export default function About() {
  const teamMembers = [
    {
      name: "Harendra Tomar",
      role: "Founder & CEO",
      image: "/teamleader.jpg",
      bio: "Visionary leader with 5+ years in digital transformation. Passionate about creating meaningful digital experiences that drive business growth.",
      skills: ["Strategy", "Leadership", "Innovation"],
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Tarun Gupta",
      role: "Lead Developer",
      image: "/tarun.jpg",
      bio: "Full-stack architect specializing in scalable web applications. Expert in React, Node.js, and cloud technologies with 3+ years of experience.",
      skills: ["React", "Node.js", "Cloud"],
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Rohit",
      role: "UX/UI Designer",
      image: "/image1.png",
      bio: "Creative designer focused on user-centered design. Crafts intuitive interfaces that blend aesthetics with functionality seamlessly.",
      skills: ["UI/UX", "Figma", "Prototyping"],
      social: { linkedin: "#", dribbble: "#" }
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Delivered", icon: <Rocket className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Heart className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Zap className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation First",
      description: "We stay ahead of trends, using cutting-edge technologies to deliver solutions that future-proof your business."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships through transparency, communication, and results."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Every project undergoes rigorous testing and optimization to ensure exceptional performance and reliability."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Excellence",
      description: "We blend creativity with functionality to create visually stunning and highly effective digital experiences."
    }
  ];

  const services = [
    "Custom Web Development",
    "E-commerce Solutions", 
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Brand Identity",
    "SEO Optimization",
    "Cloud Solutions"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Trusted by 150+ businesses worldwide
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
            About Devora
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are not just another digital agency. We are your strategic partners in building 
            <span className="text-blue-600 font-semibold"> extraordinary digital experiences</span> that 
            drive real business growth and lasting success.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 lg:p-12 border border-white/20 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To democratize digital excellence by making world-class web development, design, and digital marketing 
              accessible to businesses of all sizes. We believe every brand deserves a powerful online presence that 
              converts visitors into loyal customers.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 lg:p-12 border border-white/20 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mr-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become the most trusted digital transformation partner globally, known for our innovative solutions, 
              exceptional quality, and unwavering commitment to client success. We envision a future where every 
              business thrives in the digital landscape.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we build relationships with our clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 mb-20 text-white">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From concept to launch, we provide comprehensive digital solutions that drive results
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                <div className="font-semibold">{service}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Dream Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals who bring your digital vision to life with expertise and creativity
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 text-center border border-white/20 hover:shadow-2xl transition-all duration-300 group">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-200 group-hover:border-blue-400 transition-colors duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      height={28}
                      width={30}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Lets discuss how we can help your business thrive in the digital world. Your success story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Your Project
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}