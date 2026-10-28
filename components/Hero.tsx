"use client";

import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";

export function Hero() {
  const handleViewProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.history.pushState(null, "", "/projects");
    const el = document.getElementById("projects");
    if (el) {
      const headerOffset = 76;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - headerOffset);
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="py-12 md:py-20 lg:py-24 border-b border-[#273244]"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Technical Narrative (7 cols) */}
        <div className="md:col-span-7 flex flex-col items-start">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101722] border border-[#273244] text-xs font-medium text-[#A1ACBB] mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span>Available for Full-Time & Internship Opportunities</span>
          </div>

          {/* Name & Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F1F5F9] leading-tight">
            I&apos;m Shreyas Khandare.
          </h1>
          <p className="mt-3 text-lg sm:text-xl font-medium text-blue-400">
            Software Engineer building full-stack applications & backend systems.
          </p>

          {/* Concise Engineering Description */}
          <p className="mt-5 text-base sm:text-lg text-[#A1ACBB] leading-relaxed max-w-2xl">
            I specialize in full-stack architecture, resilient REST APIs, relational
            and document databases, and containerized cloud deployment. With hands-on
            experience in Docker, AWS (EC2 & S3), and Next.js, I take digital products
            from system design to reliable production code.
          </p>

          {/* Technical Scope Highlights */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-[#778396]">
            <span className="bg-[#101722] border border-[#273244] px-2.5 py-1 rounded">
              TypeScript / React / Next.js
            </span>
            <span className="bg-[#101722] border border-[#273244] px-2.5 py-1 rounded">
              Node.js / Express / FastAPI
            </span>
            <span className="bg-[#101722] border border-[#273244] px-2.5 py-1 rounded">
              PostgreSQL / MongoDB
            </span>
            <span className="bg-[#101722] border border-[#273244] px-2.5 py-1 rounded">
              Docker / AWS EC2 & S3
            </span>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/projects"
              onClick={handleViewProjects}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="https://drive.google.com/file/d/1i_3matzXDVh0wemBSA7v_giHoevDbSE-/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#101722] hover:bg-[#151D29] text-[#F1F5F9] border border-[#273244] hover:border-slate-600 font-medium text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <FileText size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column: Refined Portrait (5 cols) */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative">
            {/* Subtle solid framing */}
            <div className="relative w-56 h-64 sm:w-64 sm:h-72 lg:w-72 lg:h-80 rounded-xl overflow-hidden border border-[#273244] bg-[#101722] shadow-xl">
              <Image
                src="/shreyas.jpg"
                alt="Shreyas Khandare — Software Engineer"
                fill
                sizes="(max-width: 768px) 256px, 288px"
                className="object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
            {/* Subtle status caption */}
            <div className="mt-3 text-center md:text-left">
              <p className="text-xs text-[#778396] font-mono">
                Mumbai, India • B.Tech ECS (8.83 CGPA)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
