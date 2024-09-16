import React from 'react'
import { LuClock4 } from "react-icons/lu";
import { PiCopy } from "react-icons/pi";
import { FaXmark,  FaCheck  } from "react-icons/fa6";
import { Navbar, Footer, Button } from '../../components/index'

const Invoice = () => {
  return (
    <div>
        <Navbar />
        <div className='flex flex-col items-center gap-5 px-10 lg:px-28'>
            <div className='flex flex-col gap-3 items-center'>
                <h2 className='font-semibold text-2xl lg:text-4xl'>Menunggu Verifikasi</h2>
                <div className='flex bg-accent-wait w-fit h-fit p-4 items-center rounded-full'>
                    <LuClock4 className='text-center text-5xl text-secondary'/>
                </div>
                <div className='flex flex-row gap-3'>
                    <h2>INV/ KODE INVOICE</h2>
                    <button className='flex flex-row gap-3 items-center border-[1.5px] border-secondary px-4 py-1 rounded-full hover:bg-secondary hover:text-primary'>
                        <PiCopy/>
                        <span>Salin</span>
                    </button>
                </div>
            </div>
            <div className='w-full bg-secondary h-[1px]'/>
            <div className='flex flex-col  items-start gap-3 w-[29rem]'>
                <div className='flex flex-col gap-1'>
                    <span>Pembayaran dari:</span>
                    <span className='font-semibold'>John Doe</span>
                </div>
                <div className='flex flex-col gap-1'>
                    <span>Tanggal Pembayaran:</span>
                    <span className='font-semibold'>14 Mei 2024</span>
                </div>
                <div className='flex flex-col gap-1'>
                    <span>Nomor Kavling</span>
                    <span className='font-semibold'>A-13</span>
                </div>
            </div>
            <div className='w-full bg-secondary h-[1px]'/>
            <div className='w-[29rem]'>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-7'>
                        <div className='flex flex-row w-full'>
                            <span className='min-w-48 max-w-48 text-left'>Paket Dome-2</span>
                            <span className='min-w-40 max-w-40 text-center'>1x</span>
                            <span className='min-w-28 max-w-28 text-right'>Rp 10.000</span>
                        </div>
                        <div className='flex flex-row w-full'>
                            <span className='min-w-48 max-w-48 text-left'>PPN</span>
                            <span className='min-w-40 max-w-40 text-center'></span>
                            <span className='min-w-28 max-w-28 text-right'>Rp 10.000</span>
                        </div>
                        <div className='flex flex-row w-full'>
                            <span className='min-w-48 max-w-48 text-left'>Paket Dome-2</span>
                            <span className='min-w-40 max-w-40 text-center'>13x</span>
                            <span className='min-w-28 max-w-28 text-right'>Rp 100.000</span>
                        </div>
                    </div>
                <div className='w-full bg-secondary h-[1px]'/>
                    <div className='flex flex-row justify-between items-center'>
                        <span>Total Pembayaran</span>
                        <span className='font-semibold text-3xl'>Rp 60.000</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full gap-2 mt-4'>
                <Button className='w-full'>LIHAT RIWAYAT PESANAN</Button>
                <button className='w-full bg-primary text-sm px-7 py-3 rounded-lg hover:bg-accent shadow-md text-accent hover:text-primary 
                 border-[1.5px] border-accent transition-colors duration-300'>KEMBALI KE BERANDA</button>
            </div>
        </div>
        <Footer className='mt-20' />
    </div>
  )
}

export default Invoice