// AwardBlocks.jsx

import React, { useState, useEffect } from 'react';

const AwardBlock = ({ award, organization, year, details }) => {
  return (
    <div className="pb-2 md:pb-3">
      <h2 className="text-sm md:text-base">{organization}</h2>
      <p className="italic text-zinc-500 text-xs md:text-sm">{award}</p>
    </div>
  )
}

const AwardBlocks = () => {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    fetch("/awards.json")
      .then(response => response.json())
      .then(data => setAwards(data))
      .catch(error => console.error('Error fetching awards data:', error));
  }, []);

  return (
    <>
      {awards.map(award => (
        <AwardBlock
          award={award.award}
          organization={award.organization}
          year={award.year}
        />
      ))}
    </>
  )
}

export default AwardBlocks;