import Link from "next/link";
import React from "react";

export default function AboutMe() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/images/backgrounds/img15.JPG')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Top bar */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between px-4 py-4 text-emerald-50 font-mono text-base sm:text-xl">
        <Link href="/" className="mb-2 sm:mb-0 sm:text-lg hover:underline">
          ← Back
        </Link>
      </div>

      {/* Contact Info */}
      <div className="relative z-10 flex flex-1 flex-col justify-center items-center gap-8 text-center px-6 py-8">
        <div className="max-w-4xl space-y-6">
          <p className="text-xl sm:text-2xl font-mono text-emerald-50 leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
            I&apos;m Kusalana Buddhadasa — a creative explorer who finds beauty in patterns, textures, and everyday moments.
          </p>
          <p className="text-xl sm:text-2xl font-mono text-emerald-50 leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
            Through my lens, I capture nature&apos;s quiet stories, subtle symmetry, and hidden details — often found right at home.
          </p>
          <p className="text-xl sm:text-2xl font-mono text-emerald-50 leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
            I&apos;m also a web developer by trade, blending visual storytelling with technical precision. Whether it&apos;s light falling on a leaf or a line of code shaping a website, I believe creativity connects them both.
          </p>
          <p className="text-xl sm:text-2xl font-mono text-emerald-50 leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
            Let&apos;s explore, create, and find inspiration in the small things.
          </p>
        </div>
      </div>
    </div>
  );
}