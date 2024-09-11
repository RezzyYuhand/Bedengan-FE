import React from 'react'
import { Button, Card, Footer, Navbar } from '../../components/index'
import { useInView } from 'react-intersection-observer';
import { MdOutlineMosque, MdOutlineShoppingBag } from "react-icons/md";
import { IoMdMan, IoMdWoman } from "react-icons/io";
import { LuClock4 } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";

const handleButtonClick = () => {
    alert('Button clicked!');
};

const handleMapButtonClick = () => {
    window.location.href = 'https://maps.app.goo.gl/JDfZqfok6JddgL2P9';
}
  
const cardData = [
    { Amount: '2 Orang', Capacity: 'Kapasitas 1-2 orang', Price: '60.000', id: 1 },
    { Amount: '4 Orang', Capacity: 'Kapasitas 3-4 orang', Price: '75.000', id: 2 },
    { Amount: '8 Orang', Capacity: 'Kapasitas 6-8 orang', Price: '100.000', id: 3 },
];

const LandingPage = () => {
  const { ref: sec1Ref, inView: sec1InView } = useInView({ triggerOnce: true });
  const { ref: sec2Ref, inView: sec2InView } = useInView({ triggerOnce: true });
  const { ref: sec3Ref, inView: sec3InView } = useInView({ triggerOnce: true });
  const { ref: sec4Ref, inView: sec4InView } = useInView({ triggerOnce: true });
  const { ref: sec5Ref, inView: sec5InView } = useInView({ triggerOnce: true });
  const { ref: sec6Ref, inView: sec6InView } = useInView({ triggerOnce: true });
  const { ref: sec7Ref, inView: sec7InView } = useInView({ triggerOnce: true });
  
  return (
    <div>
        <Navbar/>
        <div className='flex flex-col gap-16'>
            <div className="relative flex flex-col bg-[url('/images/background.JPG')] bg-cover bg-center h-screen w-full px-10 lg:pl-28 lg:pr-[25rem]">
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div ref={sec1Ref} className={`relative flex flex-col items-center lg:items-start justify-center lg: gap-5 w-72 lg:w-fit text-white h-full z-10 transition-opacity duration-1000 ${sec1InView ? 'opacity-100' : 'opacity-0'}`}>
                    <h1 className='text-primary font-semibold text-3xl lg:text-4xl'>
                        Selamat Datang di<br/>Bumi Perkemahan Bedengan
                    </h1>
                    <p className='text-primary text-sm lg:text-lg'>
                        Temukan kedamaian dan keindahan alam di jantung Bedengan dengan<br/> pengalaman berkemah yang tak terlupakan.
                    </p>
                    <Button onClick={handleButtonClick}>Reservasi Sekarang</Button>
                </div>
            </div>
            <div className='flex flex-col gap-24'>
                <div ref={sec2Ref} className={`flex flex-col gap-8 items-center transition-opacity duration-1000 ${sec2InView ? 'opacity-100' : 'opacity-0'}`}>
                    <div className='flex flex-col gap-2 items-center text-center'>
                        <p className='text-lg text-secondary-gray'>Temukan kehangatan di Bedengan</p>
                        <h2 className='font-semibold'>Bumi Pekemahan Bedengan</h2>
                    </div>
                    <div className='flex flex-col gap-8 lg:flex-row px-10 lg:px-28 lg:gap-10 items-center'>
                        <img src="/images/background.JPG" alt="" className='hidden lg:block rounded-lg h-72 w-auto' />
                        <div className='flex flex-col gap-9  items-center lg:items-start'>
                            <p>Temukan kedamaian dan keindahan alam di jantung Bedengan dengan pengalaman berkemah yang tak terlupakan. Pilih dari berbagai lokasi perkemahan yang mempesona. nikmati fasilitas modern, dan rasakan ketenangan jauh dari hiruk-pikuk kota. Mulai petualangan Anda hari ini dengan mudah - cari tanggal, pilih lokasi, dan buat reservasi hanya dengan beberapa klik!</p>
                            <Button onClick={handleButtonClick}>Reservasi Sekarang</Button>
                        </div>
                    </div>
                </div>
                
                <div ref={sec3Ref} className={`flex flex-col gap-8 items-center transition-opacity duration-1000 ${sec3InView ? 'opacity-100' : 'opacity-0'}`}>
                    <div className='flex flex-col gap-2 items-center text-center'>
                        <p className='text-lg text-secondary-gray'>Jangan khawatir kekurangan apapun</p>
                        <h2 className='font-semibold'>Fasilitas</h2>
                    </div>
                    <div className='flex flex-col gap-8 lg:flex-row px-28 lg:gap-24 items-center'>
                        <div className='flex flex-col gap-3 items-center'>
                            <div className='flex flex-row items-center gap-3'>
                                <MdOutlineShoppingBag className='text-hover-green text-[2.5rem]'/>
                                <h2 className='font-semibold text-xl'>Warung</h2>
                            </div>
                            <div className="relative flex h-fit items-center justify-center w-40">
                                <div className="bg-accent h-[0.2rem] w-full z-0 shadow-md flex justify-start items-center">
                                    <div className="bg-hover-green h-[0.3rem] w-1/2 z-10 shadow-lg"></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 items-center'>
                            <div className='flex flex-row items-center gap-3'>
                                <MdOutlineMosque className='text-hover-green text-[2.5rem]'/>
                                <h2 className='font-semibold text-xl'>Mushola</h2>
                            </div>
                            <div className="relative flex h-fit items-center justify-center w-40">
                                <div className="bg-accent h-[0.2rem] w-full z-0 shadow-md flex justify-start items-center">
                                    <div className="bg-hover-green h-[0.3rem] w-1/2 z-10 shadow-lg"></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 items-center'>
                            <div className='flex flex-row gap-1 items-center'>
                                <div className='flex flex-row w-10 items-center gap-1 text-hover-green' >
                                    <IoMdMan className='text-[2.5rem] -mr-4'/>
                                    <IoMdWoman className='text-[2.5rem] '/>
                                </div>
                                <h2 className='font-semibold text-xl'>Toilet</h2>
                            </div>
                            <div className="relative flex h-fit items-center justify-center w-40">
                                <div className="bg-accent h-[0.2rem] w-full z-0 shadow-md flex justify-start items-center">
                                    <div className="bg-hover-green h-[0.3rem] w-1/2 z-10 shadow-lg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={sec4Ref} className={`flex flex-col gap-8 items-center transition-opacity duration-1000 ${sec4InView ? 'opacity-100' : 'opacity-0'}`}>
                    <div className='flex flex-col gap-2 items-center text-center'>
                        <p className='text-lg text-secondary-gray'>Tentukan pilihanmu sesuai dengan kebutuhanmu</p>
                        <h2 className='font-semibold'>Paket Tenda</h2>
                    </div>
                    <div className='flex  flex-col lg:flex-row px-10 lg:px-28 gap-6 items-center'>
                        {cardData.map((data) => (
                            <Card key={data.id} Amount={data.Amount} Capacity={data.Capacity} Price={data.Price} onCLick={handleButtonClick}/>
                        ))}
                    </div>
                </div>

                <div className="relative flex bg-[url('/images/background.JPG')] bg-cover bg-center min-h-[50vh] place-content-center items-center">
                    <div className='absolute inset-0 bg-black opacity-60'></div>
                    <div ref={sec5Ref} className={`relative flex flex-col lg:flex-row lg:justify-between gap-7 lg:gap-0 lg:items-center w-full px-14 lg:px-28 transition-opacity duration-1000 ${sec5InView ? 'opacity-100' : 'opacity-0'}`}>
                        <h1 className='text-2xl lg:text-3xl text-white font-semibold w-80 lg:w-[35rem]'>Sudah siap menikmati keindahan hutan pinus?</h1>
                        <Button onClick={handleButtonClick}>Reservasi Sekarang</Button>
                    </div>
                </div>

                <div  ref={sec6Ref} className={`flex flex-col gap-8 items-center transition-opacity duration-1000 ${sec6InView ? 'opacity-100' : 'opacity-0'}`}>
                    <div className='flex flex-col gap-2 items-center text-center'>
                        <p className='text-lg text-secondary-gray'>Temukan kehangatan di Bedengan</p>
                        <h2 className='font-semibold'>Lokasi dan Jam Operasional</h2>
                    </div>
                    <div className='flex flex-col lg:flex-row px-10 lg:px-28 gap-10 items-center'>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.0963541431142!2d112.52960455654726!3d-7.939746304651023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883de82b88e3b%3A0xef56b8f39f00d6e0!2sBedengan%20Camping%20Ground!5e0!3m2!1sen!2sid!4v1723107890524!5m2!1sen!2sid" 
                            className="rounded-lg h-56 lg:h-72 w-[20rem] lg:w-[29rem]"  
                            allowFullScreen="" 
                            loading="lazy" 
                            title="Bedengan Camping Ground Map"></iframe>
                        <div className='flex flex-col gap-9'>
                            <div className='flex flex-col gap-3 justify-start pr-20'>
                                <div className='flex flex-row items-center gap-5'>
                                    <LuClock4 className='text-secondary text-xl'/>
                                    <p className='text-secondary'>24 Jam</p>
                                </div>
                                <div className='flex flex-row items-center gap-5'>
                                    <HiOutlineLocationMarker className='text-hover-green text-3xl lg:text-[1.5rem]'/>
                                    <p className='text-secondary'>Jl. Raya Selokarto, Selorejo, Kec. Dau,<br/>Kabupaten Malang, Jawa Timur 65151</p>
                                </div>
                            </div>
                            <Button onClick={handleMapButtonClick}>Buka Google Maps</Button>
                        </div>
                    </div>
                </div>

                <div ref={sec7Ref} className={`flex flex-col gap-8 items-center transition-opacity duration-1000 ${sec7InView ? 'opacity-100' : 'opacity-0'}`}>
                    <div className='flex flex-col gap-2 items-center text-center'>
                        <p className='text-lg text-secondary-gray'>Apa kata mereka?</p>
                        <h2 className='font-semibold'>Testimoni</h2>
                    </div>
                    <div className='flex w-fit flex-col px-10 lg:px-28 gap-10 lg:gap-16 items-center'>
                        <img src="/images/background.JPG" alt="" className='rounded-full h-32 w-32 ' />
                        <div className='flex flex-col relative gap-5 lg:px-48 items-center'>
                            <img src='/images/quoteicon.svg' className='absolute hidden lg:block lg:top-[-3.5rem] lg:left-32 lg:h-14 lg:w-auto opacity-15'/>
                            <p>"Temukan kedamaian dan keindahan alam di jantung Bedengan dengan pengalaman berkemah yang tak terlupakan. Pilih dari berbagai lokasi perkemahan yang mempesona. nikmati fasilitas modern, dan rasakan ketenangan jauh dari hiruk-pikuk kota. Mulai petualangan Anda hari ini dengan mudah - cari tanggal, pilih lokasi, dan buat reservasi hanya dengan beberapa klik!"</p>
                            <p className='font-semibold'>-John Doe-</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer className='mt-20'/>
    </div>
  )
}

export default LandingPage