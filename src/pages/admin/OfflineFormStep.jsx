import React from 'react'
import { Button } from '../../components';

const OfflineFormStep = ({ formData, setFormData, onCancel, goToNextStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className='flex flex-col gap-4 text-xs'>
      <div className='flex flex-col gap-2'>
        <label className="font-semibold">Jenis Pengunjung</label>
        <select
          name="visitorType"
          onChange={handleChange}
          value={formData.visitorType || ''}
          className="block appearance-none px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
        >
          <option>Pilih</option>
          <option value="Individu">Individu</option>
          <option value="Kelompok">Kelompok</option>
        </select>
      </div>

      <div className='flex flex-row gap-5'>
        <div className='flex flex-col gap-2 w-full'>
            <label className="font-semibold">Nama</label>
            <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name || ''}
            className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
            />
        </div>

        <div className='flex flex-col gap-2 w-full'>
            <label className="font-semibold">Nomor Telepon</label>
            <input
            type="tel"
            name="phoneNumber"
            onChange={handleChange}
            value={formData.phoneNumber || ''}
            className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
            />
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <label className="font-semibold">Jenis Tenda</label>
        <select
          name="tentType"
          onChange={handleChange}
          value={formData.tentType || ''}
          className="block appearance-none px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
        >
          <option>Pilih</option>
          <option value="Dome - 2 Orang">Dome - 2 Orang</option>
          <option value="Dome - 4 Orang">Dome - 4 Orang</option>
          <option value="Dome - 8 Orang">Dome - 8 Orang</option>
        </select>
      </div>

      <div className='flex flex-col gap-2'>
        <label className="font-semibold">Jumlah</label>
        <input
          type="number"
          name="quantity"
          onChange={handleChange}
          value={formData.quantity || ''}
          className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label className="font-semibold">Kavling</label>
        <select
          name="kavling"
          onChange={handleChange}
          value={formData.kavling || ''}
          className="block appearance-none px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
        >
          <option>Pilih</option>
          <option value="Kavling A1">Kavling A1</option>
          <option value="Kavling A2">Kavling A2</option>
        </select>
      </div>

      <div className='flex flex-row gap-5'>
        <div className='flex flex-col gap-2 w-full'>
          <label className="font-semibold">Tanggal Kedatangan</label>
          <input
            type="date"
            name="arrivalDate"
            onChange={handleChange}
            value={formData.arrivalDate || ''}
            className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
          />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label className="font-semibold">Tanggal Kepulangan</label>
          <input
            type="date"
            name="departureDate"
            onChange={handleChange}
            value={formData.departureDate || ''}
            className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
          />
        </div>
      </div>

      <div className='flex flex-row gap-3 w-full justify-end'>
        <Button onClick={onCancel} className='border-[1.5px] border-red-600 bg-primary text-red-600 hover:bg-red-600 hover:text-primary'>Batal</Button>
        <Button onClick={goToNextStep}>Selanjutnya</Button>
      </div>
    </form>
  )
}

export default OfflineFormStep