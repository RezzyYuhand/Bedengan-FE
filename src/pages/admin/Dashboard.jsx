import React from 'react'
import SidePanel from './SidePanel'
import HeaderBar from './HeaderBar'
import ReservasionList from './ReservasionList';
import { RiBarChart2Fill } from "react-icons/ri";
import { LuWifi, LuWifiOff } from "react-icons/lu";

const Dashboard = () => {
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
      id: 2,
      kode: 'RSV-003',
      nama: 'Jane Smith',
      tglMasuk: '2024-09-13',
      tglKeluar: '2024-09-15',
      kavling: 'B5',
      jenis: 'Online',
      status: 'Ditolak'
    },
    {
      id: 2,
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
    <div className='w-screen h-screen'>
      <div className='flex flex-row gap-10 h-full px-10 py-10'>
        <SidePanel/>
        <div className='flex flex-col py-3 w-full gap-8'>
          <HeaderBar title='Beranda' searchTerm='' onSearchChange={() => {}} username='Admin'/>
          
          <div className='flex flex-col gap-10'>
            <div className='flex flex-row w-full gap-10'>
              <div className='flex flex-row items-center gap-3 w-38'>
                <div className='flex p-4 text-primary bg-selesai items-center justify-center rounded-lg'>
                  <RiBarChart2Fill className='text-3xl'/>
                </div>
                <div className='flex flex-col'>
                  <span className='font-semibold'>Total Pengunjung</span>
                  <span>280</span>
                </div>
              </div>

              <div className='flex flex-row items-center gap-3 w-38'>
                <div className='flex p-4 text-primary bg-berlangsung items-center justify-center rounded-lg'>
                  <LuWifi className='text-3xl'/>
                </div>
                <div className='flex flex-col'>
                  <span className='font-semibold'>Reservasi Online</span>
                  <span>280</span>
                </div>
              </div>

              <div className='flex flex-row items-center gap-3 w-38'>
                <div className='flex p-4 text-primary bg-pink-400 items-center justify-center rounded-lg'>
                  <LuWifiOff className='text-3xl'/>
                </div>
                <div className='flex flex-col'>
                  <span className='font-semibold'>Reservasi Offline</span>
                  <span>280</span>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <span className='font-semibold'>Reservasi Terbaru</span>
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

export default Dashboard