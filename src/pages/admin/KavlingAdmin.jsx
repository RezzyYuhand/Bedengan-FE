import React from 'react'
import { useNavigate } from 'react-router-dom'
import SidePanel from './SidePanel'
import HeaderBar from './HeaderBar'
import KavlingList from './KavlingList'

const KavlingAdmin = () => {
  const kavlings = [
    // Sample data
    { id: 1, ground: 'Ground 1', nomorGround: '001', nomorKavling: 'K001', isAvailable: true },
    { id: 2, ground: 'Ground 2', nomorGround: '002', nomorKavling: 'K002', isAvailable: false },
    // Add more kavlings as needed
  ];

  const navigate = useNavigate();

  const handleAddKavling = () => {
    // Logic to navigate to the add kavling form
    navigate('/admin/perlengkapan/kavling/tambah');
  }
  

  return (
    <div className='w-screen h-screen p-10'>
      <div className='flex flex-row gap-10 h-full'>
        <SidePanel/>
        <div className='flex flex-col py-3 w-full gap-8'>
          <HeaderBar title='Perlengkapan' searchTerm='' onSearchChange={() => {}} username='Admin'/>
          
          <div className='flex flex-col gap-10'>

            <div className='flex flex-col gap-3'>
              <div className='flex flex-row w-full justify-between items-center'>
                <span className='font-semibold'>Kavling</span>
                <button onClick={handleAddKavling} className='px-3 py-2 bg-accent text-primary text-sm shadow-md rounded-md hover:bg-hover-green'>
                    Tambah Kavling
                </button>
              </div>
              <div className='w-full bg-secondary h-[1px] mt-2'/>
              <div className='flex flex-col px-2 text-xs gap-1'>
                <div className='flex flex-row font-semibold'>
                  <span className='w-12 max-w-12'>No</span>
                  <span className='w-28 max-w-28'>Ground</span>
                  <span className='w-28 max-w-28'>Nomor Ground</span>
                  <span className='w-28 max-w-28'>Nomor Kavling</span>
                  <span className='w-28 max-w-28'>Status</span>
                  <span className='w-28 max-w-28'>Aksi</span>
                </div>
                <div>
                    <KavlingList kavlings={kavlings} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KavlingAdmin