import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/backgrounds/IMG_5077.JPG')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-900/20 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <div className="flex flex-wrap justify-center text-sm sm:text-base md:text-xl font-mono text-emerald-50 gap-2 sm:gap-4 mt-4 px-4 text-center">
          <Link href="/" className="hover:underline">Home</Link>
          <span>|</span>
          <Link href="/work" className="hover:underline">Work</Link>
          <span>|</span>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <span>|</span>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <span>|</span>
          <Link href="/about-me" className="hover:underline">About Me</Link>
        </div>

        {/* Hero Text */}
        <div className="flex flex-1 justify-center items-center flex-col gap-4 text-center px-6">
          <p className="text-3xl sm:text-5xl md:text-6xl font-mono font-bold text-emerald-50">
            Kusalana Buddhadasa
          </p>
          <p className="text-2xl sm:text-4xl md:text-5xl font-mono font-bold text-emerald-50">
            Creative Explorer
          </p>
        </div>
      </div>
    </div>
  );
}
