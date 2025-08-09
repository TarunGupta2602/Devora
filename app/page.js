
"use client";

import React from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function HomePage() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const sectionRef = useRef(null);

  const portfolioImages = [
    "/image3.png",
    "/image2.png",
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const faqs = [
    {
      question: 'What makes PixelCraft Studio’s web design unique?',
      answer: 'We combine creative design with cutting-edge technology, tailoring each project to your brand’s vision through a collaborative process.',
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'Depending on complexity, most projects are completed in 2-4 weeks, with a focus on quality and precision.',
    },
    {
      question: 'Do you offer branding services alongside web design?',
      answer: 'Yes, we create cohesive branding, including logos and visual identities, to ensure your website stands out.',
    },
    {
      question: 'Are your websites optimized for all devices?',
      answer: 'Every site we build is fully responsive, delivering a seamless experience on mobile, tablet, and desktop.',
    },
    {
      question: 'What post-launch support do you provide?',
      answer: 'We offer ongoing maintenance, including updates, security, and performance enhancements to keep your site at its best.',
    },
    {
      question: 'Which platforms do you recommend for websites?',
      answer: 'We specialize in Next.js and WordPress, choosing the best platform based on your needs for flexibility and growth.',
    },
    {
      question: 'Can you add advanced features like e-commerce?',
      answer: 'Absolutely, we integrate e-commerce, CRMs, and other tools to enhance your website’s functionality.',
    },
  ];

  const workflowSteps = [
    {
      number: 1,
      title: 'Vision',
      description: 'We explore your goals and audience to create a tailored strategy for your website.',
    },
    {
      number: 2,
      title: 'Design',
      description: 'Our designers craft visually stunning layouts that align with your brand’s identity.',
    },
    {
      number: 3,
      title: 'Structure',
      description: 'We plan the site’s architecture, ensuring intuitive navigation and functionality.',
    },
    {
      number: 4,
      title: 'Build',
      description: 'Using clean code, we develop a responsive, high-performance website.',
    },
    {
      number: 5,
      title: 'Launch',
      description: 'After thorough testing and your approval, we launch your site to the world.',
    },
  ];

  const stats = [
    { value: 120, label: 'Happy Clients' },
    { value: 5, label: 'Years Experience' },
    { value: 180, label: 'Projects Delivered' },
    { value: 100, label: 'Commitment', unit: '%' },
  ];

  const WorkflowStep = ({ step, index, totalSteps }) => {
    const cardRef = useRef(null);
    const cardIsInView = useInView(cardRef, { once: false, amount: 0.1, margin: "-5% 0px -5% 0px" });

    useEffect(() => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`WorkflowStep ${index + 1}: step.number = ${step.number}`);
      }
    }, [step.number, index]);

    const cardStyles = [
      'w-[90%] sm:w-[700px] h-[260px] mt-4 ml-4',
      'w-[90%] sm:w-[700px] h-[260px] mt-8 ml-8',
      'w-[90%] sm:w-[700px] h-[260px] mt-12 ml-12',
      'w-[90%] sm:w-[700px] h-[260px] mt-16 ml-16',
      'w-[90%] sm:w-[700px] h-[260px] mt-20 ml-22',
    ];

    return (
      <div
        ref={cardRef}
        className="sticky top-[20vh] sm:top-[40vh] transform -translate-y-1/2 mb-[30vh] sm:mb-[25vh] flex justify-center"
      >
        <div className={`px-4 sm:px-6 ${cardStyles[index]}`}>
          <motion.div
            initial="hidden"
            animate={cardIsInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="bg-white border-2 border-transparent rounded-2xl p-8 sm:p-10 md:p-12 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            style={{
              zIndex: totalSteps - index,
              transform: `translateY(${index * 8}px)`,
              boxShadow: `0 ${4 + index * 2}px ${8 + index * 4}px rgba(0, 0, 0, ${0.1 + index * 0.02})`,
              boxSizing: 'border-box',
            }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-0 sm:mr-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {step.number || index + 1}
              </div>
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-3">
                  {step.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={cardIsInView ? { width: `${((index + 1) / totalSteps) * 100}%` } : { width: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

  const StatNumber = ({ value, unit, sectionRef }) => {
    const statRef = useRef(null);
    const isInView = useInView(statRef, { once: true, amount: 0.5 });
    const count = useSpring(0, { stiffness: 100, damping: 30 });
    const formattedCount = useTransform(count, (val) => Math.floor(val));

    useEffect(() => {
      if (isInView) {
        count.set(value);
      }
    }, [isInView, count, value]);

    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"],
    });

    const color = useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [
        'rgb(59, 130, 246)',
        'rgb(139, 92, 246)',
        'rgb(255, 255, 255)',
      ]
    );

    return (
      <motion.div
        ref={statRef}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 font-[var(--font-sans)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span style={{ color }} className="inline-block">
          <motion.span>{formattedCount}</motion.span>
          {unit && <span className="text-xl sm:text-2xl md:text-3xl">{unit}</span>}
        </motion.span>
      </motion.div>
    );
  };

  return (
    <div>
      <Head>
        <title>PixelCraft Studio - Innovative Web Solutions</title>
        <meta name="description" content="PixelCraft Studio delivers cutting-edge, responsive websites tailored to your brand. Elevate your online presence with our creative and technical expertise." />
        <meta name="keywords" content="web design, web development, responsive websites, PixelCraft Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_CLIENT_ID" crossOrigin="anonymous"></script>
      </Head>

      <div className="relative min-h-[80vh] sm:min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-[30%] right-[30%] w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-[25%] left-[25%] w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-[60%] right-[20%] w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-30" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-10 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-10 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-cyan-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
          <motion.div
            className="absolute top-[25%] right-[25%] w-12 sm:w-16 h-12 sm:h-16 border-2 border-blue-300/30 rounded-lg"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-[30%] left-[25%] w-10 sm:w-12 h-10 sm:h-12 border-2 border-purple-300/30 rounded-full"
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              animation: 'gridMove 20s linear infinite'
            }}></div>
          </div>
          <svg className="absolute bottom-0 left-0 w-full h-32 sm:h-40 opacity-20 animate-[wave_10s_linear_infinite]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 0 }}>
            <path fill="url(#gradient)" fillOpacity="0.3" d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,128C672,117,768,107,864,112C960,117,1056,139,1152,160C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3b82f6" />
                <stop offset="1" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute top-10 right-12 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-70" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-16 left-12 w-1 h-1 bg-white rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute bottom-12 right-16 w-2 h-2 bg-white rounded-full animate-pulse opacity-50" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-20 text-center max-w-[90%] sm:max-w-4xl mx-auto px-4">
          <motion.h1
            className="mb-6 sm:mb-8 leading-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hidden sm:block">
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-gray-950 to-blue-900 bg-clip-text text-transparent">P</span>
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">ixel</span>
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent">Craft</span>
              <br />
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-black">Studio</span>
            </div>
            <div className="block sm:hidden">
              <div className="text-3xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-950 to-blue-900 bg-clip-text text-transparent">P</span>
                <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">ixel</span>
                <span className="bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent">Craft</span>
                <br />
                <span className="text-black">Studio</span>
              </div>
            </div>
          </motion.h1>
          <motion.div
            className="mb-6 sm:mb-8 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Creating innovative, high-performance websites that elevate your brand.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              We merge artistry and technology for unforgettable digital experiences.
            </p>
          </motion.div>
          <motion.a
            href="/contact"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-blue-700 transition-colors duration-300 group shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
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
          </motion.a>
        </div>
        <div className="absolute top-12 sm:top-16 left-4 sm:left-8 w-12 sm:w-16 h-12 sm:h-16 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-12 sm:bottom-16 right-4 sm:right-8 w-10 sm:w-14 h-10 sm:h-14 bg-purple-100 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[20%] sm:top-[25%] right-8 sm:right-12 w-8 sm:w-10 h-8 sm:h-10 bg-cyan-100 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#f1f3f5] to-white overflow-hidden">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-black leading-tight px-4">
            Our Finest
            <br />
            Creations
          </h2>
        </motion.div>
        <div className="max-w-[90%] sm:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{ aspectRatio: '3/2', maxWidth: '100%', width: '100%' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-full h-full overflow-hidden">
                  <Image
                    src={image}
                    alt={`Portfolio project ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 via-orange-200/20 to-blue-200/20 opacity-70 mix-blend-overlay rounded-xl" />
                <div className="absolute inset-0 border-2 border-white rounded-xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   <section
  ref={sectionRef}
  className="relative min-h-screen bg-gradient-to-b from-[#565661] via-[#393954] to-[#141014] text-white py-20 px-6 sm:px-8 overflow-hidden"
>
  <div className="max-w-[1200px] mx-auto">
    {/* Heading */}
    <motion.div
      className="text-center mb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-light leading-tight">
        Build smarter <br />
        <span className="font-medium">digital experiences</span>
      </h1>
    </motion.div>

    {/* Stats + Description */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-6 md:col-span-2">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-[#0F0F0F] border border-[#2E2E2E] rounded-lg p-6 flex flex-col items-center justify-center min-h-[150px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-[2rem] sm:text-[2.5rem] font-semibold mb-1">
              <StatNumber value={stat.value} unit={stat.unit} sectionRef={sectionRef} />
            </div>
            <div className="text-[0.95rem] text-[#A0A0A0]">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Description Card */}
      <motion.div
        className="bg-[#0F0F0F] border border-[#2E2E2E] rounded-lg p-8 flex flex-col justify-center min-h-[312px] md:min-h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-[1.25rem] sm:text-[1.5rem] font-semibold mb-4">
          Websites that deliver results.
        </h2>
        <p className="text-[#A0A0A0] text-[0.95rem] leading-relaxed mb-4">
          I design and develop websites that are not only visually appealing but also perform
          exceptionally well. Every element is crafted with purpose to ensure your brand stands out
          and connects with your audience.
        </p>
        <p className="text-[#A0A0A0] text-[0.95rem] leading-relaxed">
          From concept to launch, I handle every step with precision, making sure your online
          presence truly represents your vision and drives growth.
        </p>
      </motion.div>
    </div>
  </div>
</section>



      <section className="relative min-h-[60vh] sm:min-h-[40vh] bg-gradient-to-b from-[#141014] via-[#393954] to-[#141014] text-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-[90%] sm:max-w-6xl mx-auto">
          <motion.div
            className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 sm:p-6 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">Premium Visuals</h2>
                <p className="text-gray-200 leading-relaxed text-sm sm:text-base md:text-lg">
                  We curate high-quality images and animations to make your website visually captivating, reflecting your brand’s unique story.
                </p>
              </div>
              <div className="flex justify-center mt-4 sm:mt-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image src="/computer.png" alt="Laptop showcasing a PixelCraft Studio website" width={400} height={400} sizes="(max-width: 640px) 100vw, 400px" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative min-h-[80vh] bg-gradient-to-b from-[#141014]  via-[#393954] to-[#565661] text-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 max-w-[90%] sm:max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 sm:p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-base sm:text-lg md:text-xl font-bold mb-4">Efficient Code</h2>
              <div className="bg-gray-950/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm border border-gray-700">
                <div className="flex items-center mb-1">
                  <div className="text-gray-400 w-6 text-right mr-3">1</div>
                  <div><span className="text-blue-400">{"<ul>"}</span></div>
                </div>
                <div className="flex items-center mb-1">
                  <div className="text-gray-400 w-6 text-right mr-3">2</div>
                  <div className="ml-4"><span className="text-blue-400">{"<li>"}</span><span className="text-white">Clean HTML</span><span className="text-blue-400">{"</li>"}</span></div>
                </div>
                <div className="flex items-center mb-1">
                  <div className="text-gray-400 w-6 text-right mr-3">3</div>
                  <div className="ml-4"><span className="text-blue-400">{"<li>"}</span><span className="text-white">BEM Naming</span><span className="text-blue-400">{"</li>"}</span></div>
                </div>
                <div className="flex items-center mb-1">
                  <div className="text-gray-400 w-6 text-right mr-3">4</div>
                  <div className="ml-4"><span className="text-blue-400">{"<li>"}</span><span className="text-white">Modern JS</span><span className="text-blue-400">{"</li>"}</span></div>
                </div>
                <div className="flex items-center">
                  <div className="text-gray-400 w-6 text-right mr-3">5</div>
                  <div><span className="text-blue-400">{"</ul>"}</span></div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 sm:p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-base sm:text-lg md:text-xl font-bold mb-4">Fast Delivery</h2>
              <div className="flex flex-col items-center justify-center h-32 sm:h-40">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400 line-through mb-3 opacity-50">Months</div>
                <motion.div
                  className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Days
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 sm:p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-base sm:text-lg md:text-xl font-bold mb-4">Responsive Design</h2>
              <p className="text-gray-200 mb-4 text-sm sm:text-base leading-relaxed">
                Our websites adapt seamlessly to any device, ensuring a perfect user experience.
              </p>
              <div className="flex items-center justify-center space-x-4 sm:space-x-6">
                <div className="relative">
                  <div className="bg-gray-700 rounded-xl p-1 shadow-md border border-gray-600">
                    <div className="bg-blue-500 rounded-lg w-12 sm:w-16 h-20 sm:h-28 flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="absolute top-1 w-6 h-1 bg-gray-300 rounded-full opacity-50"></div>
                      <div className="w-8 sm:w-10 h-12 sm:h-16 bg-white/10 rounded-lg flex flex-col justify-between p-1">
                        <div className="w-full h-1.5 bg-white/20 rounded"></div>
                        <div className="w-full h-1.5 bg-white/20 rounded"></div>
                        <div className="w-full h-1.5 bg-white/20 rounded"></div>
                      </div>
                      <div className="absolute bottom-1 w-4 sm:w-6 h-1 bg-gray-300 rounded-full opacity-50"></div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gray-700 rounded-lg p-1.5 shadow-md border border-gray-600">
                    <div className="bg-gray-600 rounded-lg w-24 sm:w-32 h-16 sm:h-20 flex flex-col relative overflow-hidden">
                      <div className="bg-gray-500 h-2 rounded-t-lg flex items-center px-1.5">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex-1 bg-white/5 p-1.5 grid grid-cols-3 gap-1">
                        <div className="bg-white/10 rounded"></div>
                        <div className="bg-white/10 rounded"></div>
                        <div className="bg-white/10 rounded"></div>
                        <div className="bg-white/10 rounded col-span-3 h-1.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 sm:p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-base sm:text-lg md:text-xl font-bold mb-4">Optimal Performance</h2>
              <p className="text-gray-200 mb-4 text-sm sm:text-base leading-relaxed">
                We optimize for speed, delivering lightning-fast websites for superior user experiences.
              </p>
              <div className="bg-gray-950/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-700">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <div className="text-green-400 font-medium text-xs sm:text-sm">Performance: 98</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <div className="text-green-400 font-medium text-xs sm:text-sm">Accessibility: 95</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <div className="text-orange-400 font-medium text-xs sm:text-sm">Best Practices: 90</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-12 left-8 w-24 sm:w-32 h-24 sm:h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-12 right-8 w-32 sm:w-40 h-32 sm:h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </section>

      <section className="relative bg-white py-12 sm:py-16">
        <div className="sticky top-[20vh] sm:top-[40vh] transform -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm py-6 sm:py-8">
          <div className="text-center px-4 sm:px-6">
            <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-7xl text-gray-800 ">
              Our Creative
              <br />
              Process
            </h1>
          </div>
        </div>
        <div className="relative z-10">
          <div className="h-[50vh] sm:h-[80vh]"></div>
          {workflowSteps.map((step, index) => (
            <WorkflowStep
              key={step.number}
              step={step}
              index={index}
              totalSteps={workflowSteps.length}
            />
          ))}
          <div className="h-[50vh] sm:h-[80vh]"></div>
        </div>
      </section>

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
                  className="w-full text-left py-4 sm:py-6 focus:outline-none flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium pr-4 leading-relaxed">
                    {faq.question}
                  </span>
                  <motion.div
                    className={`w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all duration-200 ${openIndex === index ? 'bg-blue-600 border-blue-600 text-white' : 'hover:border-gray-400'}`}
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                  >
                    <span className="text-lg font-light">+</span>
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
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

      <div className="w-full flex justify-center items-center bg-white py-6 sm:py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/image.png"
            alt="Showcase of a PixelCraft Studio website design"
            width={900}
            height={900}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 900px"
            className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[900px] h-auto object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
