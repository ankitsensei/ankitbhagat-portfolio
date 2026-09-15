import React, { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "../context/ThemeContext";

export const ActivityCalendar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="box">
        <div className="w-full h-24 rounded animate-pulse" />
      </div>
    );
  }

  return (
    <div className="box">
      <div className="relative w-full overflow-hidden">
        {/* Full Year Display on Desktop & Tablet; Scrollable on mobile screens */}
        <div className="w-full overflow-x-auto sm:overflow-visible pb-1 pt-1 flex justify-start sm:justify-center scrollbar-none">
          <GitHubCalendar
            username="ankitsensei"
            blockSize={9}
            blockMargin={2}
            fontSize={10}
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
