import React, { useState } from 'react';
import { FaPen, FaTrash } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { ConfirmationModal } from '../../components';

const KavlingList = ({ kavlings, onEdit }) => {
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

  const handleDelete = (id) => {
    setKavlingList(kavlingList.filter(kavling => kavling.id !== id));
    closeModal();
  };

  const toggleStatus = (kavlingId) => {
    // Find the kavling directly by ID in the flat array
    const updatedList = kavlingList.map(kavling => 
      kavling.id === kavlingId ? { ...kavling, isAvailable: !kavling.isAvailable } : kavling
    );

    setKavlingList(updatedList); // Update the state with the new kavling list
    console.log('Updated kavlingList:', updatedList); // Log the updated kavling list
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
          <span className='w-28 max-w-28'>
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
          <span className='w-28 max-w-28 text-center flex items-center gap-1'>
            <button
              className='flex items-center justify-center w-6 h-6 bg-selesai text-white rounded'
              onClick={() => onEdit(kavling)}
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