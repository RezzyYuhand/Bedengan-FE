import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { LandingPage, Reservasi } from './pages'

function App() {
  
  return (
    <div>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/reservasi" element={<Reservasi />} />
      </Routes>
    </div>
  )
}

export default App
