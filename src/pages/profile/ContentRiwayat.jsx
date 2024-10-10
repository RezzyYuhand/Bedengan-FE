import React, { useEffect, useState } from 'react';
import { PesananCard } from '../../components';
import { getAllInvoiceReservasi } from '../../services/invoiceService';

const ContentRiwayat = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await getAllInvoiceReservasi(token);
        const invoices = response.data;

        // Filter invoices based on the desired statuses
        const filteredInvoices = invoices.filter(invoice => 
          ['selesai', 'ditolak'].includes(invoice.status)
        );

        const formattedOrders = filteredInvoices.map((invoice) => ({
          kodePesanan: invoice.nomor_invoice,
          reservasi: invoice.reservasi, // Pass the entire reservasi array
          tanggalKedatangan: new Date(invoice.tanggal_kedatangan).toLocaleDateString('id-ID'),
          status: invoice.status,
          id: invoice.id,
        }));

        setOrders(formattedOrders); // Set orders state
        setLoading(false); // Disable loading state
      } catch (error) {
        console.error('Error fetching invoices:', error);
        setLoading(false); // Disable loading even in case of error
      }
    };

    fetchInvoices();
  }, []);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  return (
    <div className='flex flex-col gap-5 w-full items-center lg:items-start'>
      <h2 className='font-semibold'>Riwayat</h2>
      <div className='flex flex-col gap-7 lg:gap-5 w-full'>
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <PesananCard
              key={index}
              kodePesanan={order.kodePesanan}
              reservasi={order.reservasi} // Pass reservasi as a prop
              tanggalKedatangan={order.tanggalKedatangan}
              status={order.status}
              id={order.id}
            />
          ))
        ) : (
          <p>Tidak ada riwayat pesanan ditemukan.</p>
        )}
      </div>
    </div>
  );
};

export default ContentRiwayat;
