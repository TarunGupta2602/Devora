import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-white flex items-center justify-center px-4 py-8 overflow-hidden">
        {/* Main Content */}
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          {/* Main Headline */}
          <h1 className="mb-8 leading-none">
            {/* Desktop version */}
            <div className="hidden sm:block">
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-gray-950 to-blue-800 bg-clip-text text-transparent">E</span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">xce</span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">ptional</span>
              <br />
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black">websites.</span>
            </div>
            
            {/* Mobile version */}
            <div className="block sm:hidden">
              <div className="text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Exceptional</span>
                <br />
                <span className="text-gray-900">websites.</span>
              </div>
            </div>
          </h1>

          {/* Description */}
          <div className="mb-8 space-y-2">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Team Sitezy crafting exceptional websites for high-end brands
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              and companies with attention to design and detail.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-blue-700 transition-colors duration-200 group shadow-lg hover:shadow-xl"
          >
            Start a project request
            <svg
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
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

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-16 h-16 bg-purple-100 rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-cyan-100 rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Team Leader Section */}
      <section className="relative py-12 sm:py-16 bg-white flex items-center justify-center overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left max-w-2xl order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Introducing Our
                <br />
                <span className="text-black">Team Leader</span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Harendra, a visionary in Web Design Innovation, crafts commendable websites that exceed expectations.
              </p>
            </div>

            {/* Image */}
            <div className="flex-shrink-0 order-1 lg:order-2">
              <div className="relative">
                {/* Glowing background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
                
                {/* Image container */}
                <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                  <div className="w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] relative overflow-hidden rounded-2xl bg-gray-200">
                    {/* Placeholder for team leader image */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                        <p className="text-sm">Team Leader Photo</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm opacity-60 animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section Header */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
            A small selection
            <br />
            of our work.
          </h2>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-600 to-gray-900 text-white py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-12 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Your ultimate
              <br />
              Website partner
            </h1>
          </div>

          {/* Stats Grid and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {/* Stats Cards */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4 sm:gap-6">
              {/* 400+ Happy Clients */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-8 backdrop-blur-sm">
                <div className="text-3xl sm:text-5xl font-bold mb-2">400+</div>
                <div className="text-gray-400 text-sm sm:text-lg">Happy Clients</div>
              </div>

              {/* 8 years Experience */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-8 backdrop-blur-sm">
                <div className="text-3xl sm:text-5xl font-bold mb-2">8 years</div>
                <div className="text-gray-400 text-sm sm:text-lg">Experience</div>
              </div>

              {/* 300+ Successful Projects */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-8 backdrop-blur-sm">
                <div className="text-3xl sm:text-5xl font-bold mb-2">300+</div>
                <div className="text-gray-400 text-sm sm:text-lg">Successful Projects</div>
              </div>

              {/* 100% Passion */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-8 backdrop-blur-sm">
                <div className="text-3xl sm:text-5xl font-bold mb-2">
                  100<span className="text-xl sm:text-3xl">%</span>
                </div>
                <div className="text-gray-400 text-sm sm:text-lg">Passion</div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Websites that work and look good.</h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                With years of web design experience, I m passionate about great design and focus on the small details
                which are negligible but have a huge impact. That is the type of web designer I am. Say goodbye to the
                hassle of working with developers who dont understand design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Images Section */}
      <section className="relative min-h-[40vh] bg-gradient-to-br from-gray-900 via-blue-400 to-gray-900 text-white py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-12 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left content */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8">Premium images</h2>
                <p className="text-gray-300 leading-relaxed">
                  I handpick the finest and most premium images and animations for your website. With a keen eye for
                  aesthetics, I ensure that every visual aspect of your website reflects the quality and sophistication
                  your brand deserves.
                </p>
              </div>
<div className='ml-40 mt-6'>
  <Image src="/computer.png" alt="Picture of the author" width={400} height={400} />
</div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-400 to-gray-900 text-white py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-cyan-900/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Short and Clean code */}
            <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">Short and Clean code.</h2>
              <div className="bg-gray-950/60 backdrop-blur-sm rounded-xl p-6 font-mono text-sm border border-gray-800/50">
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
            <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-white">Quick work, follow ups!.</h2>
              <div className="flex flex-col items-center justify-center h-48">
                <div className="text-6xl lg:text-7xl font-bold text-gray-500 line-through mb-6 opacity-50">Months</div>
                <div className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Weeks</div>
              </div>
            </div>

            {/* Responsive design */}
            <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Responsive design.</h2>
              <p className="text-gray-300 mb-12 text-lg leading-relaxed">
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
            <div className="bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Lightning-fast loadings.</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Best performance and best user experience has been my priority all.
              </p>
              <div className="bg-gray-950/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
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
                    <div className="text-green-400 font-medium">Performance: 100</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="text-green-400 font-medium">Accessibility: 100</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="text-orange-400 font-medium">Best Practices: 92</div>
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
    </div>
  );
}