// About.jsx

import React from 'react';
import { motion } from 'framer-motion';

import ProjectBoxes from '../components/ProjectBoxes';
import WorkHistoryBlocks from '../components/WorkHistoryBlocks';

function About() {
  return (
    <motion.div 
      className='space-y-14'
      initial={{ opacity: 0, transition: { duration: 0.25 } }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeIn" } }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
    >
      <div className='text-zinc-500'>
        <p>
          I'm currently an undergraduate at Princeton in an accelerated
          track studying Computer Science. Currently I'm helping build
          backend machine learning pipelines and advising with strategy at
          <span> Vytal</span>
          , a startup I helped start with a few friends back in high school.
          <br />
          <br />
          On campus, I'm primarily involved with pursuing research in the
          field of Human-Computer Interaction and working at
          <span> Prospect Student Ventures</span> (Princeton's student-run VC),
          as the Director of Founder Support. In my free time, I enjoying training for triathlons (swim, bike, run),
          lifting, reading, and following the latest trends in tech.
        </p>
      </div>

      <div>
        <h1 className="font-serif text-2xl pb-4">Featured Projects</h1>
        <ProjectBoxes featuredOnly={true} />
      </div>

      <div>
        <h1 className="font-serif text-2xl pb-4">Currently Working At</h1>
        <WorkHistoryBlocks currentOnly={true} />
      </div>
    </motion.div>
  )
}

export default About;