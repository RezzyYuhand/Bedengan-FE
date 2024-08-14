import React, { useState } from 'react'
import { Button } from '../../components/index'

const MetodePembayaran = () => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const paymentMethods = [
    { id:'qris', name: 'QRIS', icon: '/images/QrisLogo.png' },
    { id:'bca_va', name: 'BCA Virtual Account', icon: '/images/BCALogo.webp' },
  ];

  return (
    <div className='flex flex-col items-center gap-3 px-28'>
        <div className='flex flex-col items-center'>
            <h2 className='font-semibold'>Pembayaran</h2>
            <p className='text-secondary-gray'>Metode Pembayaran</p>
        </div>

        <div className='flex flex-col gap-4 max-w-[32rem]'>
            <div className='flex flex-row gap-4 max-w-[32rem]'>
                {paymentMethods.map((method) => (
                    <div
                        key={method.id}
                        onClick={() => handleSelect(method.id)}
                        className={`flex flex-col items-center justify-center p-4 w-32 h-32 cursor-pointer border rounded-md ${
                            selectedMethod === method.id ? 'bg-green-500' : 'bg-white'
                        }`}
                    >
                        <img src={method.icon} alt={method.name} className='w-12 h-12 mb-2' />
                        <span className='font-semibold'>{method.name}</span>
                    </div>
                ))}
            </div>
      
            <div className='flex w-full justify-end mt-4'>
                <Button>Selanjutnya</Button>
            </div>
        </div>

    </div>
  )
}

export default MetodePembayaran