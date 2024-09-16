import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState('bg-transparent');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  useEffect(() => {
    if (isMenuOpen && location.pathname !== '/') {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return () => {
        document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, location.pathname]);

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth > 1024) {
            setIsMenuOpen(false);
        }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
        window.removeEventListener('resize', handleResize);
    }
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className={`px-6 py-4 lg:px-28 lg:py-1 w-full z-50 transition-colors duration-300 ${navbarBg}`}>
        <div className='flex flex-col lg:flex-row lg:justify-between text-primary lg:items-center'>
            <div className='flex flex-row justify-between'>
                <Link to="/">
                    <img src="/LogoPesonaBedengan.svg" alt="logo" className='w-14 lg:w-20'/>
                </Link>
                <button
                    className='text-primary lg:hidden focus:outline-none'
                    onClick={toggleMenu}
                    >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                        />
                    </svg>
                </button>
            </div>
            <div className={`flex-col w-72 lg:w-fit lg:flex lg:flex-row lg:items-center lg:static absolute top-[3.8rem] right-0 bg-secondary lg:bg-transparent transition-all duration-500 ease-in-out ${isMenuOpen ? 'flex h-screen z-40' : 'hidden'} lg:flex`}>
                <div className='flex flex-col gap-4 px-8 py-5 lg:flex-row lg:justify-evenly lg:gap-24'>
                    <Link className='lg:font-semibold transition-colors hover:text-accent duration-300' to="/">Beranda</Link>
                    <Link className='lg:font-semibold transition-colors hover:text-accent duration-300' to="/reservasi">Reservasi</Link>
                    <Link className='lg:font-semibold transition-colors hover:text-accent duration-300' to="/syarat-dan-ketentuan">Syarat & Ketentuan</Link>
                    <div className='flex flex-row gap-4 lg:hidden'>
                        <Link className='px-5 py-1 text-sm font-semibold bg-accent rounded-md transition-colors hover:bg-hover-green duration-300' to='/masuk'>Masuk</Link>
                        <Link className='px-5 py-1 text-sm text-accent font-semibold rounded-md border-[1.5px] border-accent transition-colors hover:bg-accent hover:text-primary duration-300' to='/daftar'>Daftar</Link>
                    </div>
                </div>
            </div>
            <Link className='hidden lg:lg:block px-5 py-1 text-sm font-semibold bg-accent rounded-md transition-colors hover:bg-hover-green duration-300' to='/masuk'>Masuk</Link>
        </div>
    </div>
  )
}

export default Navbar