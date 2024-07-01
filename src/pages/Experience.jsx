// Experience.jsx

import React from 'react';
import EducationBlocks from '../components/EducationBlocks';
import WorkHistoryBlocks from '../components/WorkHistoryBlocks';
import AwardBlocks from '../components/AwardBlocks';

function Experience() {
  return (
    <div>
      <div className="text-zinc-500 pb-8">
        <p>
          The technical background and experiences that have been 
          instrumental in shaping my career. It's forged my technical
          skills and given me the opportunity to work with some amazing
          people.
        </p>
      </div>
      <h1 className="text-xl font-semibold pb-3">Work History</h1>
      <WorkHistoryBlocks currentOnly={false} />
      <h1 className="text-xl font-semibold py-3">Education</h1>
      <EducationBlocks />
      <h1 className="text-xl font-bold py-3">Awards</h1>
      <AwardBlocks />
    </div>
  )
}

export default Experience;