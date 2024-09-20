import React, { useState, useEffect } from 'react';
import SidePanel from './SidePanel';
import HeaderBar from './HeaderBar';
import { Button, KavlingLayout, GroundModal, NumberModal, KavlingModal } from '../../components';
import { createGround, getAllGround } from '../../services/groundService'; // Import necessary services
import { getAllSubGrounds, createSubGround } from '../../services/subGroundService'; // Import sub-ground services
import { createKavling, getAllKavling } from '../../services/kavlingService'; // Import kavling services

const AddKavling = () => {
    const [kavlingData, setKavlingData] = useState({});
    const [subGroundData, setSubGroundData] = useState([]); // For storing sub-ground data
    const [kavlings, setKavlings] = useState([]); // To store kavling data
    const [selectedGround, setSelectedGround] = useState('');
    const [selectedNumber, setSelectedNumber] = useState('');
    const [isGroundModalOpen, setIsGroundModalOpen] = useState(false);
    const [isNumberModalOpen, setIsNumberModalOpen] = useState(false);
    const [isKavlingModalOpen, setIsKavlingModalOpen] = useState(false);
    const [modalData, setModalData] = useState({ ground: '', groundNumber: '', kavlingNumber: '' });
    const token = localStorage.getItem('token'); // Assume token is stored in localStorage

    // Function to fetch all ground data and update the state
    const fetchGroundData = async () => {
        try {
            const response = await getAllGround(token); // Fetch all grounds
            const groundData = response.data.reduce((acc, ground) => {
                acc[ground.id] = ground; // Using 'id' for ground keys
                return acc;
            }, {});
            setKavlingData(groundData);
        } catch (error) {
            console.error('Error fetching ground data:', error);
            alert('Terjadi kesalahan saat mengambil data ground.');
        }
    };

    // Fetch sub-grounds when a ground is selected
    const fetchSubGroundData = async (groundId) => {
        try {
            const response = await getAllSubGrounds(token, groundId);
            setSubGroundData(response.data); // Store sub-ground data
        } catch (error) {
            console.error('Error fetching sub-ground data:', error);
        }
    };

    const fetchKavlings = async (subGroundId) => {
        try {
            const response = await getAllKavling(token);
        
            // Log the response to inspect its structure
            console.log('Kavling API response:', response);
        
            // Check if the sub-ground exists in the response
            const kavlingsBySubGround = response.data[subGroundId];
        
            if (kavlingsBySubGround) {
                // Flatten the rows (like 1, 2, ...) into a single array
                const kavlingsArray = Object.values(kavlingsBySubGround).flat();
                console.log('Flattened kavlings array:', kavlingsArray); // Debugging log
                setKavlings(kavlingsArray);
            } else {
                console.error('No kavlings found for this sub-ground');
                setKavlings([]); // No kavlings found for the selected sub-ground
            }
        } catch (error) {
            console.error('Error fetching kavling data:', error);
            alert('Terjadi kesalahan saat mengambil data kavling.');
        }
    };
    
    
    
    


    // Fetch ground data on component mount
    useEffect(() => {
        fetchGroundData();
    }, []);

    const handleGroundChange = (e) => {
        const selectedGroundId = e.target.value;
        setSelectedGround(selectedGroundId);
        setSelectedNumber(''); // Reset sub-ground when ground changes
        fetchSubGroundData(selectedGroundId); // Fetch sub-ground data based on selected ground
    };

    const handleNumberChange = (e) => {
        const subGroundId = e.target.value;
        setSelectedNumber(subGroundId);
        fetchKavlings(subGroundId); // Fetch kavlings for the selected sub-ground
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

    // Save the new ground with the image and refresh ground data
    const addNewGround = async ({ groundName, image }) => {
        try {
            await createGround(token, { nama: groundName, image });
            await fetchGroundData(); // Refresh ground data
        } catch (error) {
            console.error('Error creating ground:', error);
            alert('Terjadi kesalahan saat menambahkan ground.');
        }
    };

    // Save the new sub-ground and refresh sub-ground data
    const addNewSubGround = async (numberName) => {
        try {
            await createSubGround(token, { ground_id: selectedGround, nama: numberName });
            await fetchSubGroundData(selectedGround); // Refresh sub-ground data after adding new sub-ground
        } catch (error) {
            console.error('Error creating sub-ground:', error);
            alert('Terjadi kesalahan saat menambahkan nomor ground.');
        }
    };

    // Save the new kavling and refresh kavling data
    const saveNewKavling = async (kavlingDetails) => {
        try {
            await createKavling(token, {
                ...kavlingDetails,
                sub_ground_id: selectedNumber, // Include the sub-ground ID
            });
            await fetchKavlings(selectedNumber); // Refresh kavlings after adding new one
        } catch (error) {
            console.error('Error creating kavling:', error);
            alert('Terjadi kesalahan saat menambahkan kavling.');
        }
        setIsKavlingModalOpen(false);
    };

    const handleAddKavling = (rowIndex) => {
        if (selectedGround && selectedNumber) {
            const groundName = kavlingData[selectedGround]?.nama;
            const subGroundName = subGroundData.find(sub => sub.id === selectedNumber)?.nama;
    
            setModalData({
                ground: groundName, // Pass ground name
                groundNumber: subGroundName, // Pass sub-ground name
                kavlingNumber: rowIndex === null ? (subGroundName.length + 1) : rowIndex + 1,
            });
    
            setIsKavlingModalOpen(true);
        } else {
            alert('Mohon memilih ground atau nomor ground terlebih dahulu.');
        }
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
                                            {Object.keys(kavlingData).map((groundId) => (
                                                <option key={groundId} value={groundId}>{kavlingData[groundId].nama}</option>
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
                                            {subGroundData.map((subGround) => (
                                                <option key={subGround.id} value={subGround.id}>{subGround.nama}</option>
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
                                    kavlings={kavlings}
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
                    onSave={(groundData) => {
                        addNewGround(groundData);
                        setIsGroundModalOpen(false);
                    }}
                />
            )}

            {isNumberModalOpen && (
                <NumberModal
                    selectedGround={kavlingData[selectedGround]?.nama}
                    onClose={() => setIsNumberModalOpen(false)}
                    onSave={(numberName) => {
                        addNewSubGround(numberName);
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
