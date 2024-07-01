// Experience.jsx

import React from 'react';
import { motion } from 'framer-motion';

import EducationBlocks from '../components/EducationBlocks';
import WorkHistoryBlocks from '../components/WorkHistoryBlocks';
import AwardBlocks from '../components/AwardBlocks';

function Experience() {
  return (
    <motion.div 
      initial={{ opacity: 0, transition: { duration: 0.25 } }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeIn" } }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
    >
      <div className="text-sm md:text-base text-zinc-500 pb-8">
        <p>
          The technical background and experiences that have been 
          instrumental in shaping my career. It's forged my technical
          skills and given me the opportunity to work with some amazing
          people.
        </p>
      </div>
      <h1 className="text-2xl font-medium pb-3">Work History</h1>
      <WorkHistoryBlocks currentOnly={false} />
      <h1 className="text-2xl font-medium py-3">Education</h1>
      <EducationBlocks />
      <h1 className="text-2xl font-medium pt-8 py-3">Awards</h1>
      <AwardBlocks />
    </motion.div>
  )
}

export default Experience;