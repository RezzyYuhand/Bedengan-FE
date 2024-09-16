import React from 'react'

const HeaderBar = ({ title, searchTerm, onSearchChange, username }) => {
  return (
    <div className='flex flex-row w-full items-center justify-between'>
      <div className='flex flex-row gap-10'>
        <h2 className='font-semibold'>{title}</h2>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={onSearchChange}
          className='px-3 py-2 w-72 rounded-full ring-1 ring-inactive-gray-2'
        />
      </div>
      <span className='pr-10'>{username}</span>
    </div>
  )
}

export default HeaderBar