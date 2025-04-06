import Intro from './components/Intro'
import WorkExperience from './components/WorkExperience'

const App = () => {
  return (
    <div className="bg-black w-full h-screen text-white">
      <div className='px-4 h-full flex flex-col pt-20'>
        <Intro/>
        <WorkExperience />
      </div>
    </div>
  )
}

export default App