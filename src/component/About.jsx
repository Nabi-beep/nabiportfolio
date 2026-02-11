// src/components/About.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";


export default function About() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, ease: "easeOut" } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.36, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 py-20"
      aria-labelledby="about-title"
    >
      {/* subtle background orbs */}
      <div className="pointer-events-none absolute -left-24 -top-24 w-72 h-72 rounded-full blur-3xl bg-blue-200/40 dark:bg-indigo-900/30" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 w-96 h-96 rounded-full blur-3xl bg-purple-300/30 dark:bg-purple-800/24" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={reduceMotion ? undefined : container}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Image column */}
          <motion.div variants={reduceMotion ? undefined : item} className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/30 dark:border-gray-700 shadow-2xl bg-white/60 dark:bg-gray-800/40 backdrop-blur-md">
              <img
                src="/ChatGPT Image Jan 12, 2026, 01_41_19 AM.png"
                alt="NabiCode portrait"
                className="object-cover w-full h-full"
              />
              {/* subtle frame */}
              <div className="absolute -inset-0.5 rounded-2xl pointer-events-none" style={{ boxShadow: "0 10px 40px rgba(99,102,241,0.08)" }} />
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div variants={reduceMotion ? undefined : item} className="space-y-6">
            <h2 id="about-title" className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
              About Me
            </h2>

            <div className="rounded-2xl bg-white/70 dark:bg-gray-800/50 backdrop-blur-xl p-6 md:p-8 border border-white/20 dark:border-gray-700 shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                I’m <span className="font-semibold text-purple-600">NabiCode</span> — a confident Full-Stack Developer and engineer who builds production-ready web applications with polished UI and reliable backends.
              </p>

              <p className="text-md text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                I design and implement scalable frontend experiences (React, Tailwind) and robust server-side systems (Node, Go, Firebase, SQL/NoSQL). My focus is on performance, clean architecture, and developer ergonomics — delivering products that are delightful to use and easy to maintain.
              </p>

              <p className="text-md text-gray-700 dark:text-gray-200 leading-relaxed">
                I enjoy solving engineering trade-offs, optimizing for speed and scale, and mentoring teams to ship faster with quality. On the systems side I work with Linux-based deployments, containerization, and CI/CD pipelines for reliable delivery.
              </p>
            </div>

            {/* Highlight stats */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              <motion.div variants={reduceMotion ? undefined : item} className="text-center p-4 rounded-xl bg-white/60 dark:bg-gray-800/50 border border-white/10">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">1+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </motion.div>

              <motion.div variants={reduceMotion ? undefined : item} className="text-center p-4 rounded-xl bg-white/60 dark:bg-gray-800/50 border border-white/10">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projects</div>
              </motion.div>

              <motion.div variants={reduceMotion ? undefined : item} className="text-center p-4 rounded-xl bg-white/60 dark:bg-gray-800/50 border border-white/10">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">70%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Client Satisfaction</div>
              </motion.div>
            </div>

            {/* CTA buttons */}
            <motion.div variants={reduceMotion ? undefined : item} className="flex flex-col sm:flex-row gap-3 mt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-200"
              >
                See My Work
              </a>

              <a
                href="08082929222"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full border border-purple-300 text-purple-700 dark:text-purple-300 bg-white/30 dark:bg-transparent font-medium hover:bg-purple-600 hover:text-white transition-colors duration-200"
              >
                Let's Talk
              </a>
            </motion.div>

            {/* signature */}
            <motion.div variants={reduceMotion ? undefined : item} className="pt-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">— Nabicode</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
