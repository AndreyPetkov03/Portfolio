import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrey Petkov - Full Stack Developer & Software Engineer Portfolio",
  description: "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Explore my projects including blockchain applications, web development, and game development using Roblox Studio, Rust, and Solana.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer", 
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
    "Web Development",
    "Blockchain Developer",
    "Solidity",
    "Rust Programming",
    "Node.js",
    "Portfolio",
    "Andrey Petkov",
    "JavaScript",
    "Tailwind CSS",
    "Supabase",
    "Docker",
    "Git",
    "GitHub",
    "Figma",
    "UI/UX Design"
  ],
  authors: [{ name: "Andrey Petkov" }],
  creator: "Andrey Petkov",
  publisher: "Andrey Petkov",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph Protocol
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.andrey-petkov.com', // Replace with your actual domain
    title: "Andrey Petkov - Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Explore innovative projects in web development, blockchain, and game development.",
    siteName: "Andrey Petkov Portfolio",
    images: [
      {
        url: '/images/og-image.png', // You'll need to create this image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: 'Andrey Petkov - Full Stack Developer Portfolio',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "Andrey Petkov - Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    creator: '@your_twitter_handle', // Replace with your actual Twitter handle
    images: ['/images/og-image.png'], // Same image as OpenGraph
  },
  
  // Additional metadata
  verification: {
    google: 'your-google-verification-code', // Replace with your Google Search Console verification code
  },
  
  // Structured data for rich snippets
  category: 'Technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
