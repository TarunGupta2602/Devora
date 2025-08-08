"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Globe, 
  Palette, 
  TrendingUp, 
  ShoppingCart, 
  Smartphone, 
  Search, 
  Users, 
  Cloud,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Clock,
  Award,
  Target,
  Code,
  Layers
} from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState('web-dev');

  const mainServices = [
    {
      id: 'web-dev',
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies for maximum performance and scalability",
      icon: <Globe className="w-12 h-12" />,
      gradient: "from-blue-500 to-cyan-500",
      features: ["Responsive Design", "Fast Performance", "SEO Optimized", "Security First"],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
      startingPrice: "$2,999",
      deliveryTime: "2-4 weeks"
    },
    {
      id: 'ui-ux',
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience and drive conversions",
      icon: <Palette className="w-12 h-12" />,
      gradient: "from-purple-500 to-pink-500",
      features: ["User Research", "Prototyping", "Design Systems", "Usability Testing"],
      technologies: ["Figma", "Adobe XD", "Principle", "InVision", "Sketch"],
      startingPrice: "$1,999",
      deliveryTime: "1-3 weeks"
    },
    {
      id: 'digital-marketing',
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence and reach your target audience effectively",
      icon: <TrendingUp className="w-12 h-12" />,
      gradient: "from-green-500 to-emerald-500",
      features: ["SEO Services", "Social Media", "Content Strategy", "PPC Campaigns"],
      technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEMrush", "Mailchimp"],
      startingPrice: "$999/mo",
      deliveryTime: "Ongoing"
    },
    {
      id: 'ecommerce',
      title: "E-commerce Solutions",
      description: "Complete online store setup with secure payment integration and inventory management systems",
      icon: <ShoppingCart className="w-12 h-12" />,
      gradient: "from-orange-500 to-red-500",
      features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Order Tracking"],
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Square"],
      startingPrice: "$3,999",
      deliveryTime: "3-6 weeks"
    }
  ];

  const additionalServices = [
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      icon: <Smartphone className="w-8 h-8" />,
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings",
      icon: <Search className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Brand Identity",
      description: "Complete brand design and strategy",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-500"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and hosting",
      icon: <Cloud className="w-8 h-8" />,
      gradient: "from-gray-500 to-slate-500"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultation.",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Our designers create wireframes and prototypes, ensuring the perfect user experience before development begins.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Our developers bring designs to life with clean, efficient code, followed by rigorous testing for quality assurance.",
      icon: <Code className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your project and provide ongoing support and maintenance to ensure continued success.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStartup Inc.",
      text: "Sitezy transformed our online presence completely. The website they built increased our conversions by 300%!",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Store",
      text: "Their e-commerce solution helped us scale from 100 to 10,000 orders per month. Outstanding work!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Agency",
      text: "The UI/UX design exceeded our expectations. Our users love the new interface and engagement is up 250%.",
      rating: 5
    }
  ];

  const activeService = mainServices.find(service => service.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-700"></div>
        <div className="absolute top-2/3 left-2/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Award-winning digital solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide <span className="text-blue-600 font-semibold">comprehensive digital solutions</span> that transform 
            your business and drive measurable results in todays competitive market
          </p>
        </div>

        {/* Main Services with Interactive Tabs */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {mainServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === service.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Detail */}
          {activeService && (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className={`inline-flex p-4 bg-gradient-to-r ${activeService.gradient} rounded-3xl text-white mb-6`}>
                    {activeService.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{activeService.title}</h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{activeService.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-blue-50 rounded-2xl p-4">
                      <div className="flex items-center mb-2">
                        <Clock className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-gray-900">Delivery</span>
                      </div>
                      <p className="text-blue-600 font-bold">{activeService.deliveryTime}</p>
                    </div>
                    <div className="bg-green-50 rounded-2xl p-4">
                      <div className="flex items-center mb-2">
                        <Star className="w-5 h-5 text-green-600 mr-2" />
                        <span className="font-semibold text-gray-900">Starting</span>
                      </div>
                      <p className="text-green-600 font-bold">{activeService.startingPrice}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {activeService.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Whats Included</h3>
                  <div className="space-y-4">
                    {activeService.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="p-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full mr-4">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional Services Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expand your digital presence with our complementary services designed to accelerate growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
                <div className={`inline-flex p-3 bg-gradient-to-r ${service.gradient} rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl font-bold text-gray-200 mr-4">{step.step}</div>
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dont just take our word for it - hear from businesses that have transformed with Sitezy
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">{testimonial.text}</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 mb-20 text-white">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Our Guarantees</h2>
            <p className="text-xl text-blue-100">
              We stand behind our work with industry-leading guarantees
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-white/10 rounded-full w-fit mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Satisfaction</h3>
              <p className="text-blue-100">We wont stop until youre completely happy with the results</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-white/10 rounded-full w-fit mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
              <p className="text-blue-100">We deliver on schedule, every time, or we make it right</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-white/10 rounded-full w-fit mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
              <p className="text-blue-100">30-day free support and maintenance after project completion</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Lets discuss your project and create a custom solution that drives real results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}