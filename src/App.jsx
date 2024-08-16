import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { LandingPage, Reservasi, Pembayaran, SyaratDanKetentuan } from './pages'
import { ScrollToTop } from './components'

function App() {
  
  return (
    <div>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reservasi" element={<Reservasi />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/syarat-dan-ketentuan" element={<SyaratDanKetentuan />} />
      </Routes>
    </div>
  )
}

export default App
