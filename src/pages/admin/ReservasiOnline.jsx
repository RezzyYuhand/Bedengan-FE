import React from 'react'
import SidePanel from './SidePanel'
import HeaderBar from './HeaderBar'
import ReservasionActionList from './ReservasionActionList'

const ReservasiOnline = () => {
  const reservations = [
    {
        id: 1,
        kode: 'RES123',
        nama: 'John Doe',
        tglMasuk: '2024-09-15',
        tglKeluar: '2024-09-16',
        ktpImage: '/path-to-ktp-image.jpg',
        buktiImage: '/path-to-bukti-image.jpg',
        totalPrice: 'Rp 500.000',
        status: 'Menunggu'
      },
  ];
  return (
    <div className='w-screen h-screen p-10'>
      <div className='flex flex-row gap-10 h-full'>
        <SidePanel/>
        <div className='flex flex-col py-3 w-full gap-8'>
          <HeaderBar title='Reservasi' searchTerm='' onSearchChange={() => {}} username='Admin'/>
          
          <div className='flex flex-col gap-10'>

            <div className='flex flex-col gap-3'>
              <span className='font-semibold'>Reservasi Online</span>
              <div className='w-full bg-secondary h-[1px] mt-2'/>
              <div className='flex flex-col px-2 text-xs gap-1'>
                <div className='flex flex-row font-semibold'>
                  <span className='w-12 max-w-12'>No</span>
                  <span className='w-28 max-w-28'>Kode Reservasi</span>
                  <span className='w-44 max-w-44'>Nama</span>
                  <span className='w-28 max-w-28'>Tgl Masuk</span>
                  <span className='w-28 max-w-28'>Tgl Keluar</span>
                  <span className='w-10 max-w-10 text-center'>KTP</span>
                  <span className='w-28 max-w-28 text-center'>Total</span>
                  <span className='w-10 max-w-10 text-center'>Bukti</span>
                  <span className='w-32 max-w-32 text-center'>Status</span>
                  <span className='w-28 max-w-28 text-center'>Aksi</span>
                </div>
                <div>
                  <ReservasionActionList reservations={reservations} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReservasiOnline