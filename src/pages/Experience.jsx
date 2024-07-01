// Experience.jsx

import React, { useState, useEffect } from 'react';

function Experience() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("src/assets/education.json")
    .then(response => response.json())
    .then(data => setEducation(data))
    .catch(error => console.error('Error fetching education data:', error));
}, []);

  return (
    <div>
      <h1 className="text-xl font-bold">Work History</h1>
      <h1 className="text-xl font-bold pb-3">Education</h1>
      <ul className="list-none p-0 m-0">
        {education.map(educationItem => (
          <li key={educationItem.id} className="pb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-md font-semibold">{educationItem.school}</h2>
              <p className="text-xs">{educationItem.years}</p>
            </div>
            <p className="text-sm">{educationItem.degree}</p>
            <p className="text-sm italic">{educationItem.major}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Experience;