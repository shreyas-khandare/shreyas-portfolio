"use client";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiNginx,
  SiAmazonwebservices,
} from "react-icons/si";
import { IconType } from "react-icons";

interface SkillItem {
  name: string;
  icon: IconType;
}

interface SkillGroup {
  category: string;
  description: string;
  skills: SkillItem[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend Architecture",
    description: "Component systems, responsive layouts, typed state management",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend & APIs",
    description: "REST endpoints, auth middleware, request routing, async services",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    category: "Databases & Storage",
    description: "Schema design, queries, relational indexing & document stores",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Amazon S3", icon: SiAmazonwebservices },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    description: "Containerization, cloud compute instances, reverse proxying & VCS",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "AWS EC2", icon: SiAmazonwebservices },
      { name: "Nginx", icon: SiNginx },
      { name: "Git & GitHub", icon: SiGit },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-[#273244]">
      {/* Section Header */}
      <div className="max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F1F5F9]">
          Technical Capabilities
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#A1ACBB] leading-relaxed">
          Languages, frameworks, databases, and infrastructure tools I use to build and deploy production systems.
        </p>
      </div>

      {/* Categorized Skills Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.category}
            className="rounded-lg p-6 bg-[#101722] border border-[#273244] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
                <h3 className="text-base font-semibold text-[#F1F5F9]">
                  {group.category}
                </h3>
                <span className="text-xs font-mono text-[#778396]">
                  {group.skills.length} technologies
                </span>
              </div>
              <p className="mt-2 text-xs text-[#778396]">
                {group.description}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {group.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#151D29] border border-[#273244] text-xs font-medium text-[#F1F5F9] hover:border-slate-600 transition-colors"
                  >
                    <Icon size={14} className="text-[#A1ACBB]" />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
