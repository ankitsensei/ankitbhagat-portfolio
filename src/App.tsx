import { ThemeProvider } from './components/ThemeContext'
import { motion } from "motion/react"

import Navbar from "./components/Navbar"
import Intro from './components/Intro'
// import WorkExperience from './components/WorkExperience'
// import Projects from './components/Projects'
// import Connect from "./components/Connect"
import Footer from './components/Footer'
// import TechIUse from "./components/TechIUse"


// import Resume from "./components/Resume"

const App = () => {
  return (
    <ThemeProvider>
      <motion.div
        className=" bg-white dark:bg-black w-full h-full text-black dark:text-white">
        <div className='h-full flex flex-col pt-20 w-full max-w-2xl mx-auto font-geist'>
            <Navbar />
            <Intro />
            {/* <WorkExperience /> */}
            {/* <Projects /> */}
            {/* <TechIUse /> */}
            {/* <Connect /> */}
            <Footer />
          </div>
      </motion.div>
    </ThemeProvider>
  )
}

export default App