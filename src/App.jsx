import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Demo from './components/Demo'

import React from 'react'

function App() {
  return (
    <main>
      <div className='main'>
        <div className="gradient" />

      </div>

      <div className='app'>

        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default App


