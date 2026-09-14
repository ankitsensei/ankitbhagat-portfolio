import React from "react";
import { Link } from "react-router";
import DockNavbar from "../components/DockNavbar";

export const NotFound: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0A0B0C] text-[#EDEDED] flex flex-col items-center justify-center px-4 antialiased">
      <div className="flex flex-col items-center gap-4 text-center max-w-sm">
        <span className="jetbrains-mono text-xs px-2.5 py-1 rounded bg-[#18191B] border border-[#232426] text-[#8B8D91]">
          404 ERROR
        </span>
        <h1 className="doto-font text-4xl font-bold text-white tracking-tight">
          Page Not Found
        </h1>
        <p className="text-xs text-[#8B8D91] leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="btn-pill-3d mt-3"
        >
          Return Home
        </Link>
      </div>

      <DockNavbar />
      <div className="bottom-progressive-blur" />
    </div>
  );
};

export default NotFound;
