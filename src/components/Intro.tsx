import { motion } from "motion/react"
import { NavLink } from "react-router";
import { GitHubCalendar } from 'react-github-calendar';
import Connect from "./Connect"
import DP from "../assets/ankit-dp.jpg"

import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiChessdotcom } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { CgMail } from "react-icons/cg";


const Intro: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
      <div className='flex flex-col gap-7'>
        <div className="flex gap-3">
          <img src={DP} alt="dp" className="w-24 rounded-lg" />
          <div className="flex flex-col justify-center">
            <p className='text-2xl font-semibold text-zinc-200 flex items-center'>Ankit Bhagat</p>
            <p className='text-sm dark:text-zinc-600 text-black'>Frontend Developer</p>
            <p className='text-sm dark:text-zinc-600 text-black'>From Jharkhand, India</p>
          </div>
        </div>
        <div className="flex gap-6 text-xl text-zinc-400">
          <a href="https://x.com/webdevankit" target="_blank"><FaXTwitter /></a>
          <a href="https://github.com/ankitsensei" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ankit-bhagat-139276241/" target="_blank"><BsLinkedin /></a>
          <a href="https://leetcode.com/u/ankitsensei/" target="_blank"><SiLeetcode /></a>
          <a href="https://codeforces.com/profile/ankitsensei" target="_blank"><SiCodeforces /></a>
          <a href="https://www.chess.com/member/devilking7112" target="_blank"><SiChessdotcom /></a>
          <a href="https://discord.com/users/ankitsensei" target="_blank"><FaDiscord /></a>
        </div>
        <div className="flex item-center gap-4 text-zinc-400">
          <NavLink target="_blank" to="/resume" className="flex items-center justify-center gap-2 w-30 h-10 border border-zinc-800 rounded-lg hover:border-zinc-400"><HiOutlineDownload className="" /> Resume</NavLink>
          <a href="mailto:ankitbhagat.dev@gmail.com" className="flex items-center justify-center gap-2 w-30 h-10 border border-zinc-800 rounded-lg">
            <CgMail /> Hire Me
          </a>
        </div>
        {/* <hr className='text-zinc-800 my-2' /> */}
        <div className="flex flex-col gap-4 font-inter text-sm">
          <p className="dark:text-zinc-400 text-zinc-500 text-md">2nd year B.Tech Student of Computer Science department. As a developer, I am more focused into backend web development right now</p>
          <p className="dark:text-zinc-400 text-zinc-500 text-md">Also, I enjoy video editing, cooking, maybe good at chess.</p>
        </div>
        <hr className='text-zinc-800 my-2' />
        <div>
          <h1 className="text-2xl">Github Contributions</h1>
          <GitHubCalendar username="ankitsensei" />
        </div>
        <hr className='text-zinc-800 my-2' />
        <div>
          <Connect />
        </div>
      </div>
    </motion.div>
  )
}

export default Intro
