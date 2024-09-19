import React, { useState } from 'react'
import imageCompression from 'browser-image-compression';
import { Button, Navbar, Footer } from '../../components/index'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/userService';


const DaftarDataDiri = () => {
  const [formData, setFormData] = useState({
    ktpPhoto: null,
    phoneNumber: '',
  });

  const navigate = useNavigate();
  const storedData = JSON.parse(localStorage.getItem('registrationData')) || {};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };
        const compressedFile = await imageCompression(file, options);
        setFormData({ ...formData, ktpPhoto: compressedFile });
      } catch (error) {
        console.error('Error compressing image:', error);
      }
    }
  };

  const handleKTPButton = () => {
    document.getElementById('ktpInput').click();
  }



  const handleSubmit = async () => {

    const dataToSend = new FormData;
    dataToSend.append('email', storedData.email);
    dataToSend.append('name', storedData.name);
    dataToSend.append('password', storedData.password);
    dataToSend.append('confirm_password', storedData.password);
    dataToSend.append('phone', formData.phoneNumber);
    dataToSend.append('file_ktp', formData.ktpPhoto);
    try {
        await registerUser(dataToSend)
        localStorage.removeItem('registrationData');
        navigate('/masuk')
        alert('Registrasi Berhasil')
    } catch {
        console.log("Error")
        alert('Registrasi Gagal')
    }
  };

  return (
    <div>
        <Navbar/>
        <div className='flex flex-col gap-3 items-center px-10 lg:px-28'>
            <div className='flex flex-col items-center'>
                <h2 className='font-semibold text-2xl lg:text-4xl'>Daftar</h2>
                <p className='text-secondary-gray'>Data Diri</p>
            </div>

            <div className='flex flex-col gap-4 max-w-[32rem]'>
                <div className='flex flex-col gap-3'>
                    <label className="font-semibold">Foto KTP</label>
                    <label className='text-xs'>(Maks 2MB, format JPEG/PNG)</label>
                    {formData.ktpPhoto && (
                        <p className='text-xs'>{formData.ktpPhoto.name}</p>
                    )}
                    <Button onClick={handleKTPButton}>Pilih File KTP</Button>
                    <input
                        id='ktpInput'
                        type="file"
                        accept="image/jpeg, image/png"
                        onChange={handleFileChange}
                        className="hidden"
                        required
                    />
                    <div className='flex flex-col lg:flex-row items-center gap-5 px-3 py-2 border-[1.5px] rounded-md border-solid border-inactive-gray-2'>
                        <img src="/images/ktpcontoh.jpeg" alt="contohktp" className='mt-2 h-40 lg:h-32 w-52 lg:w-40 object-cover'/>
                        <div className='flex flex-col gap-1'>
                            <label>Ketentuan Foto KTP</label>
                            <ul className='list-disc list-outside text-xs lg:text-sm pl-3 lg:pl-6'>
                                <li>Berikan watermark untuk menghindari penyalahgunaan KTP</li>
                                <li>Pastikan seluruh bagian KTP kamu berada di dalam bingkai foto</li>
                                <li>Foto KTP Asli bukan fotocopy</li>
                                <li>Foto KTP harus sesuai dengan data perwakilan yang didaftarkan</li>
                            </ul>
                        </div>
                    </div>
                </div>

                
                <div className='flex flex-col gap-2'>
                    <label className='font-semibold'>Nomor Telepon</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder='Nomor yang bisa dihubungi'
                        onChange={handleChange}
                        value={formData.phoneNumber}
                        className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                        required
                    />
                </div>

                <div className='flex w-full justify-center lg:justify-end'>
                    <Button onClick={handleSubmit} className='w-full lg:w-fit'>Daftar</Button>
                </div>
                
            </div>
        </div>
        <Footer className="mt-20"/>
    </div>
  )
}

export default DaftarDataDiri