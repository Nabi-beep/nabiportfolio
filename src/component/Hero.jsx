import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 text-white">
      
      {/* Background Glow Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl w-full px-6 md:px-12">
        
        {/* Left Text Section */}
        <div className="text-center md:text-left space-y-6 md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            Hi, I’m <span className="text-purple-400">NabiCode</span> 👋
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 dark:text-gray-300">
            A Passionate Frontend Developer & Creative Technologist
          </h2>  
          <p className="text-gray-300 text-lg max-w-lg mx-auto md:mx-0">
            I craft modern, visually stunning, and high-performance websites that combine creativity and technology — designed to inspire and stand out globally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Link
              to="/projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold shadow-lg hover:scale-105 hover:shadow-purple-500/30 transition-all duration-300"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-purple-400 rounded-full font-semibold text-purple-300 hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-400 shadow-[0_0_60px_-10px_rgba(168,85,247,0.6)]">
            <img
              src="/ChatGPT Image Jan 12, 2026, 01_42_47 AM.png"
              alt="NabiCode Portrait"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Glow Animation */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-40 blur-3xl animate-pulse"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 text-gray-300 text-sm flex flex-col items-center animate-bounce">
        <span>Scroll Down</span>
        <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2"></div>
      </div>
    </section>
  );
};

export default Hero;
