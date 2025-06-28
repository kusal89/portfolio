import React from "react";

export default function Work() {
  // List of image paths (assumes images in public/images/work/)
  const images = [
    "/images/work/26-06-2025/image1.jpg",
    "/images/work/26-06-2025/image2.jpg",
    "/images/work/27-06-2025/img1.jpg",
    "/images/work/27-06-2025/img2.jpg",
    "/images/work/27-06-2025/img3.jpg",
    "/images/work/27-06-2025/img4.jpg",
    "/images/work/27-06-2025/img6.jpg",
    "/images/work/27-06-2025/img7.jpg",
    "/images/work/27-06-2025/img9.jpg",
    "/images/work/28-06-2025/img1.jpg",
    "/images/work/28-06-2025/img2.jpg",
    "/images/work/28-06-2025/img3.jpg",
    "/images/work/28-06-2025/img4.jpg",
    "/images/work/28-06-2025/img5.jpg",
    "/images/work/28-06-2025/img6.jpg",
    "/images/work/28-06-2025/img7.jpg",
    "/images/work/28-06-2025/img8.jpg",
    "/images/work/28-06-2025/img9.jpg",
    "/images/work/28-06-2025/img10.jpg",
    "/images/work/28-06-2025/img11.jpg",
    "/images/work/28-06-2025/img12.jpg",
    "/images/work/28-06-2025/img13.jpg",
    "/images/work/28-06-2025/img14.jpg",
    "/images/work/28-06-2025/img15.jpg",
    "/images/work/28-06-2025/img16.jpg",
    "/images/work/28-06-2025/img17.jpg",
    "/images/work/28-06-2025/img18.jpg",
    "/images/work/28-06-2025/img19.jpg",
    "/images/work/28-06-2025/img20.jpg",
  ];

  return (
    <div
      className="relative flex min-h-screen flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/images/backgrounds/IMG_5077.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Top bar */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-4 text-emerald-50 font-mono text-base sm:text-xl">
        <a href="/" className="mb-2 sm:mb-0 sm:ml-2">
          ← Back
        </a>
        <p className="text-center w-full sm:w-auto sm:text-lg">
          Here are some of my work...
        </p>
      </div>

      {/* Photo Gallery */}
      <div className="relative z-10 flex-1 p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded shadow-lg">
              <img
                src={src}
                alt={`Work ${index + 1}`}
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
