import React, { useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { ConfirmationModal } from '../../components';

const OffReservationActionList = ({ reservations }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);

  const navigate = useNavigate();

  const openDeleteModal = (reservation) => {
    setSelectedReservation(reservation);
    setIsDeleteModalOpen(true);
  };

  const closeModals = () => {
    setSelectedReservation(null);
    setIsDeleteModalOpen(false);
  };

  const handleEdit = (reservation) => {
    navigate('/admin/reservasi/offline/update', { state: { reservation } });
  };

  const handleDelete = (id) => {
    console.log(`Delete reservation with ID: ${id}`);
  };
  

  return (
    <div className='flex flex-col gap-1'>
      {reservations.map((reservation, index) => {
        const { nomor_invoice, keterangan, tanggal_kedatangan, tanggal_kepulangan, reservasi, status } = reservation;
        const parsedKeterangan = JSON.parse(keterangan); // Parse the 'keterangan' field to get 'nama' and 'jenis_pembayaran'
        const kavling = reservasi.length > 0 ? reservasi[0].kavling.nama : 'N/A';

        return (
          <div className='flex flex-row text-xs items-center' key={reservation.id}>
            <span className='w-12 max-w-12'>{index + 1}</span>
            <span className='w-28 max-w-28'>{nomor_invoice}</span>
            <span className='w-44 max-w-44'>{parsedKeterangan.nama}</span>
            <span className='w-28 max-w-28'>{new Date(tanggal_kedatangan).toLocaleDateString()}</span>
            <span className='w-28 max-w-28'>{new Date(tanggal_kepulangan).toLocaleDateString()}</span>
            <span className='w-14 max-w-14 text-center'>{kavling}</span>
            <span className='flex items-center justify-center w-32 max-w-32'>
              <span className={`w-fit px-2 py-1 rounded-full ${parsedKeterangan.jenis_pembayaran === 'Cash' ? 'bg-selesai' : 'bg-berlangsung'}`}>
                {parsedKeterangan.jenis_pembayaran}
              </span>
            </span>
            <span className='flex flex-row items-center justify-center gap-4 w-32 max-w-32'>
              <div
                className={`w-2 h-2 rounded-full ${
                  status === 'ditolak'
                    ? 'bg-ditolak'
                    : status === 'berlangsung'
                    ? 'bg-berlangsung'
                    : status === 'selesai'
                    ? 'bg-selesai'
                    : 'bg-menunggu'
                }`}
              />
              {status}
            </span>
            <span className='w-28 max-w-28 text-center flex items-center justify-center gap-1'>
              <button
                className='flex items-center justify-center w-6 h-6 bg-selesai text-white rounded'
                onClick={() => handleEdit(reservation)}
              >
                <FaPen />
              </button>
              <button
                className='flex items-center justify-center w-6 h-6 bg-ditolak text-white rounded'
                onClick={() => openDeleteModal(reservation)}
              >
                <FaTrash />
              </button>
            </span>
          </div>
        );
      })}

      {isDeleteModalOpen && (
        <ConfirmationModal
          title="Delete Reservation"
          message={`Apakah anda yakin untuk menghapus reservasi dengan kode ${selectedReservation?.nomor_invoice}?`}
          onConfirm={() => handleDelete(selectedReservation.id)}
          onClose={closeModals}
          type='hapus'
        />
      )}
    </div>
  );
};

export default OffReservationActionList;
