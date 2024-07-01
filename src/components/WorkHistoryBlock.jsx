// WorkHistoryBlock.jsx

import React from 'react';

const WorkHistoryBlock = ({ company, title, location, current }) => {
  return (
    <div className="pb-4">
      <div className="flex items-center">
        <h2 className="text-md font-bold">{company}</h2>
        {current ? (
          <div className="bg-green-600 text-white text-xs rounded-full px-2 ml-2">
            Current
          </div>
        ) : null}
      </div>
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default WorkHistoryBlock;
