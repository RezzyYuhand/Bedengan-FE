import React, {useEffect, useState} from 'react'
import {IoIosArrowDown} from "react-icons/io";
import {Button} from '../../components/index'
import Cookies from 'js-cookie'
import {getAllPerlengkapan} from "../../services/perlengkapanService.js";

const DetailKavling = ({onNext}) => {
    const [formData, setFormData] = useState({
        visitorType: '',
        numberOfVisitor: '',
        tentType: {
            id:''
        },
        arrivalDate: '',
        departureDate: '',
    });

    const [tentType, setTentType] = useState([])

    useEffect(() => {
        getAllPerlengkapan(localStorage.getItem("token"), "jenis=tenda_paket,tenda_non_paket")
            .then((response) => {
                if(response.data){
                    setTentType(response.data)
                }
            })
    }, [])

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const validate = () => {
        const errors = [];

        if (!formData.visitorType) {
            errors.push('Jenis Pengunjung harus dipilih.');
        }
        if (!formData.numberOfVisitor) {
            errors.push('Jumlah pengunjung harus diisi.');
        }
        if (!formData.tentType) {
            errors.push('Jenis Tenda harus dipilih.');
        }
        if (!formData.arrivalDate) {
            errors.push('Tanggal Kedatangan harus diisi.');
        }
        if (!formData.departureDate) {
            errors.push('Tanggal Kepulangan harus diisi.');
        }

        return errors;
    }

    const handleNext = () => {
        const validationErrors = validate();
        if (validationErrors.length > 0) {
            alert(validationErrors.join('\n\n'));
        } else {
            onNext({
                ...formData,
                tentType: JSON.parse(formData.tentType)
            });
        }
    }

    return (
        <div className='flex flex-col gap-3 items-center px-10 lg:px-28'>
            <div className='flex flex-col items-center'>
                <h2 className='font-semibold text-2xl lg:text-4xl'>Reservasi</h2>
                <p className='text-secondary-gray'>Detail Kavling</p>
            </div>

            <div className='flex flex-col w-72 lg:w-[30rem] gap-4 lg:max-w-[32rem]'>
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
                        <IoIosArrowDown/>
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
                            {tentType.map((item, index) => {
                                return <option key={index} value={JSON.stringify(item)}>{item.nama}</option>
                            })}
                        </select>
                        <span className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                        <IoIosArrowDown/>
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

                <div className='flex w-full justify-center lg:justify-end'>
                    <Button onClick={handleNext} className='w-full lg:w-fit'>Selanjutnya</Button>
                </div>

            </div>
        </div>
    )
}

export default DetailKavling