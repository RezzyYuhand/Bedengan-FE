import React from 'react'
import { Button } from '../../components/index'

const ContentProfil = () => {
  return (
    <div className='flex flex-col gap-5 w-full items-center lg:items-start'>
          <h2 className='font-semibold'>Profil</h2>
          <div className='flex flex-col gap-6 w-full'>
            <div className='flex flex-col gap-5 border-[1.5px] border-inactive-gray-2 px-5 py-3 rounded-md'>
              <div className='flex flex-col gap-3'>
                  <label className='font-medium'>Nama</label>
                  <input
                      type="text"
                      name="name"
                      placeholder='Nama sesuai KTP'
                      className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 text-sm"
                      required
                  />
              </div>
              <div className='flex flex-col gap-3'>
                  <label className='font-medium'>Email</label>
                  <input
                      type="email"
                      name="email"
                      placeholder='Email aktif'
                      className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 text-sm"
                      required
                  />
              </div>
              <div className='flex flex-col gap-3'>
                  <label className='font-medium'>Nomor Telepon</label>
                  <input
                      type="tel"
                      name="phoneNumber"
                      placeholder='Nomor yang bisa dihubungi'
                      className="block px-3 py-2 w-full rounded-md ring-1 ring-inactive-gray-2 text-sm"
                      required
                  />
              </div>
              <Button>Simpan Perubahan</Button>
            </div>
          </div>
        </div>
  )
}

export default ContentProfil