"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="mt-28">
      <h2 className="text-4xl font-bold text-gray-100 mb-6">About Me</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-gray-400 text-lg leading-loose max-w-3xl space-y-6"
      >
        <p>
          I'm <span className="font-semibold text-gray-100">Shreyas Khandare</span>, 
          a Full-Stack Web Developer skilled in building applications using the 
          <span className="text-gray-100"> MERN stack</span>. I'm currently in my 
          4th year of B.Tech in Electronics & Computer Science at Vidyalankar 
          Institute of Technology.
        </p>

        <p>
          I completed a Web Developer Junior internship at 
          <span className="text-gray-100"> Meshcraft</span>, where I worked on 
          improving admin dashboards, optimizing React + Node.js modules, and 
          enhancing overall platform performance.
        </p>

        <p>
          Along with full-stack development, I enjoy solving DSA problems and exploring 
          <span className="text-gray-100"> DevOps, AWS, and system design</span>. 
          I'm continuously learning and working on becoming a stronger, well-rounded 
          engineer.
        </p>
      </motion.div>
    </section>
  );
}
