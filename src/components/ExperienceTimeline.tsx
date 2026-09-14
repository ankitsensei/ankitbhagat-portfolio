import React from "react";
import { Link } from "react-router";

interface TimelineNode {
  title: string;
  period: string;
  badge: string;
  isCurrent?: boolean;
}

const timelineNodes: TimelineNode[] = [
  {
    title: "B.Tech CSE",
    period: "2022 - 2026",
    badge: "UG",
  },
  {
    title: "Full Stack",
    period: "2023 - 2024",
    badge: "FS",
  },
  {
    title: "Open Source",
    period: "2023 - Present",
    badge: "OS",
  },
  {
    title: "Freelance",
    period: "2024 - Present",
    badge: "FL",
    isCurrent: true,
  },
];

export const ExperienceTimeline: React.FC = () => {
  return (
    <div className="box">
      <div className="relative rounded-xl border border-[#232426] bg-[#121314]/70 p-4 sm:p-5 backdrop-blur-sm shadow-xl">
        {/* Header with ALL link */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-[#8B8D91] font-medium">
            Experience & Journey
          </span>
          <Link
            to="/work"
            className="jetbrains-mono flex items-center gap-1 text-xs text-[#8B8D91] hover:text-white transition-colors duration-200"
          >
            <span>ALL</span>
            <svg
              height="11"
              width="11"
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

        {/* Connected Horizontal Timeline Row (Left: Past -> Right: Present) */}
        <div className="relative pt-3 pb-1">
          {/* Horizontal connecting line */}
          <div className="absolute top-[17px] left-3 right-3 h-[1px] bg-[#2D2E2F] border-t border-dashed border-[#3D3E42]" />

          {/* Nodes grid: Left (Past) to Right (Present) */}
          <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2">
            {timelineNodes.map((item, idx) => (
              <div key={idx} className="flex flex-col items-start gap-2">
                {/* Node dot */}
                {item.isCurrent ? (
                  <div className="relative z-10 ml-2 flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative z-10 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-4 ring-[#121314]" />
                  </div>
                ) : (
                  <div className="relative z-10 ml-2 h-2.5 w-2.5 rounded-full bg-[#71717A] ring-4 ring-[#121314]" />
                )}

                {/* Node content */}
                <div className="flex items-center gap-2 mt-1">
                  <div
                    className={`h-6 w-6 shrink-0 rounded border flex items-center justify-center text-[10px] font-mono font-semibold transition-colors ${
                      item.isCurrent
                        ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                        : "border-[#2D2E2F] bg-[#1A1B1C] text-white/80"
                    }`}
                  >
                    {item.badge}
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`text-xs font-semibold leading-tight ${
                        item.isCurrent ? "text-emerald-300" : "text-white/95"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`jetbrains-mono text-[10px] leading-tight ${
                        item.isCurrent ? "text-emerald-400/80" : "text-[#8B8D91]"
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
