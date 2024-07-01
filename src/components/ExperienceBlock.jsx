// ExperienceBlock.jsx

import React from 'react';

const ExperienceBlock = ({ school, years, degree, major }) => {
  return (
    <div className="pb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg pb-1">{school}</h2>
        <p className="text-sm text-secondary">{years}</p>
      </div>
      <p className="text-sm text-zinc-500">{degree}</p>
      <p className="text-sm text-zinc-500 italic">{major}</p>
    </div>
  );
};

export default ExperienceBlock;
