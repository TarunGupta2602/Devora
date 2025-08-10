"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Home, Zap, Users, Phone, ArrowRight } from "lucide-react";

export default function ModernNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/services", label: "Services", icon: Zap },
    { href: "/about", label: "About", icon: Users },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <>
      {/* Background overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 pt-6">
        <div className="max-w-2xl mx-auto">
          {/* Desktop Navbar */}
          <div
            className={`hidden lg:flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-500 ease-out ${
              scrolled
                ? "bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/10"
                : "bg-white/5 backdrop-blur-md border border-white/10"
            }`}
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="block transition-transform duration-200 hover:scale-105">
                <img
                  src="/new.png"
                  width={100}
                  height={50}
                  alt="Team Devora Logo"
                  className="h-8 w-auto"
                />
              </a>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium text-sm rounded-lg"
                  >
                    <span className="relative z-10 flex items-center space-x-1.5">
                      <IconComponent size={16} />
                      <span>{link.label}</span>
                    </span>
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/917456096455?text=Hi!%20I%20want%20to%20start%20my%20business%20and%20need%20a%20mobile%20app%20and%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Navbar */}
          <div
            className={`lg:hidden flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-500 ease-out ${
              scrolled
                ? "bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/10"
                : "bg-white/10 backdrop-blur-md border border-white/15"
            }`}
          >
            {/* Mobile Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="block transition-transform duration-200 hover:scale-105">
                <img
                  src="/new.png"
                  width="100"
                  height="50"
                  alt="Team Devora Logo"
                  className="h-7 w-auto"
                />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={20} className="text-gray-800" />
              ) : (
                <Menu size={20} className="text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden max-w-2xl mx-auto mt-2 transition-all duration-300 ease-out transform ${
            isOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
          }`}
        >
          <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-black/10 p-4">
            <div className="space-y-2">
              {navLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={toggleMenu}
                    className={`group flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-800 hover:bg-white/20 hover:text-blue-700 transition-all duration-300 ${
                      isOpen ? "animate-in slide-in-from-top-2" : ""
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <IconComponent size={18} />
                    <span className="font-medium">{link.label}</span>
                    <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <a
                href="https://wa.me/917456096455?text=Hi!%20I%20want%20to%20start%20my%20business%20and%20need%20a%20mobile%20app%20and%20website."
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
                className="flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 space-x-2"
              >
                <span>🚀</span>
                <span>Get Started Today</span>
              </a>
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
              <p className="text-sm text-gray-700 text-center font-medium">
                Ready to transform your digital presence?
              </p>
              <p className="text-xs text-gray-600 text-center mt-1">
                Let's build something amazing together ✨
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20" />
    </>
  );
}