import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPen, FaTrash } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { ConfirmationModal } from '../../components';

const ItemPerlengkapanList = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const openDeleteModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const handleEdit = (item) => {
    // Logic to navigate to the edit form for the item
    navigate('/admin/perlengkapan/update', { state: { item } });
  };

  const handleDelete = (id) => {
    // Logic to delete the item
    console.log(`Delete item with ID: ${id}`);
    closeModal();
  };

  return (
    <div className='flex flex-col gap-1'>
      {items.map((item, index) => (
        <div className='flex flex-row text-xs items-center' key={item.id}>
          <span className='w-12 max-w-12'>{index + 1}</span>
          <span className='w-28 max-w-28'>{item.kodeItem}</span>
          <span className='w-64 max-w-64'>{item.nama}</span>
          <span className='w-28 max-w-28'>{item.harga}</span>
          <span className='w-28 max-w-28'>{item.stok}</span>

          {/* Action Buttons */}
          <span className='w-28 max-w-28 text-center flex items-center gap-1'>
            <button
              className='flex items-center justify-center w-6 h-6 bg-berlangsung text-white rounded'
              onClick={() => console.log(`Preview details for item with ID: ${item.id}`)}
            >
              <MdOutlineRemoveRedEye />
            </button>
            <button
              className='flex items-center justify-center w-6 h-6 bg-selesai text-white rounded'
              onClick={() => handleEdit(item)}
            >
              <FaPen />
            </button>
            <button
              className='flex items-center justify-center w-6 h-6 bg-ditolak text-white rounded'
              onClick={() => openDeleteModal(item)}
            >
              <FaTrash />
            </button>
          </span>
        </div>
      ))}

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <ConfirmationModal
          title="Delete Item"
          message={`Apakah anda yakin untuk menghapus ${selectedItem?.nama}?`}
          onConfirm={() => handleDelete(selectedItem.id)}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ItemPerlengkapanList;