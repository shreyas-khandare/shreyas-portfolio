"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Asset Simulator Fractional Real Estate Tokenization",
    description:
      "A simulation platform for fractional tokenization of real-estate assets. Supports asset creation (admin), token issuance, fractional purchasing, portfolio simulation, and AI-powered investment insights.",
    tech: [
      "React (Vite)",
      "Node.js",
      "Express",
      "PostgreSQL (Neon)",
      "TailwindCSS",
      "React Router",
      "Gemini API"
    ],
    live: "https://real-estate-token-simulator.vercel.app/admin/assets",
    github: "https://github.com/shreyas-khandare/real-estate-token-simulator"
  },
  {
    title: "Trading App Website",
    description:
      "Full-stack simulated trading platform with order execution flows, portfolio valuation, and real-time UI updates.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/shreyas-khandare/Stock-Trading-app"
  },
  {
    title: "Airbnb Price Prediction AI",
    description:
      "Machine Learning model for predicting Airbnb listing prices using Random Forest (R² = 0.87). Includes a Tkinter-based GUI.",
    tech: ["Python", "Sklearn", "Pandas", "Tkinter"],
    github: "https://github.com/shreyas-khandare/Airbnb-recommender"
  }
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

            <p className="text-gray-400 text-sm mt-2">
              {project.description}
            </p>

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

            <div className="flex flex-col gap-1 mt-4 text-sm font-medium">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  Live Demo →
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                GitHub →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
