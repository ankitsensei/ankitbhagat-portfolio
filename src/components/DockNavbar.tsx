import React from "react";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";

interface NavItem {
  name: string;
  href: string;
  icon: (active: boolean) => React.ReactNode;
}

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "/",
    icon: (active) => (
      <svg
        height="18px"
        width="18px"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
        className={`mb-0.5 transition-opacity duration-200 ${active ? "opacity-100" : "opacity-40"}`}
      >
        <g fill={active ? "#FFFFFF" : "#A1A1AA"}>
          <path
            d="M3.145 6.2L8.395 2.21C8.753 1.938 9.248 1.938 9.605 2.21L14.855 6.2C15.104 6.389 15.25 6.684 15.25 6.996V14.25C15.25 15.355 14.355 16.25 13.25 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V6.996C2.75 6.683 2.896 6.389 3.145 6.2Z"
            fill={active ? "#FFFFFF" : "#A1A1AA"}
            fillOpacity={active ? "0.35" : "0.2"}
            stroke="none"
          />
          <path
            d="M9 16V12.75"
            fill="none"
            stroke={active ? "#FFFFFF" : "#A1A1AA"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d="M3.145 6.2L8.395 2.21C8.753 1.938 9.248 1.938 9.605 2.21L14.855 6.2C15.104 6.389 15.25 6.684 15.25 6.996V14.25C15.25 15.355 14.355 16.25 13.25 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V6.996C2.75 6.683 2.896 6.389 3.145 6.2Z"
            fill="none"
            stroke={active ? "#FFFFFF" : "#A1A1AA"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Work",
    href: "/work",
    icon: (active) => (
      <svg
        height="18px"
        width="18px"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
        className={`mb-0.5 transition-opacity duration-200 ${active ? "opacity-100" : "opacity-40"}`}
      >
        <g fill={active ? "#FFFFFF" : "#A1A1AA"}>
          <path
            d="M9.458 2.361L15.79 5.621C16.403 5.937 16.403 6.813 15.79 7.129L9.458 10.389C9.17 10.537 8.829 10.537 8.542 10.389L2.21 7.129C1.597 6.813 1.597 5.937 2.21 5.621L8.542 2.361C8.83 2.213 9.171 2.213 9.458 2.361Z"
            fill={active ? "#FFFFFF" : "#A1A1AA"}
            fillOpacity={active ? "0.35" : "0.2"}
            stroke="none"
          />
          <path
            d="M9.458 2.361L15.79 5.621C16.403 5.937 16.403 6.813 15.79 7.129L9.458 10.389C9.17 10.537 8.829 10.537 8.542 10.389L2.21 7.129C1.597 6.813 1.597 5.937 2.21 5.621L8.542 2.361C8.83 2.213 9.171 2.213 9.458 2.361Z"
            fill="none"
            stroke={active ? "#FFFFFF" : "#A1A1AA"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d="M16.25 6.375C16.079 7.115 15.932 8.097 15.969 9.25C15.996 10.084 16.113 10.812 16.25 11.406"
            fill="none"
            stroke={active ? "#FFFFFF" : "#A1A1AA"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d="M4.25 10.75V14C4.25 15.104 6.377 16 9 16C11.623 16 13.75 15.104 13.75 14V10.75"
            fill="none"
            stroke={active ? "#FFFFFF" : "#A1A1AA"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Projects",
    href: "/projects",
    icon: (active) => (
      <svg
        height="18px"
        width="18px"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
        className={`mb-0.5 transition-opacity duration-200 ${active ? "opacity-100" : "opacity-40"}`}
      >
        <g fill={active ? "#FFFFFF" : "#A1A1AA"}>
          <path
            d="M9.5 2.75L11.412 7.587L16.25 9.5L11.412 11.413L9.5 16.25L7.587 11.413L2.75 9.5L7.587 7.587L9.5 2.75Z"
            fill={active ? "#FFFFFF" : "#A1A1AA"}
            fillOpacity={active ? "0.35" : "0.2"}
            stroke="none"
          />
          <path
            d="M5.658 2.99L4.395 2.569L3.974 1.306C3.837 0.898 3.162 0.898 3.025 1.306L2.604 2.569L1.341 2.99C1.137 3.058 0.999 3.249 0.999 3.464C0.999 3.679 1.137 3.87 1.341 3.938L2.604 4.359L3.025 5.622C3.093 5.826 3.285 5.964 3.5 5.964C3.715 5.964 3.906 5.826 3.975 5.622L4.396 4.359L5.659 3.938C5.863 3.87 6.001 3.679 6.001 3.464C6.001 3.249 5.862 3.058 5.658 2.99Z"
            fill={active ? "#FFFFFF" : "#A1A1AA"}
            stroke="none"
          />
          <path
            d="M9.5 2.75L11.412 7.587L16.25 9.5L11.412 11.413L9.5 16.25L7.587 11.413L2.75 9.5L7.587 7.587L9.5 2.75Z"
            fill="none"
            stroke={active ? "#FFFFFF" : "#A1A1AA"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Skills",
    href: "/skills",
    icon: (active) => (
      <svg
        height="18px"
        width="18px"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
        className={`mb-0.5 transition-opacity duration-200 ${active ? "opacity-100" : "opacity-40"}`}
      >
        <g fill={active ? "#FFFFFF" : "#A1A1AA"}>
          <path
            d="M15.183 2.743C8.178 3.218 4.685 8.779 3.815 11.5C4.499 12.011 6.58 12.906 9.423 12.392C12.266 11.878 12.975 9.748 12.974 8.747C15.128 7.423 14.085 5.376 15.183 2.743Z"
            fill={active ? "#FFFFFF" : "#A1A1AA"}
            fillOpacity={active ? "0.35" : "0.2"}
            stroke="none"
          />
          <path
            d="M12.974 8.731C12.5 12.422 9.25 12.844 6 12.25"
            fill="none"
            stroke={active ? "#FFFFFF" : "#A1A1AA"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d="M2.75 15.25C2.75 15.25 4.062 3.729 15.25 2.75C14.69 3.726 14.677 5.355 14.304 6.989C13.78 9 11.969 9.25 9.75 9.25"
            fill="none"
            stroke={active ? "#FFFFFF" : "#A1A1AA"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Blog",
    href: "/blogs",
    icon: (active) => (
      <svg
        height="18px"
        width="18px"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
        className={`mb-0.5 transition-opacity duration-200 ${active ? "opacity-100" : "opacity-40"}`}
      >
        <g fill={active ? "#FFFFFF" : "#A1A1AA"}>
          <path
            d="M4.25 6.75H13.75C14.855 6.75 15.75 7.645 15.75 8.75V13.25C15.75 14.355 14.855 15.25 13.75 15.25H4.25C3.145 15.25 2.25 14.355 2.25 13.25V8.75C2.25 7.645 3.145 6.75 4.25 6.75Z"
            fill={active ? "#FFFFFF" : "#A1A1AA"}
            fillOpacity={active ? "0.35" : "0.2"}
            stroke="none"
          />
          <path
            d="M2.25 8.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.201C6.808 2.75 7.381 3.025 7.761 3.498L8.364 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V9.094"
            fill="none"
            stroke={active ? "#FFFFFF" : "#A1A1AA"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d="M4.25 6.75H13.75C14.855 6.75 15.75 7.645 15.75 8.75V13.25C15.75 14.355 14.855 15.25 13.75 15.25H4.25C3.145 15.25 2.25 14.355 2.25 13.25V8.75C2.25 7.645 3.145 6.75 4.25 6.75Z"
            fill="none"
            stroke={active ? "#FFFFFF" : "#A1A1AA"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    ),
  },
];

export const DockNavbar: React.FC = () => {
  const location = useLocation();

  return (
    <div
      id="navigation-menu"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-full px-6 py-2.5 sm:bottom-8 border border-[#2D2E2F]/70 bg-[#1A1B1C]/80 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md z-[999] transition-all duration-300"
    >
      <nav className="flex flex-row items-center gap-6 sm:gap-8">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.href);

          return (
            <Link key={item.name} to={item.href} className="relative group">
              <div
                className={`flex flex-col items-center justify-center transition-all duration-200 ${
                  isActive
                    ? "scale-105 text-white font-semibold"
                    : "text-[#8B8D91] hover:text-white/90 hover:scale-105"
                }`}
              >
                {item.icon(isActive)}
                <span className="text-[10px] sm:text-[11px] font-medium tracking-tight">
                  {item.name}
                </span>
              </div>
              {isActive && (
                <motion.div
                  layoutId="dock-indicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default DockNavbar;
