import { faSun, faMoon, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "./ThemeContext";

const Footer = () => {
  const { setTheme } = useTheme();

  return (
    <div className="mt-10">
      <hr className="border-zinc-700" />
      <div className="w-full h-14 flex justify-between items-center px-5">
        <p className="text-[13px] text-zinc-600 dark:text-zinc-400">
          @ankitbhagat
        </p>
        <div className="flex gap-3">
          <button onClick={() => setTheme("light")}>
            <FontAwesomeIcon icon={faSun} />
          </button>
          <button onClick={() => setTheme("dark")}>
            <FontAwesomeIcon icon={faMoon} />
          </button>
          <button onClick={() => setTheme("system")}>
            <FontAwesomeIcon icon={faDesktop} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
