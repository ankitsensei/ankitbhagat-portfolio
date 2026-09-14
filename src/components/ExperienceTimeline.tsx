import React from "react";
import { Link } from "react-router";

interface TimelineNode {
  title: string;
  role: string;
  period: string;
  badge?: string;
}

const experiences: TimelineNode[] = [
  {
    title: "Full-Stack Dev",
    role: "Projects & Freelance",
    period: "2024 - Now",
    badge: "F",
  },
  {
    title: "Open Source",
    role: "Web & Tooling",
    period: "2023 - 2026",
    badge: "O",
  },
  {
    title: "B.Tech CSE",
    role: "Computer Science",
    period: "2022 - 2026",
    badge: "G",
  },
];

export const ExperienceTimeline: React.FC = () => {
  return (
    <div className="box">
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#232426] bg-[#121314]/50 rounded-xl p-4 sm:p-5 backdrop-blur-sm">
        {/* Experience Nodes */}
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 w-full">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center gap-3">
              <div className="h-7 w-7 shrink-0 overflow-hidden rounded-md border border-[#2D2E2F] bg-[#1A1B1C] flex items-center justify-center text-xs font-semibold text-white/70">
                <span>{exp.badge}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-white/90 sm:text-sm">
                  {exp.title}
                </span>
                <span className="jetbrains-mono text-[10px] sm:text-xs text-[#8B8D91]">
                  {exp.period}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Link to all experience */}
        <div className="shrink-0 self-end sm:self-center">
          <Link
            to="/work"
            className="jetbrains-mono flex items-center gap-1.5 text-xs font-medium text-[#8B8D91] transition-colors duration-200 hover:text-white"
          >
            <span>ALL</span>
            <svg
              height="12"
              width="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
