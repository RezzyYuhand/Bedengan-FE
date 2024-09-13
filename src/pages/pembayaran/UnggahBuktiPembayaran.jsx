import React from 'react'
import { Button } from '../../components'

const UnggahBuktiPembayaran = () => {
  return (
    <div className='flex flex-col items-center gap-3 px-28'>
        <div className='flex flex-col items-center'>
            <h2 className='font-semibold'>Pembayaran</h2>
            <p className='text-secondary-gray'>Unggah Bukti Pembayaran</p>
        </div>

        <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col gap-4 border-[1.5px] border-secondary rounded-md px-7 py-6'>
                <span className='text-left px-4'>Ketentuan Bukti Pembayaran</span>
                <div className='w-full bg-secondary h-[1px]'/>
                <div className='flex flex-row w-full'> 
                    <div className='flex flex-col gap-4 w-[50%] px-4'>
                        <ul className='px-4'>
                            <li className='text-accent font-bold list-disc'>Tanggal/Waktu Pembayaran</li>
                            <li className='list-none '>Contoh: 14/05 23:59:01</li>
                        </ul>
                        <ul className='px-4'>
                            <li className='text-accent font-bold list-disc'>Status Berhasil</li>
                            <li className='list-none '>Contoh: BERHASIL</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-4 w-[50%] px-4'>
                        <ul className='px-4'>
                            <li className='text-accent font-bold list-disc'>Detail Penerima</li>
                            <li className='list-none '>Contoh: YOGIK INDRA PRATAMA</li>
                        </ul>
                        <ul className='px-4'>
                            <li className='text-accent font-bold list-disc'>Jumlah Transfer</li>
                            <li className='list-none '>Contoh: Rp 80.000</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className='text-accent font-bold'>Keterangan Tambahan</p>
                    <p>Bagi pendaftar kelompok/acara, silahkan mengunggah <strong>surat keterangan acara</strong> beserta <strong>bukti pembayaran</strong> pada kolom file di bawah ini!</p>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <label className="font-semibold">Upload Bukti Pembayaran</label>
                <label className='text-xs'>(Maks 2MB, format JPEG/PNG)</label>
                <Button>Pilih Bukti Pembayaran</Button>
                <input
                    id='buktiPembayaranInput'
                    type="file"
                    accept="image/jpeg, image/png, application/pdf"
                    className="hidden"
                    required
                />
            </div>
            <Button className='w-full'>Unggah Bukti Transfer</Button>
        </div>
    </div>
  )
}

export default UnggahBuktiPembayaran