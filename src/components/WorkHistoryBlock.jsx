// WorkHistoryBlock.jsx

import React from 'react';

const WorkHistoryBlock = ({ company, title, current, imgPath }) => {
  return (
    <div className='flex justify-between pb-4 h-24'>
      <div>
        <div className='flex items-center'>
          <h2 className='text-xl font-bold'>{title}</h2>
          {current ? (
            <div className='bg-green-600 text-white text-xs rounded-full px-2 ml-2'>
              Current
            </div>
          ) : null}
        </div>
        <p className='text-md'>{company}</p>
      </div>
      <div>
        <img 
          src={imgPath} 
          alt="company logo" 
          style={{ filter: "grayscale(100%)" }}
          className='h-12'
        /> 
      </div>
    </div>
  );
};

export default WorkHistoryBlock;
