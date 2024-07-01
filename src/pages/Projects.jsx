// Projects.jsx

import React from 'react';
import { motion } from 'framer-motion';

import ProjectBoxes from '../components/ProjectBoxes';

function Projects() {
  return (
    <motion.div 
      initial={{ opacity: 0, transition: { duration: 0.25 } }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeIn" } }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
    >
      <div className="text-sm md:text-base text-zinc-500 pb-8">
        <p>
          The following are some of the projects I've worked on in the past. 
          I'm always looking for new opportunities to collaborate on 
          interesting projects, so feel free to reach out if you have any ideas!
        </p>
      </div>
      <ProjectBoxes featuredOnly={false}/>
    </motion.div>
  )
}

export default Projects;