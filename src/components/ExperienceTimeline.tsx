import React from "react";

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
    period: "2025 - present",
    badge: "FS",
  },
  {
    title: "Open Source",
    period: "2026 - Present",
    badge: "OS",
  },
  {
    title: "Freelance",
    period: "2025 - Present",
    badge: "FL",
    isCurrent: true,
  },
];

export const ExperienceTimeline: React.FC = () => {
  return (
    <div className="box">
      <div className="relative">
        {/* Connected Horizontal Timeline */}
        <div className="relative pt-1 pb-0">
          {/* Base horizontal connecting line */}
          <div className="absolute top-[9px] left-0 right-0 h-[1.5px] bg-[var(--border-color)]" />

          {/* Present segment highlighted in green */}
          <div className="absolute top-[9px] left-[50%] right-0 h-[1.5px] bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />

          {/* 4-column grid */}
          <div className="relative grid grid-cols-4 gap-1 sm:gap-2">
            {timelineNodes.map((item, idx) => (
              <div key={idx} className="flex flex-col items-start min-w-0">
                {/* Node dot */}
                <div className="relative z-10 mb-1.5 flex items-center justify-center">
                  {item.isCurrent ? (
                    <span className="relative z-10 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-400 ring-2 sm:ring-3 ring-[var(--bg-page)] shadow-[0_0_5px_rgba(16,185,129,0.7)]" />
                  ) : (
                    <span className="relative z-10 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[var(--text-subtle)] ring-2 sm:ring-3 ring-[var(--bg-page)]" />
                  )}
                </div>

                {/* Node details */}
                <div className="flex flex-col gap-0.5 w-full min-w-0">
                  <div className="flex items-center gap-1 min-w-0">
                    <span
                      className={`px-1 py-0 rounded text-[7.5px] sm:text-[9px] font-mono font-semibold flex items-center justify-center border shrink-0 ${
                        item.isCurrent
                          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-500 dark:text-emerald-400"
                          : "border-[var(--border-color)] bg-[var(--badge-subtle-bg)] text-[var(--text-primary)]"
                      }`}
                    >
                      {item.badge}
                    </span>
                    <span
                      className={`text-[9px] sm:text-[10px] font-semibold leading-tight truncate ${
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
                    className={`jetbrains-mono text-[7.5px] sm:text-[9px] leading-tight truncate ${
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
