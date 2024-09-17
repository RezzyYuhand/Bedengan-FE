import React from 'react'

const PaymentRow = ({ name, quantity, price }) => {
  return (
    <div className='flex flex-row w-full'>
      <span className='min-w-48 max-w-48 text-left'>{name}</span>
      <span className='min-w-40 max-w-40 text-center'>{quantity > 0 ? `${quantity}x` : ''}</span>
      <span className='min-w-28 max-w-28 text-right'>Rp {price.toLocaleString()}</span>
    </div>
  )
}

export default PaymentRow