"use client";
import React, { useState } from "react";
import { Menu, X, Home, Zap, Users, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/services", label: "Services", icon: Zap },
    { href: "/about", label: "About", icon: Users },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 w-full z-100 bg-gradient-to-r from-white/95 to-white/85 backdrop-blur-md border-b border-gray-100/20 rounded-b-xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/new.png"
                  width={120}
                  height={60}
                  alt="Logo"
                  className="h-12 w-auto transform hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="nav-link text-gray-800 hover:text-primary font-medium flex items-center space-x-2 text-sm uppercase tracking-wide"
                  >
                    <IconComponent size={16} className="text-primary" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
              <a
                href="https://wa.me/917456096455?text=Hi!%20I%20want%20to%20start%20my%20business%20and%20need%20a%20mobile%20app%20and%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pulse bg-primary text-black px-5 py-2.5 rounded-full hover:bg-primary-dark transition-colors duration-300 font-semibold text-sm flex items-center space-x-2 shadow-md hover:shadow-lg"
              >
                <span>Get Started</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-800 hover:text-primary focus:outline-none transform hover:scale-110 transition-transform duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mobile-menu ${
            isOpen ? "block" : "hidden"
          } bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-md shadow-xl rounded-b-2xl`}
        >
          <div className="px-6 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className="nav-link block text-gray-800 hover:text-primary font-medium py-3 flex items-center space-x-3 text-base"
                >
                  <IconComponent size={20} className="text-primary" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <a
              href="https://wa.me/917456096455?text=Hi!%20I%20want%20to%20start%20my%20business%20and%20need%20a%20mobile%20app%20and%20website."
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className="btn-pulse block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition-colors duration-300 font-semibold text-center text-sm shadow-md hover:shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16" />
    </>
  );
}