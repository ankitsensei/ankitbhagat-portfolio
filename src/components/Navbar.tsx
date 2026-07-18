import { NavLink } from "react-router";
import DP from "../assets/android-chrome-192x192.jpg";
import { faSun, faMoon, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "./ThemeContext";

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

        <div className="flex gap-2 ml-2 pl-2 border-l border-white/20">
          <button
            onClick={() => setTheme("light")}
            className={`transition ${theme === "light" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
          >
            <FontAwesomeIcon icon={faSun} />
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`transition ${theme === "dark" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
          >
            <FontAwesomeIcon icon={faMoon} />
          </button>
          <button
            onClick={() => setTheme("system")}
            className={`transition ${theme === "system" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
          >
            <FontAwesomeIcon icon={faDesktop} />
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
