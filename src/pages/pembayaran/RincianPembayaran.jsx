import React from 'react'
import { Button } from '../../components'

const RincianPembayaran = () => {
  return (
    <div className='flex flex-col items-center gap-3 px-28'>
        <div className='flex flex-col items-center'>
            <h2 className='font-semibold'>Pembayaran</h2>
            <p className='text-secondary-gray'>Rincian Pembayaran</p>
        </div>

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
            <Button className='w-full'>Selanjutnya</Button>
        </div>
    </div>
  )
}

export default RincianPembayaran