import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/images/backgrounds/IMG_5068.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Top bar */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between px-4 py-4 text-emerald-50 font-mono text-base sm:text-xl">
        <Link href="/" className="mb-2 sm:mb-0 sm:text-lg">
          ← Back
        </Link>
        <p className="text-center text-sm sm:text-lg">
          How about telling <span className="text-xl sm:text-3xl">your</span> story with lights and shadows...
        </p>
      </div>

      {/* Contact Info */}
      <div className="relative z-10 flex flex-1 flex-col justify-center items-center gap-8 text-center px-4">
        <p className="text-2xl sm:text-3xl font-mono text-emerald-50">
          Call me <span className="block mt-2">0772213521 / 0782427079</span>
        </p>
        <p className="text-2xl sm:text-3xl font-mono text-emerald-50">
          If you&apos;re on WhatsApp <span className="block mt-2">0782427079</span>
        </p>
        <p className="text-2xl sm:text-3xl font-mono text-emerald-50">
          Or email <span className="block mt-2">kslnrnmyr@gmail.com</span>
        </p>
      </div>
    </div>
  );
}
