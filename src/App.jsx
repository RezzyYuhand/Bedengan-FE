import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { 
  LandingPage, 
  Reservasi, 
  Kavling, Pembayaran, 
  SyaratDanKetentuan, 
  Profil, 
  Masuk, 
  Daftar, 
  ComingSoon, 
  Invoice, 
  DaftarDataDiri, 
  Dashboard,
  ReservasiSemua,
  ReservasiOnline,
  ReservasiOffline
} from './pages'
import { ScrollToTop, PrivateRoute } from './components'

function App() {
  
  return (
    <div>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/syarat-dan-ketentuan" element={<SyaratDanKetentuan />} />
        
        <Route path="/masuk" element={<Masuk />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/daftar-data-diri" element={
          <PrivateRoute requireDaftar={true}>
            <DaftarDataDiri />
          </PrivateRoute>
          } 
        />
        
        <Route path="/reservasi" element={
          <PrivateRoute requireAuth={true}>
            <Reservasi/>
          </PrivateRoute>
          } 
        />
        <Route path="/kavling" element={<Kavling />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/invoice" element={<Invoice />} />
        
        <Route path="/profil" element={
          <PrivateRoute requireAuth={true}>
            <Profil/>
          </PrivateRoute>
          } 
        />

        {/* Admin */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/reservasi" element={<ReservasiSemua />} />
        <Route path="/admin/reservasi/online" element={<ReservasiOnline />} />
        <Route path="/admin/reservasi/offline" element={<ReservasiOffline />} />
        
        <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>
    </div>
  )
}

export default App
