import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrey Petkov - Full Stack Developer & Software Engineer Portfolio",
  description: "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Explore my projects including blockchain applications, web development, and game development using Roblox Studio, Rust, and Solana.",
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
  
  // Additional metadata (add Google verification later when you set up Search Console)
  
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
