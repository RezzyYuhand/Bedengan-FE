import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Footer, Button } from '../../components/index'

const Masuk = () => {
  
  
  return (
    <div>
      <Navbar />
      <div className='flex flex-row gap-7 items-center justify-center w-full'>
        <div className='flex flex-col w-fit'>
          <div className='flex flex-col items-center'>
            <h2 className='font-semibold'>Masuk</h2>
            <p className='text-sm font-semibold text-center'>Selamat datang kembali di Bumi Perkemahan Bedengan </p>
          </div>

          <form className='flex flex-col gap-4'>
            
          </form>

          <div className='flex flex-col gap-2 items-center'>
            <Button className='w-full'>Masuk</Button>
            <div className='flex flex-row gap-1'>
              <p className='text-sm'>Belum punya akun?</p>
              <Link to='/daftar' className='text-sm text-blue-400 hover:text-blue-600 transition-colors duration-300'>Daftar</Link>
            </div>
          </div>
        </div>
        <img src="/images/background.JPG" alt="" className='rounded-md w-[33rem] h-[40rem]'/>
      </div>
      <Footer className='mt-20'/>
    </div>
  )
}

export default Masuk