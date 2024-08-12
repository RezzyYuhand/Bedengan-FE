import React, {useState} from 'react'
import DetailKavling from './DetailKavling';
import DataDiri from './DataDiri';
import DataDiriPJ from './DataDiriPJ';
import { Navbar, Footer } from '../../components/index'

const Reservasi = () => {
  const [step, setStep] = useState(1);  
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData((prevData) => ({...prevData, ...data}));
    if (data.visitorType === 'Individu') {
      setStep(2);
    } else {
      setStep(3);
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
        {step === 2 && <DataDiri onPrev={handlePrev} onSubmit={handleSubmit} />}
        {step === 3 && <DataDiriPJ onPrev={handlePrev} onSubmit={handleSubmit} />}
        <Footer className='mt-20' />
    </div>
  )
}

export default Reservasi