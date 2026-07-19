import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import DP from "../assets/android-chrome-192x192.jpg";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "./ThemeContext";
import sound from "../assets/typewriter2.wav";

const themeOrder = ["light", "dark"] as const;

const themeIcon = {
  light: faSun,
  dark: faMoon,
} as const;

const audio = new Audio(sound);
audio.volume = 0.5;

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [value, setValue] = useState(0);

  useEffect(() => {
    audio.currentTime = 0;
    audio.play();
  }, [value]);

  return (
    <div className="sticky top-4 md:top-6 z-50 flex items-center justify-center w-full text-xs md:text-sm text-zinc-300 font-geist mb-6 md:mb-12 lg:mb-12">
      <ul className="flex items-center gap-4 md:gap-4 rounded-xl px-3 md:px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg shadow-black/30 supports-[backdrop-filter]:bg-white/0">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "active text-white"
              : "text-zinc-400 hover:text-white transition"
          }
        >
          <img src={DP} alt="dp" className="w-10 rounded-lg" />
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Projects
        </NavLink>

        <a href="https://live-resume-preview-orcin.vercel.app/">Resume</a>

        <button
          data-theme-toggle
          onClick={() => {
            setTheme(
              themeOrder[(themeOrder.indexOf(theme) + 1) % themeOrder.length],
            );
            setValue(value + 1);
          }}
          className="w-6 px-5 border-l border-white/20 text-zinc-400"
        >
          <FontAwesomeIcon icon={themeIcon[theme]} />
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
