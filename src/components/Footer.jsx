import React from 'react'
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { PiPhoneFill } from "react-icons/pi";
import { BiSolidEnvelope } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const Footer = ({ className }) => {
  return (
    <div className={`flex flex-col items-center gap-2 px-28 pt-9 pb-16 ${className}`}>
        <div className='flex flex-row justify-evenly gap-20'>
            <div className='flex flex-col gap-4'>
              <h3 className='font-semibold text-xl'>Bumi Perkemahan Bedengan</h3>
              <div className='flex flex-col gap-8'>
                <p className='text-inactive-gray'>Prebör domisaning. Kemkastrering. Fagt<br/> kaskade. Bist decissa. Stereodiktisk<br/> vasyns att preteng. Mons byning fihör.<br/> Pore tolig. Epire kanesk. Monosa<br/> medelgam tisk.</p>
                <div className='flex flex-row gap-4'>
                  <FaInstagram className='text-secondary text-xl'/>
                  <FaWhatsapp className='text-secondary text-xl'/>
                  <AiOutlineYoutube className='text-secondary text-xl'/>
                  <FaLinkedinIn className='text-secondary text-xl'/>
                  <FaTwitter className='text-secondary text-xl'/>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-3 text-inactive-gray'>
              <p className='text-secondary font-semibold'>Home</p>
              <p>Beranda</p>
              <p>Program Keahlian</p>
              <p>Gallery</p>
              <p>Our News</p>
            </div>
            <div className='flex flex-col gap-3 text-inactive-gray'>
              <p className='text-secondary font-semibold'>About</p>
              <p>Beranda</p>
              <p>Program Keahlian</p>
              <p>Gallery</p>
              <p>Our News</p>
            </div>
            <div className='flex flex-col gap-3 text-inactive-gray'>
              <p className='text-secondary font-semibold'>Contact</p>
              <div className='flex flex-row gap-2 items-center'>
                <PiPhoneFill className='text-secondary text-xl'/>
                <p>(406) 555-0120</p>
              </div>
              <div className='flex flex-row gap-2 items-center'>
                <BiSolidEnvelope className='text-secondary text-xl'/>
                <p>kreasi.digital@gmail.com</p>
              </div>
              <div className='flex flex-row gap-2'>
                <FaLocationDot className='text-secondary text-xl'/>
                <p>2972 Westheimer Rd. Santa<br/> Ana, Illinois 85486</p>
              </div>
            </div>
        </div>
        <p className='text-inactive-gray'>&copy;2024 Bumi Perkemahan Bedengan All rights reserved.</p>
    </div>
  )
}

export default Footer