import React, { useState } from 'react';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaPen, FaTrash } from "react-icons/fa6";
import { ConfirmationModal } from '../../components';

const OffReservationActionList = ({ reservations }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);

  const openDeleteModal = (reservation) => {
    setSelectedReservation(reservation);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedReservation(null);
    setIsModalOpen(false);
  };

  const handleEdit = (id) => {
    // Logic to navigate to the edit form for the reservation
    console.log(`Edit reservation with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Logic to delete reservation
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

          {/* Kavling */}
          <span className='w-14 max-w-14 text-center'>
            {reservation.kavling}
          </span>

          {/* Jenis Reservasi */}
          <span className='w-32 max-w-32 text-center'>
            {reservation.jenis}
          </span>

          {/* Status */}
          <span className='w-32 max-w-32 text-center'>
            {reservation.status}
          </span>

          {/* Action Buttons */}
          <span className='w-28 max-w-28 text-center flex items-center justify-center gap-1'>
            <button
              className='flex items-center justify-center w-6 h-6 bg-berlangsung text-white rounded'
              onClick={() => console.log(`Preview total pembayaran for reservation with ID: ${reservation.id}`)}
            >
              <MdOutlineRemoveRedEye />
            </button>
            <button
              className='flex items-center justify-center w-6 h-6 bg-accent-2 text-white rounded'
              onClick={() => handleEdit(reservation.id)}
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

      {/* Image Modal */}
      <DetailModal
        isOpen={isModalOpen}
        imageUrl={selectedImage}
        title={modalTitle}
        onClose={closeModal}
      />

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <ConfirmationModal
          title="Delete Reservation"
          message={`Are you sure you want to delete reservation ${selectedReservation?.kode}?`}
          onConfirm={() => handleDelete(selectedReservation.id)}
          onClose={closeModal}
        />
      )}
    </div>
  )
}

export default OffReservationActionList;
