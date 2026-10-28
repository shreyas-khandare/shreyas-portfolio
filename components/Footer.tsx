"use client";

import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export function Footer() {
  const scrollToTop = () => {
    window.history.pushState(null, "", "/home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-16 border-t border-[#273244] bg-[#080B0F] py-8 text-xs text-[#778396]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Copyright & Name */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span className="font-medium text-[#A1ACBB]">
            © {new Date().getFullYear()} Shreyas Khandare.
          </span>
          <span className="hidden sm:inline text-[#778396]">
            All rights reserved.
          </span>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4 text-[#A1ACBB]">
          <a
            href="https://github.com/shreyas-khandare"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-[#F1F5F9] transition-colors"
          >
            <FaGithub size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/shreyas-khandare-7b6413322/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={15} />
          </a>
          <a
            href="https://leetcode.com/u/PCEDBo0AIU/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="hover:text-amber-400 transition-colors"
          >
            <SiLeetcode size={15} />
          </a>
          <a
            href="https://www.instagram.com/shreyas_khandare_55/?next=%2F&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="hover:text-pink-400 transition-colors"
          >
            <FaInstagram size={15} />
          </a>
        </div>

        {/* Right: Back to top link */}
        <button
          onClick={scrollToTop}
          type="button"
          className="inline-flex items-center gap-1.5 text-[#A1ACBB] hover:text-[#F1F5F9] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 rounded cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
}
