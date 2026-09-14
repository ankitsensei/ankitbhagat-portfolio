import React from "react";
import DP from "../assets/android-chrome-512x512.jpg";
import Banner from "../assets/banner2.jpeg";

export const Hero: React.FC = () => {
  return (
    <div id="hero-section" className="page-col relative">
      {/* Banner & Avatar Container */}
      <div className="relative w-full mb-2">
        <div className="w-full h-36 sm:h-48 overflow-hidden rounded-xl border border-[#232426] bg-[#121314]">
          <img
            src={Banner}
            alt="Banner"
            className="w-full h-full object-cover object-center opacity-85"
          />
        </div>

        {/* Profile Avatar */}
        <div className="absolute -bottom-7 left-5 sm:left-6 flex items-end">
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-2xl border-2 border-[#232426] bg-[#121314] shadow-2xl ring-4 ring-[#0A0B0C]">
            <img
              src={DP}
              alt="Ankit Bhagat"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="pt-8">
        {/* Hey it's me badge */}
        <div className="jetbrains-mono flex items-center gap-1.5 text-xs tracking-tighter text-[#8B8D91]/70 mb-1.5">
          <span>Hey It's me</span>
          <svg
            height="1em"
            width="1em"
            className="opacity-70"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>heart hand</title>
            <g fill="#A1A1AA">
              <path d="M6.074 10.969L5.549 9.84899C5.143 8.98099 5.14 7.98499 5.539 7.11499C5.937 6.24599 6.698 5.59799 7.624 5.33799C7.898 5.26099 8.181 5.22199 8.465 5.22199C9.598 5.22199 10.657 5.83499 11.271 6.80899C11.71 5.98999 12.001 5.058 12.001 4.008C12.008 2.085 10.447 0.510993 8.508 0.498993C7.668 0.509993 6.871 0.818996 6.251 1.355C5.63 0.818996 4.83 0.508993 3.98 0.498993C2.055 0.510993 0.494 2.08499 0.501 4.00499C0.501 7.87899 4.379 10.202 5.567 10.822C5.727 10.905 5.9 10.948 6.074 10.969Z" />
              <path
                d="M16.554 10.604C15.565 9.84798 13.332 9.68199 11.231 10.181L10.12 7.81799C9.74901 7.02899 8.86801 6.54698 8.02901 6.78298C6.96101 7.08298 6.45701 8.24998 6.90701 9.21298L9.05401 13.789L7.38401 13.482C6.65501 13.348 5.87201 13.631 5.49601 14.27C5.19701 14.779 5.17101 15.373 5.41301 15.89C5.60801 16.308 5.95601 16.624 6.39301 16.782L8.50201 17.525C9.39701 17.84 10.339 18.001 11.288 18.001H13.905C16.54 18.001 17.827 15.642 17.696 13.721C17.585 12.083 17.201 11.1 16.552 10.605L16.554 10.604Z"
                opacity="0.5"
              />
            </g>
          </svg>
        </div>

        {/* Title */}
        <h1 className="doto-font text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-baseline gap-2">
          <span>ANKIT BHAGAT</span>
          <a
            className="group"
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/webdevankit"
          >
            <span className="jetbrains-mono text-xs font-normal tracking-tight text-[#8B8D91]/70 transition-colors duration-200 group-hover:text-white">
              <span>/ </span>
              <span className="text-[10px]">@</span>
              <span>webdevankit</span>
            </span>
          </a>
        </h1>
      </div>

      {/* Bio Paragraph 1 */}
      <div>
        <p className="text-sm leading-relaxed text-[#8B8D91]">
          Yup! I'm a <span className="font-medium text-white">Full Stack Developer</span>. Big deal, right? But wait — there's more! I build scalable{" "}
          <span className="font-medium text-white">Full Stack Web Apps</span>. And if that wasn't enough, guess what?
          <br className="hidden sm:inline" /> maybe{" "}
          <span className="font-medium text-white">Freelancer & OSS Builder? </span> Oh yeah, I've got that badge too!
        </p>
      </div>

      {/* Bio Paragraph 2 & Action Buttons */}
      <div className="z-20 max-w-lg">
        <p className="text-sm leading-relaxed text-[#8B8D91]">
          I love both <span className="font-medium text-white">Frontend Craft</span> &{" "}
          <span className="font-medium text-white">Backend Architecture</span>. That means I can create fast, intuitive, and robust web applications from scratch. I'm always looking for new opportunities to learn and build impactful things.
        </p>

        {/* Action Buttons */}
        <div className="mt-5 flex items-center gap-2.5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/webdevankit"
          >
            <button className="btn-pill-3d">
              <svg height="14px" width="14px" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.25 1.5H16.88L11.13 8.07L17.89 17H12.6L8.45 11.58L3.71 17H1.08L7.23 9.97L0.77 1.5H6.19L9.94 6.46L14.25 1.5ZM13.33 15.42H14.78L5.39 3H3.83L13.33 15.42Z" fill="currentColor" />
              </svg>
              <span>Twitter DM</span>
            </button>
          </a>

          <span className="text-[10px] text-[#8B8D91]/60 font-medium">OR</span>

          <a href="mailto:ankitbhagat.dev@gmail.com">
            <button className="btn-pill-3d">
              <svg height="14px" width="14px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <g fill="#A1A1AA">
                  <path
                    d="M14.75 6H3.25C2.836 6 2.5 6.336 2.5 6.75V13.25C2.5 14.767 3.733 16 5.25 16H12.75C14.267 16 15.5 14.767 15.5 13.25V6.75C15.5 6.336 15.164 6 14.75 6Z"
                    opacity="0.4"
                  />
                  <path d="M2.588 6.862C1.738 6.862 0.99 6.239 0.859 5.374L0.634 3.891C0.49 2.936 1.149 2.043 2.103 1.898L14.462 0.029C15.424 -0.111 16.31 0.544 16.455 1.498L16.679 2.98C16.823 3.935 16.164 4.828 15.21 4.973L2.851 6.842C2.763 6.855 2.675 6.862 2.588 6.862Z" />
                  <path d="M11.78 11.03L9.53 13.28C9.384 13.427 9.192 13.5 9 13.5C8.808 13.5 8.616 13.427 8.47 13.28L6.22 11.03C5.927 10.737 5.927 10.263 6.22 9.97C6.513 9.677 6.987 9.677 7.28 9.97L8.25 10.94V8.25C8.25 7.836 8.586 7.5 9 7.5C9.414 7.5 9.75 7.836 9.75 8.25V10.94L10.72 9.97C11.013 9.677 11.487 9.677 11.78 9.97C12.073 10.263 12.073 10.737 11.78 11.03Z" />
                </g>
              </svg>
              <span>Email Me</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
