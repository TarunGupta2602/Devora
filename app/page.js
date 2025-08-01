import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[100vh] bg-white flex items-center justify-center px-4 overflow-hidden">
        {/* Background Image */}
      

        {/* Main Content */}
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          <h1 className="mb-6 mt-26">
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-gray-950 to-blue-800 bg-clip-text text-transparent">E</span>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">xce</span>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">ptional</span>
            <br />
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black">websites.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-900 leading-relaxed max-w-2xl mx-auto">
            Team Sitezy crafting exceptional websites for high-end brands
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-900 mb-5 leading-relaxed max-w-2xl mx-auto">
            and companies with attention to design and detail.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center text-blue-600 text-base sm:text-lg font-medium hover:text-blue-800 transition-colors duration-200 group"
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
          </Link>
        </div>
      </div>

      {/* Team Leader Section */}
      <section className="relative py-16 bg-white flex items-center justify-center overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 lg:ml-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-20">
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-2 sm:mb-3">
                Introducing Our
                <br />
                <span className="text-black ml-0 lg:ml-3">
                  Team Leader
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-1xl text-gray-900 ml-0 lg:ml-6">
                Harendra, a visionary in Web Design Innovation, crafts 
                <span className="hidden lg:inline"><br /></span>
                <span className="lg:hidden"> </span>
                commendable websites that exceed expectations.
              </p>
            </div>

            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 rounded-2xl sm:rounded-3xl blur-lg opacity-30 animate-pulse"></div>
                
                <div className="relative bg-white p-1 sm:p-2 rounded-2xl sm:rounded-3xl shadow-2xl mr-0 lg:mr-10">
                  <div className="w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] relative overflow-hidden rounded-xl sm:rounded-2xl">
                    <Image
                      src="/teamleader.jpg"
                      alt="Harendra - Team Leader"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm opacity-60 animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl text-gray-900 leading-tight">
            A small selection
            <br />
            of our work.
          </h2>
        </div>
      </section>
       <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl lg:text-6xl  leading-tight">
            Your ultimate
            <br />
            Website partner
          </h1>
        </div>

        {/* Stats Grid and Description */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Stats Cards - Left 2/3 */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-6">
            {/* 400+ Happy Clients */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-5xl  mb-2">400+</div>
              <div className="text-gray-400 text-lg">Happy Clients</div>
            </div>

            {/* 8 years Experience */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-5xl  mb-2">8 years</div>
              <div className="text-gray-400 text-lg">Experience</div>
            </div>

            {/* 300+ Successful Projects */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-5xl  mb-2">300+</div>
              <div className="text-gray-400 text-lg">Successful Projects</div>
            </div>

            {/* 100% Passion */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-5xl  mb-2">
                100<span className="text-3xl">%</span>
              </div>
              <div className="text-gray-400 text-lg">Passion</div>
            </div>
          </div>

          {/* Description - Right 1/3 */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6">Websites that work and look good.</h2>
            <p className="text-gray-300 leading-relaxed">
              With years of web design experience, Im passionate about great design and focus on the to small details
              which are negligible but have a huge impact. That is the type of web designer I am. Say goodbye to the
              hassle of working with developers who dont understand design. Trust someone like me who can bring your
              ideas to life just the way you want them.
            </p>
          </div>
        </div>
      </div>
    </section>
    
     <section className="min-h-[40vh] bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-12 backdrop-blur-sm">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <h2 className="text-5xl mb-8">Premium images</h2>
              <p className="text-gray-300 leading-relaxed">
                I handpick the finest and most premium images and animations for your website. With a keen eye for
                aesthetics, I ensure that every visual aspect of your website reflects the quality and sophistication
                your brand deserves
              </p>
            </div>

            {/* Right content - iMac mockup */}
            <div className="flex justify-center">
              <div className="relative">
                {/* iMac Stand */}
                <div className="bg-gray-600 w-32 h-6 rounded-b-2xl mx-auto"></div>
                <div className="bg-gray-700 w-48 h-4 rounded-full mx-auto -mt-2"></div>

                {/* iMac Screen */}
                <div className="bg-gray-800 rounded-lg p-4 w-80 h-52 -mt-2 border-4 border-gray-700">
                  <div className="bg-white rounded w-full h-full p-4">
                    {/* Browser mockup */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>

                    {/* Website content mockup */}
                    <div className="grid grid-cols-2 gap-3 h-full">
                      <div className="bg-red-200 rounded-lg p-3">
                        <div className="bg-red-400 rounded w-full h-16 mb-2"></div>
                        <div className="space-y-1">
                          <div className="bg-red-300 rounded w-full h-2"></div>
                          <div className="bg-red-300 rounded w-3/4 h-2"></div>
                        </div>
                      </div>
                      <div className="bg-orange-100 rounded-lg p-3">
                        <div className="bg-orange-300 rounded w-full h-16 mb-2"></div>
                        <div className="space-y-1">
                          <div className="bg-orange-200 rounded w-full h-2"></div>
                          <div className="bg-orange-200 rounded w-2/3 h-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Short and Clean code */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8">Short and Clean code.</h2>
            <div className="bg-gray-900/80 rounded-lg p-6 font-mono text-sm">
              <div className="flex">
                <div className="text-gray-500 w-8">1</div>
                <div>
                  <span className="text-blue-400">{"<ul>"}</span>
                </div>
              </div>
              <div className="flex">
                <div className="text-gray-500 w-8">2</div>
                <div className="ml-4">
                  <span className="text-blue-400">{"<li>"}</span>
                  <span className="text-white">Semantic HTML.</span>
                  <span className="text-blue-400">{"</li>"}</span>
                </div>
              </div>
              <div className="flex">
                <div className="text-gray-500 w-8">3</div>
                <div className="ml-4">
                  <span className="text-blue-400">{"<li>"}</span>
                  <span className="text-white">Class naming system.</span>
                  <span className="text-blue-400">{"</li>"}</span>
                </div>
              </div>
              <div className="flex">
                <div className="text-gray-500 w-8">4</div>
                <div className="ml-4">
                  <span className="text-blue-400">{"<li>"}</span>
                  <span className="text-white">Solid JS skills.</span>
                  <span className="text-blue-400">{"</li>"}</span>
                </div>
              </div>
              <div className="flex">
                <div className="text-gray-500 w-8">5</div>
                <div>
                  <span className="text-blue-400">{"</ul>"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick work, follow ups! */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8">Quick work, follow ups!.</h2>
            <div className="flex flex-col items-center justify-center h-40">
              <div className="text-6xl font-bold text-gray-500 line-through mb-4">Months</div>
              <div className="text-6xl font-bold text-purple-400">Weeks</div>
            </div>
          </div>

          {/* Responsive design */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4">Responsive design.</h2>
            <p className="text-gray-300 mb-8">
              Is the most important and yet most ignored, but I give it atmost importance.
            </p>
            <div className="flex items-end justify-center space-x-4">
              <div className="bg-gray-700 rounded-lg p-2 w-16 h-24">
                <div className="bg-blue-500 rounded w-full h-full flex items-center justify-center">
                  <div className="text-xs text-white">📱</div>
                </div>
              </div>
              <div className="bg-gray-700 rounded-lg p-3 w-32 h-20">
                <div className="bg-gray-600 rounded w-full h-full"></div>
              </div>
            </div>
          </div>

          {/* Lightning-fast loadings */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4">Lightning-fast loadings.</h2>
            <p className="text-gray-300 mb-8">Best performance and best user experience has been my priority all.</p>
            <div className="bg-gray-900/80 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="text-xs text-green-400">Performance: 100</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="text-xs text-green-400">Accessibility: 100</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="text-xs text-orange-400">Best Practices: 92</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}