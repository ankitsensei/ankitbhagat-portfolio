import React from 'react'
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="h-screen flex justify-around items-center mx-60">
      <div className='w-1/3'>
        <Navbar Name="DM Resharing" Year="2022" />
        <Navbar Name="Media Viewer" Year="2022" />
      </div>
      <div className='w-2/3'>
        <h3>Ankit Bhagat</h3>
        <h3>Just a developer at nowhere</h3>
        <div>
          // Here Links will be there
        </div>
      </div>
    </div>
  )
}

export default App