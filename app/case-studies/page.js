import React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Globe, ShoppingCart, Zap, Award, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Case Studies - Team Devora | Success Stories",
  description: "Explore our portfolio of successful web development and design projects",
};

export const revalidate = 86400; // Rebuild daily

const caseStudies = [
  {
    id: 1,
    company: "TechStartup Inc.",
    industry: "Technology",
    title: "E-Commerce Platform with 300% Sales Increase",
    challenge: "Small e-commerce business struggling with low conversions and poor mobile experience",
    solution: "Complete redesign and development of responsive e-commerce platform with optimized checkout flow",
    results: [
      { metric: "300%", label: "Increase in Sales" },
      { metric: "50K+", label: "Monthly Visitors" },
      { metric: "4.9/5", label: "Customer Rating" },
      { metric: "180%", label: "Mobile Conversion Rate" }
    ],
    technologies: ["Next.js", "Shopify", "Stripe", "MongoDB"],
    duration: "6 weeks",
    image: "/image3.png",
    gradient: "from-blue-500 to-cyan-500",
    testimonial: "Team Devora transformed our business. The new website increased our sales by 300% in just 3 months!"
  },
  {
    id: 2,
    company: "Creative Agency",
    industry: "Design & Marketing",
    title: "Portfolio Website with 250% Engagement Boost",
    challenge: "Agency needed a standout portfolio website to showcase work and attract high-value clients",
    solution: "Modern, interactive portfolio with case studies, blog integration, and contact optimization",
    results: [
      { metric: "250%", label: "Engagement Increase" },
      { metric: "85%", label: "Bounce Rate Reduction" },
      { metric: "3.2x", label: "Time on Site" },
      { metric: "120+", label: "New Clients" }
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    duration: "4 weeks",
    image: "/image2.png",
    gradient: "from-purple-500 to-pink-500",
    testimonial: "The new website perfectly showcases our work. We've doubled our client inquiries!"
  },
  {
    id: 3,
    company: "E-Commerce Solutions",
    industry: "Retail",
    title: "SaaS Dashboard with Real-time Analytics",
    challenge: "Business management tool needed a powerful dashboard for data visualization and reporting",
    solution: "Custom-built SaaS platform with real-time analytics, user management, and API integrations",
    results: [
      { metric: "200%", label: "User Adoption Rate" },
      { metric: "95%", label: "User Satisfaction" },
      { metric: "50K+", label: "Active Users" },
      { metric: "40%", label: "Revenue Growth" }
    ],
    technologies: ["Node.js", "React", "PostgreSQL", "AWS"],
    duration: "8 weeks",
    image: "/computer.png",
    gradient: "from-green-500 to-emerald-500",
    testimonial: "Outstanding work! The platform handles our growing user base seamlessly."
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-700"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Award className="w-5 h-5 mr-2" />
              Proven Track Record
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              Success Stories
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Real results from real businesses. See how we've helped companies grow their online presence and revenue.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm text-white/80">Projects Delivered</div>
              </div>
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                <div className="text-3xl font-bold">250%</div>
                <div className="text-sm text-white/80">Avg Revenue Increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">200+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">250%</div>
              <div className="text-gray-600">Avg Revenue Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-20`} />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      <Globe className="w-4 h-4" />
                      {study.industry}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h2>
                  
                  <p className="text-lg font-semibold text-gray-700 mb-6">{study.company}</p>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-8">
                    <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <span className="font-semibold text-gray-900">Challenge</span>
                      </div>
                      <p className="text-gray-700 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="font-semibold text-gray-900">Solution</span>
                      </div>
                      <p className="text-gray-700 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                        <div className={`text-3xl font-bold mb-1 bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                          {result.metric}
                        </div>
                        <div className="text-xs text-gray-600 font-medium">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies & Duration */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    {study.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="p-6 bg-white border-l-4 border-blue-600 rounded-r-lg shadow-sm">
                    <p className="text-gray-700 italic mb-2">"{study.testimonial}"</p>
                    <p className="text-sm font-semibold text-gray-900">— {study.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that delivers results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="https://wa.me/917456096455?text=Hi!%20I%20want%20to%20start%20my%20business%20and%20need%20a%20mobile%20app%20and%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

