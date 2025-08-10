"use client";
import React, { useState } from "react";
import { ArrowRight, Globe, Palette, TrendingUp, ShoppingCart, Smartphone, Search, Users, Cloud, CheckCircle, Star, Award, Target, Code, Layers, Zap } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);

  const mainServices = [
    {
      id: 'web-dev',
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies for maximum performance and scalability.",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      features: ["Responsive Design", "Fast Performance", "SEO Optimized", "Security First", "Mobile-Friendly", "Analytics Integration"],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "AWS"]
    },
    {
      id: 'ui-ux',
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience and drive conversions for your business.",
      icon: <Palette className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      features: ["User Research", "Wireframing", "Visual Design", "Prototyping", "Design Systems", "Usability Testing"],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Framer"]
    },
    {
      id: 'digital-marketing',
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence and reach your target audience effectively.",
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      features: ["SEO Strategy", "Social Media Marketing", "Content Creation", "PPC Campaigns", "Email Marketing", "Analytics & Reporting"],
      technologies: ["Google Analytics", "Facebook Ads", "Instagram", "LinkedIn", "Mailchimp", "SEMrush"]
    },
    {
      id: 'ecommerce',
      title: "E-commerce Solutions",
      description: "Complete online store setup with secure payment integration and comprehensive inventory management systems.",
      icon: <ShoppingCart className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
      features: ["Online Store Setup", "Payment Integration", "Inventory Management", "Order Tracking", "Customer Portal", "Multi-channel Selling"],
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Square", "Magento"]
    }
  ];

  const additionalServices = [
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: <Smartphone className="w-6 h-6" />,
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and organic visibility",
      icon: <Search className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Brand Identity",
      description: "Complete brand design including logo, guidelines, and assets",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-purple-500 to-violet-500"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure, hosting, and deployment services",
      icon: <Cloud className="w-6 h-6" />,
      gradient: "from-gray-500 to-slate-500"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultation sessions.",
      icon: <Target className="w-6 h-6" />
    },
    {
      number: "02", 
      title: "Strategy & Planning",
      description: "Our team creates a comprehensive strategy and project roadmap tailored to your specific needs and objectives.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Design & Development",
      description: "We bring your vision to life with stunning designs and robust development, keeping you involved throughout the process.",
      icon: <Code className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Testing & Launch",
      description: "Rigorous testing ensures everything works perfectly before launch, followed by ongoing support and optimization.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStartup Inc.",
      text: "Team Devora transformed our digital presence completely. The website they built increased our conversions by 300% within the first month!",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      text: "Outstanding work on our e-commerce platform. The team delivered exactly what we needed, on time and beyond our expectations.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      text: "The UI/UX design exceeded our expectations. Our users love the new interface and engagement has increased by 250%.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive digital solutions that transform your business 
              and drive measurable results in today's competitive market.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to elevate your digital presence and drive business growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div 
                key={service.id}
                className="group bg-white rounded-2xl border border-gray-200 p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 p-3 bg-gradient-to-r ${service.gradient} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <h4 className="font-semibold text-gray-900">What's included:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies we use:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border hover:bg-gray-200 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                      Learn More 
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expand your digital capabilities with our specialized services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                <div className={`inline-flex p-3 bg-gradient-to-r ${service.gradient} rounded-lg text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-blue-600 mr-3">{step.number}</span>
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Connector Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            </Link>
            <a
              href="https://wa.me/917456096455?text=Hi!%20I%20want%20to%20start%20my%20business%20and%20need%20a%20mobile%20app%20and%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Schedule a Call
            </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}