import React, { useState } from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaPen, FaTrash } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { ConfirmationModal } from '../../components';

const OffReservationActionList = ({ reservations }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);

  const navigate = useNavigate();

  const openDeleteModal = (reservation) => {
    setSelectedReservation(reservation);
    setIsDeleteModalOpen(true);
  };

  const closeModals = () => {
    setSelectedReservation(null);
    setIsDeleteModalOpen(false);
    setIsDetailModalOpen(false);
  };

  const handleEdit = (reservation) => {
    // Navigate to the update page with reservation data
    navigate('/admin/reservasi/offline/update', { state: { reservation } });
  };

  const handleDelete = (id) => {
    console.log(`Delete reservation with ID: ${id}`);
  };

  return (
    <div className='flex flex-col gap-1'>
      {reservations.map((reservation, index) => (
        <div className='flex flex-row text-xs items-center' key={reservation.id}>
          <span className='w-12 max-w-12'>{index + 1}</span>
          <span className='w-28 max-w-28'>{reservation.kode}</span>
          <span className='w-44 max-w-44'>{reservation.nama}</span>
          <span className='w-28 max-w-28'>{reservation.tglMasuk}</span>
          <span className='w-28 max-w-28'>{reservation.tglKeluar}</span>
          <span className='w-14 max-w-14 text-center'>{reservation.kavling}</span>
          <span className='flex items-center justify-center w-32 max-w-32'>
            <span className={`w-fit px-2 py-1 rounded-full ${reservation.jenisPembayaran === 'Cash' ? 'bg-selesai' : 'bg-berlangsung'}`}>
              {reservation.jenisPembayaran}
            </span>
          </span>
          <span className='flex flex-row items-center justify-center gap-4 w-32 max-w-32'>
            <div className={`w-2 h-2 rounded-full ${
              reservation.status === 'Ditolak'
                ? 'bg-ditolak'
                : reservation.status === 'Berlangsung'
                ? 'bg-berlangsung'
                : reservation.status === 'Selesai'
                ? 'bg-selesai'
                : 'bg-menunggu'
            }`} />
            {reservation.status}
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
      ))}

      {isDeleteModalOpen && (
        <ConfirmationModal
          title="Delete Reservation"
          message={`Apakah anda yakin untuk menghapus reservasi dengan kode ${selectedReservation?.kode}?`}
          onConfirm={() => handleDelete(selectedReservation.id)}
          onClose={closeModals}
          type='hapus'
        />
      )}
    </div>
  );
};

export default OffReservationActionList;