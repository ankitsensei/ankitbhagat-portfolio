import React, {useState, useEffect} from 'react'
import Navbar from "./components/Navbar"

const App = () => {
  const colors = [
    "#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#9BF6FF",
    "#A0C4FF", "#BDB2FF", "#FFC6FF"
  ];

  const [bgColor, setBgColor] = useState(colors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random()*colors.length)];
      setBgColor(randomColor);
    }, 1000)
    return () => clearInterval(interval);
  },[])

  return (
    <div className="h-screen w-full flex px-60 justify-between items-center transition-colors duration-4000" style={{backgroundColor: bgColor}}>
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