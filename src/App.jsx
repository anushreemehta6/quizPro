import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bg from './assets/Group.png'
import Navbar from './componets/Navbar'
import Page from './componets/Page'
function App() {
  

  return (
    <>
      <div style={{ backgroundColor: `#151515` }}>
        <div
         style={{
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'repeat',
  }}
  className="w-full min-h-screen"
        >
          {/* all work goes here*/}
          <Navbar/>
          <Page/>
        </div>
      </div>

    </>
  )
}

export default App
