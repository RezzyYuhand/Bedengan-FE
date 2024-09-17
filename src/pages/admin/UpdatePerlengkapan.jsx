import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SidePanel from './SidePanel';
import HeaderBar from './HeaderBar';
import { Button } from '../../components';

const UpdatePerlengkapan = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};

  const [formData, setFormData] = useState({
    kodeBarang: '',
    jenisBarang: '',
    namaBarang: '',
    harga: '',
    stok: '',
  });

  useEffect(() => {
    if (item) {
      setFormData({
        kodeBarang: item.kodeItem,
        jenisBarang: item.jenisBarang,
        namaBarang: item.nama,
        harga: item.harga,
        stok: item.stok,
      });
    }
  }, [item]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Form Data:', formData);
    // Add logic to save updated data, e.g., sending to API
    alert('Perlengkapan berhasil diupdate!');
    navigate('/admin/perlengkapan');
  };

  const handleCancel = () => {
    navigate('/admin/perlengkapan');
  };

  return (
    <div className='w-screen h-screen p-10'>
      <div className='flex flex-row gap-10 h-full'>
        <SidePanel />
        <div className='flex flex-col py-3 w-full gap-8'>
          <HeaderBar title='Perlengkapan' searchTerm='' onSearchChange={() => {}} username='Admin' />
          
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-row w-full justify-between items-center'>
                <span className='font-semibold'>Update Perlengkapan</span>
              </div>
              <div className='w-full bg-secondary h-[1px] mt-2'/>
              
              <form className='flex flex-col gap-4 text-xs' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2'>
                  <label className="font-semibold">Kode Barang</label>
                  <input
                    type="text"
                    name="kodeBarang"
                    value={formData.kodeBarang}
                    onChange={handleChange}
                    className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                    required
                  />
                </div>

                <div className='flex flex-col gap-2'>
                  <label className="font-semibold">Jenis Barang</label>
                  <select
                    name="jenisBarang"
                    value={formData.jenisBarang}
                    onChange={handleChange}
                    className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                    required
                  >
                    <option value="">Pilih Jenis Barang</option>
                    <option value="Paket">Paket</option>
                    <option value="Item">Item</option>
                  </select>
                </div>

                <div className='flex flex-col gap-2'>
                  <label className="font-semibold">Nama Barang</label>
                  <input
                    type="text"
                    name="namaBarang"
                    value={formData.namaBarang}
                    onChange={handleChange}
                    className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                    required
                  />
                </div>

                <div className='flex flex-row w-full gap-4'>
                  <div className='flex flex-col gap-2 w-full'>
                    <label className="font-semibold">Harga</label>
                    <input
                      type="number"
                      name="harga"
                      value={formData.harga}
                      onChange={handleChange}
                      className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                      required
                    />
                  </div>

                  <div className='flex flex-col gap-2 w-full'>
                    <label className="font-semibold">Stok</label>
                    <input
                      type="number"
                      name="stok"
                      value={formData.stok}
                      onChange={handleChange}
                      className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                      required
                    />
                  </div>
                </div>

                <div className='flex flex-row gap-3 w-full justify-end'>
                  <Button type="button" onClick={handleCancel} className='border-[1.5px] border-red-600 bg-primary text-red-600 hover:bg-red-600 hover:text-primary'>
                    Batal
                  </Button>
                  <Button type="submit" className='bg-accent text-primary hover:bg-hover-green'>
                    Simpan
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePerlengkapan;