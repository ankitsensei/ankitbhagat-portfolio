import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "./ThemeContext";

const Stats = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <h1 className="text-lg md:text-2xl dark:text-zinc-400 text-zinc-600">
        Stats
      </h1>
      <div className="overflow-x-auto pb-2">
        <GitHubCalendar
          username="ankitsensei"
          colorScheme={resolvedTheme}
          fontSize={13}
          blockSize={12}
          blockMargin={4}
          showWeekdayLabels
          theme={{
            light: ["#ffffff", "#b7efc5", "#4ade80", "#22c55e", "#166534"],
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
          labels={{
            totalCount: "{{count}} contributions in the last year",
          }}
          style={{
            margin: "0 auto",
          }}
        />
      </div>
    </div>
  );
};

export default Stats;
