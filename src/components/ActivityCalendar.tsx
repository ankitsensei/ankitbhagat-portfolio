import React, { useState, useEffect, useRef, useMemo } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "../context/ThemeContext";

// Mirror the values passed to <GitHubCalendar> so the skeleton can reserve the
// exact same space as the rendered contribution graph.
const BLOCK_SIZE = 9;
const BLOCK_MARGIN = 2;
const FONT_SIZE = 10;
const DAYS = 7;
const WEEKS = 53;

const GRID_WIDTH = WEEKS * (BLOCK_SIZE + BLOCK_MARGIN) - BLOCK_MARGIN;
const GRID_HEIGHT = (BLOCK_SIZE + BLOCK_MARGIN) * DAYS - BLOCK_MARGIN;
// fontSize + the calendar's label margin (8px)
const LABEL_HEIGHT = FONT_SIZE + 8;
// The calendar inherits a 1.5 line-height from the page.
const FOOTER_HEIGHT = Math.round(FONT_SIZE * 1.5);
const SKELETON_OPACITIES = [0.08, 0.15, 0.25, 0.35, 0.5];

const getMonthMarkers = (): number[] => {
  const markers: number[] = [];
  // Start from the Sunday of the current week and go back 52 weeks, matching
  // the 53-week window returned by the contributions API.
  const start = new Date();
  start.setDate(start.getDate() - start.getDay());
  start.setDate(start.getDate() - (WEEKS - 1) * DAYS);

  let lastMonth = -1;
  for (let week = 0; week < WEEKS; week += 1) {
    const weekStart = new Date(start);
    weekStart.setDate(start.getDate() + week * DAYS);
    const month = weekStart.getMonth();

    if (month !== lastMonth) {
      markers.push(week);
      lastMonth = month;
    }
  }

  // Match the calendar's rule of dropping labels that would be cramped.
  return markers.filter((week, index, all) => {
    if (index === 0) {
      return Boolean(all[1] && all[1] - week >= 3);
    }
    if (index === all.length - 1) {
      return WEEKS - week >= 3;
    }
    return true;
  });
};

const CalendarSkeleton: React.FC = () => {
  const monthMarkers = useMemo(getMonthMarkers, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="w-full overflow-x-auto sm:overflow-visible pb-1 pt-1 flex justify-start sm:justify-center scrollbar-none">
        <div className="flex flex-col gap-2" style={{ width: GRID_WIDTH }}>
          {/* Month labels + contribution grid */}
          <div className="pt-px">
            <div className="relative" style={{ height: LABEL_HEIGHT }}>
              {monthMarkers.map((weekIndex, index) => (
                <div
                  key={weekIndex}
                  className="absolute top-0 h-[7px] w-5 rounded-sm animate-pulse"
                  style={{
                    left: weekIndex * (BLOCK_SIZE + BLOCK_MARGIN),
                    backgroundColor: "var(--border-color)",
                    opacity: 0.35,
                    animationDelay: `${index * 40}ms`,
                  }}
                />
              ))}
            </div>

            <div className="flex gap-[2px]" style={{ height: GRID_HEIGHT }}>
              {Array.from({ length: WEEKS }).map((_, weekIdx) => (
                <div key={weekIdx} className="flex flex-col gap-[2px]">
                  {Array.from({ length: DAYS }).map((_, dayIdx) => {
                    const opacity =
                      SKELETON_OPACITIES[
                        (weekIdx + dayIdx) % SKELETON_OPACITIES.length
                      ];
                    return (
                      <div
                        key={dayIdx}
                        className="w-[9px] h-[9px] rounded-sm animate-pulse"
                        style={{
                          backgroundColor: "var(--border-color)",
                          opacity,
                          animationDelay: `${(weekIdx * DAYS + dayIdx) * 15}ms`,
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Total count + color legend */}
          <div
            className="flex items-center justify-between"
            style={{ height: FOOTER_HEIGHT }}
          >
            <div
              className="h-[9px] w-40 rounded-sm animate-pulse"
              style={{
                backgroundColor: "var(--border-color)",
                opacity: 0.25,
              }}
            />
            <div className="flex items-center gap-[3px]">
              <div
                className="h-[7px] w-5 rounded-sm animate-pulse"
                style={{
                  backgroundColor: "var(--border-color)",
                  opacity: 0.25,
                }}
              />
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="w-[9px] h-[9px] rounded-sm animate-pulse"
                  style={{
                    backgroundColor: "var(--border-color)",
                    opacity: 0.15 + index * 0.08,
                    animationDelay: `${index * 60}ms`,
                  }}
                />
              ))}
              <div
                className="h-[7px] w-6 rounded-sm animate-pulse"
                style={{
                  backgroundColor: "var(--border-color)",
                  opacity: 0.25,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ActivityCalendar: React.FC = () => {
  const [calendarLoaded, setCalendarLoaded] = useState(false);
  const { theme } = useTheme();
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = calendarRef.current;
    if (!container || calendarLoaded) return;

    const observer = new MutationObserver(() => {
      // The library renders 12x12 loading blocks, then 9x9 data blocks.
      // Check if any rect has width/height of 9 (our blockSize).
      const rects = container.querySelectorAll("svg rect");
      if (rects.length === 0) return;

      const hasDataBlocks = Array.from(rects).some(
        (rect) => rect.getAttribute("width") === "9"
      );

      if (hasDataBlocks) {
        setCalendarLoaded(true);
        observer.disconnect();
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [calendarLoaded]);

  return (
    <div className="box">
      {!calendarLoaded && <CalendarSkeleton />}
      <div
        ref={calendarRef}
        className={`relative w-full overflow-hidden ${
          calendarLoaded ? "block" : "invisible absolute"
        }`}
      >
        <div className="w-full overflow-x-auto sm:overflow-visible pb-1 pt-1 flex justify-start sm:justify-center scrollbar-none">
          <GitHubCalendar
            username="ankitsensei"
            blockSize={BLOCK_SIZE}
            blockMargin={BLOCK_MARGIN}
            fontSize={FONT_SIZE}
            colorScheme={theme === "light" ? "light" : "dark"}
            theme={{
              dark: ["#1C1D1F", "#3F3F46", "#71717A", "#D4D4D8", "#FFFFFF"],
              light: ["#EBEDF0", "#9A9A9A", "#555555", "#333333", "#111111"],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityCalendar;
