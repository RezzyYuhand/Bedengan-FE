import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { LandingPage, Reservasi, Pembayaran, SyaratDanKetentuan, Profil, Masuk, Daftar } from './pages'
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
        <Route path="/profil" element={<Profil/>} />
        <Route path="/masuk" element={<Masuk />} />
        <Route path="/daftar" element={<Daftar />} />
      </Routes>
    </div>
  )
}

export default App
