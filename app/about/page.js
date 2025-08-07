"use client";
import React from "react";
import Image from "next/image";

export default function About() {
  const teamMembers = [
    {
      name: "Harendra Tomar",
      role: "Founder & CEO",
      image: "/teamleader.jpg",
      bio: "Passionate about creating digital experiences that make a difference"
    },
    {
      name: "Tarun Gupta",
      role: "Lead Developer",
      image: "/tarun.jpg",
      bio: "Full-stack expert with 2+ years of experience in modern web technologies"
    },
    {
      name: "Rohit",
      role: "UX Designer",
      image: "/image1.png",
      bio: "Creating intuitive and beautiful user interfaces that users love"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "20+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Sitezy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team of designers, developers, and digital strategists 
            dedicated to helping businesses succeed in the digital world.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Sitezy, we believe that every business deserves a powerful online presence. 
            Our mission is to transform your digital dreams into reality by creating 
            stunning websites, effective marketing strategies, and seamless user experiences 
            that drive real results for your business.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={138}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
