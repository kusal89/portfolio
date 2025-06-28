import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/backgrounds/IMG_5077.jpg')",
      }}
    >
      {/* Overlay inside the background container */}
      <div className="absolute inset-0 bg-emerald-900/20 z-0"></div>

      {/* Main content sits above the overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex justify-center text-xl font-mono text-emerald-50 gap-4 mt-4">
          <Link href="/">Home</Link>
          <span>|</span>
          <Link href="/work">Work</Link>
          <span>|</span>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="flex flex-1 justify-center items-center flex-col gap-6 text-center px-4">
          <p className="text-6xl font-mono font-bold text-emerald-50">
            Kusalana Buddhadasa
          </p>
          <p className="text-5xl font-mono font-bold text-emerald-50">
            Creative Explorer
          </p>
        </div>
      </div>
    </div>
  );
}
