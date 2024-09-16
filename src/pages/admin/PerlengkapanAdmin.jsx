import React from 'react'
import SidePanel from './SidePanel'
import HeaderBar from './HeaderBar'
import PerlengkapanList from './PerlengkapanList'

const PerlengkapanAdmin = () => {
  const perlengkapan = [
    {
      id: 1,
      kode: 'BRG001',
      nama: 'Tenda Camping',
      harga: 'Rp 250.000',
      stok: 10,
      jenis: 'Paket',
    },
    {
      id: 2,
      kode: 'BRG002',
      nama: 'Lampu Senter',
      harga: 'Rp 50.000',
      stok: 50,
      jenis: 'Tipe',
    },
    // Add more items as needed
  ];

  return (
    <div className='w-screen h-screen p-10'>
      <div className='flex flex-row gap-10 h-full'>
        <SidePanel/>
        <div className='flex flex-col py-3 w-full gap-8'>
          <HeaderBar title='Reservasi' searchTerm='' onSearchChange={() => {}} username='Admin'/>
          
          <div className='flex flex-col gap-10'>

            <div className='flex flex-col gap-3'>
              <div className='flex flex-row w-full justify-between items-center'>
                <span className='font-semibold'>Semua Perlengkapan</span>
                <button className='px-3 py-2 bg-accent text-primary text-sm shadow-md rounded-md hover:bg-hover-green'>
                    Tambah Perlengkapan
                </button>
              </div>
              <div className='w-full bg-secondary h-[1px] mt-2'/>
              <div className='flex flex-col px-2 text-xs gap-1'>
                <div className='flex flex-row font-semibold'>
                  <span className='w-12 max-w-12'>No</span>
                  <span className='w-28 max-w-28'>Kode Barang</span>
                  <span className='w-44 max-w-44'>Nama</span>
                  <span className='w-28 max-w-28'>Harga</span>
                  <span className='w-28 max-w-28'>Stok</span>
                  <span className='w-28 max-w-28 text-center'>Jenis</span>
                  <span className='w-28 max-w-28 text-center'>Aksi</span>
                </div>
                <div>
                  <PerlengkapanList perlengkapan={perlengkapan} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerlengkapanAdmin