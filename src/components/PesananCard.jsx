import React from 'react'

const PesananCard = ({ kodePesanan, nomorKavling, tanggalKedatangan, status }) => {
  
  const getStatusColor = (status) => {
    switch(status) {
      case 'BERHASIL':
        return 'bg-accent'
      case 'MENUNGGU PEMBAYARAN':
        return 'bg-orange-500'
      case 'SELESAI':
        return 'bg-accent'
      case 'PEMBAYARAN GAGAL':
        return 'bg-red-500'
      default:
        return 'bg-inactive-gray-2'
    }
  }
  const getButtonText = (status) => {
    switch(status) {
      case 'BERHASIL':
        return 'Lihat Detail Pesanan'
      case 'MENUNGGU PEMBAYARAN':
        return 'Lanjutkan Pembayaran'
      case 'SELESAI':
        return 'Lihat Detail Pesanan'
      case 'PEMBAYARAN GAGAL':
        return null;
      default:
        return null;
    }
  }

  const buttonText = getButtonText(status);

  return (
    <div className='flex flex-col gap-3 px-4 py-4 w-full rounded-md border-[1.5px] border-inactive-gray-2'>
      <p className='text-sm'>Kode Pesanan: {kodePesanan}</p>
      <div className='flex flex-col gap-2'>
        <p className='font-semibold'>Nomor Kavling: {nomorKavling}</p>
        <p className='font-semibold'>Tanggal Kedatangan: {tanggalKedatangan}</p>
        <div className='flex flex-row justify-between items-center'>
          <p className={`px-3 py-1 rounded-full ${getStatusColor(status)} text-xs text-primary`}>{status}</p>
          {buttonText ? (
            <button
              className='bg-accent text-sm text-primary px-7 py-3 rounded-lg w-fit hover:bg-hover-green shadow-md
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-300'>
              {buttonText}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default PesananCard