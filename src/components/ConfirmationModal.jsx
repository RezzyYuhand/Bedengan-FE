import React from 'react';

const ConfirmationModal = ({ title, message, onConfirm, onClose }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-5 rounded-lg shadow-md max-w-md w-full'>
        <h2 className='text-lg font-bold'>{title}</h2>
        <p className='mt-4'>{message}</p>
        <div className='mt-6 flex justify-end gap-2'>
          <button
            className='px-4 py-2 bg-gray-300 text-black rounded'
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className='px-4 py-2 bg-red-500 text-white rounded'
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;