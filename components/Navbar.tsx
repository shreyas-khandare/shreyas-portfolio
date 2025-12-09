"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 bg-[#0f1117]/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between py-5 px-4">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_6px_rgba(100,100,255,0.5)]"
        >
          Shreyas
        </motion.a>

        {/* Navigation Links */}
        <div className="flex gap-8 text-base font-medium text-gray-300">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
}
