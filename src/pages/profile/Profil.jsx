import React, { useState } from 'react'
import { MdOutlinePersonOutline } from "react-icons/md";
import { RiFileList2Line } from "react-icons/ri";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { Navbar, Footer } from '../../components/index'

const Profil = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-row items-center'>
        <ol className='flex flex-col items-start'>
          <li className='flex flex-row gap-2 items-center'>
            <MdOutlinePersonOutline className='text-lg'/>
            Profil
          </li>
          <li className='flex flex-row gap-2 items-center'>
            <RiFileList2Line className='text-lg'/>
            Pesanan
          </li>
          <li className='flex flex-row gap-2 items-center'>
            <PiClockCounterClockwiseBold className='text-lg'/>
            Riwayat Pesanan
          </li>
        </ol>
        <div className='flex flex-col'>
          <h2 className='font-semibold'>Title</h2>
          <div>
            content
          </div>
        </div>
      </div>
      <Footer className='mt-20' />
    </div>
  )
}

export default Profil