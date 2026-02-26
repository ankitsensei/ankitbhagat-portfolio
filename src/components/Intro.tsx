import { motion } from "motion/react"
import { GitHubCalendar } from 'react-github-calendar';
import Connect from "./Connect"

const Intro: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
      <div className='flex flex-col gap-7'>
        <div className="flex flex-col gap-2">
          <p className='text-2xl font-roman flex items-center'>Sup, <img
            src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
            alt="gif"
            className="w-10"
          /> I'm Ankit Bhagat</p>
          <p className=' text-lg dark:text-zinc-300 text-black'>Frontend Developer</p>
          <p className="text-zinc-500 dark:text-zinc-400">I'm a Frontend Web Developer from Jharkhand, India, trying to make the internet a bit cooler one website at a time.</p>
        </div>
        <hr className='text-zinc-800 my-2' />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">What I do?</h1>
          <p className="dark:text-zinc-400 text-zinc-500 text-md">Currently, I am a 2nd year B.Tech Student of Computer Science department. As a developer, I am more focused into backend web development</p>
          <p className="dark:text-zinc-400 text-zinc-500 text-md">Apart from Programming and studies, I enjoy video editing, cooking, doing something new everyday and many more...</p>
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
