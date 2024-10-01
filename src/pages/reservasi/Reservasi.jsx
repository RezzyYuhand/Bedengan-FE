import React, {useState} from 'react'
import DetailKavling from './DetailKavling';
import DataDiri from './DataDiri';
import DataDiriPJ from './DataDiriPJ';
import ItemTambahan from './ItemTambahan';
import { Navbar, Footer } from '../../components/index'
import _ from "lodash";
import {useNavigate} from "react-router-dom";

const Reservasi = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate()

  const handleNext = (data) => {
    setFormData((prevData) => ({...prevData, ...data}));
    if (step === 1 ) {
      setStep(2);
    } else {
      setStep(1);
    }
  }

  const handlePrev = () => {
    setStep(1);
  }

  const handleSubmit = (data) => {
    const finalData = {
      jenis_pengunjung: formData.visitorType,
      tanggal_kedatangan: formData.arrivalDate,
      tanggal_kepulangan: formData.departureDate,
      keterangan: JSON.stringify({
        jumlah_pengunjung: formData.numberOfVisitor
      }),
      reservasi: data // The selected items will now include the item names
    };
  
    const tentInItemTambahanIndex = _.findIndex(
      finalData?.reservasi ?? [],
      (s) => s?.perlengkapan_id === formData?.tentType?.id
    );
  
    if (tentInItemTambahanIndex !== -1) {
      finalData.reservasi[tentInItemTambahanIndex].jumlah += 1;
    } else {
      finalData.reservasi.push({
        perlengkapan_id: formData.tentType.id,
        nama: formData.tentType.nama, // Add tent name to the reservation
        harga: formData.tentType.harga,
        jumlah: 1
      });
    }
  
    console.log('Final Reservation Data:', finalData);
    localStorage.setItem('tmp_add_reservasi', JSON.stringify(finalData));
    navigate('/kavling');
  };
  

  return (
    <div>
        <Navbar />
        {step === 1 && <DetailKavling onNext={handleNext} />}
        {/* {step === 2 && <DataDiri onPrev={handlePrev} onSubmit={handleNext} />}
        {step === 3 && <DataDiriPJ onPrev={handlePrev} onSubmit={handleNext} />} */}
        {step === 2 && <ItemTambahan onSubmit={handleSubmit}/>}
        <Footer className='mt-20' />
    </div>
  )
}

export default Reservasi