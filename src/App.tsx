import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const App = () => {
  return (
    <div className="bg-black w-full h-screen text-white">
      <div className='px-4 h-full flex flex-col pt-20'>
        <div className='flex flex-col gap-7'>
          <div>
            <p className='text-lg'>Ankit</p>
            <p className='text-zinc-400'>Software Enginner</p>
          </div>
          <p className='text-zinc-300'>Break things and fixing them back. Software Enginner, Designer and lot more.</p>
        </div>
        <div className='mt-10 flex flex-col gap-4'>
          <h1 className='text-lg'>Work Experience</h1>
          <button className='flex justify-center items-center gap-2 text-sm w-30 h-8 rounded-xl bg-zinc-300'>Know more<FaArrowRight className='rotate-320'/></button>
          <div className='border-2 border-zinc-700 rounded-xl w-full'>
            <div className='flex m-2 p-2'>
              <h2>Software Development Enginner</h2>
              <p className='text-zinc-400'>November 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App