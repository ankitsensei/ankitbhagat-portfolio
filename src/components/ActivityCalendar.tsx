import React, { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";

export const ActivityCalendar: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="box">
        <div className="w-full h-32 rounded-xl bg-[#141517]/40 border border-[#232426] animate-pulse" />
      </div>
    );
  }

  return (
    <div className="box">
      <div className="relative w-full overflow-hidden rounded-xl border border-[#232426]/80 bg-[#121314]/70 p-4 sm:p-5 backdrop-blur-sm shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <svg
              height="16"
              width="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="text-[#8B8D91]"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <span className="jetbrains-mono text-xs font-medium text-[#8B8D91]">
              github.com/ankitsensei
            </span>
          </div>

          <a
            href="https://github.com/ankitsensei"
            target="_blank"
            rel="noopener noreferrer"
            className="jetbrains-mono text-[11px] text-[#8B8D91]/70 hover:text-white transition-colors"
          >
            Activity Stream ↗
          </a>
        </div>

        {/* Full Year Display on Desktop & Tablet; Scrollable on mobile screens */}
        <div className="w-full overflow-x-auto sm:overflow-visible pb-1 pt-1 flex justify-start sm:justify-center scrollbar-none">
          <GitHubCalendar
            username="ankitsensei"
            blockSize={9.5}
            blockMargin={2.2}
            fontSize={11}
            theme={{
              dark: [
                "#18191B",
                "#3F3F46",
                "#71717A",
                "#D4D4D8",
                "#FFFFFF",
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityCalendar;
