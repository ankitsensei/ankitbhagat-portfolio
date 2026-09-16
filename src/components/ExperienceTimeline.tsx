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
    period: "2026 - Present",
    badge: "04",
    isCurrent: true,
  },
];

const positions = ["5%", "36%", "68%", "100%"];
const GAP_OFFSET = 10;

export const ExperienceTimeline: React.FC = () => {
  const segments = timelineNodes.slice(0, -1).map((_, idx) => {
    const startPct = parseFloat(positions[idx]);
    const endPct = parseFloat(positions[idx + 1]);
    const isHighlighted =
      timelineNodes[idx].isCurrent || timelineNodes[idx + 1].isCurrent;
    return { startPct, endPct, isHighlighted };
  });

  const highlightedIndices = segments
    .map((s, i) => (s.isHighlighted ? i : -1))
    .filter((i) => i >= 0);
  const firstHighlighted = highlightedIndices[0];
  const lastHighlighted = highlightedIndices[highlightedIndices.length - 1];

  return (
    <div className="box">
      <div className="relative w-full h-[70px]">
        {segments.map((seg, idx) => {
          const width = `calc(${seg.endPct - seg.startPct}% - ${GAP_OFFSET * 2}px)`;
          const isFirst = idx === firstHighlighted;
          const isLast = idx === lastHighlighted;

          let highlightBg: string;
          if (isFirst && isLast) {
            highlightBg =
              "linear-gradient(to right, transparent, var(--text-primary) 20%, var(--text-primary) 80%, transparent)";
          } else if (isFirst) {
            highlightBg =
              "linear-gradient(to right, transparent, var(--text-primary) 20%)";
          } else if (isLast) {
            highlightBg =
              "linear-gradient(to right, var(--text-primary) 80%, transparent)";
          } else {
            highlightBg = "var(--text-primary)";
          }

          return (
            <React.Fragment key={idx}>
              <div
                className="absolute top-[7px] h-[1.5px] bg-[var(--border-color)]"
                style={{
                  left: `calc(${seg.startPct}% + ${GAP_OFFSET}px)`,
                  width,
                }}
              />
              {seg.isHighlighted && (
                <div
                  className="absolute top-[7px] h-[1.5px]"
                  style={{
                    left: `calc(${seg.startPct}% + ${GAP_OFFSET}px)`,
                    width,
                    background: highlightBg,
                  }}
                />
              )}
            </React.Fragment>
          );
        })}

        {timelineNodes.map((item, idx) => {
          const isFirst = idx === 0;
          const isLast = idx === timelineNodes.length - 1;
          const dotPos = positions[idx];

          return (
            <React.Fragment key={idx}>
              <div
                className="absolute top-[7px] -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ left: dotPos }}
              >
                {item.isCurrent ? (
                  <span className="block h-2.5 w-2.5 rounded-full bg-[var(--text-primary)] ring-[3px] ring-[var(--bg-page)] animate-pulse-glow" />
                ) : (
                  <span className="block h-2 w-2 rounded-full bg-[var(--text-subtle)] ring-[3px] ring-[var(--bg-page)]" />
                )}
              </div>

              <div
                className={`absolute top-[20px] flex flex-col gap-px ${
                  isFirst
                    ? "left-0 items-start text-left"
                    : isLast
                      ? "right-0 items-end text-right"
                      : "items-center text-center -translate-x-1/2"
                }`}
                style={!isFirst && !isLast ? { left: dotPos } : undefined}
              >
                <div
                  className={`flex items-center gap-0.5 ${
                    isLast ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <span
                    className={`px-1 py-px bg-emerald-400/20 border-emerald-600/20 rounded text-[7px] sm:text-sm font-mono font-semibold border leading-none ${
                      item.isCurrent
                        ? "border-[var(--text-primary)]/30 bg-[var(--text-primary)]/10 text-[var(--text-primary)]"
                        : "border-[var(--border-color)] bg-[var(--badge-subtle-bg)] text-[var(--text-primary)]"
                    }`}
                  >
                    {item.badge}
                  </span>
                  <span
                    className={`text-[8px] sm:text-[12px] font-semibold leading-tight whitespace-nowrap ${
                      item.isCurrent
                        ? "text-[var(--text-primary)] text-emerald-400"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>

                <span
                  className={`jetbrains-mono text-[7px] sm:text-[10px] leading-tight ${
                    item.isCurrent
                      ? "text-[var(--text-muted)] text-emerald-400"
                      : "text-[var(--text-subtle)]"
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
