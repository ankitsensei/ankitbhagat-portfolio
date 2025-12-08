import { motion } from "motion/react"

const Intro: React.FC = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className='flex flex-col gap-7 '>
            <div className="flex flex-col gap-2">
                <p className='text-2xl font-roman'>Sup, I'm Ankit Bhagat 👋</p>
                <p className=' text-xl'>Frontend Developer</p>
                <p className="text-zinc-600 dark:text-zinc-400">I'm a Frontend Web Developer from Jharkhand, India, trying to make the internet a bit cooler one website at a time.</p>
            </div>
        <p className='text-zinc-600 dark:text-zinc-300'>Break things and fixing them back. Software Enginner, Designer and lot more.</p>
    </div>
    </motion.div>
  )
}

export default Intro
