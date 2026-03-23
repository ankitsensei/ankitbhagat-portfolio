import { NavLink } from "react-router";
import DP from "../assets/ankit-dp.jpg"

const Navbar = () => {
  return (
    <div className="flex items-center justify-center mb-10 mt-6 lg:mt-6 w-full geist-mono text-sm text-zinc-300">
      <ul className="flex items-center gap-6 border border-zinc-700 rounded-lg w-fit px-6 py-2 bg-zinc-900">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <img src={DP} alt="dp" className="w-10 rounded-lg" />
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Blogs
        </NavLink>
      </ul>
    </div>
  )
}

export default Navbar