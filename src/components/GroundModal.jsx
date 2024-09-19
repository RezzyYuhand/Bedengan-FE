import React, { useState } from 'react';
import Button from './Button';

const GroundModal = ({ onClose, onSave }) => {
  const [groundName, setGroundName] = useState('');

  const handleSave = () => {
    if (groundName.trim()) {
      onSave(groundName);
    } else {
      alert('Nama ground tidak boleh kosong.');
    }
  };

  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-6 rounded-md'>
        <h2 className='text-lg font-semibold mb-4'>Tambah Ground</h2>
        <div className='flex flex-col gap-3 w-96'>
            <label>Nama Ground</label>
            <input
            type="text"
            placeholder="Input nama ground A/B/C/..."
            value={groundName}
            onChange={(e) => setGroundName(e.target.value)}
            className='block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm'
            />
        </div>
        <div className='flex justify-end gap-3 mt-4'>
          <Button onClick={onClose} className='border-[1.5px] border-red-600 bg-primary text-red-600 hover:bg-red-600 hover:text-primary'>Batal</Button>
          <Button onClick={handleSave} className='bg-accent text-primary hover:bg-hover-green'>Simpan Perubahan</Button>
        </div>
      </div>
    </div>
  );
};

export default GroundModal;