import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SidePanel from './SidePanel';
import HeaderBar from './HeaderBar';
import { DetailModal } from '../../components';
import { rejectInvoiceReservasi, verifyInvoiceReservasi } from '../../services/invoiceService';
import { toast } from 'react-toastify';

const OnlineDetailKelompok = () => {
  const { state } = useLocation();
  const { reservation } = state || {};
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

  const handleRejectPayment = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await rejectInvoiceReservasi(token, id);
      if (response?.message === 'success') {
        toast.success('Reservation rejected successfully');
      } else {
        toast.error('Failed to reject reservation');
      }
    } catch (error) {
      toast.error('Failed to reject reservation');
      console.error('Error rejecting reservation:', error);
    }
  };

  const handleApprovePayment = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await verifyInvoiceReservasi(token, id);
      if (response?.message === 'success') {
        toast.success('Reservation approved successfully');
        navigate('/admin/reservasi/online');
      } else {
        toast.error('Failed to approve reservation');
      }
    } catch (error) {
      toast.error('Failed to approve reservation');
      console.error('Error approving reservation:', error);
    }
  };

  const formatDate = (dateString) => {
    const [month, day, year] = dateString.split('/');
    const date = new Date(`${year}-${month}-${day}`);
    if (isNaN(date)) return '';
    
    return date.toISOString().split('T')[0];
  };

  return (
    <div className='w-screen h-screen p-10'>
      <div className='flex flex-row gap-10 h-full'>
        <SidePanel/>
        <div className='flex flex-col py-3 w-full gap-8'>
          <HeaderBar title='Reservasi' searchTerm='' onSearchChange={() => {}} username='Admin'/>
          
          <div className='flex flex-col gap-10'>

            <div className='flex flex-col gap-3'>
              <div className='flex flex-row w-full justify-between items-center'>
                <span className='font-semibold'>Reservasi Online</span>
              </div>
              <div className='w-full bg-secondary h-[1px] mt-2'/>
              <form className='flex flex-col gap-4 text-xs'>
                <div className='flex flex-col gap-2'>
                  <label className="font-semibold">Kode Reservasi</label>
                  <input
                    type="text"
                    name="reservationCode"
                    className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                    readOnly
                    value={reservation?.kode || ''}
                  />
                </div>

                <div className='flex flex-col gap-2'>
                  <label className="font-semibold">Jenis Pengunjung</label>
                  <select
                    name="visitorType"
                    className="block appearance-none px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                    value={reservation?.jenisPengunjung || ''}
                  >
                    <option>Pilih</option>
                    <option value="individu">Individu</option>
                    <option value="kelompok">Kelompok</option>
                  </select>
                </div>

                <div className='flex flex-row gap-5'>
                  <div className='flex flex-col gap-2 w-full'>
                    <label className="font-semibold">Nama</label>
                    <input
                      type="text"
                      name="name"
                      className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                      value={reservation?.nama || ''}
                    />
                  </div>
                  <div className='flex flex-col gap-2 w-full'>
                    <label className="font-semibold">Nomor Telepon</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                      value={reservation?.telepon || ''}
                    />
                  </div>
                </div>

                <div className='flex flex-row gap-5'>
                  <div className='flex flex-col gap-2 w-full'>
                    <label className="font-semibold">Jenis Tenda</label>
                    <select
                      name="tentType"
                      className="block appearance-none px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                    >
                      <option>Pilih</option>
                      <option value="Dome - 2 Orang">Dome - 2 Orang</option>
                      <option value="Dome - 4 Orang">Dome - 4 Orang</option>
                      <option value="Dome - 8 Orang">Dome - 8 Orang</option>
                    </select>
                  </div>
                  <div className='flex flex-col gap-2 w-full'>
                    <label className="font-semibold">Jumlah</label>
                    <input
                      type="number"
                      name="tentQuantity"
                      className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                      value={reservation?.jumlah || ''}
                    />
                  </div>
                </div>

                <div className='flex flex-row gap-5'>
                  <div className='flex flex-col gap-2 w-full'>
                    <label className="font-semibold">Tanggal Kedatangan</label>
                    <input
                      type="date"
                      name="arrivalDate"
                      className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                      value={reservation?.tglMasuk ? formatDate(reservation.tglMasuk) : ''}
                    />
                  </div>
                  <div className='flex flex-col gap-2 w-full'>
                    <label className="font-semibold">Tanggal Kepulangan</label>
                    <input
                      type="date"
                      name="departureDate"
                      className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                      value={reservation?.tglKeluar ? formatDate(reservation.tglMasuk) : ''}
                    />
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <span className="font-semibold">Pembayaran</span>
                  <div className='flex flex-row gap-5'>
                    <div className='w-full'>
                      <label className="font-semibold">Total Pembayaran</label>
                      <input
                        type="text"
                        name="totalPayment"
                        className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                        readOnly
                        value={reservation?.total || ''}
                      />
                    </div>
                    <div className='w-full'>
                      <label className="font-semibold">Kavling</label>
                      <input
                        type="text"
                        name="kavling"
                        className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                        readOnly
                        value="Kavling A2"
                      />
                    </div>
                  </div>
                </div>

                <div className='flex flex-row gap-5'>
                  <div className='flex flex-col gap-2 w-full'>
                    <label className="font-semibold">KTP</label>
                    <button
                      className="block px-3 py-2 w-fit text-primary bg-accent hover:bg-hover-green rounded-md"
                      type="button"
                      onClick={() => openImageModal(reservation?.ktpImage, 'KTP')}
                    >
                      Lihat KTP
                    </button>
                  </div>
                  <div className='flex flex-col gap-2 w-full'>
                    <label className="font-semibold">Bukti Pembayaran</label>
                    <button
                      className="block px-3 py-2 w-fit text-primary bg-accent hover:bg-hover-green rounded-md"
                      type="button"
                      onClick={() => openImageModal(reservation?.buktiImage, 'Bukti Pembayaran')}
                    >
                      Lihat Bukti Pembayaran
                    </button>
                  </div>
                  <div className='flex flex-col gap-2 w-full'>
                    <label className="font-semibold">Surat Keterangan</label>
                    <button
                      className="block px-3 py-2 w-fit text-primary bg-accent hover:bg-hover-green rounded-md"
                      type="button"
                      onClick={() => openImageModal(reservation?.perizinanImage, 'Surat Keterangan')}
                    >
                      Lihat Surat Keterangan
                    </button>
                  </div>
                  <div className='flex flex-col gap-2 w-full'>
                    <label className="font-semibold">Detail Pembayaran</label>
                    <button
                      className="block px-3 py-2 w-fit text-primary bg-accent hover:bg-hover-green rounded-md"
                      type="button"
                      onClick={() => openModal('later','Detail Pembayaran')}
                    >
                      Lihat Detail Pembayaran
                    </button>
                  </div>
                </div>
                <div className='flex flex-row gap-5 justify-end w-full'>
                  <button
                    className='px-4 py-2 border-[1.5px] text-red-600 border-red-600 bg-primary hover:bg-red-600 hover:text-primary rounded shadow-md'
                    type='button'
                    onClick={() => handleRejectPayment(reservation.id)}
                  >
                    Tolak Pembayaran
                  </button>
                  <button
                    className='px-4 py-2 bg-accent hover:bg-hover-green text-white rounded shadow-md'
                    type='button'
                    onClick={() => handleApprovePayment(reservation.id)}
                  >
                    Verifikasi Pembayaran
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <DetailModal
        isOpen={isModalOpen}
        imageUrl={selectedImage}
        title={modalTitle}
        onClose={closeModal}
      />
    </div>
  )
}

export default OnlineDetailKelompok