import React, { useState } from 'react';
import { Button } from '../../components';
import imageCompression from 'browser-image-compression';

const UnggahBuktiPembayaran = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const options = {
        maxSizeMB: 1,
        useWebWorker: true,
      };

      try {
        const compressedImage = await imageCompression(file, options);
        setSelectedFile(file);
        setCompressedFile(compressedImage);
      } catch (error) {
        console.error('Error compressing the image:', error);
      }
    }
  };

  const handleUpload = () => {
    if (compressedFile) {
      alert('Bukti pembayaran berhasil diunggah!');
    }
  };

  return (
    <div className='flex flex-col items-center gap-3 px-10 lg:px-28'>
      <div className='flex flex-col items-center'>
        <h2 className='font-semibold'>Pembayaran</h2>
        <p className='text-secondary-gray'>Unggah Bukti Pembayaran</p>
      </div>

      <div className='flex flex-col gap-4 w-full'>
        <div className='flex flex-col gap-4 border-[1.5px] border-secondary rounded-md px-7 py-6'>
          <span className='text-center lg:text-left px-4'>Ketentuan Bukti Pembayaran</span>
          <div className='w-full bg-secondary h-[1px]' />
          <div className='flex flex-col lg:flex-row w-full'>
            <div className='flex flex-col gap-4 lg:w-[50%] px-4'>
              <ul className='px-4'>
                <li className='text-accent font-bold list-disc'>Tanggal/Waktu Pembayaran</li>
                <li className='list-none'>Contoh: 14/05 23:59:01</li>
              </ul>
              <ul className='px-4'>
                <li className='text-accent font-bold list-disc'>Status Berhasil</li>
                <li className='list-none'>Contoh: BERHASIL</li>
              </ul>
            </div>
            <div className='flex flex-col gap-4 lg:w-[50%] px-4'>
              <ul className='px-4'>
                <li className='text-accent font-bold list-disc'>Detail Penerima</li>
                <li className='list-none'>Contoh: YOGIK INDRA PRATAMA</li>
              </ul>
              <ul className='px-4'>
                <li className='text-accent font-bold list-disc'>Jumlah Transfer</li>
                <li className='list-none'>Contoh: Rp 80.000</li>
              </ul>
            </div>
          </div>
          <div>
            <p className='text-accent font-bold'>Keterangan Tambahan</p>
            <p>Bagi pendaftar kelompok/acara, silahkan mengunggah <strong>surat keterangan acara</strong> beserta <strong>bukti pembayaran</strong> pada kolom file di bawah ini!</p>
          </div>
        </div>

        <div className='flex flex-col gap-1'>
          <label className="font-semibold">Upload Bukti Pembayaran</label>
          <label className='text-xs'>(Maks 2MB, format JPEG/PNG)</label>
          
          {/* File input trigger */}
          <Button onClick={() => document.getElementById('buktiPembayaranInput').click()}>
            Pilih Bukti Pembayaran
          </Button>

          {/* Hidden file input */}
          <input
            id='buktiPembayaranInput'
            type="file"
            accept="image/jpeg, image/png"
            className="hidden"
            onChange={handleFileUpload}
            required
          />
          
          {selectedFile && (
            <p className="text-xs text-green-600 mt-2">File dipilih: {selectedFile.name}</p>
          )}
        </div>

        {/* Button with disabled state and gray color when disabled */}
        <Button 
          className={`w-full ${!compressedFile || isUploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-accent'}`}
          onClick={handleUpload} 
          disabled={!compressedFile || isUploading}
        >
          Unggah Bukti Transfer
        </Button>
      </div>
    </div>
  );
};

export default UnggahBuktiPembayaran;
