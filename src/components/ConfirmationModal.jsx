import React from 'react';
import { IoWarningOutline } from "react-icons/io5";

const ConfirmationModal = ({ title, message, onConfirm, onClose }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='flex flex-col items-center bg-white p-5 rounded-lg shadow-md max-w-md w-full'>
        <div className='text-primary bg-red-600 p-4 rounded-full'>
          <IoWarningOutline className='text-xl' />
        </div>
        <p className='mt-4 font-semibold text-center'>{message}</p>
        <div className='mt-6 flex justify-end gap-2'>
          <button
            className='px-4 py-2 bg-red-600 text-primary rounded shadow-md hover:bg-red-700'
            onClick={onConfirm}
          >
            Hapus
          </button>
          <button
            className='px-4 py-2 bg-accent text-primary rounded shadow-md hover:bg-hover-green'
            onClick={onClose}
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;