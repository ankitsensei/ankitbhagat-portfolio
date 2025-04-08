import Intro from './components/Intro'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className="bg-black w-full h-screen text-white">
      <div className='h-full flex flex-col pt-20 lg:w-2/5 lg:flex lg:flex-col lg:items-center lg:justify-center'>
        <Intro/>
        <WorkExperience />
        <Projects />
      </div>
    </div>
  )
}

export default App