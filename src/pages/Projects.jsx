// Projects.jsx

import React from 'react';
import ProjectBoxes from '../components/ProjectBoxes';

function Projects() {
  return (
    <div>
      <div className="text-zinc-500 pb-8">
        <p>
          The following are some of the projects I've worked on in the past. 
          I'm always looking for new opportunities to collaborate on 
          interesting projects, so feel free to reach out if you have any ideas!
        </p>
      </div>
      <ProjectBoxes featuredOnly={false}/>
    </div>
  )
}

export default Projects;