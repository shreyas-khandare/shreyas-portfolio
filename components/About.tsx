"use client";

import { Briefcase, GraduationCap, ExternalLink } from "lucide-react";

interface TimelineItem {
  type: "work" | "education";
  title: string;
  organization: string;
  orgUrl?: string;
  status: string;
  statusType: "current" | "completed" | "academic";
  description: string[];
}

const TIMELINE: TimelineItem[] = [
  {
    type: "work",
    title: "SEO Intern",
    organization: "Bloom Agency",
    orgUrl: "https://bloomagency.in/",
    status: "Current",
    statusType: "current",
    description: [
      "Conduct technical SEO audits and on-page optimizations, refining meta data architecture and crawlability.",
      "Manage search performance and site indexing pipelines through Google Search Console.",
      "Execute targeted link-building strategies and off-page backlink distribution while monitoring key visibility metrics.",
    ],
  },
  {
    type: "work",
    title: "Web Developer Intern",
    organization: "Meshcraft",
    orgUrl: "https://www.meshcraftassets.com/",
    status: "Completed",
    statusType: "completed",
    description: [
      "Built a React-based administrative dashboard for digital marketplace asset management and inventory control.",
      "Engineered a real-time availability toggle for 50+ marketplace assets with optimized state management and API calls.",
      "Resolved frontend defects, streamlined data fetching, and improved cross-device responsiveness.",
      "Collaborated with the engineering team on automated build and deployment pipelines using Netlify, AWS EC2, and Amazon S3.",
    ],
  },
  {
    type: "education",
    title: "B.Tech in Electronics & Computer Science",
    organization: "Vidyalankar Institute of Technology (VIT)",
    status: "CGPA: 8.83 / 10",
    statusType: "academic",
    description: [
      "Rigorous coursework covering Data Structures & Algorithms, Relational Databases, Computer Networks, and Operating Systems.",
      "Graduated with distinction (8.83 CGPA), developing a strong analytical foundation for scalable software development.",
    ],
  },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-[#273244]">
      {/* Section Header */}
      <div className="max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F1F5F9]">
          About & Experience
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#A1ACBB] leading-relaxed">
          I combine a rigorous computer science background with practical software engineering experience.
          My approach prioritizes system reliability, readable code, and pragmatic architectural decisions.
        </p>
      </div>

      {/* Editorial Overview: Engineering Focus */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#A1ACBB]">
        <div className="p-5 rounded-lg bg-[#101722] border border-[#273244]">
          <h3 className="font-semibold text-[#F1F5F9] text-base mb-2">
            Full-Stack Development
          </h3>
          <p className="leading-relaxed">
            Crafting modular frontends with React & Next.js while architecting clean, typed backend endpoints using Express and FastAPI.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-[#101722] border border-[#273244]">
          <h3 className="font-semibold text-[#F1F5F9] text-base mb-2">
            Data & Cloud Systems
          </h3>
          <p className="leading-relaxed">
            Structuring relational schemas in PostgreSQL and document collections in MongoDB, integrated with Amazon S3 and containerized via Docker.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-[#101722] border border-[#273244]">
          <h3 className="font-semibold text-[#F1F5F9] text-base mb-2">
            Engineering Rigor
          </h3>
          <p className="leading-relaxed">
            Consistently practicing Data Structures & Algorithms to analyze time/space complexity, optimize database queries, and write maintainable code.
          </p>
        </div>
      </div>

      {/* Experience & Education Chronology */}
      <div className="mt-14">
        <h3 className="text-xl font-bold text-[#F1F5F9] mb-8 flex items-center gap-2">
          <span>Work History & Academic Background</span>
        </h3>

        <div className="relative border-l border-[#273244] ml-3 sm:ml-4 space-y-10">
          {TIMELINE.map((item, index) => {
            const isWork = item.type === "work";
            return (
              <div key={index} className="relative pl-6 sm:pl-8 group">
                {/* Node icon / indicator */}
                <span
                  className={`absolute -left-[17px] top-1 flex items-center justify-center w-8 h-8 rounded-full border bg-[#0B0F14] transition-colors ${
                    item.statusType === "current"
                      ? "border-emerald-500 text-emerald-400"
                      : "border-[#273244] text-[#778396] group-hover:border-slate-500 group-hover:text-slate-300"
                  }`}
                >
                  {isWork ? <Briefcase size={14} /> : <GraduationCap size={15} />}
                </span>

                {/* Content block */}
                <div className="rounded-lg p-5 sm:p-6 bg-[#101722] border border-[#273244] hover:border-slate-700 transition-colors">
                  {/* Top line: Role, Organization, Status */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#1E293B]">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-[#F1F5F9]">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-blue-400 font-medium mt-0.5">
                        {item.orgUrl ? (
                          <a
                            href={item.orgUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:underline"
                          >
                            <span>{item.organization}</span>
                            <ExternalLink size={13} />
                          </a>
                        ) : (
                          <span>{item.organization}</span>
                        )}
                      </div>
                    </div>

                    <div className="self-start sm:self-center">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono font-medium ${
                          item.statusType === "current"
                            ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/40"
                            : item.statusType === "completed"
                            ? "bg-[#151D29] text-[#A1ACBB] border border-[#273244]"
                            : "bg-blue-950/60 text-blue-400 border border-blue-800/40"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* Bulleted achievements */}
                  <ul className="mt-4 space-y-2 text-sm text-[#A1ACBB] leading-relaxed">
                    {item.description.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
