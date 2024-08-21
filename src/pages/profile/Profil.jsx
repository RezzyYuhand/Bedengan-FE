import React, { useState } from 'react'
import { MdOutlinePersonOutline } from "react-icons/md";
import { RiFileList2Line } from "react-icons/ri";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { HiOutlineUpload } from "react-icons/hi";
import { FiTrash } from "react-icons/fi";
import { Navbar, Footer, Button } from '../../components/index'

const Profil = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-row justify-center gap-6 w-screen px-28'>
        <ol className='flex flex-col items-start pt-3 min-w-64 gap-6 border-r-[1.5px] border-inactive-gray-2'>
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
        <div className='flex flex-col gap-5 w-full'>
          <h2 className='font-semibold'>Title</h2>
          <div className='flex flex-col gap-6 w-full'>
            <div className='flex flex-row gap-6 items-center border-[1.5px] border-inactive-gray-2 px-5 py-3 rounded-md'>
              <img src="/images/background.JPG" alt="" className='w-16 h-16 rounded-full'/>
              <Button className='flex flex-row items-center gap-2 h-10'><HiOutlineUpload/>Upload</Button>
              <Button className='flex flex-row bg-white border-2 border-red-600 text-red-600 items-center gap-2 h-10 hover:bg-red-600 hover:text-white'><FiTrash/>Hapus</Button>
            </div>
            <div className='flex flex-col gap-5 border-[1.5px] border-inactive-gray-2 px-5 py-3 rounded-md'>
              <div className='flex flex-col gap-3'>
                  <label className='font-medium'>Nama</label>
                  <input
                      type="tel"
                      name="phoneNumber"
                      placeholder='Nomor yang bisa dihubungi'
                      className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 text-sm"
                      required
                  />
              </div>
              <div className='flex flex-col gap-3'>
                  <label className='font-medium'>Email</label>
                  <input
                      type="email"
                      name="phoneNumber"
                      placeholder='Nomor yang bisa dihubungi'
                      className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 text-sm"
                      required
                  />
              </div>
              <div className='flex flex-col gap-3'>
                  <label className='font-medium'>Nomor Telepon</label>
                  <input
                      type="tel"
                      name="phoneNumber"
                      placeholder='Nomor yang bisa dihubungi'
                      className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 text-sm"
                      required
                  />
              </div>
              <Button>Simpan Perubahan</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer className='mt-20' />
    </div>
  )
}

export default Profil