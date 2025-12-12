import { motion } from "motion/react"
import Button from "./Button"

const Connect = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='flex flex-col gap-4'>
      <h2 className="text-2xl">Connect📧</h2>
      <p className="text-md text-zinc-600 dark:text-zinc-300">Feel free to contact me <a href="mailto:main.ankitbhagat@gmail.com"
        className="underline font-semibold">main.ankitbhagat@gmail.com</a></p>
      <div className="flex flex-wrap gap-2">
        <Button btnName="Github" link="https://github.com/ankitsensei" />
        <Button btnName="X" link="https://x.com/webdevankit" />
        <Button btnName="Linkedin" link="https://www.linkedin.com/in/ankit-bhagat-139276241/" />
        <Button btnName="Instagram" link="https://www.instagram.com/ankitsensei/" />
        <Button btnName="Resume" link="#" />
      </div>
    </motion.div>
  )
}
  
export default Connect