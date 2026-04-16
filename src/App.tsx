import { ThemeProvider } from './components/ThemeContext'
import { motion } from "motion/react"

import Home from './pages/Home'



const App = () => {
  return (
    <ThemeProvider>
      <motion.div
        className=" bg-white dark:bg-zinc-900 w-full h-max md:h-screen lg:h-full text-black dark:text-white px-6">
        <div className='h-full flex flex-col w-full max-w-2xl mx-auto font-geist'>
          <Home />
        </div>
      </motion.div>
    </ThemeProvider>
  )
}

export default App