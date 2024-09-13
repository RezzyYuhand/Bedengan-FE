import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { LandingPage, Reservasi, Kavling, Pembayaran, SyaratDanKetentuan, Profil, Masuk, Daftar, ComingSoon } from './pages'
import { ScrollToTop } from './components'

function App() {
  
  return (
    <div>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reservasi" element={<Reservasi />} />
        <Route path="/kavling" element={<Kavling />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/syarat-dan-ketentuan" element={<SyaratDanKetentuan />} />
        <Route path="/profil" element={<Profil/>} />
        <Route path="/masuk" element={<Masuk />} />
        <Route path="/daftar" element={<Daftar />} />
        
        <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>
    </div>
  )
}

export default App
