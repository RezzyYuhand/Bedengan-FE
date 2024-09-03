import React, { useState } from 'react'
import { MdOutlinePersonOutline } from "react-icons/md";
import { RiFileList2Line } from "react-icons/ri";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { Navbar, Footer, Button } from '../../components/index'
import ContentProfil from './ContentProfil';
import ContentPesanan from './ContentPesanan';
import ContentRiwayat from './ContentRiwayat';

const Profil = () => {
  const [selectedContent, setSelectedContent] = useState('profil');
  const renderContent = () => {
    switch (selectedContent) {
      case 'profil':
        return <ContentProfil />;
      case 'pesanan':
        return <ContentPesanan />;
      case 'riwayat':
        return <ContentRiwayat />;
      default:
        return <ContentProfil />;
    }
  };

  return (
    <div>
      <Navbar />
      <div className='flex flex-row justify-center gap-6 w-screen px-28'>
        <ol className='flex flex-col items-start pt-3 min-w-64 gap-6 border-r-[1.5px] border-inactive-gray-2'>
          <li onClick={() => setSelectedContent('profil')} className={`flex flex-row gap-2 items-center cursor-pointer transition-colors duration-300 ${selectedContent === 'profil' ? 'font-bold border-r-4 border-accent w-full' : ''}`}>
            <MdOutlinePersonOutline className='text-lg'/>
            Profil
          </li>
          <li onClick={() => setSelectedContent('pesanan')} className={`flex flex-row gap-2 items-center cursor-pointer transition-colors duration-300 ${selectedContent === 'pesanan' ? 'font-bold border-r-4 border-accent w-full' : ''}`}>
            <RiFileList2Line className='text-lg'/>
            Pesanan
          </li>
          <li onClick={() => setSelectedContent('riwayat')} className={`flex flex-row gap-2 items-center cursor-pointer transition-colors duration-300 ${selectedContent === 'riwayat' ? 'font-bold border-r-4 border-accent w-full' : ''}`}>
            <PiClockCounterClockwiseBold className='text-lg'/>
            Riwayat Pesanan
          </li>
        </ol>
        {renderContent()}
      </div>
      <Footer className='mt-20' />
    </div>
  )
}

export default Profil