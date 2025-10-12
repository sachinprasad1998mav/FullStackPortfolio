"use client";

import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 grid-background opacity-20">
        <div className="grid-overlay animate-pulse-slow"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { icon: "⚛️", delay: "0s", position: "top-20 left-1/4" },
          { icon: "☕", delay: "2s", position: "top-40 right-1/3" },
          { icon: "💻", delay: "1s", position: "bottom-32 left-1/3" },
          { icon: "🚀", delay: "3s", position: "bottom-20 right-1/4" },
        ].map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.position} animate-float opacity-50`}
            style={{ animationDelay: item.delay }}
          >
            <span className="text-4xl">{item.icon}</span>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Profile Picture */}
          <div className="flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-lg">
              <Image
                src="/sachin.jpg"
                alt="Sachin Prasad"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Name Section */}
          <div className="relative inline-block px-4 sm:px-0 mt-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-75"></div>
            <h1 className="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 pb-2">
              Sachin Prasad
            </h1>
          </div>

          {/* Role & Description */}
          <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
                <h2 className="text-xl sm:text-2xl font-light tracking-wide text-blue-400">
                  Front End Developer
                </h2>
                <span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
              </div>
              <p className="text-base sm:text-lg text-gray-400 max-w-2xl px-4 sm:px-0">
                Frontend Engineer (4+ yrs) specializing in React, TypeScript,
                Redux & Jotai, building data-heavy UIs with Carbon Design System
                and interactive charts (Highcharts/D3). Focused on performance,
                accessibility, and robust testing (Jest/RTL) to ship secure,
                scalable, and user-centric apps.
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-4 sm:px-0">
              {[
                "Javascript",
                "Typescript",
                "React",
                "Redux",
                "Zustand",
                "Jotai",
                "Highcharts",
                "Carbon Design System",
                "React Testing Library",
                "Jest",
                "Docker",
                "Git",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#1A1F2B] rounded-full text-sm font-medium text-gray-300 border border-[#2D333B] hover:border-blue-500/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0">
            {/* Download Resume */}
            <a
              href="/Sachin_Prasad_Resume_FE.pdf"
              download
              className="px-6 sm:px-8 py-3 bg-[#21262D] rounded-full hover:bg-[#2D333B] transition-colors border border-[#2D333B] hover:border-gray-600 text-center text-white font-semibold"
            >
              Download Resume
            </a>

            {/* View My Work */}
            <a
              href="#experience"
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
              <span className="relative px-6 sm:px-8 py-3 bg-[#161B22] rounded-full inline-flex items-center justify-center w-full sm:w-auto text-white font-semibold">
                View My Work
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>

            {/* Get in Touch */}
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 bg-[#21262D] rounded-full hover:bg-[#2D333B] transition-colors border border-[#2D333B] hover:border-gray-600 text-center text-white font-semibold"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8 sm:mt-12">
            <a
              href="https://github.com/sachinprasad1998mav"
              target="_blank"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.04c-3.338.726-4.033-1.614-4.033-1.614-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.468-2.381 1.235-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.119 3.176.767.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.798 24 17.301 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/sachinsatishprasad"
              target="_blank"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.25 8h4.5v12H.25zM7 8h4.1v1.8h.1c.57-1.08 1.97-2.2 4.05-2.2 4.33 0 5.12 2.85 5.12 6.55V20h-4.5v-5.9c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.08V20H7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
