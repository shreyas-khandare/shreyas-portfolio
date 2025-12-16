"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

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
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_6px_rgba(100,100,255,0.5)]"
        >
          Shreyas
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-base font-medium text-gray-300">
          <Link href="#home" className="hover:text-white transition">Home</Link>
          <Link href="#about" className="hover:text-white transition">About</Link>
          <Link href="#skills" className="hover:text-white transition">Skills</Link>
          <Link href="#projects" className="hover:text-white transition">Projects</Link>
          <Link href="#contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0f1117]/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-gray-300 text-base">
              <Link href="#home" onClick={() => setOpen(false)}>Home</Link>
              <Link href="#about" onClick={() => setOpen(false)}>About</Link>
              <Link href="#skills" onClick={() => setOpen(false)}>Skills</Link>
              <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
              <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
