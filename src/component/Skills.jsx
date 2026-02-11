// src/components/Skills.jsx
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: "90%" },
      { name: "CSS", level: "88%" },
      { name: "JavaScript", level: "85%" },
      { name: "React", level: "80%" },
      { name: "Tailwind CSS", level: "85%" },
    ],
  },
  {
    category: "Backend & Tools",
    items: [
      { name: "Firebase", level: "75%" },
      { name: "REST APIs", level: "70%" },
      { name: "Git & GitHub", level: "80%" },
      { name: "Basic Node.js", level: "65%" },
    ],
  },
  {
    category: "Design & Workflow",
    items: [
      { name: "Responsive Design", level: "90%" },
      { name: "UI/UX Principles", level: "80%" },
      { name: "Project Structuring", level: "75%" },
      { name: "Debugging", level: "85%" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50"
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
            My <span className="text-indigo-600">Skills</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I actively use to build clean, responsive, and
            user-focused web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {group.category}
              </h3>

              <div className="space-y-5">
                {group.items.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-2.5 rounded-full bg-gray-200 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
