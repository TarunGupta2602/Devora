
"use client";
import React, { useState } from "react";
import { Menu, X, Home, Zap, Users, Phone, ArrowRight, FileText, DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/services", label: "Services", icon: Zap },
    { href: "/case-studies", label: "Case Studies", icon: FileText },
    { href: "/pricing", label: "Pricing", icon: DollarSign },
    { href: "/about", label: "About", icon: Users },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-100 bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-full shadow-lg">
        <div className="flex items-center justify-between px-14 sm:px-12 h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/new.png"
                width={100}
                height={50}
                alt="Logo"
                className="h-20 w-auto transform hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-900 hover:text-blue-600 font-medium flex items-center space-x-1 text-sm uppercase tracking-wide transition-colors duration-200"
                >
                  <IconComponent size={14} className="text-blue-600" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <a
              href="https://wa.me/917456096455?text=Hi!%20I%20want%20to%20start%20my%20business%20and%20need%20a%20mobile%20app%20and%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 font-semibold text-sm flex items-center space-x-1 shadow-sm hover:shadow-md"
            >
              <span>Get Started</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-900 hover:text-blue-600 focus:outline-none transform hover:scale-110 transition-transform duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${
            isOpen ? "block" : "hidden"
          } bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-xl rounded-b-2xl mx-2 mb-2`}
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className="flex items-center gap-2 text-gray-900 hover:text-blue-600 font-medium py-2 text-sm uppercase"
                >
                  <IconComponent size={16} className="text-blue-600" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <a
              href="https://wa.me/917456096455?text=Hi!%20I%20want%20to%20start%20my%20business%20and%20need%20a%20mobile%20app%20and%20website."
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className="block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 font-semibold text-sm text-center shadow-sm hover:shadow-md"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20" />
    </>
  );
}
