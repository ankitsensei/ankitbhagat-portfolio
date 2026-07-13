import { motion } from "motion/react";
import { GitHubCalendar } from "react-github-calendar";
import SkillsComp from "./ui/SkillsComp";
import DP from "../assets/android-chrome-512x512.jpg";
import Banner from "../assets/banner.webp";
import { useTheme } from "./ThemeContext";

import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
// import { SiLeetcode } from "react-icons/si";
// import { SiCodeforces } from "react-icons/si";
// import { SiChessdotcom } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { CgMail } from "react-icons/cg";
// Skills icons
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaFigma } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiTypescript,
  SiRust,
  SiVercel,
  SiSupabase,
  SiFirebase,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion, TbBrandCpp, TbFileTypeSql } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";

const Intro: React.FC = () => {
  const { resolvedTheme } = useTheme();
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
              <p className="text-sm text-zinc-600">I am</p>
              <p className="text-xl md:text-3xl font-thin text-zinc-800 dark:text-zinc-200 flex items-center">
                Ankit Bhagat
              </p>
              <p className="text-sm dark:text-zinc-600 text-zinc-400">
                Frontend Developer
              </p>
              <p className="text-sm dark:text-zinc-600 text-zinc-400">
                From Jharkhand, India
              </p>
            </div>
          </div>
          <div className="flex gap-5 md:gap-6 text-lg md:text-xl dark:text-zinc-400 text-zinc-600">
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
              className="flex items-center justify-center gap-2 px-5 h-9 border text-sm border-zinc-300 dark:border-zinc-700 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <HiOutlineDownload className="text-base" /> Resume
            </a>
            <a
              href="mailto:ankitbhagat.dev@gmail.com"
              className="flex items-center justify-center gap-2 px-5 h-9 border text-sm border-zinc-300 dark:border-zinc-700 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <CgMail className="text-base" /> Mail me
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:gap-4 font-inter text-sm">
          <p className="dark:text-zinc-400 text-zinc-500 text-md">
            3rd year ✦ B.Tech CSE
          </p>
          <p className="dark:text-zinc-400 text-zinc-500 text-md">
            As a developer, I am more focused into backend web development right
            now.
          </p>
          <p className="dark:text-zinc-400 text-zinc-500 text-md">
            Apart from that, I enjoy video editing, cooking, maybe good at
            chess.
          </p>
        </div>
        <div>
          <h1 className="text-xl md:text-2xl mb-3 md:mb-4 dark:text-zinc-400 text-zinc-600">
            Skills
          </h1>
          <div className="flex flex-wrap gap-2">
            <SkillsComp title="React" icon={<FaReact />} />
            <SkillsComp title="TypeScript" icon={<SiTypescript />} />
            <SkillsComp title="JavaScript" icon={<IoLogoJavascript />} />
            <SkillsComp title="Python" icon={<FaPython />} />
            <SkillsComp title="C/C++" icon={<TbBrandCpp />} />
            <SkillsComp title="Rust" icon={<SiRust />} />
            <SkillsComp title="Node" icon={<FaNodeJs />} />
            <SkillsComp title="Express" icon={<SiExpress />} />
            <SkillsComp title="MongoDB" icon={<SiMongodb />} />
            <SkillsComp title="SQL" icon={<TbFileTypeSql />} />
            <SkillsComp title="Supabase" icon={<SiSupabase />} />
            <SkillsComp title="Firebase" icon={<SiFirebase />} />
            <SkillsComp title="Tailwind" icon={<RiTailwindCssFill />} />
            <SkillsComp title="Motion" icon={<TbBrandFramerMotion />} />
            <SkillsComp title="Postman" icon={<SiPostman />} />
            <SkillsComp title="Vercel" icon={<SiVercel />} />
            <SkillsComp title="Git" icon={<FaGitAlt />} />
            <SkillsComp title="GitHub" icon={<FaGithub />} />
            <SkillsComp title="Figma" icon={<FaFigma />} />
          </div>
        </div>
        <div className="flex flex-col gap-3 md:gap-4">
          <h1 className="text-xl md:text-2xl dark:text-zinc-400 text-zinc-600">
            Stats
          </h1>
          <div className="overflow-x-auto pb-2">
            <GitHubCalendar
              username="ankitsensei"
              colorScheme={resolvedTheme}
              fontSize={13}
              blockSize={12}
              blockMargin={4}
              showWeekdayLabels
              theme={{
                light: ["#ffffff", "#b7efc5", "#4ade80", "#22c55e", "#166534"],
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
              labels={{
                totalCount: "{{count}} contributions in the last year",
              }}
              style={{
                margin: "0 auto",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;
