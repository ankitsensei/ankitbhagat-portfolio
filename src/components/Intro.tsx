import { motion } from "motion/react";
import DP from "../assets/android-chrome-512x512.jpg";
import Banner from "../assets/banner2.jpeg";
import Skills from "./Skills";
import Stats from "./Stats";

import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { CgMail } from "react-icons/cg";

const Intro: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-10 md:gap-8">
        <div className="flex flex-col gap-5 relative">
          <img
            src={Banner}
            alt="banner"
            className="h-30 md:h-50 object-cover border-2 rounded"
          />
          <div className="flex gap-3">
            <img
              src={DP}
              alt="dp"
              className="w-20 md:w-30 rounded-lg absolute bottom-35 right-5 md:bottom-30 md:right-5"
            />
            <div className="flex flex-col justify-center">
              <p className="text-xs md:text-sm text-zinc-600">I am</p>
              <p className="text-lg md:text-3xl font-thin text-zinc-800 dark:text-zinc-200 flex items-center">
                Ankit Bhagat
              </p>
              <p className="text-xs md:text-sm dark:text-zinc-600 text-zinc-400">
                Frontend Developer
              </p>
              <p className="text-xs md:text-sm dark:text-zinc-600 text-zinc-400">
                From Jharkhand, India
              </p>
            </div>
          </div>
          <div className="flex gap-4 md:gap-6 text-base md:text-xl dark:text-zinc-400 text-zinc-600">
            <a href="https://x.com/webdevankit" target="_blank">
              <FaXTwitter />
            </a>
            <a href="https://github.com/ankitsensei" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-bhagat-139276241/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            {/* <a href="https://leetcode.com/u/ankitsensei/" target="_blank"><SiLeetcode /></a> */}
            {/* <a href="https://codeforces.com/profile/ankitsensei" target="_blank"><SiCodeforces /></a> */}
            {/* <a href="https://www.chess.com/member/devilking7112" target="_blank"><SiChessdotcom /></a> */}
            <a href="https://discord.gg/u858VAsbzZ" target="_blank">
              <FaDiscord />
            </a>
          </div>
          <div className="flex items-center gap-2 md:gap-3 dark:text-zinc-400 text-black">
            <a
              href="https://live-resume-preview-orcin.vercel.app/"
              className="flex items-center justify-center gap-1.5 px-4 h-8 border text-xs md:text-sm border-zinc-300 dark:border-zinc-700 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <HiOutlineDownload className="text-sm md:text-base" /> Resume
            </a>
            <a
              href="mailto:ankitbhagat.dev@gmail.com"
              className="flex items-center justify-center gap-1.5 px-4 h-8 border text-xs md:text-sm border-zinc-300 dark:border-zinc-700 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <CgMail className="text-sm md:text-base" /> Mail me
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 md:gap-4 font-inter text-xs md:text-sm">
          <p className="dark:text-zinc-400 text-zinc-500">
            3rd year ✦ B.Tech CSE
          </p>
          <p className="dark:text-zinc-400 text-zinc-500">
            As a developer, I am more focused into backend web development right
            now.
          </p>
          <p className="dark:text-zinc-400 text-zinc-500">
            Apart from that, I enjoy video editing, cooking, maybe good at
            chess.
          </p>
        </div>
        <Skills />
        <Stats />
      </div>
    </motion.div>
  );
};

export default Intro;
