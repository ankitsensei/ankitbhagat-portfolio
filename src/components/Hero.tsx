import React from "react";
import DP from "../assets/android-chrome-512x512.jpg";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FiMail } from "react-icons/fi";

export const Hero: React.FC = () => {
  return (
    <div id="hero-section" className="page-col relative">
      {/* Top Header: Left Info (Hey it's me, Name, Availability) & Right Profile Picture */}
      <div className="flex items-start justify-between gap-3 sm:gap-6">
        {/* Left Side: Name, Tag, Availability */}
        <div className="flex flex-col min-w-0 flex-1">
          {/* Hey it's me tag */}
          <div className="jetbrains-mono flex items-center gap-1.5 text-xs tracking-tighter text-[var(--text-muted)] mb-1.5">
            <span>Hey It's me</span>
            <svg
              height="1em"
              width="1em"
              className="opacity-70"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>heart hand</title>
              <g fill="currentColor">
                <path d="M6.074 10.969L5.549 9.84899C5.143 8.98099 5.14 7.98499 5.539 7.11499C5.937 6.24599 6.698 5.59799 7.624 5.33799C7.898 5.26099 8.181 5.22199 8.465 5.22199C9.598 5.22199 10.657 5.83499 11.271 6.80899C11.71 5.98999 12.001 5.058 12.001 4.008C12.008 2.085 10.447 0.510993 8.508 0.498993C7.668 0.509993 6.871 0.818996 6.251 1.355C5.63 0.818996 4.83 0.508993 3.98 0.498993C2.055 0.510993 0.494 2.08499 0.501 4.00499C0.501 7.87899 4.379 10.202 5.567 10.822C5.727 10.905 5.9 10.948 6.074 10.969Z" />
                <path
                  d="M16.554 10.604C15.565 9.84798 13.332 9.68199 11.231 10.181L10.12 7.81799C9.74901 7.02899 8.86801 6.54698 8.02901 6.78298C6.96101 7.08298 6.45701 8.24998 6.90701 9.21298L9.05401 13.789L7.38401 13.482C6.65501 13.348 5.87201 13.631 5.49601 14.27C5.19701 14.779 5.17101 15.373 5.41301 15.89C5.60801 16.308 5.95601 16.624 6.39301 16.782L8.50201 17.525C9.39701 17.84 10.339 18.001 11.288 18.001H13.905C16.54 18.001 17.827 15.642 17.696 13.721C17.585 12.083 17.201 11.1 16.552 10.605L16.554 10.604Z"
                  opacity="0.5"
                />
              </g>
            </svg>
          </div>

          {/* Title */}
          <h1 className="doto-font text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] flex items-baseline gap-2 flex-wrap">
            <span>ANKIT BHAGAT</span>
            <a
              className="group inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/webdevankit"
            >
              <span className="jetbrains-mono text-xs font-normal tracking-tight text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--text-primary)]">
                <span>/ </span>
                <span className="text-[10px]">@</span>
                <span>webdevankit</span>
              </span>
            </a>
          </h1>

          {/* Availability Badge directly under name - Fully Responsive */}
          <div className="mt-2.5 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 text-[10.5px] sm:text-xs font-mono w-fit max-w-full shadow-[0_0_15px_rgba(16,185,129,0.12)]">
            <span className="shrink-0 h-2 w-2 rounded-full bg-emerald-500" />
            <span className="truncate sm:whitespace-normal">Available for freelancing & projects</span>
          </div>
        </div>

        {/* Avatar on Right side with static green dot at right bottom corner */}
        <div className="relative shrink-0 group">
          <div className="relative h-18 w-18 sm:h-24 sm:w-24 overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-2xl ring-1 ring-black/5 dark:ring-white/10 transition-all duration-300 group-hover:border-[var(--text-muted)]">
            <img
              src={DP}
              alt="Ankit Bhagat"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Static live green dot at right bottom corner */}
          <div className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center pointer-events-none">
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-500 border-2 border-[var(--bg-page)] shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </div>
        </div>
      </div>

      {/* Clean, Straightforward Bio */}
      <div className="max-w-xl mt-1">
        <p className="text-sm leading-relaxed text-[var(--text-muted)]">
          I'm a <span className="font-medium text-[var(--text-primary)]">Full Stack Web Developer</span> building fast, scalable applications and modern web experiences. Specializing in <span className="font-medium text-[var(--text-primary)]">React / Next.js</span> on the frontend and <span className="font-medium text-[var(--text-primary)]">Node.js, Express & PostgreSQL / MongoDB</span> on the backend.
        </p>

        {/* Action Buttons: Twitter DM, Resume, Email */}
        <div className="mt-5 flex items-center gap-2.5 flex-wrap">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/webdevankit"
          >
            <button className="btn-pill-3d cursor-pointer">
              <svg height="14px" width="14px" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.25 1.5H16.88L11.13 8.07L17.89 17H12.6L8.45 11.58L3.71 17H1.08L7.23 9.97L0.77 1.5H6.19L9.94 6.46L14.25 1.5ZM13.33 15.42H14.78L5.39 3H3.83L13.33 15.42Z" fill="currentColor" />
              </svg>
              <span>Twitter DM</span>
            </button>
          </a>

          <span className="text-[10px] text-[var(--text-subtle)] font-medium">OR</span>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://live-resume-preview-orcin.vercel.app/"
          >
            <button className="btn-pill-3d cursor-pointer">
              <HiOutlineDocumentText className="text-sm" />
              <span>Resume</span>
            </button>
          </a>

          <a
            href="mailto:ankitbhagat.dev@gmail.com"
          >
            <button className="btn-pill-3d cursor-pointer">
              <FiMail className="text-sm" />
              <span>Email</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
