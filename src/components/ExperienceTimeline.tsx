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
    period: "2024 - 2028",
    badge: "UG",
  },
  {
    title: "Full Stack",
    period: "2024 - 2026",
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
      <div className="relative rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] p-3.5 sm:p-5 backdrop-blur-sm shadow-md overflow-hidden transition-colors">
        {/* Header with ALL link */}
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <span className="text-xs text-[var(--text-muted)] font-medium">
            Experience & Journey
          </span>
          <Link
            to="/work"
            className="jetbrains-mono flex items-center gap-1 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-200"
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

        {/* Connected Horizontal Timeline (Always 1 single line on all screens) */}
        <div className="relative pt-2 pb-1">
          {/* Base horizontal connecting line */}
          <div className="absolute top-[13px] left-3 right-3 sm:left-4 sm:right-4 h-[1.5px] bg-[var(--border-color)]" />

          {/* Present segment highlighted in green (only the line) */}
          <div className="absolute top-[13px] left-[50%] right-3 sm:right-4 h-[1.5px] bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />

          {/* 4-column grid that stays in the same line even on mobile */}
          <div className="relative grid grid-cols-4 gap-1.5 sm:gap-3">
            {timelineNodes.map((item, idx) => (
              <div key={idx} className="flex flex-col items-start min-w-0">
                {/* Node dot on connecting line */}
                <div className="relative z-10 mb-2 flex items-center justify-center pl-1">
                  {item.isCurrent ? (
                    <div className="relative flex items-center justify-center">
                      <span className="relative z-10 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-400 ring-2 sm:ring-4 ring-[var(--card-bg)] shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                    </div>
                  ) : (
                    <span className="relative z-10 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[var(--text-subtle)] ring-2 sm:ring-4 ring-[var(--card-bg)]" />
                  )}
                </div>

                {/* Node details */}
                <div className="flex flex-col gap-1 w-full min-w-0">
                  <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
                    <span
                      className={`h-4.5 sm:h-5 px-1 sm:px-1.5 rounded text-[8.5px] sm:text-[10px] font-mono font-semibold flex items-center justify-center border shrink-0 ${
                        item.isCurrent
                          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-500 dark:text-emerald-400"
                          : "border-[var(--border-color)] bg-[var(--badge-subtle-bg)] text-[var(--text-primary)]"
                      }`}
                    >
                      {item.badge}
                    </span>
                    <span
                      className={`text-[10px] sm:text-xs font-semibold leading-tight truncate ${
                        item.isCurrent
                          ? "text-emerald-600 dark:text-emerald-300"
                          : "text-[var(--text-primary)]"
                      }`}
                      title={item.title}
                    >
                      {item.title}
                    </span>
                  </div>

                  <span
                    className={`jetbrains-mono text-[8.5px] sm:text-[10px] leading-tight truncate ${
                      item.isCurrent
                        ? "text-emerald-600/90 dark:text-emerald-400/80"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    {item.period}
                  </span>
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
