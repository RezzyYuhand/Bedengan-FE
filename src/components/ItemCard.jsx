import React, { useState, useEffect } from 'react'

const ItemCard = ({ item, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(0);
  
  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(item, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(item, newQuantity);
    }
  };

  return (
    <div className='flex flex-col px-5 py-4 gap-7 justify-end border rounded-md w-full'>
      <div className='flex flex-row justify-between items-center text-sm'>
        <span className='font-semibold'>{item.name}</span>
        <span className='font-semibold'>Rp {item.price.toLocaleString()}</span>
      </div>
      
      <div className='flex w-full justify-end'>
        <div className='flex w-fit items-center gap-2 rounded-lg border-[1.5px] border-inactive-gray-2 text-sm'>
          <button
            className='px-2 py-1 text-secondary rounded'
            onClick={handleDecrement}
            disabled={quantity === 0}
          >
            -
          </button>
          <span className=''>{quantity}</span>
          <button
            className='px-2 py-1 text-secondary rounded'
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemCard