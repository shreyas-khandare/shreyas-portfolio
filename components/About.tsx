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
          I'm{" "}
          <span className="font-semibold text-gray-100">Shreyas Khandare</span>,
          a Full-Stack Web Developer skilled in building{" "}
          <span className="text-gray-100">Full-Stack Web applications</span>. I
          recently completed my B.Tech in Electronics & Computer Science at
          Vidyalankar Institute of Technology with a CGPA of 8.83.
        </p>

        <p>
          I'm currently working as an SEO Intern at{" "}
          <a href="https://bloomagency.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline underline-offset-4 transition-colors">Bloom Agency</a>
          , handling both on-page and off-page SEO for client websites. On the{" "}
          <span className="text-gray-100">on-page</span> side, I work on
          content optimization, meta tags, and getting pages indexed through
          Google Search Console. On the{" "}
          <span className="text-gray-100">off-page</span> side, I manage
          backlink building, blog posting, and other link-building activities
          while tracking SEO metrics.
        </p>

        <p>
          I completed a Web Developer internship at{" "}
          <a href="https://www.meshcraftassets.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline underline-offset-4 transition-colors">Meshcraft</a>
          , where I built a React-based admin dashboard for marketplace asset
          management, implemented a real-time availability toggle for 50+
          assets, and fixed frontend bugs while optimizing API integrations. I
          also worked with the DevOps team on deployment using{" "}
          <span className="text-gray-100">Netlify, AWS EC2, and Amazon S3</span>.
        </p>

        <p>
          Along with full-stack development, I enjoy solving DSA problems and
          exploring
          <span className="text-gray-100"> DevOps, AWS, and system design</span>
          . I'm continuously learning and working on becoming a stronger,
          well-rounded engineer.
        </p>
      </motion.div>
    </section>
  );
}