import React from 'react'
import SidePanel from './SidePanel'
import HeaderBar from './HeaderBar'
import ItemPerlengkapanList from './ItemPerlengkapanList'

const TendaPaket = () => {
  const items = [
    // Sample data
    { id: 1, kodeReservasi: 'RSV001', nama: 'Paket Dome + Matras - 2 Orang', harga: '500,000', stok: 10 },
    { id: 2, kodeReservasi: 'RSV002', nama: 'Paket Dome + Matras - 2 Orang', harga: '300,000', stok: 5 },
    // Add more items as needed
  ];

  return (
    <div className='w-screen h-screen p-10'>
      <div className='flex flex-row gap-10 h-full'>
        <SidePanel/>
        <div className='flex flex-col py-3 w-full gap-8'>
          <HeaderBar title='Perlengkapan' searchTerm='' onSearchChange={() => {}} username='Admin'/>
          
          <div className='flex flex-col gap-10'>

            <div className='flex flex-col gap-3'>
              <div className='flex flex-row w-full justify-between items-center'>
                <span className='font-semibold'>Tenda Paket</span>
                <button className='px-3 py-2 bg-accent text-primary text-sm shadow-md rounded-md hover:bg-hover-green'>
                    Tambah Perlengkapan
                </button>
              </div>
              <div className='w-full bg-secondary h-[1px] mt-2'/>
              <div className='flex flex-col px-2 text-xs gap-1'>
                <div className='flex flex-row font-semibold'>
                  <span className='w-12 max-w-12'>No</span>
                  <span className='w-28 max-w-28'>Kode Barang</span>
                  <span className='w-64 max-w-64'>Nama</span>
                  <span className='w-28 max-w-28'>Harga</span>
                  <span className='w-28 max-w-28'>Stok</span>
                  <span className='w-28 max-w-28'>Aksi</span>
                </div>
                <div>
                  <ItemPerlengkapanList items={items} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TendaPaket