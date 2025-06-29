import Link from "next/link";
import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Texture Series",
      description: "A visual exploration of natural textures in the garden.",
      image: "/images/projects/texture.jpg",
      link: "https://www.instagram.com/p/DLfL1wjz8xf/?igsh=MWJwOGpyMDg3aTZudg==",
    },
    {
      title: "Symmetry & Light",
      description: "Patterns and balance captured in everyday wooden details.",
      image: "/images/projects/symmetry.jpg",
      link: "https://www.instagram.com/p/DLfOixUz_Yu/?igsh=MTE5OGUyYjRtZzMycQ==",
    },
  ];

  return (
    <div
      className="relative flex min-h-screen flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/images/backgrounds/img14.JPG')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Top Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between px-4 py-4 text-emerald-50 font-mono text-base sm:text-xl">
        <Link href="/" className="mb-2 sm:mb-0 sm:text-lg hover:underline">
          ← Back
        </Link>
        <p className="text-center text-sm sm:text-lg text-emerald-100">
          Selected creative works – from photography series...
        </p>
      </div>

      {/* Project Grid */}
      <div className="relative z-10 grid gap-8 p-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-black/30 border border-emerald-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 backdrop-blur-sm"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-emerald-100">
                {proj.title}
              </h2>
              <p className="text-sm mt-2 text-emerald-50">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-emerald-300 hover:underline text-sm"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
