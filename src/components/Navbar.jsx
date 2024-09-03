import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState('bg-transparent');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setNavbarBg('fixed bg-secondary shadow-md');
        } else {
            setNavbarBg('fixed bg-transparent');
        }
    };
  
    
    if (location.pathname === '/') {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    } else {
        setNavbarBg('bg-secondary shadow-md mb-14');
    }
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);

  return (
    <div className={`w-full z-50 transition-colors duration-300 ${navbarBg}`}>
        <div className='flex flex-row px-28 py-4 justify-between text-primary items-center'>
        <img src="/LogoPesonaBedengan.svg" alt="logo" className='w-20'/>
            <div className='flex flex-row justify-evenly gap-20'>
                <Link className='font-semibold transition-colors hover:text-accent duration-300' to="/">Beranda</Link>
                <Link className='font-semibold transition-colors hover:text-accent duration-300' to="/reservasi">Reservasi</Link>
                <Link className='font-semibold transition-colors hover:text-accent duration-300' to="/syarat-dan-ketentuan">Syarat & Ketentuan</Link>
            </div>
            <div>
                <Link className='px-5 py-1 text-sm font-semibold bg-accent rounded-md transition-colors hover:bg-hover-green duration-300' to='/masuk'>Masuk</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar