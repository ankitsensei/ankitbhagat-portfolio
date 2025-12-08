import { motion } from "motion/react"

const Intro: React.FC = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className='flex flex-col gap-7 '>
            <div className="flex flex-col gap-2">
                <p className='text-2xl font-roman text-white'>Sup, I'm Ankit Bhagat 👋</p>
                <p className=' text-lg text-zinc-300'>Frontend Developer</p>
                <p className="text-zinc-600 dark:text-zinc-400">I'm a Frontend Web Developer from Jharkhand, India, trying to make the internet a bit cooler one website at a time.</p>
            </div>
        <div className="flex flex-col gap-2 mt-5">
          <h1 className="text-2xl">What I do?</h1>
          <p className="text-zinc-400 text-md">Currently, I am a 2nd year B.Tech Student of Computer Science department. As a developer, I am more focused into Web Development.</p>
          <p className="text-zinc-400 text-md">Apart from Programming and studies, I enjoy video editing, cooking, doing something new everyday and many more...</p>
        </div>
    </div>
    </motion.div>
  )
}

export default Intro
