import React from 'react'
import { PesananCard } from '../../components'

const ContentRiwayat = () => {
  const orders = [
    { kodePesanan: '1236', nomorKavling: 'A-12', tanggalKedatangan: '20 Agustus 2024', status: 'SELESAI' },
    { kodePesanan: '1237', nomorKavling: 'A-11', tanggalKedatangan: '21 Agustus 2024', status: 'PEMBAYARAN GAGAL' },
  ]

  return (
    <div className='flex flex-col gap-5 w-full'>
        <h2 className='font-semibold'>Riwayat</h2>
        <div className='flex flex-col gap-5 w-full'>
          {orders.map((order, index) => (
            <PesananCard
              key={index}
              kodePesanan={order.kodePesanan}
              nomorKavling={order.nomorKavling}
              tanggalKedatangan={order.tanggalKedatangan}
              status={order.status}
            />
          ))}
        </div>
    </div>
  )
}

export default ContentRiwayat