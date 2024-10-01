import React, { useEffect, useState } from 'react';
import { getKavlingById } from '../../services/kavlingService';
import { getSubGroundById } from '../../services/subGroundService';
import { getGroundById } from '../../services/groundService';

const ReservasionList = ({ reservations }) => {
  const [kavlingNamesList, setKavlingNamesList] = useState({}); // Store kavling names for each reservation

  // Fetch kavling data
  useEffect(() => {
    const fetchKavlingData = async () => {
      try {
        const token = localStorage.getItem('token');
        const fetchedNames = {};

        await Promise.all(
          reservations.map(async (reservation) => {
            const kavlingId = reservation.kavling_id; // Fetch kavling_id directly

            console.log(`Processing reservation ID: ${reservation.id}`);
            console.log('Kavling ID:', kavlingId);

            // Check if kavling_id exists
            if (kavlingId) {
              try {
                console.log(`Fetching kavling details for ID: ${kavlingId}`);
                const kavlingResponse = await getKavlingById(token, kavlingId);
                const subGroundResponse = await getSubGroundById(token, kavlingResponse.data.sub_ground_id);
                const groundResponse = await getGroundById(token, subGroundResponse.data.ground_id);

                // Store the fetched kavling name
                fetchedNames[reservation.id] = `${groundResponse.data.nama}.${subGroundResponse.data.nama}.${kavlingResponse.data.nama}`;
              } catch (error) {
                console.error(`Error fetching data for kavling_id ${kavlingId}:`, error);
                fetchedNames[reservation.id] = 'Error fetching Kavling';
              }
            } else if (reservation.perlengkapan && reservation.perlengkapan.nama) {
              // If it's a perlengkapan, use its name
              fetchedNames[reservation.id] = `Perlengkapan: ${reservation.perlengkapan.nama}`;
            } else {
              // Neither kavling nor perlengkapan exists
              fetchedNames[reservation.id] = 'N/A';
            }
          })
        );

        setKavlingNamesList(fetchedNames);
      } catch (error) {
        console.error('Error fetching kavling/perlengkapan data:', error);
      }
    };

    if (reservations.length > 0) {
      fetchKavlingData();
    }
  }, [reservations]);

  const formatStatus = (status) => {
    if (status === 'menunggu_pembayaran') {
      return 'Menunggu';
    }
    return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
  };

  return (
    <div className='flex flex-col gap-1'>
      {reservations.map((reservation, index) => {
        const normalizedStatus = reservation.status.toLowerCase().trim();
        const kavlingName = kavlingNamesList[reservation.id] || 'No Kavling/Perlengkapan Available';

        return (
          <div className='flex flex-row text-sm items-center' key={reservation.id}>
            <span className='w-14 max-w-14'>{index + 1}</span>
            <span className='w-32 max-w-32'>{reservation.kode}</span>
            <span className='w-56 max-w-56'>{reservation.nama}</span>
            <span className='w-28 max-w-28'>{reservation.tglMasuk}</span>
            <span className='w-28 max-w-28'>{reservation.tglKeluar}</span>
            <span className='w-20 max-w-20'>{kavlingName}</span> {/* Display kavling or perlengkapan */}
            <span className='flex w-32 max-w-32 items-center justify-center'>
              <div className={`px-3 py-1 rounded-full ${reservation.jenis === 'online' ? 'bg-accent-2' : 'bg-accent-3'}`}>
                {reservation.jenis}
              </div>
            </span>
            <span className='flex flex-row items-center gap-3 w-32 max-w-32'>
              <div
                className={`w-2 h-2 rounded-full ${
                  normalizedStatus === 'ditolak'
                    ? 'bg-ditolak'
                    : normalizedStatus === 'berlangsung'
                    ? 'bg-berlangsung'
                    : normalizedStatus === 'selesai'
                    ? 'bg-selesai'
                    : normalizedStatus === 'menunggu_pembayaran'
                    ? 'bg-menunggu'
                    : ''
                }`}
              />
              {formatStatus(reservation.status)}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ReservasionList;
