"use client";

import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  architecture: string[];
  tech: string[];
  live?: string;
  github: string;
  previewType: "cloudbox" | "token" | "tiffin";
}

const PROJECTS: Project[] = [
  {
    id: "cloudbox",
    title: "CloudBox — Cloud Storage Platform",
    subtitle: "Secure direct-to-S3 file distribution with JWT access controls",
    problem:
      "Engineered to eliminate server-side bandwidth bottlenecks during large file transfers by issuing short-lived Amazon S3 presigned URLs directly to authenticated clients.",
    architecture: [
      "Role-based access control (RBAC) enforced via JWT authentication middleware.",
      "Presigned Amazon S3 URLs for secure client-side PUT and GET operations, bypassing server stream overhead.",
      "Relational metadata indexing in PostgreSQL via Prisma ORM for rapid file search and tagging.",
      "Containerized with Docker and deployed to an AWS EC2 instance fronted by an Nginx reverse proxy.",
    ],
    tech: ["TypeScript", "React", "Node.js", "Express", "AWS S3", "AWS EC2", "PostgreSQL", "Docker", "Nginx"],
    live: "https://cloudbox-s3-storage.vercel.app/",
    github: "https://github.com/shreyas-khandare/cloudbox-s3-storage",
    previewType: "cloudbox",
  },
  {
    id: "asset-simulator",
    title: "Asset Simulator — Real Estate Tokenization",
    subtitle: "Fractional property ledger simulation with AI market commentary",
    problem:
      "Simulates the financial mechanics of real estate fractional tokenization, allowing investors to evaluate portfolio diversification, yields, and token liquidity models backed by AI risk analysis.",
    architecture: [
      "Fractional purchase simulation calculating token issuance, dynamic cap tables, and investor portfolio allocations.",
      "Administrative dashboard allowing creation, valuation updates, and yield projections for real-estate assets.",
      "Integrated Google Gemini API to analyze property fundamentals and synthesize automated investment commentary.",
      "Hosted on PostgreSQL (Neon serverless) with high-availability transaction records.",
    ],
    tech: ["React", "Vite", "Node.js", "Express", "PostgreSQL (Neon)", "Gemini API", "Tailwind CSS"],
    live: "https://real-estate-token-simulator.vercel.app/admin/assets",
    github: "https://github.com/shreyas-khandare/real-estate-token-simulator",
    previewType: "token",
  },
  {
    id: "bhavsar-tiffin",
    title: "Bhavsar Tiffin — Order Management Platform",
    subtitle: "Full-stack subscription meal operations & transit dispatch system",
    problem:
      "A production-ready order and operations management system designed for high-turnover daily meal delivery and train-passenger meal logistics.",
    architecture: [
      "Custom ordering workflows supporting recurring subscriptions and transit delivery (platform & coach coordinates).",
      "Administrative operations console for tracking customer preferences, meal preparation stages, and delivery status.",
      "Automated WhatsApp dispatch integration to trigger instant transit notifications and delivery alerts.",
      "Built with Next.js App Router, React 19, and MongoDB Atlas with session authentication.",
    ],
    tech: ["Next.js 16", "React 19", "MongoDB Atlas", "JWT Auth", "Tailwind CSS", "Framer Motion"],
    live: "https://bhavsar-tiffin.vercel.app/",
    github: "https://github.com/shreyas-khandare/bhavsar-tiffin",
    previewType: "tiffin",
  },
];

function CloudBoxPreview() {
  return (
    <div className="w-full bg-[#0E131B] border border-[#273244] rounded-lg overflow-hidden font-mono text-xs text-[#A1ACBB] shadow-lg">
      {/* Window Title Bar */}
      <div className="bg-[#151D29] px-4 py-2.5 border-b border-[#273244] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#273244]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#273244]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#273244]" />
          <span className="text-[11px] text-[#778396] ml-2">cloudbox.internal/console</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>S3 Presigned Bucket: Active</span>
        </div>
      </div>

      {/* Console Toolbar */}
      <div className="p-4 border-b border-[#1E293B] flex flex-wrap items-center justify-between gap-3 bg-[#101722]">
        <div className="flex items-center gap-3">
          <span className="text-[#F1F5F9] font-sans font-semibold text-sm">s3://shreyas-cloudbox-prod/</span>
          <span className="bg-[#151D29] border border-[#273244] px-2 py-0.5 rounded text-[10px] text-[#A1ACBB]">
            Storage: 4.8 GB / 25 GB
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30 text-[11px] font-sans font-medium">
            + Generate Presigned Upload
          </span>
        </div>
      </div>

      {/* File Table Simulation */}
      <div className="p-4 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[#778396] border-b border-[#1E293B] pb-2 text-[10px] uppercase tracking-wider">
              <th className="pb-2">Object Key</th>
              <th className="pb-2">Size</th>
              <th className="pb-2">Storage Class</th>
              <th className="pb-2">Transfer Mode</th>
              <th className="pb-2 text-right">Access</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E293B]/60">
            <tr>
              <td className="py-2.5 font-sans font-medium text-[#F1F5F9] flex items-center gap-2">
                <span className="text-blue-400">📄</span> system-architecture-v2.pdf
              </td>
              <td className="py-2.5">2.4 MB</td>
              <td className="py-2.5">STANDARD</td>
              <td className="py-2.5 text-emerald-400">Client-Direct S3</td>
              <td className="py-2.5 text-right font-sans text-blue-400">Presigned Link</td>
            </tr>
            <tr>
              <td className="py-2.5 font-sans font-medium text-[#F1F5F9] flex items-center gap-2">
                <span className="text-purple-400">📦</span> database-snapshot-2025.sql.gz
              </td>
              <td className="py-2.5">64.8 MB</td>
              <td className="py-2.5">INTELLIGENT_TIERING</td>
              <td className="py-2.5 text-emerald-400">Multi-part Signed</td>
              <td className="py-2.5 text-right font-sans text-blue-400">Admin Only</td>
            </tr>
            <tr>
              <td className="py-2.5 font-sans font-medium text-[#F1F5F9] flex items-center gap-2">
                <span className="text-amber-400">📊</span> user-telemetry-dump.parquet
              </td>
              <td className="py-2.5">14.1 MB</td>
              <td className="py-2.5">STANDARD</td>
              <td className="py-2.5 text-emerald-400">Client-Direct S3</td>
              <td className="py-2.5 text-right font-sans text-blue-400">Presigned Link</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Terminal Footer Info */}
      <div className="px-4 py-2 bg-[#0B0F14] border-t border-[#1E293B] text-[10px] text-[#778396] flex items-center justify-between">
        <span>Docker Container: cloudbox-api (healthy)</span>
        <span>Proxy: Nginx Reverse Proxy / Port 443</span>
      </div>
    </div>
  );
}

function TokenPreview() {
  return (
    <div className="w-full bg-[#0E131B] border border-[#273244] rounded-lg overflow-hidden font-mono text-xs text-[#A1ACBB] shadow-lg">
      {/* Window Title Bar */}
      <div className="bg-[#151D29] px-4 py-2.5 border-b border-[#273244] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#273244]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#273244]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#273244]" />
          <span className="text-[11px] text-[#778396] ml-2">simulator.internal/admin/asset-ledger</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-blue-400">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          <span>Neon PostgreSQL: Synced</span>
        </div>
      </div>

      {/* Asset Header */}
      <div className="p-4 border-b border-[#1E293B] bg-[#101722]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="text-[#778396] text-[10px] uppercase tracking-wider">Asset Registry #TK-702</div>
            <div className="font-sans font-bold text-base text-[#F1F5F9]">
              Commercial Tower Suite (BKC District)
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/40 text-[11px]">
              Valuation: $1,800,000
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-[11px]">
              Target APY: 9.4%
            </span>
          </div>
        </div>
      </div>

      {/* Gemini AI Commentary Box */}
      <div className="p-4 border-b border-[#1E293B] bg-[#0F1622]">
        <div className="flex items-start gap-2.5">
          <span className="text-amber-400 mt-0.5">✦</span>
          <div>
            <span className="text-amber-300 font-sans font-semibold text-[11px]">
              Gemini AI Market Synthesis:
            </span>
            <p className="font-sans text-xs text-[#A1ACBB] mt-1 leading-relaxed">
              &quot;Commercial tenancy exhibits 98% occupancy with a 6-year lease covenant. Risk analysis indicates debt-service coverage ratio of 1.48x, outperforming sector averages.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Token Distribution Metrics */}
      <div className="p-4 grid grid-cols-3 gap-3 text-center">
        <div className="p-2.5 rounded bg-[#151D29] border border-[#273244]">
          <div className="text-[10px] text-[#778396]">Tokens Minted</div>
          <div className="font-sans font-semibold text-sm text-[#F1F5F9] mt-0.5">18,000 $PROP</div>
        </div>
        <div className="p-2.5 rounded bg-[#151D29] border border-[#273244]">
          <div className="text-[10px] text-[#778396]">Unit Price</div>
          <div className="font-sans font-semibold text-sm text-emerald-400 mt-0.5">$100.00 / Token</div>
        </div>
        <div className="p-2.5 rounded bg-[#151D29] border border-[#273244]">
          <div className="text-[10px] text-[#778396]">Liquidity Pool</div>
          <div className="font-sans font-semibold text-sm text-[#F1F5F9] mt-0.5">74% Allocated</div>
        </div>
      </div>
    </div>
  );
}

function TiffinPreview() {
  return (
    <div className="w-full bg-[#0E131B] border border-[#273244] rounded-lg overflow-hidden font-mono text-xs text-[#A1ACBB] shadow-lg">
      {/* Window Title Bar */}
      <div className="bg-[#151D29] px-4 py-2.5 border-b border-[#273244] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#273244]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#273244]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#273244]" />
          <span className="text-[11px] text-[#778396] ml-2">bhavsar-tiffin.internal/ops/dispatch</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>MongoDB Atlas: Connected</span>
        </div>
      </div>

      {/* Live Operations Header */}
      <div className="p-4 border-b border-[#1E293B] bg-[#101722] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div>
            <span className="text-[10px] text-[#778396] uppercase">Active Subscriptions</span>
            <div className="font-sans font-semibold text-sm text-[#F1F5F9]">142 Daily Customers</div>
          </div>
          <div className="h-6 w-px bg-[#273244]" />
          <div>
            <span className="text-[10px] text-[#778396] uppercase">Train Orders Today</span>
            <div className="font-sans font-semibold text-sm text-amber-400">28 Transit Packets</div>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded bg-[#151D29] border border-[#273244] text-[10px] text-emerald-400 font-sans">
          WhatsApp Bot: Online
        </span>
      </div>

      {/* Orders Table Simulation */}
      <div className="p-4 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[#778396] border-b border-[#1E293B] pb-2 text-[10px] uppercase tracking-wider">
              <th className="pb-2">Order ID</th>
              <th className="pb-2">Destination / Coordinate</th>
              <th className="pb-2">Meal Type</th>
              <th className="pb-2">Status</th>
              <th className="pb-2 text-right">Dispatch Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E293B]/60">
            <tr>
              <td className="py-2.5 font-sans font-medium text-[#F1F5F9]">#BT-1082</td>
              <td className="py-2.5 font-sans">Train 12138 • Coach B3, Seat 42</td>
              <td className="py-2.5">Executive Thali</td>
              <td className="py-2.5 text-emerald-400 font-sans">Dispatched</td>
              <td className="py-2.5 text-right font-sans text-emerald-400">WhatsApp Alert Sent ✓</td>
            </tr>
            <tr>
              <td className="py-2.5 font-sans font-medium text-[#F1F5F9]">#BT-1083</td>
              <td className="py-2.5 font-sans">Andheri East Tech Park, Floor 4</td>
              <td className="py-2.5">Monthly Standard</td>
              <td className="py-2.5 text-amber-400 font-sans">Kitchen Prep</td>
              <td className="py-2.5 text-right font-sans text-blue-400">Assign Courier</td>
            </tr>
            <tr>
              <td className="py-2.5 font-sans font-medium text-[#F1F5F9]">#BT-1084</td>
              <td className="py-2.5 font-sans">Train 22221 • Coach A1, Seat 18</td>
              <td className="py-2.5">Jain Special</td>
              <td className="py-2.5 text-blue-400 font-sans">Confirmed</td>
              <td className="py-2.5 text-right font-sans text-[#778396]">Queue for 13:45</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <div className="px-4 py-2 bg-[#0B0F14] border-t border-[#1E293B] text-[10px] text-[#778396] flex items-center justify-between">
        <span>Framework: Next.js 16 App Router / React 19</span>
        <span>Auth: JWT Session Token Verified</span>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-b border-[#273244]">
      {/* Section Header */}
      <div className="max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F1F5F9]">
          Featured Engineering Projects
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#A1ACBB] leading-relaxed">
          Production applications, backend architectures, and full-stack systems built with a focus on real user problems, clean APIs, and reliable infrastructure.
        </p>
      </div>

      {/* Projects List - Spacious Product-Focused Layout */}
      <div className="mt-14 space-y-16 lg:space-y-24">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Preview Window (7 cols) */}
              <div
                className={`lg:col-span-7 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                {project.previewType === "cloudbox" && <CloudBoxPreview />}
                {project.previewType === "token" && <TokenPreview />}
                {project.previewType === "tiffin" && <TiffinPreview />}
              </div>

              {/* Narrative & Architectural Details (5 cols) */}
              <div
                className={`lg:col-span-5 flex flex-col justify-between ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div>
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                    Case Study 0{index + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F1F5F9] mt-1">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-300 mt-1">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-[#A1ACBB] mt-4 leading-relaxed">
                    {project.problem}
                  </p>

                  {/* Architecture Details */}
                  <div className="mt-5 space-y-2">
                    <span className="text-xs font-semibold text-[#F1F5F9] uppercase tracking-wider font-mono">
                      Architectural Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#A1ACBB]">
                      {project.architecture.map((arch, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5">•</span>
                          <span>{arch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono bg-[#151D29] text-[#A1ACBB] rounded border border-[#273244]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="mt-8 pt-4 border-t border-[#1E293B] flex items-center gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md transition-colors"
                    >
                      <span>Live Product</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F1F5F9] bg-[#101722] hover:bg-[#151D29] border border-[#273244] px-4 py-2 rounded-md transition-colors"
                  >
                    <FaGithub size={14} />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
