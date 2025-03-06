import React from 'react'
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="h-screen flex flex-col justify-center mx-60">
      <div>
        <Navbar Name="DM Resharing" Year="2022" />
        <Navbar Name="Media Viewer" Year="2022" />
      </div>
      <div>
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