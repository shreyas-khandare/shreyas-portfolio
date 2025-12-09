"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="text-center mt-20">
      <motion.div
        animate={{ rotate: [0, 8, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="text-6xl"
      >
        👋
      </motion.div>

      <h1 className="text-4xl font-bold mt-6 text-gray-100">
        Hi, I'm <span className="text-blue-500">Shreyas</span>
      </h1>

      <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
        A Full-Stack MERN Developer Building web applications Praticing DSA,
        learning DevOps, AWS, and system design.
      </p>

      <div className="flex justify-center gap-4 mt-6">
        {/* View My Work */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/20"
        >
          View My Work 
        </motion.a>

        {/* Download Resume */}
        <motion.a
          href="https://drive.google.com/uc?export=download&id=1eBc9tSM-_uKK_nOqKh54pmw85OY-USXG"
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 border border-white/20 text-gray-200 rounded-full backdrop-blur-sm hover:bg-white/10"
        >
          Download Resume 
        </motion.a>
      </div>
    </section>
  );
}
