"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Expense Tracker App",
    description:
      "A cross-platform app built with React Native, Node.js & PostgreSQL. Features real-time balance updates, Clerk auth, and smooth UI.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Redis", "Clerk"],
    link: "https://github.com/shreyas-khandare/Expense-Tracker-Mobile-Ap",
  },
  {
    title: "Trading App Website",
    description:
      "A full-stack trading platform with real-time order flows, portfolio updates, and clean React-based UI.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/shreyas-khandare/Stock-Trading-app",
  },
  {
    title: "Airbnb Price Prediction AI",
    description:
      "Machine Learning model predicting Airbnb listing prices using Random Forest (R² = 0.87). Includes a Tkinter GUI.",
    tech: ["Python", "Sklearn", "Pandas", "Tkinter"],
    link: "https://github.com/shreyas-khandare/Airbnb-recommender",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mt-24">
      <h2 className="text-3xl font-bold text-gray-100">Projects</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.04, rotate: 1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border border-white/10 rounded-xl p-5 shadow-sm bg-[#1a1d24]"
          >
            <h3 className="text-xl font-semibold text-gray-100">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm mt-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs bg-[#2a2e37] text-gray-300 rounded-md border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="inline-block mt-4 text-blue-400 text-sm font-medium hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
