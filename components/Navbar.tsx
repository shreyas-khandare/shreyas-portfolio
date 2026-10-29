"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  path: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", path: "/home" },
  { id: "about", label: "About", path: "/about" },
  { id: "skills", label: "Skills", path: "/skills" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const isNavigatingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth scroll helper with header offset
  const scrollToSection = useCallback((sectionId: string, smooth: boolean = true) => {
    const el = document.getElementById(sectionId);
    if (!el) {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
      }
      return;
    }

    const headerOffset = 76;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = Math.max(0, elementPosition - headerOffset);

    // If reduced motion is requested, use instant scroll
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: offsetPosition,
      behavior: smooth && !prefersReducedMotion ? "smooth" : "auto",
    });
  }, []);

  // Handle direct navigation on click
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(item.id);

    // Update URL via pushState without reloading
    window.history.pushState(null, "", item.path);

    isNavigatingRef.current = true;
    scrollToSection(item.id, true);

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 800);
  };

  // Restore section on popstate (browser Back / Forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname.replace(/^\//, "");
      const matched = NAV_ITEMS.find((item) => item.id === pathname);
      const targetId = matched ? matched.id : "home";
      setActiveSection(targetId);
      scrollToSection(targetId, true);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [scrollToSection]);

  // Initial mount: check if URL contains a clean path (/about, /projects, etc.)
  useEffect(() => {
    const pathname = window.location.pathname.replace(/^\//, "");
    if (pathname) {
      const matched = NAV_ITEMS.find((item) => item.id === pathname);
      if (matched) {
        // Slight timeout to let DOM hydrate
        const timer = setTimeout(() => {
          setActiveSection(matched.id);
          scrollToSection(matched.id, false);
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [scrollToSection]);

  // IntersectionObserver to synchronize URL on user scroll
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isNavigatingRef.current) return;

        // Pick the intersecting section with highest ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const currentId = visible[0].target.id;
          setActiveSection(currentId);

          const newPath = currentId === "home" ? "/home" : `/${currentId}`;
          if (window.location.pathname !== newPath) {
            window.history.replaceState(null, "", newPath);
          }
        }
      },
      {
        rootMargin: "-25% 0px -65% 0px",
        threshold: [0, 0.2, 0.5, 0.8],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0F14]/90 backdrop-blur-md border-b border-[#273244]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="/home"
          onClick={(e) => handleNavClick(e, NAV_ITEMS[0])}
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded py-1"
          aria-label="shreyas. — Home"
        >
          <Image
            src="/shreyas-wordmark.png"
            alt="shreyas."
            width={100}
            height={30}
            priority
            className="h-6 sm:h-7 w-auto object-contain transition-opacity group-hover:opacity-90"
          />
          <span className="hidden sm:inline text-xs font-mono font-normal text-[#778396] pl-2.5 border-l border-[#273244]">
            Software Engineer
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 text-sm"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.path}
                onClick={(e) => handleNavClick(e, item)}
                aria-current={isActive ? "page" : undefined}
                className={`relative px-3.5 py-1.5 rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isActive
                    ? "text-[#F1F5F9] bg-[#151D29]"
                    : "text-[#A1ACBB] hover:text-[#F1F5F9] hover:bg-[#101722]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-blue-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#A1ACBB] hover:text-[#F1F5F9] hover:bg-[#151D29] border border-[#273244] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-b border-[#273244] bg-[#0B0F14] px-4 pt-2 pb-4 space-y-1"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.path}
                onClick={(e) => handleNavClick(e, item)}
                aria-current={isActive ? "page" : undefined}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-400 bg-[#151D29] border-l-2 border-blue-500 font-semibold"
                    : "text-[#A1ACBB] hover:text-[#F1F5F9] hover:bg-[#101722]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
