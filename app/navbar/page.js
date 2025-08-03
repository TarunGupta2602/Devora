"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest("nav")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/services", label: "Services", icon: "⚡" },
    { href: "/about", label: "About", icon: "👥" },
    { href: "/contact", label: "Contact", icon: "📞" },
  ];

  return (
    <>
      {/* Backdrop overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="block transition-transform duration-200 hover:scale-105"
              >
                <Image
                  src="/logo.png"
                  width={130}
                  height={100}
                  alt="Team Sitezy Logo"
              
                  priority
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium text-sm lg:text-base"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-blue-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 ease-out" />
                </Link>
              ))}
              
              {/* CTA Button */}
              <div className="ml-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-200 hover:from-blue-700 hover:to-purple-700"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={`relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-200 ${
                  isOpen ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col items-center justify-center">
                  <span
                    className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                      isOpen ? "rotate-45 translate-y-1" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 mt-1.5 ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 mt-1.5 ${
                      isOpen ? "-rotate-45 -translate-y-1" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-16 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 transition-all duration-300 ease-out ${
            isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible"
          }`}
        >
          <div className="px-4 py-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className={`group flex items-center space-x-3 px-4 py-3.5 rounded-xl text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 transition-all duration-200 transform ${
                    isOpen
                      ? `animate-in slide-in-from-right-5 duration-300`
                      : ""
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="font-medium text-lg">{link.label}</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-purple-700"
              >
                <span className="mr-2">🚀</span>
                Get Started Today
              </Link>
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600 text-center">
                Ready to transform your digital presence?
              </p>
              <p className="text-xs text-gray-500 text-center mt-1">
                Let's build something amazing together
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
}