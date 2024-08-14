import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { LandingPage, Reservasi, Pembayaran } from './pages'
import { ScrollToTop } from './components'

function App() {
  
  return (
    <div>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reservasi" element={<Reservasi />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
      </Routes>
    </div>
  )
}

export default App
