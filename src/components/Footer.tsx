import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="page-col mt-16 pb-12 pt-6 border-t border-[var(--border-color)] text-[var(--text-muted)]">
      <div className="flex flex-col gap-3">
        {/* Monogram / Brand Icon */}
        <div className="h-6 w-6 rounded-md border border-[var(--border-color)] bg-[var(--badge-subtle-bg)] flex items-center justify-center text-[10px] font-mono font-bold text-[var(--text-primary)]">
          AB
        </div>

        <div className="flex flex-col gap-1 text-xs">
          <span>
            Designed & Made with 🖤
          </span>
          <span className="text-[var(--text-subtle)]">
            © 2026 Ankit Bhagat. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
