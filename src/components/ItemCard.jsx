import React, { useState } from 'react';

const ItemCard = ({ item, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(0);
  
  const handleIncrement = (id) => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(id, newQuantity);
  };

  const handleDecrement = (id) => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(id, newQuantity);
    }
  };

  return (
    <div className='flex flex-col px-5 py-4 gap-7 justify-end border rounded-md w-full'>
      <div className='flex flex-row justify-between items-center text-sm'>
        {/* Display item name and price */}
        <span className='font-semibold'>{item.nama}</span>
        <span className='font-semibold'>Rp {item.harga ? item.harga.toLocaleString() : 'N/A'}</span>
      </div>
      
      <div className='flex w-full justify-end'>
        <div className='flex w-fit items-center gap-2 rounded-lg border-[1.5px] border-inactive-gray-2 text-sm'>
          <button
            className='px-2 py-1 text-secondary rounded'
            onClick={() => {
              handleDecrement(item.id)
            }}
            disabled={quantity === 0}
          >
            -
          </button>
          <span className=''>{quantity}</span>
          <button
            className='px-2 py-1 text-secondary rounded'
            onClick={() => {
              handleIncrement(item.id)
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
