import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sachin Satish Prasad - Full Stack Developer",
  description:
    "Welcome to my portfolio! I am a Full Stack Developer specializing in building scalable, secure, and user-centric web applications using Java Spring Boot, React, and modern frontend technologies. Explore my projects, skills, and experience.",
  keywords: [
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot Developer",
    "React Developer",
    "Frontend Developer",
    "Backend Developer",
    "REST APIs",
    "MySQL",
    "MongoDB",
    "AWS",
    "Responsive Design",
    "System Design",
    "Modern Web Development",
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "TypeScript",
    "Sachin Satish Prasad",
  ],
  authors: [{ name: "Sachin Satish Prasad" }],
  creator: "Sachin Satish Prasad",
  openGraph: {
    title: "Sachin Satish Prasad - Full Stack Developer Portfolio",
    description:
      "Full Stack Developer crafting scalable, performant, and engaging digital experiences using Java Spring Boot and React. Explore my technical skills and projects.",
    url: "https://your-domain.com", // <-- Update this with your actual domain later
    siteName: "Sachin Satish Prasad - Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sachin Satish Prasad - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin Satish Prasad - Full Stack Developer",
    description:
      "Full Stack Developer crafting scalable, performant, and engaging digital experiences using Java Spring Boot and React. Explore my technical skills and projects.",
    creator: "@yourusername", // <-- optional if you have a Twitter, otherwise remove
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
