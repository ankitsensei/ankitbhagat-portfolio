import { NavLink } from "react-router";
import DP from "../assets/ankit-dp.jpg";

const Navbar = () => {
  return (
    <div className="sticky top-10 z-50 flex items-center justify-center mt-6 w-full text-sm text-zinc-300 font-geist mb-12">
      <ul
        className="flex items-center gap-6 
  rounded-xl px-6 py-2 
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
        <NavLink
          to="/resume"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Resume
        </NavLink>
        {/* <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Blogs
        </NavLink> */}
      </ul>
    </div>
  );
};

export default Navbar;
