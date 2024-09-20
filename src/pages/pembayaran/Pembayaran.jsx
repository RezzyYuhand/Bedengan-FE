import React, { useState } from 'react'
import { Navbar, Footer } from '../../components/index'
import MetodePembayaran from './MetodePembayaran'
import RincianPembayaran from './RincianPembayaran'
import InformasiPembayaran from './InformasiPembayaran'
import UnggahBuktiPembayaran from './UnggahBuktiPembayaran'
import UnggahBuktiPembayaranKelompok from './UnggahBuktiPembayaranKelompok'

const Pembayaran = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [step, setStep] = useState(1);

  const reservationData = {
    name: 'John Doe',
    total: 'Rp. 1.000.000',
  };

  const handleMethodSelect = (method) => {
    setPaymentMethod(method);
  }

  const handleNext = () => {
    setStep(step + 1);
  }

  return (
    <div>
        <Navbar />
        <RincianPembayaran />
        <Footer className='mt-20' />
    </div>
  )
}

export default Pembayaran