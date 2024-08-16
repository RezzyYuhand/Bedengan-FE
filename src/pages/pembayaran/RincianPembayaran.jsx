import React from 'react'
import { Button } from '../../components'

const RincianPembayaran = () => {
  return (
    <div className='flex flex-col items-center gap-3 px-28'>
        <div className='flex flex-col items-center'>
            <h2 className='font-semibold'>Pembayaran</h2>
            <p className='text-secondary-gray'>Metode Pembayaran</p>
        </div>

        <div className='flex flex-col'>
            <div className='flex flex-row justify-between'>
                <p>items</p>
                <p>itemcount</p>
                <p>price</p>
            </div>

            <div className='bg-secondary w-fit h-[0.2rem]'/>

            <div className=''>
                <p>total</p>
                <h2>harga</h2>
            </div>

            <Button className='w-full'>Selanjutnya</Button>
            
        </div>
    </div>
  )
}

export default RincianPembayaran