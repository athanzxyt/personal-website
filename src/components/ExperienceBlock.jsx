// ExperienceBlock.jsx

import React from 'react';

const ExperienceBlock = ({ school, years, degree, major }) => {
  return (
    <div className="pb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-md font-bold">{school}</h2>
        <p className="text-xs">{years}</p>
      </div>
      <p className="text-sm">{degree}</p>
      <p className="text-sm italic">{major}</p>
    </div>
  );
};

export default ExperienceBlock;
