import React, {useState} from 'react'
import DetailKavling from './DetailKavling';
import DataDiri from './DataDiri';
import DataDiriPJ from './DataDiriPJ';
import ItemTambahan from './ItemTambahan';
import { Navbar, Footer } from '../../components/index'

const Reservasi = () => {
  const [step, setStep] = useState(1);  
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData((prevData) => ({...prevData, ...data}));
    if (step === 1 & data.visitorType === 'Individu') {
      setStep(2);
    } else if (step === 1 & data.visitorType === 'Organisasi') {
      setStep(3);
    } else if (step === 2) {
      setStep(4);
    } else if (step === 3) {
      setStep(4);
    } else {
      setStep(1);
    }
  }

  const handlePrev = () => {
    setStep(1);
  }

  const handleSubmit = (data) => {
    const finalData = {...formData, ...data};
    console.log(finalData);
    //form submission
  }

  return (
    <div>
        <Navbar />
        {step === 1 && <DetailKavling onNext={handleNext} />}
        {step === 2 && <DataDiri onPrev={handlePrev} onSubmit={handleNext} />}
        {step === 3 && <DataDiriPJ onPrev={handlePrev} onSubmit={handleNext} />}
        {step === 4 && <ItemTambahan/>}
        <Footer className='mt-20' />
    </div>
  )
}

export default Reservasi