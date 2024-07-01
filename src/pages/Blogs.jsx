// Blogs.jsx

import React from 'react';
import { motion } from 'framer-motion';

function Blogs() {
  return (
    <motion.div 
      initial={{ opacity: 0, transition: { duration: 0.25 } }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeIn" } }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
    >
      <div className="text-zinc-500 pb-8">
        <p>
          This section contains literally anything. From favorite quotes
          to random thoughts, it's a place where I can share my ideas and
          experiences with the world.
        </p>
      </div>
      <h1 className='pt-4 font-serif'>
          Coming Soon :3
        </h1>
    </motion.div>
  )
}

export default Blogs;