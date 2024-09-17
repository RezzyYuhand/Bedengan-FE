import React, { useState } from 'react'
import { Button, PaymentRow } from '../../components';

const OfflinePaymentStep = ({ items = [], onCancel, onSave, updatePaymentMethod }) => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (e) => {
    const selectedMethod = e.target.value;
    setPaymentMethod(selectedMethod);
    updatePaymentMethod(selectedMethod);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <div className='flex flex-col items-center'>
        <h2 className='font-semibold'>Pembayaran</h2>
        <p className='text-secondary-gray'>Rincian Pembayaran</p>
      </div>

      <div className='flex flex-col gap-8 items-center'>
        <div className='flex flex-col gap-7'>
          {items.map((item, index) => (
              <PaymentRow 
                key={index} 
                name={item.name} 
                quantity={item.quantity} 
                price={item.price} 
              />
          ))}
        </div>
        <div className='w-full bg-secondary h-[1px]' />
        <div className='flex flex-row justify-between items-center w-[29rem]'>
          <span>Total Pembayaran</span>
          <span className='font-semibold text-3xl'>Rp {calculateTotal().toLocaleString()}</span>
        </div>
        <div className='w-full bg-secondary h-[1px]' />
        
        <div className='flex flex-col w-full mt-4'>
          <span className='font-semibold mb-2'>Metode Pembayaran</span>
          <div className='flex gap-4'>
            <label className='flex items-center gap-2'>
              <input 
                type='radio' 
                name='paymentMethod' 
                value='Cash' 
                checked={paymentMethod === 'Cash'} 
                onChange={handlePaymentMethodChange} 
                className='form-radio'
              />
              Cash
            </label>
            <label className='flex items-center gap-2'>
              <input 
                type='radio' 
                name='paymentMethod' 
                value='Transfer' 
                checked={paymentMethod === 'Transfer'} 
                onChange={handlePaymentMethodChange} 
                className='form-radio'
              />
              Transfer
            </label>
          </div>
        </div>

        <div className='flex justify-end w-full mt-4 gap-5'>
          <Button onClick={onCancel} className='border-[1.5px] border-red-600 bg-primary text-red-600 hover:bg-red-600 hover:text-primary'>Batal</Button>
          <Button onClick={onSave}>Simpan</Button>
        </div>
      </div>
    </div>
  )
}

export default OfflinePaymentStep