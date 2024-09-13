import React from 'react'
import { Button } from '../../components'

const InformasiPembayaran = () => {
  return (
    <div className='flex flex-col items-center gap-3 px-28'>
        <div className='flex flex-col items-center'>
            <h2 className='font-semibold'>Pembayaran</h2>
            <p className='text-secondary-gray'>Rincian Pembayaran</p>
        </div>

        <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-col gap-4 max-w-96'>
                    <div className='flex flex-col  gap-4 border-[1.5px] border-secondary rounded-md px-7 py-6'>
                        <span className='text-left w-full px-3'>Total Tagihan</span>
                        <div className='w-full bg-secondary h-[1px]'/>
                        <div className='flex flex-row items-center '>
                            <span className='w-60 text-center text-2xl font-semibold'>Rp 100.000</span>
                            <button className='flex flex-row gap-1 px-6 py-2 border-[1.5px] border-secondary rounded-full '>Salin</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 border-[1.5px] border-secondary rounded-md px-7 py-6'>
                        <span className='px-3'>Informasi Pembayaran</span>
                        <div className='w-full bg-secondary h-[1px]'/>
                        <ol className='flex flex-col gap-1 list-decimal px-3'>
                            <li>Lakukan pembayaran sesuai jumlah  tagihan ke rekening tertera.</li>
                            <li>Pastikan penerima atas nama <strong>YOGIK INDRA PRATAMA</strong></li>
                            <li>Tunggu verifikasi dari admin Bumi Perkemahan Bedengan maksimal 1x24 jam.</li>
                        </ol>
                    </div>
                </div>
                <div className='flex flex-col gap-3 w-[35rem] h-fit border-[1.5px] border-secondary rounded-md px-7 py-6'>
                    <div className='flex flex-row items-center w-full justify-between'>
                        <span className='text-left px-3'>Pembayaran via Transfer</span>
                        <span className='px-5 py-2 bg-orange-400 text-sm text-primary rounded-full'>Menunggu Pembayaran</span>
                    </div>
                    <div className='w-full bg-secondary h-[1px]'/>
                    <div className='flex flex-col gap-8 items-center'>
                        <span className='text-center'>Segera lakukan pembayaran Anda dengan mentransfer pembayaran ke rekening berikut</span>
                        <div className='flex flex-row items-center'>
                            <span className='w-60 text-center text-2xl font-semibold'>0190784771</span>
                            <button className='flex flex-row gap-1 px-6 py-2 border-[1.5px] border-secondary rounded-full '>Salin</button>
                        </div>
                        <span>AN. YOGIK INDRA PRATAMA</span>
                    </div>
                </div>
            </div>
            <div className='w-full bg-secondary h-[1px]'/>
            <Button className='w-full'>UNGGAH BUKTI PEMBAYARAN</Button>
        </div>
    </div>
  )
}

export default InformasiPembayaran