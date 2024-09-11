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
    <div className='flex flex-col items-center justify-between border p-4 rounded-md shadow-md w-40 m-2'>
      <h3 className='text-lg font-semibold'>{item.name}</h3>
      <p className='text-sm text-gray-600'>{item.description}</p>
      <p className='text-base font-bold text-accent'>Rp {item.price}</p>
      
      <div className='flex items-center gap-2 mt-2'>
        <button
          className='px-2 py-1 bg-red-500 text-white rounded'
          onClick={handleDecrement}
          disabled={quantity === 0}
        >
          -
        </button>
        <span className='text-lg'>{quantity}</span>
        <button
          className='px-2 py-1 bg-green-500 text-white rounded'
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default ItemCard