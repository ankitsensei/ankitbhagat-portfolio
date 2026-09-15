import React from "react";
import { Link } from "react-router";

interface Milestone {
  period: string;
  title: string;
  organization: string;
  badge: string;
  description: string;
  tags: string[];
}

const milestones: Milestone[] = [
  {
    period: "2024 - Present",
    title: "Full Stack Developer",
    organization: "Freelance & Production Apps",
    badge: "DEV",
    description:
      "Architecting end-to-end web applications with Next.js, React, Node.js, Express, and PostgreSQL/MongoDB. Focusing on scalable API design, JWT authentication, and responsive UI performance.",
    tags: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "TailwindCSS",
    ],
  },
  {
    period: "2023 - Present",
    title: "Open Source Builder",
    organization: "Web Tooling & Extensions",
    badge: "OSS",
    description:
      "Created open-source tools including Graphite (markdown notes app), mini-chatbot (LLM assistant), and browser productivity extensions.",
    tags: ["TypeScript", "Next.js", "Gemini API", "Tiptap", "Chrome Extension"],
  },
  {
    period: "2022 - Expected 2026",
    title: "B.Tech Computer Science & Engineering",
    organization: "Undergraduate Degree",
    badge: "EDU",
    description:
      "Core focus on Data Structures & Algorithms, Database Management Systems, Operating Systems, and Computer Networks.",
    tags: ["C/C++", "Python", "DSA", "DBMS", "Networks"],
  },
];

export const TimelineSection: React.FC = () => {
  return (
    <div className="box flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-[#8B8D91]">
          My journey & <span className="font-medium text-white">Timeline</span>
        </span>
        <Link
          to="/work"
          className="jetbrains-mono text-xs text-[#8B8D91] hover:text-white transition-colors duration-200"
        >
          Detailed Work Experience →
        </Link>
      </div>

      {/* Vertical Connected Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-[#232426] ml-2 sm:ml-3 flex flex-col gap-8 my-2">
        {milestones.map((item, index) => (
          <div key={index} className="relative group">
            {/* Timeline node dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#232426] bg-[#0A0B0C] group-hover:border-white group-hover:bg-white transition-all duration-200 flex items-center justify-center">
              <div className="h-1 w-1 rounded-full bg-[#8B8D91] group-hover:bg-[#0A0B0C]" />
            </div>

            {/* Timeline Card */}
            <div className="flex flex-col gap-2 rounded-xl border border-[#232426] bg-[#121314]/60 p-4 sm:p-5 transition-all duration-200 hover:border-white/20 hover:bg-[#151618]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm font-semibold text-white/95 group-hover:text-white">
                    {item.title}
                  </h3>
                  <span className="jetbrains-mono text-[9px] px-1.5 py-0.5 rounded bg-[#1C1D1F] border border-[#2D2E2F] text-[#8B8D91]">
                    {item.organization}
                  </span>
                </div>

                <span className="jetbrains-mono text-[11px] text-[#8B8D91]">
                  {item.period}
                </span>
              </div>

              <p className="text-xs text-[#8B8D91] leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-1 pt-2 border-t border-[#232426]/40">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="jetbrains-mono text-[9px] px-1.5 py-0.5 rounded bg-[#18191B] text-[#A1A1AA] border border-[#232426]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
