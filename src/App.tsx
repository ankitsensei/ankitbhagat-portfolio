import Intro from './components/Intro'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Connect from "./components/Connect"


const App = () => {
  return (
    <div className="bg-black w-full h-full text-white">
      <div className='h-full flex flex-col pt-20 lg:w-2/5 lg:mx-[30%]'>
        <Intro/>
        <WorkExperience />
        <Projects />
        <Connect />
      </div>
    </div>
  )
}

export default App