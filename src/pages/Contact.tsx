import Connect from "../components/Connect"
import Navbar from "../components/Navbar"

const Contact = () => {
  return (
    <div className='h-screen flex flex-col w-full mx-auto pt-20 font-geist bg-white dark:bg-black text-black dark:text-white'>
      <div className='w-2xl h-full flex flex-col mx-auto max-w-2xl'>
        <Navbar />
        <Connect />
      </div>
    </div>
  )
}

export default Contact