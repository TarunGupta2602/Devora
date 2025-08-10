import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Devora - Your Next Generation Website",
  description:
    "Devora is a modern, responsive website template designed for businesses and personal projects. Built with Next.js for speed, SEO, and scalability.",
  keywords: [
    "Devora",
    "Next.js website",
    "responsive design",
    "modern business website",
    "SEO optimized website",
    "fast website template",
  ],
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  creator: "Your Name",
  publisher: "Your Company",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://yourwebsite.com",
  },
  openGraph: {
    title: "Devora - Your Next Generation Website",
    description:
      "Modern, responsive, SEO-optimized Next.js website template for businesses and personal projects.",
    url: "https://yourwebsite.com",
    siteName: "Devora",
    images: [
      {
        url: "https://yourwebsite.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devora Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devora - Your Next Generation Website",
    description:
      "Modern, responsive, SEO-optimized Next.js website template for businesses and personal projects.",
    images: ["https://yourwebsite.com/og-image.png"],
    creator: "@YourTwitterHandle",
  },
  icons: {
    icon: "/new.png",
    apple: "/new.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Devora",
              url: "https://yourwebsite.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://yourwebsite.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
