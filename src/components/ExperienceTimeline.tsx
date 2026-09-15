import React from "react";

interface TimelineNode {
  title: string;
  period: string;
  badge: string;
  isCurrent?: boolean;
}

const timelineNodes: TimelineNode[] = [
  {
    title: "Web Dev",
    period: "2022",
    badge: "01",
  },
  {
    title: "Freelance",
    period: "2024 - present",
    badge: "02",
    isCurrent: true,
  },
  {
    title: "Full Stack",
    period: "2025 - Present",
    badge: "03",
    isCurrent: true,
  },
  {
    title: "Open Source",
    period: "2025 - Present",
    badge: "04",
    isCurrent: true,
  },
];

// Exact percentage positions for 4 equally spaced nodes (0%, 33.33%, 66.67%, 100%)
const positions = ["20%", "45%", "70%", "100%"];

export const ExperienceTimeline: React.FC = () => {
  return (
    <div className="box">
      <div className="relative w-full min-h-[64px] sm:min-h-[70px]">
        {/* Base horizontal line running from center of dot 0 to center of dot 3 */}
        <div className="absolute top-[6px] left-[6px] right-[6px] h-[1.5px] bg-[var(--border-color)] pointer-events-none" />

        {/* Present segment highlighted in green (distance from node 2 to node 3) */}
        <div className="absolute top-[6px] left-[43%] right-[6px] h-[1.5px] bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)] pointer-events-none" />

        {/* Timeline Nodes & Labels with exact equal distance */}
        {timelineNodes.map((item, idx) => {
          const isFirst = idx === 0;
          const isLast = idx === timelineNodes.length - 1;
          const dotPos = positions[idx];

          return (
            <React.Fragment key={idx}>
              {/* Node Dot - Exactly centered on the line */}
              <div
                className="absolute top-[6px] -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center pointer-events-none"
                style={{ left: dotPos }}
              >
                {item.isCurrent ? (
                  <span className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-emerald-500 ring-4 ring-[var(--bg-page)] shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                ) : (
                  <span className="h-2 w-2 sm:h-2 sm:w-2 rounded-full bg-[var(--text-subtle)] ring-4 ring-[var(--bg-page)]" />
                )}
              </div>

              {/* Node Label & Badge - Positioned under the dot */}
              <div
                className={`absolute top-[18px] flex flex-col gap-0.5 ${
                  isFirst
                    ? "left-0 items-start text-left"
                    : isLast
                      ? "right-0 items-end text-right"
                      : "items-center text-center -translate-x-1/2"
                }`}
                style={!isFirst && !isLast ? { left: dotPos } : undefined}
              >
                <div
                  className={`flex items-center gap-1 ${
                    isLast ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <span
                    className={`px-1 py-0.2 rounded text-[7.5px] sm:text-[9px] font-mono font-semibold flex items-center justify-center border shrink-0 ${
                      item.isCurrent
                        ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-500 dark:text-emerald-400"
                        : "border-[var(--border-color)] bg-[var(--badge-subtle-bg)] text-[var(--text-primary)]"
                    }`}
                  >
                    {item.badge}
                  </span>
                  <span
                    className={`text-[9.5px] sm:text-xs font-semibold leading-tight whitespace-nowrap ${
                      item.isCurrent
                        ? "text-emerald-500 dark:text-emerald-400"
                        : "text-[var(--text-primary)]"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>

                <span
                  className={`jetbrains-mono text-[8px] sm:text-[9.5px] leading-tight ${
                    item.isCurrent
                      ? "text-emerald-500/80 dark:text-emerald-400/80 font-medium"
                      : "text-[var(--text-muted)]"
                  }`}
                >
                  {item.period}
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
