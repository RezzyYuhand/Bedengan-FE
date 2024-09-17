import React, { useState } from 'react';
import SidePanel from './SidePanel';
import HeaderBar from './HeaderBar';
import { Button, KavlingLayout, GroundModal, NumberModal, KavlingModal } from '../../components';

const initialKavlingStructure = {
    A: {
      A1: [
        ['A1.1', 'A1.2'],
      ],
    },
};

const AddKavling = () => {
    const [kavlingData, setKavlingData] = useState(initialKavlingStructure);
    const [selectedGround, setSelectedGround] = useState('');
    const [selectedNumber, setSelectedNumber] = useState('');
    const [isGroundModalOpen, setIsGroundModalOpen] = useState(false);
    const [isNumberModalOpen, setIsNumberModalOpen] = useState(false);
    const [isKavlingModalOpen, setIsKavlingModalOpen] = useState(false);
    const [modalData, setModalData] = useState({ ground: '', groundNumber: '', kavlingNumber: '' });

    const handleGroundChange = (e) => {
        setSelectedGround(e.target.value);
        setSelectedNumber(''); // Reset number when ground changes
    };

    const handleNumberChange = (e) => {
        setSelectedNumber(e.target.value);
    };

    const handleAddGround = () => {
        setIsGroundModalOpen(true);
    };

    const handleAddNumber = () => {
        if (selectedGround) {
            setIsNumberModalOpen(true);
        } else {
            alert('Mohon memilih ground terlebih dahulu.');
        }
    };

    const addNewGround = (groundName) => {
        if (groundName && !kavlingData[groundName]) {
            setKavlingData({
                ...kavlingData,
                [groundName]: {},
            });
        }
    };

    const addNewNumber = (numberName) => {
        if (selectedGround && numberName && !kavlingData[selectedGround][numberName]) {
            setKavlingData({
                ...kavlingData,
                [selectedGround]: {
                    ...kavlingData[selectedGround],
                    [numberName]: [[]], // Start with an empty row
                },
            });
        }
    };

    const handleAddKavling = (rowIndex) => {
        if (selectedGround && selectedNumber) {
            setModalData({ ground: selectedGround, groundNumber: selectedNumber, kavlingNumber: rowIndex === null ? kavlingData[selectedGround][selectedNumber].length + 1 : rowIndex + 1 });
            setIsKavlingModalOpen(true);
        } else {
            alert('Mohon memilih ground atau nomor ground terlebih dahulu.');
        }
    };

    const saveNewKavling = (kavlingDetails) => {
        const { groundId, idKavling, harga, jenisTenda, nama, status } = kavlingDetails;
        const currentRows = kavlingData[selectedGround][selectedNumber];
        if (modalData.kavlingNumber - 1 < currentRows.length) {
            currentRows[modalData.kavlingNumber - 1].push({
                idKavling,
                harga,
                jenisTenda,
                nama,
                status,
            });
        } else {
            currentRows.push([{
                idKavling,
                harga,
                jenisTenda,
                nama,
                status,
            }]);
        }
        setKavlingData({
            ...kavlingData,
            [selectedGround]: {
                ...kavlingData[selectedGround],
                [selectedNumber]: [...currentRows],
            },
        });
        setIsKavlingModalOpen(false);
    };

    return (
        <div className='w-screen h-screen p-10'>
            <div className='flex flex-row gap-10 h-full'>
                <SidePanel />
                <div className='flex flex-col py-3 w-full gap-8'>
                    <HeaderBar title='Reservasi' searchTerm='' onSearchChange={() => {}} username='Admin' />

                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-row w-full justify-between items-center'>
                                <span className='font-semibold'>Tambah Kavling</span>
                            </div>
                            <div className='w-full bg-secondary h-[1px] mt-2' />

                            <form className='flex flex-col gap-4 text-xs'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label className="font-semibold">Ground</label>
                                    <div className='flex flex-row gap-5 items-center'>
                                        <select
                                            value={selectedGround}
                                            onChange={handleGroundChange}
                                            className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2"
                                            required
                                        >
                                            <option value="">Pilih Ground</option>
                                            {Object.keys(kavlingData).map((ground) => (
                                                <option key={ground} value={ground}>{ground}</option>
                                            ))}
                                        </select>
                                        <button
                                            onClick={handleAddGround}
                                            className='px-3 py-2 w-40 shadow-md rounded-md bg-accent text-primary hover:bg-hover-green transition-colors duration-300'
                                            type='button'
                                        >
                                            Tambah Ground
                                        </button>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 w-full'>
                                    <label className="font-semibold">Nomor Ground</label>
                                    <div className='flex flex-row gap-5 items-center'>
                                        <select
                                            value={selectedNumber}
                                            onChange={handleNumberChange}
                                            className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2"
                                            required
                                        >
                                            <option value="">Pilih Nomor Ground</option>
                                            {selectedGround && Object.keys(kavlingData[selectedGround]).map((number) => (
                                                <option key={number} value={number}>{number}</option>
                                            ))}
                                        </select>
                                        <button
                                            onClick={handleAddNumber}
                                            className='px-3 py-2 w-56 shadow-md rounded-md bg-accent text-primary hover:bg-hover-green transition-colors duration-300'
                                            type='button'
                                        >
                                            Tambah Nomor Ground
                                        </button>
                                    </div>
                                </div>

                                {/* Display Kavling Layout */}
                                <KavlingLayout
                                    kavlings={selectedGround && selectedNumber ? kavlingData[selectedGround][selectedNumber] : []}
                                    onAddKavling={handleAddKavling}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {isGroundModalOpen && (
                <GroundModal
                    onClose={() => setIsGroundModalOpen(false)}
                    onSave={(groundName) => {
                        addNewGround(groundName);
                        setIsGroundModalOpen(false);
                    }}
                />
            )}

            {isNumberModalOpen && (
                <NumberModal
                    selectedGround={selectedGround}
                    onClose={() => setIsNumberModalOpen(false)}
                    onSave={(numberName) => {
                        addNewNumber(numberName);
                        setIsNumberModalOpen(false);
                    }}
                />
            )}

            {isKavlingModalOpen && (
                <KavlingModal
                    ground={modalData.ground}
                    groundNumber={modalData.groundNumber}
                    kavlingNumber={modalData.kavlingNumber}
                    onClose={() => setIsKavlingModalOpen(false)}
                    onSave={saveNewKavling}
                />
            )}
        </div>
    );
};

export default AddKavling;