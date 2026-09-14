import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="page-col mt-16 pb-12 pt-6 border-t border-[#1F2022]/80 text-[#8B8D91]">
      <div className="flex flex-col gap-3">
        {/* Monogram / Brand Icon */}
        <div className="h-6 w-6 rounded-md border border-[#2D2E2F] bg-[#141517] flex items-center justify-center text-[10px] font-mono font-bold text-white/80">
          AB
        </div>

        <div className="flex flex-col gap-1 text-xs">
          <span>
            Designed & Made with 🖤
          </span>
          <span className="text-[#71717A]">
            © 2026 Ankit Bhagat. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
