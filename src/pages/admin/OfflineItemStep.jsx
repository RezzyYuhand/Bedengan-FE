import React from 'react'
import { ItemCard, Button } from '../../components';

const OfflineItemStep = ({ onCancel, goToNextStep, selectedItems, setSelectedItems }) => {
  const items = [
    { name: 'Item 1', price: 20000 },
    { name: 'Item 2', price: 30000 },
    { name: 'Item 3', price: 30000 },
    { name: 'Item 4', price: 30000 },
    // Add more items as needed
  ];

  const handleItemSelect = (item, quantity) => {
    // Update selected items based on quantity
    const updatedItems = selectedItems.filter((i) => i.name !== item.name);
    if (quantity > 0) {
      updatedItems.push({ ...item, quantity });
    }
    setSelectedItems(updatedItems);
  };
  
  return (
    <div className='flex flex-col items-center gap-4'>
      <span className='font-semibold w-full text-left'>Item Tambahan</span>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
        {items.map((item, index) => (
          <ItemCard 
            key={index} 
            item={item}
            onQuantityChange={handleItemSelect}
          />
        ))}
      </div>
      <div className='flex justify-end w-full gap-5'>
        <Button onClick={onCancel} className='border-[1.5px] border-red-600 bg-primary text-red-600 hover:bg-red-600 hover:text-primary'>Batal</Button>
        <Button onClick={goToNextStep} className=''>Selanjutnya</Button>
      </div>
    </div>
  )
}

export default OfflineItemStep