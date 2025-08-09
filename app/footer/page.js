"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="sm:col-span-2">
            <div className="flex items-center ">
              <Image
                src="/new.png"
                width={100}
                height={50}
                alt="Team Devora Logo"
                className="rounded-md"
              />
              
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Crafting exceptional websites for premium brands with a focus on 
              design and detail. Your trusted partner in digital excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "services", href: "/services" },
                { name: "contact", href: "/contact" },
        
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              {[
                {
                  href: "https://facebook.com",
                  icon: (
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 
                    2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 
                    7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 
                    .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 
                    8-9.8z"/>
                  ),
                },
                {
                  href: "https://twitter.com",
                  icon: (
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 
                    1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 
                    1.184-.897-.957-2.178-1.555-3.594-1.555-2.717 
                    0-4.92 2.203-4.92 4.917 
                    0 .39.045.765.127 
                    1.124C7.691 8.094 4.066 6.13 
                    1.64 3.161c-.427.722-.666 
                    1.561-.666 2.475 0 1.71.87 3.213 
                    2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 
                    2.385 1.693 4.374 3.946 
                    4.827-.413.111-.849.171-1.296.171-.314 
                    0-.615-.03-.916-.086.631 1.953 2.445 
                    3.377 4.604 
                    3.417-1.68 1.319-3.809 2.105-6.102 
                    2.105-.39 0-.779-.023-1.17-.067 
                    2.189 1.394 4.768 2.209 7.557 
                    2.209 9.054 0 14-7.496 
                    14-14 0-.213-.005-.426-.014-.637.958-.693 
                    1.795-1.562 2.455-2.55z"/>
                  ),
                },
                {
                  href: "https://linkedin.com",
                  icon: (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037
                    -1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046
                    c.477-.9 1.637-1.85 3.37-1.85
                    3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 
                    7.433c-1.144 0-2.063-.926-2.063-2.065 
                    0-1.138.92-2.063 2.063-2.063 1.14 
                    0 2.064.925 2.064 2.063 0 
                    1.139-.925 2.065-2.064 
                    2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                  ),
                },
              ].map((icon, i) => (
                <a
                  key={i}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 hover:bg-blue-600 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-gray-600 hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {icon.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-6 pt-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Team Devora. All rights reserved.
          </p>
          <a
            href="https://daarzy.com/#primary"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:underline mt-2 md:mt-0"
          >
            Visit Our Portfolio →
          </a>
        </div>
      </div>
    </footer>
  );
}
