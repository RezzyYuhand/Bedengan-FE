import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SidePanel from './SidePanel'
import HeaderBar from './HeaderBar'
import KavlingList from './KavlingList'

const initialKavlingData = {
  A: {
    A1: [
      [{ id: 1, ground: 'A', nomorGround: 'A1', nomorKavling: 'A1.1', harga: 100000, isAvailable: true }],
      [{ id: 2, ground: 'A', nomorGround: 'A1', nomorKavling: 'A1.2', harga: 100000, isAvailable: false }],
    ],
  },
  B: {
    B1: [
      [{ id: 3, ground: 'B', nomorGround: 'B1', nomorKavling: 'B1.1', harga: 120000, isAvailable: true }],
    ],
  },
};

const flattenKavlingData = (data) => {
  let kavlingList = [];
  Object.keys(data).forEach((groundKey) => {
    const ground = data[groundKey];
    Object.keys(ground).forEach((numberKey) => {
      const kavlingRows = ground[numberKey];
      kavlingRows.forEach((row, rowIndex) => {
        row.forEach((kavling) => {
          kavlingList.push({
            ...kavling,
            ground: groundKey,
            nomorGround: numberKey,
            rowIndex: rowIndex,
          });
        });
      });
    });
  });
  return kavlingList;
};

const KavlingAdmin = () => {
  const [kavlingData, setKavlingData] = useState(initialKavlingData);
  const navigate = useNavigate();

  const handleAddKavling = () => {
    navigate('/admin/perlengkapan/kavling/tambah');
  };

  const handleEdit = (kavling) => {
    navigate(`/admin/perlengkapan/kavling/ubah/${kavling.id}`, { state: { kavling } });
  };

  const kavlingList = flattenKavlingData(kavlingData); // Flatten the nested structure

  return (
    <div className='w-screen h-screen p-10'>
      <div className='flex flex-row gap-10 h-full'>
        <SidePanel />
        <div className='flex flex-col py-3 w-full gap-8'>
          <HeaderBar title='Perlengkapan' searchTerm='' onSearchChange={() => {}} username='Admin' />
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-row w-full justify-between items-center'>
                <span className='font-semibold'>Kavling</span>
                <button onClick={handleAddKavling} className='px-3 py-2 bg-accent text-primary text-sm shadow-md rounded-md hover:bg-hover-green'>
                  Tambah Kavling
                </button>
              </div>
              <div className='w-full bg-secondary h-[1px] mt-2' />
              <div className='flex flex-col px-2 text-xs gap-1'>
                <div className='flex flex-row font-semibold'>
                  <span className='w-12 max-w-12'>No</span>
                  <span className='w-28 max-w-28'>Ground</span>
                  <span className='w-28 max-w-28'>Nomor Ground</span>
                  <span className='w-28 max-w-28'>Nomor Kavling</span>
                  <span className='w-28 max-w-28'>Status</span>
                  <span className='w-28 max-w-28'>Aksi</span>
                </div>
                <div>
                  <KavlingList kavlings={kavlingList} onEdit={handleEdit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KavlingAdmin;