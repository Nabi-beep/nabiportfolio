import React from "react";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="relative py-28 bg-gr aseadient-to-br from-white via-slate-50 to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Let’s Build Something Meaningful
          </h2>
          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Whether you have an idea, a project, or just want to connect,
            I’m always open to meaningful conversations and collaborations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Content */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900">
              Get in Touch
            </h3>

            <p className="text-gray-700 leading-relaxed">
              I work with individuals, startups, and businesses to create
              clean, modern, and user-focused digital experiences.
              If you’re looking for a reliable developer who values quality
              and clarity, you’re in the right place.
            </p>

            <div className="space-y-4 text-gray-700">
              <p>
                📍 <span className="font-medium">Location:</span> Remote / Global
              </p>
              <p>
                ✉️ <span className="font-medium">Email:</span> karimoholuwakemi@mail.com
              </p>
              <p>
                🌍 <span className="font-medium">Availability:</span> Open for
                freelance & collaborations
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="px-5 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition"
              >
                GitHub
              </a>
              <a
                href="#"
                className="px-5 py-3 rounded-xl border border-gray-300 text-gray+700 hover:bg-gray-900 hover:text-white transition"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="px-5 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-10 shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
