import React, {useEffect, useState} from 'react'
import {Navbar, Footer, Button, KavlingItem} from '../../components'
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import _ from "lodash";
import {useNavigate} from "react-router-dom";
import {getAllKavling} from "../../services/kavlingService.js";

const Kavling = () => {
    const navigate = useNavigate()
    const rowOptions = {
        A1: [
            ['A1.1', 'A1.2', 'A1.3', 'A1.4', 'A1.5', 'A1.6', 'A1.7', 'A1.8'],
            ['B1.1', 'B1.2', 'B1.3', 'B1.4', 'B1.5', 'B1.6', 'B1.7', 'B1.8'],
            ['C1.1', 'C1.2', 'C1.3', 'C1.4', 'C1.5', 'C1.6', 'C1.7', 'C1.8'],
        ],
        A2: [
            ['D1.1', 'D1.2',],
            ['E1.1', 'E1.2',],
            ['F1.1', 'F1.2',],
        ],
        A3: [
            ['G1.1',],
            ['H1.1',],
            ['I1.1',],
        ],
        A4: [
            ['J1.1', 'J1.2', 'J1.3',],
            ['K1.1', 'K1.2', 'K1.3',],
            ['L1.1', 'L1.2', 'L1.3',],
        ],
    };

    const [lastFormData, setLastFormData] = useState({})
    const [selectedRowOption, setSelectedRowOption] = useState('A1');
    const [selectedKavling, setSelectedKavling] = useState(null);

    useEffect(() => {
        const _lastFormData = localStorage.getItem("tmp_add_reservasi")

        if (_.isEmpty(_lastFormData)) {
            navigate("/reservasi")
        } else {
            setLastFormData(_lastFormData)
        }

        getAllKavling(localStorage.getItem("token")).then((response) => {
            console.log(response)
        })
    }, [])

    const handleRowClick = (option) => {
        setSelectedRowOption(option);
        setSelectedKavling(null); // Reset selected kavling when row option changes
    };

    const handleItemClick = (item) => {
        setSelectedKavling(item);
        console.log('Selected Kavling:', item);
    };

    return (
        <div>
            <Navbar/>
            <div className='flex flex-col items-center gap-6 px-10 lg:px-28'>
                <h2 className='font-semibold text-2xl lg:text-4xl'>Pilih Kavling</h2>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-xl font-semibold'>Ground A</h3>
                    <div className='flex flex-row gap-3'>
                        <button><IoIosArrowBack/></button>
                        <img src="/images/background.JPG" alt="" className='h-64 w-[35rem]'/>
                        <button><IoIosArrowForward/></button>
                    </div>
                    <h3 className='text-xl font-semibold'>Pilih Kavling</h3>
                    <div className='flex flex-col gap-3'>
                        <ol className='flex flex-row font-semibold gap-5 cursor-pointer'>
                            {Object.keys(rowOptions).map((key) => (
                                <li
                                    key={key}
                                    onClick={() => handleRowClick(key)}
                                    className={`${
                                        selectedRowOption === key ? 'text-accent' : 'text-secondary'
                                    }`}
                                >
                                    {key}
                                </li>
                            ))}
                        </ol>
                        <KavlingItem rows={rowOptions[selectedRowOption]} onItemClick={handleItemClick}/>
                        <div className='flex flex-row  gap-4 justify-center w-full'>
                            <div className='flex flex-row gap-1 items-center'>
                                <div className='p-[0.5rem] bg-accent-2 rounded-full'/>
                                <p className='text-sm'>Tersedia</p>
                            </div>
                            <div className='flex flex-row gap-1 items-center'>
                                <div className='p-[0.5rem] bg-accent rounded-full'/>
                                <p className='text-sm'>Terpilih</p>
                            </div>
                            <div className='flex flex-row gap-1 items-center'>
                                <div className='p-[0.5rem] bg-red-700 rounded-full'/>
                                <p className='text-sm'>Tidak Tersedia</p>
                            </div>
                        </div>
                        <h3 className='text-xl font-semibold'>Detail Harga</h3>
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-row'>
                                <p className='w-28 max-w-28'>Jenis Tenda</p>
                                <p>: Tenda Dome - 6 Orang</p>
                            </div>
                            <div className='flex flex-row'>
                                <p className='w-28 max-w-28'>Kavling</p>
                                <p>: {selectedKavling ? selectedKavling : '-'}</p>
                            </div>
                            <div className='flex flex-row'>
                                <p className='w-28 max-w-28'>Harga</p>
                                <p>: Rp 85.000</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row w-full justify-end'>
                        <Button>Selanjutnya</Button>
                    </div>
                </div>
            </div>
            <Footer className='mt-20'/>
        </div>
    )
}

export default Kavling