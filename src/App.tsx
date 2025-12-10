import { ThemeProvider } from './components/ThemeContext'
import { motion } from "motion/react"

import Navbar from "./components/Navbar"
import Intro from './components/Intro'
import Footer from './components/Footer'
import Home from './pages/Home'



const App = () => {
  return (
    <ThemeProvider>
      <motion.div
        className=" bg-white dark:bg-black w-full h-full text-black dark:text-white">
        <div className='h-full flex flex-col pt-20 w-full max-w-2xl mx-auto font-geist'>
          <Home />
        </div>
        
      </motion.div>
    </ThemeProvider>
  )
}

export default App