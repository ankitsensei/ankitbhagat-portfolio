import { NavLink } from "react-router";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen text-sm bg-zinc-9 font-geist bg-white dark:bg-[#121212] text-black dark:text-white overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full h-1/2 gap-4">
        <p className="text-7xl font-semibold">Not found</p>
        <NavLink to="/" className="underline">
          Go to Homepage
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
