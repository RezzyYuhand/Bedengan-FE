import React from 'react';

const KavlingLayout = ({ kavlings, onAddKavling }) => {
  return (
    <div className='flex flex-col gap-3 items-center w-full rounded-md border-[1.5px] px-10 py-7 border-inactive-gray-2'>
      {kavlings.map((row, rowIndex) => (
        <div key={rowIndex} className='flex gap-2'>
          {row.map((kavling, kavlingIndex) => (
            <div
              key={kavlingIndex}
              className='flex flex-col items-center justify-center w-12 h-12 bg-accent-2 rounded-lg text-secondary cursor-pointer p-1'
            >
              {/* Display kavling details, adjust as necessary */}
              <span className='text-xs font-semibold'>{kavling.idKavling}</span>
            </div>
          ))}
          {/* Add box for adding new kavling within the row */}
          <div
            className='flex items-center justify-center w-12 h-12 border-[1px] border-inactive-gray bg-primary text-secondary rounded-lg cursor-pointer'
            onClick={() => onAddKavling(rowIndex)}
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