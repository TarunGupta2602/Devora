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
    </div>
  );
}