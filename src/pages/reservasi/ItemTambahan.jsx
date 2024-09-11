import React, { useState } from 'react'
import  { Button, ItemCard } from '../../components/index'

const ItemTambahan = ({ onPrev, onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  
  const items = [
    { name: 'Item 1', description: 'Description for Item 1' },
    { name: 'Item 2', description: 'Description for Item 2' },
    { name: 'Item 3', description: 'Description for Item 3' },
  ];
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Filter items based on the search query
    const results = items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(results);
  };

   
  
  return (
    <div className='flex flex-col gap-3 items-center px-10 lg:px-28'>
        <div className='flex flex-col items-center'>
            <h2 className='font-semibold text-2xl lg:text-4xl'>Reservasi</h2>
            <p className='text-secondary-gray'>Item Tambahan</p>
        </div>

        <div className='flex flex-col w-72 lg:w-[30rem] gap-4 lg:max-w-[32rem]'>
            <div className='flex flex-row gap-5'>
              <input
                type='text'
                placeholder='Cari Item'
                className='px-3 py-2 w-full rounded-full ring-1 ring-inactive-gray-2'
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button
                type='submit'
                className='px-4 py-2 bg-accent text-white rounded-lg transition-colors shadow-md duration-300 hover:bg-hover-green'
              >
                Cari
              </button>
            </div>

            <div className='flex flex-wrap'>

            </div>
            
            <Button></Button>
        </div>
    </div>
  )
}

export default ItemTambahan