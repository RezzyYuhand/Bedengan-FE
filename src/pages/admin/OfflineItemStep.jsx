import React, { useEffect, useState } from 'react';
import { ItemCard, Button } from '../../components';
import { getAllPerlengkapan } from '../../services/perlengkapanService';

const OfflineItemStep = ({ onCancel, goToNextStep, selectedItems, setSelectedItems }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getAllPerlengkapan(token);
        if (response && Array.isArray(response.data)) {
          const availableItems = response.data.filter(item => item.stok > 0);
          setItems(availableItems);
        } else {
          console.error('Unexpected response format:', response);
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [token]);

  const handleItemSelect = (item, quantity) => {
    const updatedItems = selectedItems.filter((i) => i.id !== item.id);
    if (quantity > 0) {
      // Add `nama` to the updated item
      updatedItems.push({
        id: item.id,
        nama: item.nama, // Add the item name here
        harga: item.harga,
        jumlah: quantity
      });
    }
    setSelectedItems(updatedItems); // Update the selectedItems state with the new item, name, quantity, and price
  };

  if (loading) {
    return <div>Loading items...</div>;
  }

  return (
    <div className='flex flex-col items-center gap-4'>
      <span className='font-semibold w-full text-left'>Item Tambahan</span>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
        {items.map((item) => (
          <ItemCard 
            key={item.id} 
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
  );
}

export default OfflineItemStep;
