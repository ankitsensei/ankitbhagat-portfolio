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
        <span className="text-sm text-[#8B8D91]">
          You can check these <span className="font-medium text-white">links</span> if you wish to
        </span>

        {/* 3 media links per line */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {socials.map((s, idx) => (
            <a
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              href={s.href}
              className="group relative flex items-center justify-between rounded-lg border border-[#232426] bg-[#141517]/70 hover:bg-[#1A1B1E] px-3 py-2.5 transition-all duration-200 hover:border-white/20 hover:scale-[1.01] shadow-[0px_2px_4px_rgba(0,0,0,0.4),inset_0px_1px_0px_rgba(255,255,255,0.06)]"
            >
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className="h-7 w-7 shrink-0 rounded-md border border-[#2D2E2F] bg-[#1E1F22] flex items-center justify-center text-white/80 group-hover:text-white group-hover:border-white/30 transition-colors">
                  {s.icon}
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-xs font-semibold text-white/90 group-hover:text-white transition-colors truncate">
                    {s.name}
                  </span>
                  <span className="jetbrains-mono text-[9px] text-[#8B8D91] group-hover:text-[#A1A1AA] transition-colors truncate">
                    {s.handle}
                  </span>
                </div>
              </div>

              <FiArrowUpRight className="text-xs shrink-0 text-[#71717A] group-hover:text-white transition-colors ml-1" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
