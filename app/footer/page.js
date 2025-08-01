import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 text-center text-gray-600">
      <div className="flex justify-center items-center mb-4">
        {/* Logo Placeholder - Replace with actual logo image */}
        <div className="text-4xl font-bold text-gray-500">Sitezy</div>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <Link href="/press" className="hover:text-gray-800">Press</Link>
        <Link href="/careers" className="hover:text-gray-800">Careers</Link>
        <Link href="/about" className="hover:text-gray-800">About Us</Link>
        <Link href="/contact" className="hover:text-gray-800">Contact us</Link>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <span className="sr-only">Facebook</span>
          <svg className="w-6 h-6" fill="#3b5998" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
          </svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <span className="sr-only">Twitter</span>
          <svg className="w-6 h-6" fill="#1DA1F2" viewBox="0 0 24 24">
            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-14 0-.213-.005-.426-.014-.637.958-.693 1.795-1.562 2.455-2.55z"/>
          </svg>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <span className="sr-only">YouTube</span>
          <svg className="w-6 h-6" fill="#FF0000" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
      </div>
      <p className="mb-2">© 2023. All rights reserved. - Crafted with ♥ In India</p>
      <hr className="border-t border-black w-full" />
      <a href="https://daarzy.com/#primary" className="text-sm text-gray-500 mt-2 block">https://daarzy.com/#primary</a>
    </footer>
  );
}