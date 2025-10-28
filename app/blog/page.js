import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User, TrendingUp, Code, Palette, Globe } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Blog - Team Devora | Web Development Insights & Tips",
  description: "Latest articles about web development, design trends, and digital marketing strategies",
};

// SSG Configuration
export const revalidate = 86400; // Rebuild daily

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Web Development Trends for 2024",
    excerpt: "Discover the latest technologies and frameworks that are shaping the future of web development and how they can benefit your business.",
    image: "/image2.png",
    author: "Tarun Gupta",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Web Development",
    categoryIcon: <Code className="w-4 h-4" />,
    featured: true
  },
  {
    id: 2,
    title: "Building High-Performing E-commerce Websites",
    excerpt: "Learn the key strategies and best practices we use to create e-commerce platforms that convert visitors into loyal customers.",
    image: "/image3.png",
    author: "Harendra Tomar",
    date: "March 10, 2024",
    readTime: "10 min read",
    category: "E-commerce",
    categoryIcon: <TrendingUp className="w-4 h-4" />,
    featured: true
  },
  {
    id: 3,
    title: "UI/UX Design Principles for Better Conversions",
    excerpt: "Explore proven design principles that enhance user experience and drive higher conversion rates for your website.",
    image: "/image1.png",
    author: "Rohit",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Design",
    categoryIcon: <Palette className="w-4 h-4" />,
    featured: false
  },
  {
    id: 4,
    title: "SEO Best Practices for Modern Websites",
    excerpt: "Master the art of search engine optimization with our comprehensive guide covering technical SEO, content strategy, and more.",
    image: "/computer.png",
    author: "Team Devora",
    date: "March 1, 2024",
    readTime: "12 min read",
    category: "Marketing",
    categoryIcon: <Globe className="w-4 h-4" />,
    featured: false
  },
  {
    id: 5,
    title: "Next.js vs React: Choosing the Right Framework",
    excerpt: "A detailed comparison of Next.js and React to help you make the best choice for your next web project.",
    image: "/image2.png",
    author: "Tarun Gupta",
    date: "February 25, 2024",
    readTime: "7 min read",
    category: "Web Development",
    categoryIcon: <Code className="w-4 h-4" />,
    featured: false
  },
  {
    id: 6,
    title: "Mobile-First Design: Why It Matters in 2024",
    excerpt: "Understanding the importance of mobile-first design and how to implement it effectively in your projects.",
    image: "/image3.png",
    author: "Rohit",
    date: "February 20, 2024",
    readTime: "5 min read",
    category: "Design",
    categoryIcon: <Palette className="w-4 h-4" />,
    featured: false
  },
];

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Insights, tips, and stories from the world of web development, design, and digital marketing
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-full text-xs font-semibold">
                        {post.categoryIcon}
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">
                      {post.categoryIcon}
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get weekly tips on web development, design trends, and digital marketing delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

