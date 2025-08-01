"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 mt-2">
            <Link href="/" >
               <Image
      src="/logo.png"
      width={150}
      height={150}
      alt="Picture of the author"
    />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-26">
            <Link href="/" className="text-black  hover:text-blue-700 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-black hover:text-blue-700 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-black hover:text-blue-700 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-black hover:text-blue-700 transition-colors">
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
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black-900 bg-opacity-90">
              <Link
                href="/"
                className="block text-black hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block text-black hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block text-black hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-black hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}