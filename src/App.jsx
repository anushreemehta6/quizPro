import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bg from './assets/Group.png'
import Navbar from './componets/Navbar'
function App() {
  

  return (
    <>
      <div style={{ backgroundColor: `#151515` }}>
        <div
          className="w-screen h-screen "
          style={{ backgroundImage: `url(${bg})` }}
        >
          {/* all work goes here*/}
          <Navbar/>
        </div>
      </div>

    </>
  )
}

export default App
