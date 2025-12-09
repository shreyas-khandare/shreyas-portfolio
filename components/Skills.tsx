"use client";

import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Java",
  "Tailwind CSS",
  "Git & GitHub",
  "REST APIs",
  "AI/ML",
];

export function Skills() {
  return (
    <section id="skills" className="mt-24">
      <h2 className="text-3xl font-bold text-gray-100">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.07 }}
            className="px-4 py-3 rounded-xl border border-white/10 shadow-sm bg-[#1a1d24] text-gray-200 text-center"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
