// src/components/Projects.jsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "Customer Feedback App",
    description:
      "A clean and responsive feedback application that allows users to submit reviews and ratings. Built with modern UI principles and smooth interactions.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    link: "https://tech2school-customer-feedback.vercel.app/",
  },
  {
    title: "Drinks Store Website",
    description:
      "A stylish e-commerce frontend for a drinks store featuring product listings, pricing, and a modern shopping interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website designed to showcase skills, projects, and contact information with a professional and modern layout.",
    tech: ["React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Weather App",
    description:
      "A simple weather application that fetches real-time weather data using a public API and displays it with a clean UI.",
    tech: ["JavaScript", "API", "CSS"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-white via-slate-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            My <span className="text-indigo-600">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of practical and well-crafted projects built using modern
            frontend and full-stack technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Fancy top gradient */}
              <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

              <div className="p-8 space-y-5">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-indigo-50 text-indigo-600 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="pt-4">
                  <a
                    href={project.link}
                    className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
