import React from 'react'
import { PesananCard } from '../../components'

const ContentPesanan = () => {
  const orders = [
    { kodePesanan: '1234', nomorKavling: 'A-13', tanggalKedatangan: '10 Agustus 2024', status: 'BERHASIL' },
    { kodePesanan: '1235', nomorKavling: 'A-15', tanggalKedatangan: '11 Agustus 2024', status: 'MENUNGGU PEMBAYARAN' },
  ]
  
  return (
    <div className='flex flex-col gap-5 w-full'>
        <h2 className='font-semibold'>Pesanan</h2>
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

export default ContentPesanan