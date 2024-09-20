import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { VscTools } from "react-icons/vsc";
import { LuCalendarDays } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { logoutUser } from '../../services/userService'; // Import the logout API function
import { toast } from 'react-toastify';

const SidePanel = () => {
  const [isReservasiOpen, setReservasiOpen] = useState(false);
  const [isPerlengkapanOpen, setPerlengkapanOpen] = useState(false);
  const navigate = useNavigate(); // Use navigate for redirection

  const toggleReservasi = () => setReservasiOpen(!isReservasiOpen);
  const togglePerlengkapan = () => setPerlengkapanOpen(!isPerlengkapanOpen);

  const handleLogout = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      toast.error('No token found, please log in again.');
      navigate('/masuk');
      return;
    }

    try {
      // Attempt to log out
      await logoutUser(token);

      // Clear token and userData from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('userData');

      // Redirect to login page
      navigate('/masuk');
      toast.success('Logout successful');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error(error.response?.data?.message || 'Logout failed, please try again.');
    }
  };

  return (
    <div className='flex flex-col w-60 bg-accent-2 rounded-2xl h-full px-8 py-10 items-center justify-between'>
      <div className='flex flex-col items-center'>
        <img src="/LogoPesonaBedengan.png" alt="" className='w-28 mb-7' />
        <div className='flex flex-col gap-2 w-full text-sm'>
          <Link to='/dashboard' className='flex flex-row gap-2 items-center text-hover-green p-3 hover:text-accent transition-colors duration-300'>
            <IoHomeOutline />
            <span>Beranda</span>
          </Link>
          <div className={`flex flex-col p-3 ${isReservasiOpen ? 'bg-accent-4 text-primary rounded-lg' : 'text-hover-green'}`}>
            <div 
              className='cursor-pointer flex justify-between items-center hover:text-accent' 
              onClick={toggleReservasi}
            >
              <div className='flex flex-row items-center gap-2'>
                <LuCalendarDays />
                <span>Reservasi</span>
              </div>
              {isReservasiOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {isReservasiOpen && (
              <div className='flex flex-col items-center gap-1'>
                <div className='w-full bg-primary h-[1px] mt-2'/>
                <Link to='/admin/reservasi' className='hover:text-accent transition-colors duration-300'>Semua</Link>
                <Link to='/admin/reservasi/online' className='hover:text-accent transition-colors duration-300'>Online</Link>
                <Link to='/admin/reservasi/offline' className='hover:text-accent transition-colors duration-300'>Offline</Link>
              </div>
            )}
          </div>
          <div className={`flex flex-col p-3 ${isPerlengkapanOpen ? 'bg-accent-4 text-primary rounded-lg' : 'text-hover-green'}`}>
            <div 
              className='cursor-pointer flex justify-between items-center hover:text-accent' 
              onClick={togglePerlengkapan}
            >
              <div className='flex flex-row items-center gap-2'>
                <VscTools />
                <span>Perlengkapan</span>
              </div>
              {isPerlengkapanOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {isPerlengkapanOpen && (
              <div className='flex flex-col items-center gap-1'>
                <div className='w-full bg-primary h-[1px] mt-2'/>
                <Link to='/admin/perlengkapan' className='hover:text-accent transition-colors duration-300'>Semua</Link>
                <Link to='/admin/perlengkapan/kavling' className='hover:text-accent transition-colors duration-300'>Kavling</Link>
                <Link to='/admin/perlengkapan/tenda-paket' className='hover:text-accent transition-colors duration-300'>Tenda Paket</Link>
                <Link to='/admin/perlengkapan/tenda-non-paket' className='hover:text-accent transition-colors duration-300'>Tenda Non Paket</Link>
                <Link to='/admin/perlengkapan/item' className='hover:text-accent transition-colors duration-300'>Item</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <button className='flex flex-row gap-2 items-center text-orange-500' onClick={handleLogout}>
        <BiLogOut />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default SidePanel;
