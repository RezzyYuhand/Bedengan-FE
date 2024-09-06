import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Button } from '../../components/index'

const DetailKavling = ({ onNext }) => {
  const [formData, setFormData] = useState({
    visitorType: '',
    numberOfVisitor: '',
    tentType: '',
    arrivalDate: '',
    departureDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleNext = () => {
    console.log(formData);
    onNext(formData);
  }
    
  return (
    <div className='flex flex-col gap-3 items-center px-28'>
        <div className='flex flex-col items-center'>
            <h2 className='font-semibold'>Reservasi</h2>
            <p className='text-secondary-gray'>Detail Kavling</p>
        </div>

        <div className='flex flex-col w-fit gap-4 max-w-[32rem]'>
            <div className='flex flex-col gap-2'>
                <label className="font-semibold">Jenis Pengunjung</label>
                <div className='relative'>
                    <select
                        name="visitorType"
                        onChange={handleChange}
                        value={formData.visitorType}
                        className="block appearance-none px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                        required
                    >
                        <option>Pilih</option>
                        <option value="Individu">Individu</option>
                        <option value="Organisasi">Organisasi</option>
                    </select>
                    <span className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                        <IoIosArrowDown />
                    </span>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <label className="font-semibold">Jumlah</label>
                <input
                    type="number"
                    name="numberOfVisitor"
                    onChange={handleChange}
                    value={formData.numberOfVisitor}
                    className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                    required
                />
            </div>

            <div className='flex flex-col gap-2'>
                <label className="font-semibold">Jenis Tenda</label>
                <div className='relative'>
                    <select
                        name="tentType"
                        onChange={handleChange}
                        value={formData.tentType}
                        className="block appearance-none px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                        required
                    >
                        <option>Pilih</option>
                        <option value="Dome - 2 Orang">Dome - 2 Orang</option>
                        <option value="Dome - 4 Orang">Dome - 4 Orang</option>
                        <option value="Dome - 8 Orang">Dome - 8 Orang</option>
                    </select>
                    <span className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                        <IoIosArrowDown />
                    </span>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <label className="font-semibold">Tanggal Kedatangan</label>
                <input
                    type="date"
                    name="arrivalDate"
                    onChange={handleChange}
                    value={formData.arrivalDate}
                    className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                    required
                />
            </div>

            <div className='flex flex-col gap-2'>
                <label className="font-semibold">Tanggal Kepulangan</label>
                <input
                    type="date"
                    name="departureDate"
                    onChange={handleChange}
                    value={formData.departureDate}
                    className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 sm:text-sm"
                    required
                />
            </div>

            <div className='flex flex-col gap-2'>
                <label className="font-semibold">Pilih Kavling</label>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.0963541431142!2d112.52960455654726!3d-7.939746304651023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883de82b88e3b%3A0xef56b8f39f00d6e0!2sBedengan%20Camping%20Ground!5e0!3m2!1sen!2sid!4v1723107890524!5m2!1sen!2sid" 
                    className="rounded-lg h-56 lg:h-72 w-[20rem] lg:w-[29rem]"  
                    allowFullScreen="" 
                    loading="lazy" 
                    title="Bedengan Camping Ground Map"></iframe>
            </div>

            <div className='flex w-full justify-center lg:justify-end'>
                <Button onClick={handleNext} className='w-full lg:w-fit'>Selanjutnya</Button>
            </div>
        
        </div>
    </div>
  )
}

export default DetailKavling