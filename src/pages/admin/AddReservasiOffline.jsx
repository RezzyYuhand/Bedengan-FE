import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SidePanel from './SidePanel'
import HeaderBar from './HeaderBar'
import OfflineFormStep from './OfflineFormStep'
import OfflineItemStep from './OfflineItemStep'
import OfflinePaymentStep from './OfflinePaymentStep'

const AddReservasiOffline = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    visitorType: '',
    name: '',
    phoneNumber: '',
    tentType: '',
    quantity: '',
    kavling: '',
    arrivalDate: '',
    departureDate: '',
    metodePembayaran: '',
  });

  const [selectedItems, setSelectedItems] = useState([]);

  const navigate = useNavigate();

  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleCancel = () => {
    // Reset the form and navigate back to ReservasiOffline
    setFormData({
      visitorType: '',
      name: '',
      phoneNumber: '',
      tentType: '',
      quantity: '',
      kavling: '',
      arrivalDate: '',
      departureDate: '',
      metodePembayaran: '',
    });
    setSelectedItems([]); // Reset items
    navigate('/admin/reservasi/offline');
  };

  const handleSave = () => {
    console.log('Form Data:', formData);
    console.log('Selected Items:', selectedItems);
    alert('Reservasi berhasil ditambahkan!');
    navigate('/admin/reservasi/offline');
  };

  const updatePaymentMethod = (method) => {
    setFormData((prevData) => ({ ...prevData, metodePembayaran: method }));
  };

  return (
    <div className='w-screen h-screen p-10'>
      <div className='flex flex-row gap-10 h-full'>
        <SidePanel/>
        <div className='flex flex-col py-3 w-full gap-8'>
          <HeaderBar title='Reservasi' searchTerm='' onSearchChange={() => {}} username='Admin'/>
          
          <div className='flex flex-col gap-10'>

            <div className='flex flex-col gap-3'>
              <div className='flex flex-row w-full justify-between items-center'>
                <span className='font-semibold'>Tambah Reservasi Offline</span>
              </div>
              <div className='w-full bg-secondary h-[1px] mt-2'/>
              {currentStep === 1 && (
                <OfflineFormStep formData={formData} setFormData={setFormData} onCancel={handleCancel} goToNextStep={goToNextStep} />
              )}
              {currentStep === 2 && (
                <OfflineItemStep 
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}
                  onCancel={handleCancel} 
                  goToNextStep={goToNextStep} 
                />
              )}
              {currentStep === 3 && (
                <OfflinePaymentStep 
                  items={selectedItems}
                  onCancel={handleCancel} 
                  onSave={handleSave}
                  updatePaymentMethod={updatePaymentMethod} 
                />
              )}
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default AddReservasiOffline