import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaXmark, FaCheck } from "react-icons/fa6";
import { DetailModal } from '../../components';


const ReservasionActionList = ({ reservations }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const openImageModal = (imageUrl, title) => {
    setSelectedImage(imageUrl);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const handleApprove = (id) => {
    // Logic to approve reservation
    console.log(`Approve reservation with ID: ${id}`);
  };

  const handleReject = (id) => {
    // Logic to reject reservation
    console.log(`Reject reservation with ID: ${id}`);
  };

  const openDetailPage = (reservation) => {
    if (reservation.jenisPengunjung === 'Individu') {
      navigate('/admin/reservasi/online/detail', { state: { reservation } });
    } else if (reservation.jenisPengunjung === 'Kelompok') {
      navigate('/admin/reservasi/online/detail-kelompok', { state: { reservation } });
    }
    console.log(`Open detail for reservation with ID: ${reservation.id}`);
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
          
          {/* KTP Button */}
          <span className='flex items-center justify-center w-10 max-w-10 text-center'>
            <button
              className='flex items-center justify-center w-6 h-6 bg-berlangsung text-white rounded'
              onClick={() => openImageModal(reservation.ktpImage, 'KTP')}
            >
              <MdOutlineRemoveRedEye />
            </button>
          </span>

          {/* Total Price */}
          <span className='w-28 max-w-28 text-center'>
            {reservation.totalPrice}
          </span>

          {/* Bukti Button */}
          <span className='flex items-center justify-center w-10 max-w-10 text-center'>
            <button
              className='flex items-center justify-center w-6 h-6 bg-berlangsung text-white rounded'
              onClick={() => openImageModal(reservation.buktiImage, 'Bukti Pembayaran')}
            >
              <MdOutlineRemoveRedEye />
            </button>
          </span>

          {/* Status */}
          <span className='w-32 max-w-32 text-center'>
            {reservation.status}
          </span>

          {/* Action Buttons */}
          <span className='w-28 max-w-28 text-center flex items-center justify-center gap-1'>
            <button
              className='flex items-center justify-center w-6 h-6 bg-berlangsung text-white rounded'
              onClick={() => openDetailPage(reservation)}
            >
              <MdOutlineRemoveRedEye />
            </button>
            <button
              className='flex items-center justify-center w-6 h-6 bg-selesai text-white rounded'
              onClick={() => handleApprove(reservation.id)}
            >
              <FaCheck />
            </button>
            <button
              className='flex items-center justify-center w-6 h-6 bg-ditolak text-white rounded'
              onClick={() => handleReject(reservation.id)}
            >
              <FaXmark />
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
    </div>
  )
}

export default ReservasionActionList