import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaXmark, FaCheck } from "react-icons/fa6";
import { DetailModal } from '../../components';
import { toast } from 'react-toastify';
import { rejectInvoiceReservasi, verifyInvoiceReservasi } from '../../services/invoiceService'; // Import the API methods

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

  const handleApprove = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await verifyInvoiceReservasi(token, id);
      if (response?.message === 'success') {
        toast.success('Reservation approved successfully');
        // Optionally update the UI with new data or refresh the list
      } else {
        toast.error('Failed to approve reservation');
      }
    } catch (error) {
      toast.error('Failed to approve reservation');
      console.error('Error approving reservation:', error);
    }
  };
  
  const handleReject = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await rejectInvoiceReservasi(token, id);
      if (response?.message === 'success') {
        toast.success('Reservation rejected successfully');
        // Optionally update the UI with new data or refresh the list
      } else {
        toast.error('Failed to reject reservation');
      }
    } catch (error) {
      toast.error('Failed to reject reservation');
      console.error('Error rejecting reservation:', error);
    }
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
            Rp {reservation.total}
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
          <span className='flex flex-row items-center justify-center gap-4 w-32 max-w-32'>
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
  );
};

export default ReservasionActionList;
