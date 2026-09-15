import React from "react";
import { FaXTwitter, FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FiMail, FiArrowUpRight } from "react-icons/fi";

interface SocialItem {
  name: string;
  handle: string;
  href: string;
  icon: React.ReactNode;
}

const socials: SocialItem[] = [
  {
    name: "Twitter",
    handle: "@webdevankit",
    href: "https://x.com/webdevankit",
    icon: <FaXTwitter className="text-xs" />,
  },
  {
    name: "GitHub",
    handle: "@ankitsensei",
    href: "https://github.com/ankitsensei",
    icon: <FaGithub className="text-xs" />,
  },
  {
    name: "LinkedIn",
    handle: "in/ankitbhagat-dev",
    href: "https://www.linkedin.com/in/ankitbhagat-dev/",
    icon: <FaLinkedinIn className="text-xs" />,
  },
  {
    name: "Resume",
    handle: "Preview & PDF",
    href: "https://live-resume-preview-orcin.vercel.app/",
    icon: <HiOutlineDocumentText className="text-sm" />,
  },
  {
    name: "Discord",
    handle: "ankitsensei",
    href: "https://discord.com/users/679624561880203279",
    icon: <FaDiscord className="text-xs" />,
  },
  {
    name: "Email",
    handle: "ankitbhagat.dev",
    href: "mailto:ankitbhagat.dev@gmail.com",
    icon: <FiMail className="text-xs" />,
  },
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="box">
      <div className="flex flex-col gap-3">
        <span className="text-sm text-[var(--text-muted)]">
          You can check these <span className="font-medium text-[var(--text-primary)]">links</span> if you wish to
        </span>

        {/* 2 media links per line on mobile, 3 on larger screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
          {socials.map((s, idx) => (
            <a
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              href={s.href}
              className="group relative flex items-center justify-between rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-[var(--card-hover)] px-2.5 py-2 sm:px-3 sm:py-2.5 transition-all duration-200 hover:border-[var(--text-muted)] hover:scale-[1.01] shadow-sm"
            >
              <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 overflow-hidden">
                <div className="h-6 w-6 sm:h-7 sm:w-7 shrink-0 rounded-md border border-[var(--border-color)] bg-[var(--badge-subtle-bg)] flex items-center justify-center text-[var(--text-primary)] group-hover:border-[var(--text-muted)] transition-colors">
                  {s.icon}
                </div>
                <div className="flex flex-col min-w-0 overflow-hidden">
                  <span className="text-[11px] sm:text-xs font-semibold text-[var(--text-primary)] transition-colors truncate">
                    {s.name}
                  </span>
                  <span className="jetbrains-mono text-[8.5px] sm:text-[9px] text-[var(--text-muted)] transition-colors truncate">
                    {s.handle}
                  </span>
                </div>
              </div>

              <FiArrowUpRight className="text-[10px] sm:text-xs shrink-0 text-[var(--text-subtle)] group-hover:text-[var(--text-primary)] transition-colors ml-0.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
