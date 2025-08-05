"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

   const portfolioImages = [
    "/image3.png",
    "/image2.png", 
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const faqs = [
    {
      question: 'What is your process for designing and developing a website?',
      answer: 'Our process involves initial consultation to understand your requirements, followed by wireframing, design mockups, development, testing, and finally, deployment.'
    },
    {
      question: 'How long will it take to complete my website?',
      answer: 'The timeline depends on the complexity of your website and any specific features you require. Typically, it takes between 1 to 2 weeks for a standard website.'
    },
    {
      question: 'Can you help with branding and logo design as well?',
      answer: 'Yes, we offer branding and logo design services to ensure your website reflects a cohesive and professional brand image.'
    },
    {
      question: 'Will my website be mobile-friendly and responsive?',
      answer: 'Absolutely, we prioritize mobile responsiveness in all our designs to ensure optimal viewing experience across various devices and screen sizes.'
    },
    {
      question: 'Do you provide ongoing maintenance and support after the website is launched?',
      answer: 'Yes, we offer maintenance and support plans to keep your website running smoothly and up-to-date with the latest security patches and software updates.'
    },
    {
      question: 'What platform or content management system (CMS) do you recommend for my website?',
      answer: 'We recommend platforms like WordPress or custom-built solutions tailored to your specific needs, ensuring ease of use and scalability.'
    },
    {
      question: 'Can you integrate third-party tools or services into my website, such as e-commerce?',
      answer: 'Absolutely, we have experience integrating various third-party tools and services, including e-commerce platforms, to enhance the functionality of your website.'
    }
  ];

  const workflowSteps = [
    {
      number: 1,
      title: 'Requirements',
      description: 'We collect all necessary information from the client to understand their goals and needs for the website.',
    },
    {
      number: 2,
      title: 'Choice',
      description: 'We discuss about client\'s preferences regarding colors, layout, fonts, and overall aesthetics to align the design with their vision.',
    },
    {
      number: 3,
      title: 'Plan',
      description: 'We develop a detailed blueprint outlining the structure, navigation, and key elements of the website based on the gathered information.',
    },
    {
      number: 4,
      title: 'Develop',
      description: 'We use coding languages like HTML, CSS, and JavaScript to bring the design to life, ensuring responsiveness across devices.',
    },
    {
      number: 5,
      title: 'Launch',
      description: 'We then thoroughly test the website for any bugs or issues, then obtain client approval before launching it live for public access.',
    },
  ];

  // New component for each workflow step - Made smaller and more beautiful
  const WorkflowStep = ({ step, index, totalSteps }) => {
    const cardRef = useRef(null);
    const cardIsInView = useInView(cardRef, { 
      once: false, 
      amount: 0.1,
      margin: "-10% 0px -10% 0px"
    });

    return (
      <div 
        ref={cardRef}
        className="sticky top-1/2 transform -translate-y-1/2 mb-40 sm:mb-60 md:mb-80"
        style={{
          marginBottom: '40vh'
        }}
      >
        <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={cardIsInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="bg-white border border-gray-300 rounded-lg sm:rounded-xl md:rounded-2xl p-10 sm:p-10 md:p-17 lg:p-12 shadow-md sm:shadow-lg md:shadow-xl hover:shadow-2xl transition-all duration-300"
            style={{
              backgroundColor: index % 2 === 0 ? 'white' : '#f8fafc',
              zIndex: totalSteps - index,
            }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <div 
                className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-0 sm:mr-3 md:mr-4 lg:mr-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                {step.number}
              </div>
              <div className="flex-1">
                <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-1 sm:mb-2 md:mb-3">
                  {step.title}
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-2 sm:mb-3 md:mb-4">
                  {step.description}
                </p>
                
                {/* Progress indicator */}
                <div className="w-full bg-gray-200 rounded-full h-1 sm:h-1.5 md:h-2">
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 sm:h-1.5 md:h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={cardIsInView ? { width: `${((index + 1) / totalSteps) * 100}%` } : { width: 0 }}
                    transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative py-34 sm:py-30 sm:min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden">
        {/* Main Content */}
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          {/* Main Headline */}
          <h1 className="mb-6 sm:mb-8 leading-none">
            {/* Desktop version */}
            <div className="hidden sm:block">
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-gray-950 to-blue-900 bg-clip-text text-transparent">E</span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">xce</span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent">ptional</span>
              <br />
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black">Websites.</span>
            </div>
            
            {/* Mobile version - Fixed to match desktop gradient colors */}
            <div className="block sm:hidden ">
              <div className="text-4xl font-bold leading-tight">
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-gray-950 to-blue-900 bg-clip-text text-transparent">E</span>
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">xce</span>
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent">ptional</span>
                <br />
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black">Websites.</span>
              </div>
            </div>
          </h1>

          {/* Description */}
          <div className="mb-6 sm:mb-8 space-y-2">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Team Sitezy crafting exceptional websites for high-end 
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
             brands and companies with attention to design and detail.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-blue-700 transition-colors duration-200 group shadow-lg hover:shadow-xl"
          >
            Start a project request
            <svg
              className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Decorative Elements - Adjusted for mobile */}
        <div className="absolute top-16 sm:top-20 left-6 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 sm:bottom-32 right-6 sm:right-10 w-12 sm:w-16 h-12 sm:h-16 bg-purple-100 rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/4 sm:top-1/3 right-12 sm:right-20 w-10 sm:w-12 h-10 sm:h-12 bg-cyan-100 rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

   

      {/* Portfolio Section Header */}
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-[#edeff1] to-white overflow-hidden">
  {/* Heading */}
  <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-16">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium  text-black leading-tight px-4">
      A small selection
      <br />
      of our work.
    </h2>
  </div>

  {/* Gallery Grid */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 md:gap-12 lg:gap-16">
      {portfolioImages.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
          style={{ aspectRatio: '3/2', maxWidth: '600px', margin: '0 auto' }}
        >
          {/* Mockup Image */}
          <div className="w-full h-full overflow-hidden">
            <Image
              src={image}
              alt={`Portfolio work ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>

          {/* Hand-drawn Sketch Effect via Pseudo-element */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 via-orange-200/20 to-blue-200/20 opacity-70 mix-blend-overlay rounded-2xl" />
          </div>

          {/* Card Border Effect */}
          <div className="absolute inset-0 border-2 border-white rounded-2xl pointer-events-none" />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-600 to-gray-900 text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Your ultimate
              <br />
              Website partner
            </h1>
          </div>

          {/* Stats Grid and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
            {/* Stats Cards */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4 md:gap-6">
              {/* 400+ Happy Clients */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">40+</div>
                <div className="text-gray-400 text-sm md:text-base lg:text-lg">Happy Clients</div>
              </div>

              {/* 8 years Experience */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">2 years</div>
                <div className="text-gray-400 text-sm md:text-base lg:text-lg">Experience</div>
              </div>

              {/* 300+ Successful Projects */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-gray-400 text-sm md:text-base lg:text-lg">Successful Projects</div>
              </div>

              {/* 100% Passion */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                  100<span className="text-xl md:text-2xl lg:text-3xl">%</span>
                </div>
                <div className="text-gray-400 text-sm md:text-base lg:text-lg">Passion</div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Websites that work and look good.</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                With years of web design experience, I m passionate about great design and focus on the small details
                which are negligible but have a huge impact. That is the type of web designer I am. Say goodbye to the
                hassle of working with developers who dont understand design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Images Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-400 to-gray-900 text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left content */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8">Premium images</h2>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  I handpick the finest and most premium images and animations for your website. With a keen eye for
                  aesthetics, I ensure that every visual aspect of your website reflects the quality and sophistication
                  your brand deserves.
                </p>
              </div>
              <div className='flex justify-center lg:ml-40 mt-6'>
                <div>
                  <div>
                    <Image src="/computer.png" alt="Picture of the author" width={500} height={500} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-400 to-gray-900 text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-cyan-900/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Short and Clean code */}
            <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-xl sm:rounded-2xl p-6 md:p-8 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white">Short and Clean code.</h2>
              <div className="bg-gray-950/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 md:p-6 font-mono text-sm border border-gray-800/50">
                <div className="flex items-center mb-1">
                  <div className="text-gray-500 w-8 text-right mr-4">1</div>
                  <div>
                    <span className="text-blue-400">{"<ul>"}</span>
                  </div>
                </div>
                <div className="flex items-center mb-1">
                  <div className="text-gray-500 w-8 text-right mr-4">2</div>
                  <div className="ml-4">
                    <span className="text-blue-400">{"<li>"}</span>
                    <span className="text-white">Semantic HTML.</span>
                    <span className="text-blue-400">{"</li>"}</span>
                  </div>
                </div>
                <div className="flex items-center mb-1">
                  <div className="text-gray-500 w-8 text-right mr-4">3</div>
                  <div className="ml-4">
                    <span className="text-blue-400">{"<li>"}</span>
                    <span className="text-white">Class naming system.</span>
                    <span className="text-blue-400">{"</li>"}</span>
                  </div>
                </div>
                <div className="flex items-center mb-1">
                  <div className="text-gray-500 w-8 text-right mr-4">4</div>
                  <div className="ml-4">
                    <span className="text-blue-400">{"<li>"}</span>
                    <span className="text-white">Solid JS skills.</span>
                    <span className="text-blue-400">{"</li>"}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-gray-500 w-8 text-right mr-4">5</div>
                  <div>
                    <span className="text-blue-400">{"</ul>"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick work, follow ups! */}
            <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-xl sm:rounded-2xl p-6 md:p-8 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-white">Quick work, follow ups!.</h2>
              <div className="flex flex-col items-center justify-center h-40 md:h-48">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-500 line-through mb-4 md:mb-6 opacity-50">Months</div>
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Weeks</div>
              </div>
            </div>

            {/* Responsive design */}
            <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-xl sm:rounded-2xl p-6 md:p-8 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">Responsive design.</h2>
              <p className="text-gray-300 mb-8 md:mb-12 text-base md:text-lg leading-relaxed">
                Is the most important and yet most ignored, but I give it atmost importance.
              </p>
              <div className="flex items-center justify-center space-x-6">
                {/* Mobile Device */}
                <div className="relative">
                  <div className="bg-gray-800 rounded-2xl p-1 shadow-xl border border-gray-600">
                    <div className="bg-blue-500 rounded-xl w-16 h-28 flex flex-col items-center justify-center relative overflow-hidden">
                      {/* Mobile screen content */}
                      <div className="absolute top-2 w-8 h-1 bg-gray-300 rounded-full opacity-50"></div>
                      <div className="w-10 h-16 bg-white/10 rounded-lg flex flex-col justify-between p-1">
                        <div className="w-full h-2 bg-white/20 rounded"></div>
                        <div className="w-full h-2 bg-white/20 rounded"></div>
                        <div className="w-full h-2 bg-white/20 rounded"></div>
                      </div>
                      <div className="absolute bottom-1 w-6 h-1 bg-gray-300 rounded-full opacity-50"></div>
                    </div>
                  </div>
                </div>
                
                {/* Desktop Device */}
                <div className="relative">
                  <div className="bg-gray-800 rounded-lg p-2 shadow-xl border border-gray-600">
                    <div className="bg-gray-700 rounded-lg w-32 h-20 flex flex-col relative overflow-hidden">
                      {/* Desktop screen content */}
                      <div className="bg-gray-600 h-3 rounded-t-lg flex items-center px-2">
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex-1 bg-white/5 p-2 grid grid-cols-3 gap-1">
                        <div className="bg-white/10 rounded"></div>
                        <div className="bg-white/10 rounded"></div>
                        <div className="bg-white/10 rounded"></div>
                        <div className="bg-white/10 rounded col-span-3 h-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lightning-fast loadings */}
            <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-xl sm:rounded-2xl p-6 md:p-8 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">Lightning-fast loadings.</h2>
              <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                Best performance and best user experience has been my priority all.
              </p>
              <div className="bg-gray-950/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 md:p-6 border border-gray-800/50">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="text-green-400 font-medium text-sm md:text-base">Performance: 100</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="text-green-400 font-medium text-sm md:text-base">Accessibility: 100</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="text-orange-400 font-medium text-sm md:text-base">Best Practices: 92</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Sticky Scroll Workflow Section - Improved */}
      <section className="relative bg-white">
        {/* Workflow Cards Container */}
        {/* Hero Text - Sticky in Middle of Screen */}
        <div className="sticky top-1/2 transform -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm py-8">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold">
              Our workflow to <br /> make websites.
            </h1>
          </div>
        </div>
        <div className="relative z-10">
          {/* Initial spacing */}
          <div className="h-screen"></div>
          
          {workflowSteps.map((step, index) => (
            <WorkflowStep 
              key={step.number} 
              step={step} 
              index={index} 
              totalSteps={workflowSteps.length} 
            />
          ))}
          
          {/* Final spacing */}
          <div className="h-screen"></div>
        </div>
      </section>

      {/* FAQ - Improved */}
      <section className="relative bg-white text-gray-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-12 sm:mb-16 md:mb-20 font-bold">
            Frequently Asked <br />Questions
          </h2>
          
          <div className="space-y-1">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  className="w-full text-left py-6 sm:py-8 focus:outline-none flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium pr-4 leading-relaxed">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all duration-200 ${openIndex === index ? 'bg-blue-600 border-blue-600 text-white rotate-45' : 'hover:border-gray-400'}`}>
                      <span className="text-lg sm:text-xl font-light">+</span>
                    </div>
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 sm:pb-8 pr-12 sm:pr-16">
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
<div className="w-full flex justify-center items-center bg-white  py-4 sm:py-6 md:py-8 lg:py-12">
  <Image
    src="/image.png" 
    alt="Descriptive image alt text" 
    width={900}
    height={900}
    className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[900px] h-auto md:h-[700px] object-contain"
  />
</div>
    </div>
  );
}