import React, { useState } from 'react';
import { Button, PaymentRow } from '../../components';

// Modal Component
const TermsModal = ({ onClose, onAgree, isAgreed }) => {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const handleAgree = () => {
    if (checkbox1 && checkbox2) {
      onAgree();
      onClose();
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-md shadow-md max-w-lg w-full'>
        <h3 className='text-lg text-center font-semibold mb-4'>Syarat dan Ketentuan</h3>
        <div className='flex flex-col gap-5'>
            <p className='text-center'>
            Pengunjung diharapkan membaca syarat dan ketentuan yang telah tertera pada halaman <strong>Syarat dan Ketentuan</strong> sebelum melanjutkan pembayaran.
            </p>

            <div className='w-full bg-secondary h-[1px]' />

            <div className='flex flex-col gap-2 mb-4'>
            <label className='flex items-center'>
                <input
                type='checkbox'
                checked={checkbox1}
                onChange={() => setCheckbox1(!checkbox1)}
                className='mr-2'
                />
                Saya telah membaca dan memahami syarat dan ketentuan yang berlaku
            </label>

            <label className='flex items-center'>
                <input
                type='checkbox'
                checked={checkbox2}
                onChange={() => setCheckbox2(!checkbox2)}
                className='mr-2'
                />
                Saya menyetujui syarat dan ketentuan yang berlaku
            </label>
            </div>
        </div>

        <div className='flex justify-end gap-3'>
          <Button onClick={onClose}>Batal</Button>
          <Button
            onClick={handleAgree}
            disabled={!checkbox1 || !checkbox2}
            className={`bg-${!checkbox1 || !checkbox2 ? 'gray-400' : 'accent'} text-primary`}
          >
            Setuju
          </Button>
        </div>
      </div>
    </div>
  );
};

// Main RincianPembayaran Component
const RincianPembayaran = () => {
  const paymentDetails = [
    { name: 'Paket Dome-2', quantity: 1, price: 10000 },
    { name: 'PPN', quantity: 0, price: 10000 },
    { name: 'Paket Dome-2', quantity: 13, price: 100000 },
  ];

  const total = paymentDetails.reduce((sum, item) => sum + item.price, 0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAgree = () => {
    setIsAgreed(true);
  };

  return (
    <div className='flex flex-col items-center gap-3 px-28'>
      <div className='flex flex-col items-center'>
        <h2 className='font-semibold'>Pembayaran</h2>
        <p className='text-secondary-gray'>Rincian Pembayaran</p>
      </div>

      <div className='flex flex-col items-center gap-8 w-fit'>
        <div className='flex flex-col gap-7'>
          {paymentDetails.map((item, index) => (
            <PaymentRow
              key={index}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
            />
          ))}
        </div>

        <div className='w-full bg-secondary h-[1px]' />

        <div className='flex flex-row justify-between items-center w-full'>
          <span className='text-sm lg:text-base'>Total Pembayaran</span>
          <span className='font-semibold text-lg lg:text-3xl'>Rp {total.toLocaleString()}</span>
        </div>

        <Button className='w-full' onClick={openModal}>
          Selanjutnya
        </Button>
      </div>

      {/* Modal with Terms and Conditions */}
      {isModalOpen && (
        <TermsModal onClose={closeModal} onAgree={handleAgree} isAgreed={isAgreed} />
      )}
    </div>
  );
};

export default RincianPembayaran;
