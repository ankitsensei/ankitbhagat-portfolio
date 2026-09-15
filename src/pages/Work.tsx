import React from "react";
import DockNavbar from "../components/DockNavbar";
import Footer from "../components/Footer";

interface WorkExperience {
  company: string;
  type: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills?: string[];
  isCurrent?: boolean;
}

const workData: WorkExperience[] = [
  {
    company: "Freelance & Independent Projects",
    type: "Freelance",
    role: "Full Stack Web Developer",
    period: "Jan 2024 - Present",
    location: "Remote",
    description: [
      "Designed and developed full-stack web applications from scratch with modern technologies like React, Next.js, Node.js, Express, and PostgreSQL/MongoDB.",
      "Engineered secure authentication workflows with JWT & OAuth, RESTful API architecture, and dynamic database schemas.",
      "Optimized frontend rendering performance, responsive mobile-first interfaces, and smooth micro-interactions.",
      "Deployed and maintained continuous production applications on Vercel, Supabase, and Cloudflare.",
    ],
    skills: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB", "TailwindCSS"],
    isCurrent: true,
  },
  {
    company: "Open Source & Web Tooling",
    type: "Contributor",
    role: "Open Source Developer",
    period: "2023 - Present",
    location: "Global / GitHub",
    description: [
      "Authored and published developer-centric open source tools including Graphite (markdown notes), mini-chatbot (AI assistant), and productivity extensions.",
      "Built interactive web applications with custom rich-text editors, syntax highlighting, and API integrations.",
      "Maintained modular, clean, and reusable component libraries with thorough documentation and TypeScript type safety.",
    ],
    skills: ["Next.js", "React", "Gemini API", "Tiptap", "Chrome Extensions", "Git"],
    isCurrent: true,
  },
  {
    company: "B.Tech Computer Science & Engineering",
    type: "Education",
    role: "Undergraduate Student",
    period: "Aug 2022 - Expected 2026",
    location: "Jharkhand, India",
    description: [
      "Studying core computer science fundamentals including Data Structures & Algorithms, Database Management Systems, Computer Networks, and Operating Systems.",
      "Active problem solver on competitive programming platforms and passionate learner of scalable backend architectures.",
    ],
    skills: ["C/C++", "Python", "Data Structures", "Algorithms", "DBMS", "OS"],
    isCurrent: false,
  },
];

export const Work: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] antialiased">
      <main className="page">
        {/* Page Header */}
        <div className="page-col mb-5">
          <div>
            <h1 className="doto-font text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Work
            </h1>
          </div>
        </div>

        {/* Work Timeline List */}
        <div className="relative flex flex-col">
          {workData.map((item, index) => (
            <div key={index} className="relative flex gap-2 sm:gap-3 group">
              {/* Timeline Spine Column */}
              <div className="flex flex-col items-center shrink-0 w-4 sm:w-5">
                {/* Node dot aligned with header of card */}
                <div className="relative z-10 flex items-center justify-center mt-3">
                  {item.isCurrent ? (
                    <span className="relative z-10 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-500 ring-2 ring-[var(--bg-page)] shadow-[0_0_6px_rgba(16,185,129,0.7)]" />
                  ) : (
                    <span className="relative z-10 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[var(--text-subtle)] ring-2 ring-[var(--bg-page)]" />
                  )}
                </div>

                {/* Connecting Vertical Line */}
                {index < workData.length - 1 && (
                  <div
                    className={`w-[1.5px] flex-1 my-0.5 transition-colors duration-300 ${
                      item.isCurrent
                        ? "bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.4)]"
                        : "bg-[var(--border-color)]"
                    }`}
                  />
                )}
              </div>

              {/* Work Card */}
              <div className="flex-1 pb-3 min-w-0">
                <div className="relative flex flex-col p-0 transition-all duration-300">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-1.5 border-b border-[var(--border-color)]">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-sm font-semibold text-[var(--text-primary)]">
                          {item.company}
                        </h2>
                        <span className="jetbrains-mono text-[9px] font-medium px-1.5 py-0.5 rounded bg-[var(--badge-subtle-bg)] text-[var(--badge-subtle-text)] border border-[var(--badge-subtle-border)]">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-[11px] font-medium text-[var(--text-primary)] opacity-80 mt-0.5">
                        {item.role}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end">
                      <span className={`jetbrains-mono text-[11px] ${item.isCurrent ? "text-emerald-500 dark:text-emerald-400 font-medium" : "text-[var(--text-muted)]"}`}>
                        {item.period}
                      </span>
                      <span className="text-[10px] text-[var(--text-subtle)]">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="mt-2 flex flex-col gap-1.5 text-[11px] text-[var(--text-muted)] leading-relaxed">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[var(--text-subtle)] select-none mt-0.5">▹</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Tags */}
                  {item.skills && (
                    <div className="mt-2 pt-1.5 border-t border-[var(--border-color)] flex flex-wrap gap-1">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="jetbrains-mono text-[9px] px-1.5 py-0.5 rounded bg-[var(--badge-subtle-bg)] text-[var(--badge-subtle-text)] border border-[var(--badge-subtle-border)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </main>

      {/* Floating Bottom Dock Navigation */}
      <DockNavbar />
      <div className="bottom-progressive-blur" />
    </div>
  );
};

export default Work;
