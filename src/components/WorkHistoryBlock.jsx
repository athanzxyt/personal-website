// WorkHistoryBlock.jsx

import React from 'react';

const WorkHistoryBlock = ({ company, title, current, imgPath }) => {
  return (
    <div className='flex justify-between pb-4 h-24'>
      <div>
        <div className='flex items-center'>
          <h2 className='text-xl'>{title}</h2>
          {current ? (
            <div className='bg-secondary text-white text-xs rounded-full px-2 ml-2'>
              Current
            </div>
          ) : null}
        </div>
        <p className='text-md text-zinc-500'>{company}</p>
      </div>
      <div>
        <img 
          src={imgPath} 
          alt="company logo" 
          style={{ filter: "grayscale(100%) contrast(80%)"}}
          className='h-12'
        /> 
      </div>
    </div>
  );
};

export default WorkHistoryBlock;
