import React, { useState } from 'react';
import { FaPen, FaTrash } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { ConfirmationModal } from '../../components';

const KavlingList = ({ kavlings }) => {
  const [kavlingList, setKavlingList] = useState(kavlings);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedKavling, setSelectedKavling] = useState(null);

  const openDeleteModal = (kavling) => {
    setSelectedKavling(kavling);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedKavling(null);
    setIsModalOpen(false);
  };

  const handleEdit = (id) => {
    // Logic to navigate to the edit form for the kavling
    console.log(`Edit kavling with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Logic to delete the kavling
    console.log(`Delete kavling with ID: ${id}`);
    closeModal();
  };

  const toggleStatus = (id) => {
    // Find the kavling by id and toggle its isAvailable status
    const updatedKavlings = kavlingList.map(kavling =>
      kavling.id === id
        ? { ...kavling, isAvailable: !kavling.isAvailable } // Toggle isAvailable
        : kavling
    );
    console.log('Updated kavlingList:', updatedKavlings);
    setKavlingList(updatedKavlings);
  };


  return (
    <div className='flex flex-col gap-1'>
      {kavlingList.map((kavling, index) => (
        <div className='flex flex-row text-xs items-center' key={kavling.id}>
          <span className='w-12 max-w-12'>{index + 1}</span>
          <span className='w-28 max-w-28'>{kavling.ground}</span>
          <span className='w-28 max-w-28'>{kavling.nomorGround}</span>
          <span className='w-28 max-w-28'>{kavling.nomorKavling}</span>

          {/* Toggle Switch for Status */}
          <span className='w-24 max-w-24'>
            <label className='relative inline-flex items-center cursor-pointer'>
              <input 
                type='checkbox' 
                checked={kavling.isAvailable} 
                onChange={() => toggleStatus(kavling.id)} 
                className='sr-only peer'
              />
              <div className={`w-9 h-5 border-[2px] rounded-full transition-colors duration-300 ${kavling.isAvailable ? 'bg-accent border-accent' : 'bg-white border-gray-300'}`}>
                <div className={`absolute top-1 left-1 h-3 w-3 rounded-full transition-transform duration-300 ${kavling.isAvailable ? 'translate-x-[1rem] bg-white' : 'translate-x-0 bg-gray-300'}`}/>
              </div>
            </label>
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
              onClick={() => handleEdit(kavling.id)}
            >
              <FaPen />
            </button>
            <button
              className='flex items-center justify-center w-6 h-6 bg-ditolak text-white rounded'
              onClick={() => openDeleteModal(kavling)}
            >
              <FaTrash />
            </button>
          </span>
        </div>
      ))}

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <ConfirmationModal
          message={`Apakah anda yakin untuk menghapus item ${selectedKavling?.nomorKavling}?`}
          onConfirm={() => handleDelete(selectedKavling.id)}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default KavlingList;