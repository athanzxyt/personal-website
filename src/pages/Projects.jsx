// Projects.jsx

import React from 'react';
import ProjectBoxes from '../components/ProjectBoxes';

function Projects() {
  return (
    <div>
      <ProjectBoxes featuredOnly={false}/>
    </div>
  )
}

export default Projects;