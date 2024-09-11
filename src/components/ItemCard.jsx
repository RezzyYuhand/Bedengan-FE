import React, { useState } from 'react'

const ItemCard = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className='flex flex-col px-5 py-4 gap-7 justify-end border rounded-md w-64'>
      <div className='flex flex-row justify-between items-center text-sm'>
        <p className='font-semibold'>{item.name}</p>
        <p className='font-semibold'>Rp {item.price}</p>
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