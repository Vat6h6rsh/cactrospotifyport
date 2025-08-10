"use client";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* 3D Pixel Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 pixel-font glitch-effect text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
          Harsh Jha
        </h1>

        <div className="pixel-border p-6 bg-gray-800 bg-opacity-70 backdrop-blur-sm">
          <p className="text-lg md:text-xl mb-6">
            Self-taught and obsessive about code quality, I&apos;m a full-stack
            web developer who thrives on project finesse. Despite being a
            classic backbencher in class, I&apos;ve mastered my tools inside-out
            and built real-world projects that reflect both technical depth and
            creative UX.
          </p>

          <div className="flex justify-center space-x-4">
            <Link
              href="#projects"
              className="px-6 py-3 bg-pink-500 hover:bg-pink-600 transition-colors text-white font-bold"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 transition-colors text-white font-bold"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-pink-500 transform rotate-45 opacity-70 animate-float"></div>
      <div className="absolute top-20 right-10 w-24 h-24 bg-red-500 rounded-full opacity-50 animate-float-delay"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-white transform rotate-12 opacity-30 animate-float"></div>
    </section>
  );
};

export default Hero;
