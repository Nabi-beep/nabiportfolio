import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-white via-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Top Grid */}
        <div className="grid gap-16 md:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              {/* Minimal Logo Mark */}
              <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center font-semibold tracking-tight">
                NC
              </div>
              <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
                NabiCode
              </h3>
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed max-w-sm">
              Building refined, scalable, and user-focused digital products.
              Focused on clarity, performance, and long-term value.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-6">
              Navigation
            </h4>
            <ul className="space-y-4 text-gray-600">
              <li>
                <a href="#home" className="hover:text-gray-900 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-900 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-gray-900 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-900 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Presence */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-6">
              Presence
            </h4>
            <p className="text-gray-600 mb-6">
              Open to remote work and global collaborations.
            </p>
            <div className="flex gap-6 text-gray-700 font-medium">
              <a href="#" className="hover:text-gray-900 transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Twitter
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} NabiCode. All rights reserved.</p>
          <p className="italic text-gray-500">
            Crafted with intention.
          </p>
        </div>

      </div>
    </footer>
  );
}
