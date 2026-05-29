import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

type ResolvedTheme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  resolvedTheme: "light",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");

  useEffect(() => {
    const root = document.documentElement;

    root.classList.add("theme-transition");

    const applyTheme = () => {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      const finalTheme =
        theme === "system" ? (systemDark ? "dark" : "light") : theme;

      setResolvedTheme(finalTheme);

      root.dataset.theme = finalTheme;
    };

    applyTheme();

    localStorage.setItem("theme", theme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQuery.addEventListener("change", applyTheme);

    const timeout = setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 300);

    return () => {
      mediaQuery.removeEventListener("change", applyTheme);
      clearTimeout(timeout);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
