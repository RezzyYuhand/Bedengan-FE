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
  ReservasiOffline,
  PerlengkapanAdmin,
  TendaPaket,
  TendaNonPaket,
  Item,
  KavlingAdmin,
  OnlineDetail,
  OnlineDetailKelompok,
  AddReservasiOffline,
  AddPerlengkapan,
  UpdatePerlengkapan,
  AddKavling,
  UpdateKavling
} from './pages'
import { ScrollToTop, PrivateRoute } from './components'
import {ToastContainer} from "react-toastify";

function App() {
  
  return (
    <div>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/syarat-dan-ketentuan" element={<SyaratDanKetentuan />} />
        
        <Route path="/masuk" element={<Masuk />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route element={<PrivateRoute requireDaftar={true} />}>
          <Route path="/daftar-data-diri" element={<DaftarDataDiri />} />
        </Route>
        
        <Route element={<PrivateRoute requireAuth={true} />}>
          <Route path="/reservasi" element={<Reservasi />} />
          <Route path="/kavling" element={<Kavling />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/profil" element={<Profil />} />
        </Route>

        {/* Admin */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/reservasi" element={<ReservasiSemua />} />
        <Route path="/admin/reservasi/online" element={<ReservasiOnline />} />
        <Route path="/admin/reservasi/online/detail" element={<OnlineDetail />} />
        <Route path="/admin/reservasi/online/detail-kelompok" element={<OnlineDetailKelompok />} />

        <Route path="/admin/reservasi/offline" element={<ReservasiOffline />} />
        <Route path="/admin/reservasi/offline/tambah" element={<AddReservasiOffline />} />

        <Route path="/admin/perlengkapan" element={<PerlengkapanAdmin />} />
        <Route path="/admin/perlengkapan/tenda-paket" element={<TendaPaket />} />
        <Route path="/admin/perlengkapan/tenda-non-paket" element={<TendaNonPaket />} />
        <Route path="/admin/perlengkapan/item" element={<Item />} />
        <Route path="/admin/perlengkapan/tambah" element={<AddPerlengkapan />} />
        <Route path="/admin/perlengkapan/update" element={<UpdatePerlengkapan />} />

        <Route path="/admin/perlengkapan/kavling" element={<KavlingAdmin />} />
        <Route path="/admin/perlengkapan/kavling/tambah" element={<AddKavling />} />
        <Route path="/admin/perlengkapan/kavling/ubah/:id" element={<UpdateKavling />} />

        {/* test page */}
        <Route path="/tes" element={<UpdateKavling />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App
