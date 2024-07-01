// ProjectBoxes.jsx

import React, { useState, useEffect } from 'react';

const ProjectBox = ({ icon, title, description, link }) => (
  <div className="flex flex-col items-start group transition-transform duration-300 transform hover:-translate-y-2">
    <a href={link}>
      <div className="flex bg-gray-800 group-hover:bg-secondary items-center justify-center h-6 w-6 p-0.5 md:h-8 md:w-8 rounded-md mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FFFFFF">
          <path d={icon}/>
        </svg>
      </div>
      <h3 className="text-base md:text-lg font-medium mb-1">{title}</h3>
      <p className="text-gray-500 text-xs md:text-sm">{description}</p>
    </a>
  </div>
);

const ProjectBoxes = ({featuredOnly }) => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
    .then(response => response.json())
    .then(data => setProjectsData(data))
    .catch(error => console.error('Error fetching education data:', error));
  }, []);

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((project) => (
        (project.feature || !featuredOnly) ? (
          <ProjectBox
            icon={project.icon}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ) : null
      ))}
      </div>
    </div>
  );
};

export default ProjectBoxes;