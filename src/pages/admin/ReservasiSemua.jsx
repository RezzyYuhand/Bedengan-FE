import React from 'react'
import SidePanel from './SidePanel'
import HeaderBar from './HeaderBar'
import ReservasionList from './ReservasionList';

const ReservasiSemua = () => {
  const reservations = [
    {
      id: 1,
      kode: 'RSV-001',
      nama: 'John Doe',
      tglMasuk: '2024-09-12',
      tglKeluar: '2024-09-14',
      kavling: 'A3',
      jenis: 'Online',
      status: 'Selesai'
    },
    {
      id: 2,
      kode: 'RSV-002',
      nama: 'Jane Smith',
      tglMasuk: '2024-09-13',
      tglKeluar: '2024-09-15',
      kavling: 'B5',
      jenis: 'Offline',
      status: 'Menunggu'
    },
    {
      id: 3,
      kode: 'RSV-003',
      nama: 'Jane Smith',
      tglMasuk: '2024-09-13',
      tglKeluar: '2024-09-15',
      kavling: 'B5',
      jenis: 'Online',
      status: 'Ditolak'
    },
    {
      id: 4,
      kode: 'RSV-004',
      nama: 'Jane Smith',
      tglMasuk: '2024-09-13',
      tglKeluar: '2024-09-15',
      kavling: 'B5',
      jenis: 'Offline',
      status: 'Berlangsung'
    }
    // Add more reservation data here
  ];
  return (
    <div className='w-screen h-screen p-10'>
      <div className='flex flex-row gap-10 h-full'>
        <SidePanel/>
        <div className='flex flex-col py-3 w-full gap-8'>
          <HeaderBar title='Reservasi' searchTerm='' onSearchChange={() => {}} username='Admin'/>
          
          <div className='flex flex-col gap-10'>

            <div className='flex flex-col gap-3'>
              <span className='font-semibold'>Semua Reservasi</span>
              <div className='w-full bg-secondary h-[1px] mt-2'/>
              <div className='flex flex-col px-2 text-sm gap-1'>
                <div className='flex flex-row font-semibold'>
                  <span className='w-14 max-w-14'>No</span>
                  <span className='w-32 max-w-32'>Kode Reservasi</span>
                  <span className='w-56 max-w-56'>Nama</span>
                  <span className='w-28 max-w-28'>Tgl Masuk</span>
                  <span className='w-28 max-w-28'>Tgl Keluar</span>
                  <span className='w-20 max-w-20'>Kavling</span>
                  <span className='w-32 max-w-32'>Jenis Reservasi</span>
                  <span className='w-32 max-w-32'>Status</span>
                </div>
                <div>
                  <ReservasionList reservations={reservations} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReservasiSemua