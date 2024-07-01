// WorkHistoryBlocks.jsx

import React, { useState, useEffect } from 'react';

const WorkHistoryBlock = ({ company, title, current, imgPath }) => {
  return (
    <div className='flex justify-between mb-4 h-24'>
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

const WorkHistoryBlocks = ({ currentOnly }) => {
  const [workHistory, setWorkHistory] = useState([]);

  useEffect(() => {
    fetch("/workHistory.json")
    .then(response => response.json())
    .then(data => setWorkHistory(data))
    .catch(error => console.error('Error fetching work history data:', error));
  }, []);

  return (
    <div>
      {workHistory.map(workHistoryItem => (
        (workHistoryItem.current || !currentOnly) ? (
          <WorkHistoryBlock 
          company={workHistoryItem.company}
          title={workHistoryItem.title}
          location={workHistoryItem.location}
          current={workHistoryItem.current}
          imgPath={workHistoryItem.imgPath}
        />
        ) : null
      ))}
    </div>
  );
}

export default WorkHistoryBlocks;
