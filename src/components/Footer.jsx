import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { PiPhoneFill } from "react-icons/pi";
import { BiSolidEnvelope } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const Footer = ({ className }) => {
  return (
    <div className={`flex flex-col items-center gap-2 px-28 pt-9 pb-5 ${className}`}>
        <div className='flex flex-row justify-evenly gap-20'>
            <div className='flex flex-col gap-4'>
              <h3 className='font-semibold text-xl'>Bumi Perkemahan Bedengan</h3>
              <div className='flex flex-col gap-8'>
                <p className='text-inactive-gray'>Bumi Perkemahan Bedengan<br/>merupakan sebuah destinasi yang<br/>menawarkan camping ground<br/>dengan keindahan hutan pinus.</p>
                <div className='flex flex-row gap-4'>
                  <FaInstagram className='text-secondary text-xl'/>
                  <FaWhatsapp className='text-secondary text-xl'/>
                  <AiOutlineYoutube className='text-secondary text-xl'/>
                  <FaLinkedinIn className='text-secondary text-xl'/>
                  <FaTwitter className='text-secondary text-xl'/>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4 text-inactive-gray'>
              <p className='text-secondary font-bold'>Link</p>
              <Link className='transition-colors hover:text-secondary duration-300' to="/">Beranda</Link>
              <Link className='transition-colors hover:text-secondary duration-300' to="/reservasi">Reservasi</Link>
              <Link className='transition-colors hover:text-secondary duration-300' to="/syarat-dan-ketentuan">Syarat & Ketentuan</Link>
            </div>
            <div className='flex flex-col gap-4 text-inactive-gray'>
              <p className='text-secondary font-bold'>Contact</p>
              <div className='flex flex-row gap-2 items-center'>
                <PiPhoneFill className='text-secondary text-xl'/>
                <p>(406) 555-0120</p>
              </div>
              <div className='flex flex-row gap-2 items-center'>
                <BiSolidEnvelope className='text-secondary text-xl'/>
                <p>bumperbedengan@gmail.com</p>
              </div>
              <div className='flex flex-row gap-2'>
                <FaLocationDot className='text-secondary text-xl'/>
                <p>Jl. Raya Selokerto, Selorejo, Kec. Dau, Kabupaten<br/> Malang, Jawa Timur 65151</p>
              </div>
            </div>
        </div>
        <p className='text-inactive-gray'>&copy;2024 Bumi Perkemahan Bedengan All rights reserved.</p>
    </div>
  )
}

export default Footer