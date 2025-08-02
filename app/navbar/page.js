"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 mt-2">
            <Link href="/">
              <Image
                src="/logo.png"
                width={150}
                height={150}
                alt="Team Sitezy Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <Link href="/" className="text-black hover:text-blue-700 transition-colors font-medium">
              Home
            </Link>
            <Link href="/services" className="text-black hover:text-blue-700 transition-colors font-medium">
              Services
            </Link>
            <Link href="/about" className="text-black hover:text-blue-700 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-black hover:text-blue-700 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-lg transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col space-y-4">
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className={`block text-lg font-semibold text-gray-800 py-3 rounded-xl text-center shadow-sm border border-gray-100 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 transform ${
                isOpen ? `delay-[${index * 100}ms] translate-y-0` : "translate-y-3"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
