import React from 'react'
import { Navbar, Footer, Button } from '../../components'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Kavling = () => {
  return (
    <div>
        <Navbar />
        <div className='flex flex-col items-center gap-6 px-10 lg:px-28'>
            <h2 className='font-semibold text-2xl lg:text-4xl'>Pilih Kavling</h2>
            <div className='flex flex-col gap-4'>
              <h3 className='text-xl font-semibold'>Ground A</h3>
              <div className='flex flex-row gap-3'>
                <button><IoIosArrowBack/></button>
                <img src="/images/background.JPG" alt="" className='h-64 w-[35rem]' />
                <button><IoIosArrowForward/></button>
              </div>
              <h3 className='text-xl font-semibold'>Pilih Kavling</h3>
              <div className='flex flex-col gap-3'>
                <ol className='flex flex-row font-semibold gap-5 cursor-pointer'>
                  <li>A1</li>
                  <li>A2</li>
                  <li>A3</li>
                  <li>A4</li>
                </ol>
                <div className='flex flex-col gap-3 items-center rounded-md border-[1.5px] px-4 py-7 border-inactive-gray-2'>
                  <ol className='flex flex-row gap-4 text-secondary cursor-pointer'>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                  </ol>
                  <ol className='flex flex-row gap-4 text-secondary cursor-pointer'>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                  </ol>
                  <ol className='flex flex-row gap-4 text-secondary cursor-pointer'>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                    <li className='bg-accent-2 p-3 rounded-lg'>A1.1</li>
                  </ol>
                </div>
                <div className='flex flex-row  gap-4 justify-center w-full'>
                  <div className='flex flex-row gap-1 items-center'>
                    <div className='p-[0.5rem] bg-accent-2 rounded-full'/>
                    <p className='text-sm'>Tersedia</p>
                  </div>
                  <div className='flex flex-row gap-1 items-center'>
                    <div className='p-[0.5rem] bg-accent rounded-full'/>
                    <p className='text-sm'>Terpilih</p>
                  </div>
                  <div className='flex flex-row gap-1 items-center'>
                    <div className='p-[0.5rem] bg-red-700 rounded-full'/>
                    <p className='text-sm'>Tidak Tersedia</p>
                  </div>
                </div>
                <h3 className='text-xl font-semibold'>Detail Harga</h3>
                <div className='flex flex-col gap-1'>
                  <div className='flex flex-row'>
                    <p className='w-28 max-w-28'>Jenis Tenda</p>
                    <p>: Tenda Dome - 6 Orang</p>
                  </div>
                  <div className='flex flex-row'>
                    <p className='w-28 max-w-28'>Kavling</p>
                    <p>: A1.1 dan A1.2</p>
                  </div>
                  <div className='flex flex-row'>
                    <p className='w-28 max-w-28'>Harga</p>
                    <p>: Rp 85.000</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <Footer className='mt-20'/>
    </div>
  )
}

export default Kavling