"use client";
import React from "react";
import { Star, Award, Users, Zap, Target, Heart, Code, Palette, Rocket, CheckCircle, ArrowRight, Globe, Shield, Lightbulb } from "lucide-react";
import Link from "next/link";

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
    { number: "150+", label: "Projects Delivered", icon: <Rocket className="w-5 h-5" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Heart className="w-5 h-5" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="w-5 h-5" /> },
    { number: "24/7", label: "Support Available", icon: <Zap className="w-5 h-5" /> }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation First",
      description: "We stay ahead of trends, using cutting-edge technologies to deliver solutions that future-proof your business."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships through transparency, communication, and results."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Every project undergoes rigorous testing and optimization to ensure exceptional performance and reliability."
    },
    {
      icon: <Palette className="w-6 h-6" />,
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-gray-700 text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2 text-blue-600" />
              Trusted by 150+ businesses worldwide
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              About <span className="text-blue-600">Team Devora</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              We are your strategic partners in building extraordinary digital experiences that 
              drive real business growth and lasting success.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Get to Know Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg text-blue-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To democratize digital excellence by making world-class web development, design, and digital marketing 
                accessible to businesses of all sizes. We believe every brand deserves a powerful online presence.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mr-4">
                  <Rocket className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the most trusted digital transformation partner globally, known for innovative solutions, 
                exceptional quality, and unwavering commitment to client success in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we build relationships with our clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <div className="text-blue-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">What We Do</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From concept to launch, we provide comprehensive digital solutions that drive results
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors duration-200">
                  <div className="font-medium text-sm">{service}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals who bring your digital vision to life with expertise and creativity
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-100">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-blue-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business thrive in the digital world. Your success story starts here.
            </p> 
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Start Your Project
              </button>
              </Link>
              <a
              href="https://wa.me/917456096455?text=Hi!%20I%20want%20to%20start%20my%20business%20and%20need%20a%20mobile%20app%20and%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Schedule a Call
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}