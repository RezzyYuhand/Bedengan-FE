import React from 'react';

const KavlingLayout = ({ kavlings, onAddKavling }) => {
  return (
    <div className='flex flex-col gap-3 items-center w-full rounded-md border-[1.5px] px-10 py-7 border-inactive-gray-2'>
      {/* Map over flat array of kavlings */}
      {kavlings.map((kavling, kavlingIndex) => (
        <div key={kavlingIndex} className='flex gap-2'>
          <div
            className='flex flex-col items-center justify-center w-12 h-12 bg-accent-2 rounded-lg text-secondary cursor-pointer p-1'
          >
            {/* Display kavling details */}
            <span className='text-xs font-semibold'>{kavling.id}</span>
            <span className='text-xs'>{kavling.harga}</span>
          </div>
          {/* Add box for adding new kavling within the row */}
          <div
            className='flex items-center justify-center w-12 h-12 border-[1px] border-inactive-gray bg-primary text-secondary rounded-lg cursor-pointer'
            onClick={() => onAddKavling(kavlingIndex)} // Add within the row
          >
            +
          </div>
        </div>
      ))}
      {/* Add box for adding a new row */}
      <div
        className='flex items-center justify-center w-12 h-12 border-[1px] border-inactive-gray bg-primary text-secondary rounded-lg cursor-pointer'
        onClick={() => onAddKavling(null)} // Passing null indicates adding a new row
      >
        +
      </div>
    </div>
  );
};

export default KavlingLayout;
