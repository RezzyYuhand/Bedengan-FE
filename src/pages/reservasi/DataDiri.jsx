import React, { useState } from 'react'
import { Button } from '../../components/index'

const DataDiri = ({ onPrev, onSubmit }) => {
  const [formData, setFormData] = useState({
    ktpPhoto: null,
    representativeName: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, ktpPhoto: e.target.files[0] });
  };

  const handleKTPButton = () => {
    document.getElementById('ktpInput').click();
  }

  const handleSubmit = () => {
    onSubmit(formData);
    console.log(formData);
  };

  return (
    <div className='flex flex-col gap-3 items-center px-28'>
        <div className='flex flex-col items-center'>
            <h2 className='font-semibold'>Reservasi</h2>
            <p className='text-secondary-gray'>Data Diri</p>
        </div>

        <div className='flex flex-col gap-4 max-w-[32rem]'>
            <div className='flex flex-col gap-3'>
                <label className="font-semibold">Foto KTP</label>
                <label className='text-xs'>(Maks 2MB, format JPEG/PNG)</label>
                <Button onClick={handleKTPButton}>Pilih File KTP</Button>
                <input
                    id='ktpInput'
                    type="file"
                    accept="image/jpeg, image/png"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                />
                <div className='flex flex-row gap-5 px-3 py-2 border rounded-md border-solid border-1 border-secondary-gray'>
                    {formData.ktpPhoto && (
                        <img
                            src={URL.createObjectURL(formData.ktpPhoto)}
                            alt="Preview"
                            className="mt-2 h-32 w-40 object-cover"
                        />
                    )}
                    <div className='flex flex-col gap-1'>
                        <label>Ketentuan Foto KTP</label>
                        <ul className='list-disc list-outside text-sm pl-6'>
                            <li>Pastikan seluruh bagian KTP kamu berada di dalam bingkai foto</li>
                            <li>Foto KTP Asli bukan fotocopy</li>
                            <li>Foto KTP harus sesuai dengan data perwakilan yang didaftarkan</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <label className='font-semibold'>Nama Perwakilan</label>
                <input
                    type="text"
                    name="representativeName"
                    placeholder='Nama sesuai KTP'
                    onChange={handleChange}
                    value={formData.representativeName}
                    className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray sm:text-sm"
                    required
                />
            </div>
            
            <div className='flex flex-col gap-2'>
                <label className='font-semibold'>Nomor Telepon</label>
                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder='Nomor yang bisa dihubungi'
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray sm:text-sm"
                    required
                />
            </div>

            <div className='flex w-full justify-end'>
                <Button onClick={handleSubmit}>Selanjutnya</Button>
            </div>
            
        </div>
    </div>
  )
}

export default DataDiri