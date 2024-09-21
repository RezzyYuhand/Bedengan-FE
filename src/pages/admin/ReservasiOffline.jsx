import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SidePanel from './SidePanel';
import HeaderBar from './HeaderBar';
import OffReservationActionList from './OffReservationActionList';
import { getAllInvoiceReservasiAdmin } from '../../services/invoiceService'; // Updated import to use the admin API

const ReservasiOffline = () => {
  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await getAllInvoiceReservasiAdmin(token); // Use the admin API
        setReservations(response.data);  // Set the 'data' field from the API response
      } catch (error) {
        console.error('Error fetching reservations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  const handleAddReservation = () => {
    navigate('/admin/reservasi/offline/tambah');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-screen h-screen p-10'>
      <div className='flex flex-row gap-10 h-full'>
        <SidePanel />
        <div className='flex flex-col py-3 w-full gap-8'>
          <HeaderBar title='Reservasi' searchTerm='' onSearchChange={() => {}} username='Admin' />

          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-row w-full justify-between items-center'>
                <span className='font-semibold'>Reservasi Offline</span>
                <button 
                  onClick={handleAddReservation}
                  className='px-3 py-2 bg-accent text-primary text-sm shadow-md rounded-md hover:bg-hover-green'
                >
                    Tambah Reservasi
                </button>
              </div>
              <div className='w-full bg-secondary h-[1px] mt-2' />
              <div className='flex flex-col px-2 text-xs gap-1'>
                <div className='flex flex-row font-semibold'>
                  <span className='w-12 max-w-12'>No</span>
                  <span className='w-28 max-w-28'>Kode Reservasi</span>
                  <span className='w-44 max-w-44'>Nama</span>
                  <span className='w-28 max-w-28'>Tgl Masuk</span>
                  <span className='w-28 max-w-28'>Tgl Keluar</span>
                  <span className='w-14 max-w-14 text-center'>Kavling</span>
                  <span className='w-32 max-w-32 text-center'>Jenis Pembayaran</span>
                  <span className='w-32 max-w-32 text-center'>Status</span>
                  <span className='w-28 max-w-28 text-center'>Aksi</span>
                </div>
                <div>
                  <OffReservationActionList reservations={reservations} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservasiOffline;
