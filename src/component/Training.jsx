import React, { useEffect, useState } from "react";

const images = [
  "IMG-20251113-WA0027.jpg",
  "ChatGPT Image Feb 8, 2026, 03_37_57 PM.png",
  "IMG-20251113-WA0038.jpg",
  "IMG-20251113-WA0039.jpg",
  "IMG-20251113-WA0027.jpg",
];

export default function Training() {
  const [current, setCurrent] = useState(0);

  // 👉 NEXT SLIDE
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  // 👉 PREVIOUS SLIDE
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // 👉 AUTO SLIDE (TIMER)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-white via-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* ===== INTRO ===== */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Training the Next Generation of Tech Creators
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Welcome to the training arm of{" "}
              <span className="font-medium text-gray-900">NabiCode</span>.
              Here, I introduce kids and beginners to technology through
              practical, engaging, and confidence-building lessons.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              My goal is simple: make technology understandable, exciting, and
              useful from the very first lesson.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-80 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-sm flex items-center justify-center text-gray-400">
              Trainer Portrait
            </div>
          </div>
        </div>

        {/* ===== WHAT I TEACH ===== */}
        <div className="mb-28">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12">
            What Students Learn
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["HTML & CSS", "Build and style modern, responsive websites."],
              ["JavaScript", "Learn logic, interaction, and real web behavior."],
              ["React Basics", "Understand components and modern UI thinking."],
              ["Creative Projects", "Hands-on projects that boost confidence."],
              ["Web Foundations", "How the internet and websites really work."],
              ["Problem Solving", "Think logically and approach challenges."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 hover:shadow-md transition"
              >
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== IMAGE CAROUSEL ===== */}
        <div className="mb-28">
          <h2 className="text-3xl font-semibold text-gray-900 mb-10">
            Training Moments
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-xl">
              <img
                src={images[current]}
                alt="Training session"
                className="w-full h-[420px] object-cover transition-all duration-700 ease-in-out"
              />
            </div>

            {/* Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur border border-gray-200 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-900 hover:text-white transition"
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur border border-gray-200 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-900 hover:text-white transition"
            >
              ›
            </button>
          </div>
        </div>

        {/* ===== WHO IT IS FOR ===== */}
        <div className="mb-28">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Who This Training Is For
          </h2>
          <ul className="space-y-4 text-lg text-gray-600">
            <li>• Kids interested in technology</li>
            <li>• Absolute beginners</li>
            <li>• Schools and learning centers</li>
            <li>• Parents seeking practical tech education</li>
          </ul>
        </div>

        {/* ===== CTA ===== */}
        <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-14">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Book a Training Session
          </h2>
          <p className="text-gray-600 max-w-2xl mb-10">
            To schedule a class, discuss a training program, or ask questions,
            contact me directly through the options below.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:08082929222"
              className="px-6 py-4 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
            >
              Call: 08082929222
            </a>

            <a
              href="https://wa.me/2348082929222"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition"
            >
              WhatsApp
            </a>

            <a
              href=""
              className="px-6 py-4 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/nabi-beep"
              className="px-6 py-4 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
