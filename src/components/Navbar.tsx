import { NavLink } from "react-router";
import DP from "../assets/android-chrome-192x192.jpg";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "./ThemeContext";

const themeOrder = ["light", "dark"] as const;

const themeIcon = {
  light: faSun,
  dark: faMoon,
} as const;

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="sticky top-4 md:top-10 z-50 flex items-center justify-center w-full text-sm text-zinc-300 font-geist mb-10 md:mb-16 lg:mb-16">
      <ul
        className="flex items-center gap-4 md:gap-6 
  rounded-xl px-4 md:px-6 py-2 
  bg-white/10 backdrop-blur-lg 
  border border-white/20 
  shadow-lg shadow-black/30
  supports-[backdrop-filter]:bg-white/0"
      >
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
          onClick={() => setTheme(themeOrder[(themeOrder.indexOf(theme) + 1) % themeOrder.length])}
          className="ml-2 pl-4 border-l border-white/20 text-zinc-400 hover:text-white transition"
        >
          <FontAwesomeIcon icon={themeIcon[theme]} />
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
