import React, { useState } from 'react';
import { FaPen, FaTrash } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { ConfirmationModal, DetailModal } from '../../components';

const PerlengkapanList = ({ perlengkapan }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openDeleteModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const handleEdit = (id) => {
    // Logic to navigate to the edit form for the perlengkapan item
    console.log(`Edit item with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Logic to delete perlengkapan item
    console.log(`Delete item with ID: ${id}`);
  };

  return (
    <div className='flex flex-col gap-1'>
      {perlengkapan.map((item, index) => (
        <div className='flex flex-row text-xs items-center' key={item.id}>
          <span className='w-12 max-w-12'>{index + 1}</span>
          <span className='w-28 max-w-28'>{item.kode}</span>
          <span className='w-44 max-w-44'>{item.nama}</span>
          <span className='w-28 max-w-28'>{item.harga}</span>
          <span className='w-28 max-w-28'>{item.stok}</span>
          <span className='w-28 max-w-28 text-center'>
            <span className={`w-fit px-4 py-1 rounded-full ${item.jenis === 'Paket' ? 'bg-accent-2' : 'bg-accent-3'}`}>
              {item.jenis}
            </span>
          </span>

          {/* Action Buttons */}
          <span className='w-28 max-w-28 text-center flex items-center justify-center gap-1'>
            <button
              className='flex items-center justify-center w-6 h-6 bg-berlangsung text-white rounded'
              onClick={() => console.log(`Preview details for item with ID: ${item.id}`)}
            >
              <MdOutlineRemoveRedEye />
            </button>
            <button
              className='flex items-center justify-center w-6 h-6 bg-selesai text-white rounded'
              onClick={() => handleEdit(item.id)}
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
          message={`Are you sure you want to delete item ${selectedItem?.kode}?`}
          onConfirm={() => handleDelete(selectedItem.id)}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default PerlengkapanList;