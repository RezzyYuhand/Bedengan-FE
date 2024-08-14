import React, { useState } from 'react'
import { Navbar, Footer } from '../../components/index'
import MetodePembayaran from './MetodePembayaran'

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
        {step === 1 && (
            <MetodePembayaran onMethodSelect={handleMethodSelect} onNext={handleNext} />
        )}
        <Footer />
    </div>
  )
}

export default Pembayaran