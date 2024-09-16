import React from 'react'

const ReservasionList = ({ reservations }) => {
  return (
    <div className='flex flex-col gap-1'>
        {reservations.map((reservation, index) => (
        <div className='flex flex-row text-sm items-center' key={reservation.id}>
          <span className='w-14 max-w-14'>{index + 1}</span>
          <span className='w-32 max-w-32'>{reservation.kode}</span>
          <span className='w-56 max-w-56'>{reservation.nama}</span>
          <span className='w-28 max-w-28'>{reservation.tglMasuk}</span>
          <span className='w-28 max-w-28'>{reservation.tglKeluar}</span>
          <span className='w-20 max-w-20'>{reservation.kavling}</span>
          <span className='flex w-32 max-w-32 items-center justify-center'>
            <div
              className={`px-3 py-1 rounded-full ${
                reservation.jenis === 'Online' ? 'bg-accent-2' : 'bg-accent-3'
              }`}
            >
              {reservation.jenis}
            </div>
          </span>
          <span className='flex flex-row items-center gap-4 w-32 max-w-32'>
            <div
              className={`w-2 h-2 rounded-full ${
                reservation.status === 'Ditolak'
                  ? 'bg-ditolak'
                  : reservation.status === 'Berlangsung'
                  ? 'bg-berlangsung'
                  : reservation.status === 'Selesai'
                  ? 'bg-selesai'
                  : 'bg-menunggu'
              }`}
            />
            {reservation.status}
          </span>
        </div>
      ))}
    </div>
  )
}

export default ReservasionList