"use client";
import React, { useState } from "react";
import { ArrowRight, Globe, Palette, TrendingUp, ShoppingCart, Smartphone, Search, Users, Cloud, CheckCircle, Star, Award, Target, Code, Layers, Zap, Shield, Headphones, Clock, Rocket, BarChart, BarChart3, TrendingDown, Heart, Gauge, AlertCircle } from "lucide-react";
import Link from "next/link";



// Note: This page uses "use client" for hover interactions, but benefits from Next.js optimizations

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const mainServices = [
    {
      id: 'web-dev',
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies. We create fast, scalable solutions that deliver exceptional user experiences and measurable business results.",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      features: ["Responsive Design", "Fast Performance", "SEO Optimized", "Security First", "Mobile-Friendly", "Analytics Integration"],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "AWS"],
      deliverable: "Launch-ready website in 2-6 weeks",
      guarantee: "30-day support & bug-free guarantee"
    },
    {
      id: 'ui-ux',
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that convert visitors into customers. Our data-driven design approach increases engagement by an average of 250% based on user testing and analytics.",
      icon: <Palette className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      features: ["User Research", "Wireframing", "Visual Design", "Prototyping", "Design Systems", "Usability Testing"],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Framer"],
      deliverable: "Complete design system with prototypes",
      guarantee: "Unlimited revisions until perfect"
    },
    {
      id: 'digital-marketing',
      title: "Digital Marketing",
      description: "Strategic marketing solutions that grow your online presence and ROI. We've helped clients achieve 200-400% increases in qualified leads through integrated campaigns.",
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      features: ["SEO Strategy", "Social Media Marketing", "Content Creation", "PPC Campaigns", "Email Marketing", "Analytics & Reporting"],
      technologies: ["Google Analytics", "Facebook Ads", "Instagram", "LinkedIn", "Mailchimp", "SEMrush"],
      deliverable: "Monthly campaigns with performance reports",
      guarantee: "ROI-focused campaigns with transparent metrics"
    },
    {
      id: 'ecommerce',
      title: "E-commerce Solutions",
      description: "Complete online store setup with enterprise-grade security and seamless shopping experiences. Our clients see average revenue increases of 180% within first 6 months.",
      icon: <ShoppingCart className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
      features: ["Online Store Setup", "Payment Integration", "Inventory Management", "Order Tracking", "Customer Portal", "Multi-channel Selling"],
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Square", "Magento"],
      deliverable: "Full-featured store with admin panel",
      guarantee: "Secure PCI-compliant checkout included"
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

  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      number: "250+",
      label: "Happy Clients",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const whyChooseUs = [
    {
      title: "Expert Team",
      description: "10+ years of combined experience in digital solutions",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "On-Time Delivery",
      description: "99% on-time project completion rate",
      icon: <Clock className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Competitive Pricing",
      description: "Transparent pricing with no hidden costs",
      icon: <TrendingDown className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Latest Technology",
      description: "Using cutting-edge tools and frameworks",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Secure Solutions",
      description: "Enterprise-grade security for all projects",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "Performance Focused",
      description: "Guaranteed fast loading times and SEO",
      icon: <Gauge className="w-6 h-6" />,
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStartup Inc.",
      role: "CEO & Founder",
      text: "Team Devora transformed our digital presence completely. The website they built increased our conversions by 300% within the first month! Their attention to detail and rapid turnaround time impressed us beyond measure.",
      rating: 5,
      result: "$150K+ in first quarter revenue",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "Director of Operations",
      text: "Outstanding work on our e-commerce platform. The team delivered exactly what we needed, on time and beyond our expectations. Our online sales doubled within 2 months of launch. Absolutely recommend!",
      rating: 5,
      result: "200% increase in online sales",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      role: "Marketing Director",
      text: "The UI/UX design exceeded our expectations. Our users love the new interface and engagement has increased by 250%. Team Devora understood our brand perfectly and delivered a stunning result.",
      rating: 5,
      result: "250% boost in user engagement",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "David Kumar",
      company: "Global Retail",
      role: "CTO",
      text: "Working with Team Devora was a game-changer. Their cloud solutions reduced our infrastructure costs by 40% while improving performance. Exceptional expertise and responsive support throughout.",
      rating: 5,
      result: "40% cost reduction achieved",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Lisa Anderson",
      company: "HealthTech",
      role: "Product Manager",
      text: "The mobile app they developed has 50K+ downloads in just 3 months! Users love the smooth experience and intuitive design. Best investment we made for our startup.",
      rating: 5,
      result: "50K+ app downloads",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "James Wilson",
      company: "FinTech Pro",
      role: "CEO",
      text: "Their digital marketing strategy generated 400% more qualified leads. The analytics and reporting they provided helped us make data-driven decisions. Outstanding results!",
      rating: 5,
      result: "400% lead generation increase",
      avatar: "/api/placeholder/60/60"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary based on scope and complexity. Typically, websites take 2-6 weeks, mobile apps 6-12 weeks, and comprehensive digital solutions 8-16 weeks. We provide detailed timelines during the consultation phase."
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer: "Yes! We offer comprehensive post-launch support packages including bug fixes, updates, security patches, and performance optimization. Our 24/7 support ensures your digital presence stays running smoothly."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We work with the latest and most reliable technologies including React, Next.js, Node.js, MongoDB, AWS, Shopify, and more. We choose the best tech stack based on your specific project requirements."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We excel at collaborating with in-house teams. We can integrate seamlessly with your existing workflows, provide expertise where needed, and support your team throughout the process."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing including fixed-price projects, hourly rates, and retainer packages. Each project is quoted based on scope and requirements. We provide transparent pricing with no hidden costs."
    },
    {
      question: "Do you provide SEO and marketing services?",
      answer: "Yes! Our services include complete digital marketing solutions: SEO optimization, social media management, content marketing, PPC campaigns, and analytics. We help drive traffic and convert visitors to customers."
    }
  ];

  const clientLogos = [
    { name: "TechCorp", gradient: "from-blue-500 to-cyan-500" },
    { name: "InnovateHub", gradient: "from-purple-500 to-pink-500" },
    { name: "GlobalNet", gradient: "from-green-500 to-emerald-500" },
    { name: "CloudWave", gradient: "from-orange-500 to-red-500" },
    { name: "DataStream", gradient: "from-indigo-500 to-blue-500" },
    { name: "SmartTech", gradient: "from-teal-500 to-cyan-500" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 animate-bounce">
              <span className="px-6 py-3 bg-white/20 backdrop-blur-lg text-white rounded-full text-sm font-bold shadow-xl border border-white/30">
                ✨ Trusted by 250+ Businesses Worldwide
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-tight drop-shadow-2xl">
              Premium Digital
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12 font-light drop-shadow-lg">
              Transform your business with cutting-edge digital solutions that drive real results
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link href="/contact">
                <button className="group px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/50 hover:scale-110 transition-all duration-300 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
              <a
                href="https://wa.me/917456096455"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-white/10 backdrop-blur-lg text-white rounded-2xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-xl"
              >
                Schedule a Call
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-20">
              {[
                { icon: CheckCircle, text: "Free Consultation", color: "text-yellow-300" },
                { icon: Shield, text: "No Hidden Costs", color: "text-green-300" },
                { icon: Headphones, text: "24/7 Support", color: "text-blue-300" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-3`} />
                  <p className="text-white font-semibold">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-8 rounded-3xl bg-white shadow-2xl border border-gray-100 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className={`inline-flex p-4 bg-gradient-to-r ${stat.color} rounded-2xl text-white mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-600/10 text-blue-600 rounded-full text-sm font-bold">
                WHAT WE DO
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Core Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to elevate your digital presence and drive exceptional business growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {mainServices.map((service, index) => (
              <div 
                key={service.id}
                className="group relative bg-white rounded-3xl border-2 border-gray-100 overflow-hidden hover:border-blue-300 hover:shadow-2xl transition-all duration-500"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`flex-shrink-0 p-5 bg-gradient-to-r ${service.gradient} rounded-2xl text-white group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-extrabold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                        Features Included:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center bg-gray-50 rounded-lg px-4 py-3 hover:bg-blue-50 transition-colors duration-200">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <Code className="w-5 h-5 mr-2 text-blue-500" />
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-sm font-semibold rounded-full border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Deliverable & Guarantee */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 group-hover:shadow-lg transition-all duration-300">
                        <div className="flex-shrink-0">
                          <Rocket className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900 mb-1">Deliverable</div>
                          <div className="text-sm text-gray-700">{service.deliverable}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200 group-hover:shadow-lg transition-all duration-300">
                        <div className="flex-shrink-0">
                          <Shield className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900 mb-1">Guarantee</div>
                          <div className="text-sm text-gray-700">{service.guarantee}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <button className="group inline-flex items-center text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                      Learn More 
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              More <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expand your digital capabilities with our specialized solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="group relative overflow-hidden bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`inline-flex p-4 bg-gradient-to-r ${service.gradient} rounded-2xl text-white mb-6 shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
              Trusted by Leading Companies
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
              {clientLogos.map((logo, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className={`text-transparent bg-gradient-to-r ${logo.gradient} bg-clip-text font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that comes from working with a dedicated team committed to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex p-3 bg-gradient-to-r ${item.gradient} rounded-lg text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-2xl shadow-lg">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              Client <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from businesses that transformed their digital presence with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-purple-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500 -mr-10 -mt-10"></div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400 drop-shadow-sm" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed text-lg italic">{testimonial.text}</p>
                
                <div className="border-t-2 border-gray-100 pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-6 transition-transform duration-300">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-xs text-blue-600 font-semibold">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                    <div className="p-2 bg-green-500 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-600">Result</div>
                      <div className="text-sm font-bold text-green-600">{testimonial.result}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-white">
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

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <AlertCircle className="w-12 h-12 text-blue-600 mx-auto" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our services and process
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <span className="text-2xl text-blue-600">−</span>
                    ) : (
                      <span className="text-2xl text-gray-400">+</span>
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-50 py-20 lg:py-28 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-10 w-72 h-72 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-4">
            <Rocket className="w-12 h-12 text-white mx-auto" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Lets discuss your project and create a custom solution that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <button className="inline-flex items-center px-10 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-50 hover:scale-105 transition-all duration-200 shadow-xl">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
            <a
              href="https://wa.me/917456096455?text=Hi!%20I%20want%20to%20start%20my%20business%20and%20need%20a%20mobile%20app%20and%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-200"
            >
              Schedule a Call
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>Fast Response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>Expert Team</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
