// Experience.jsx

import React, { useState, useEffect } from 'react';
import ExperienceBlock from '../components/ExperienceBlock';
import WorkHistoryBlock from '../components/WorkHistoryBlock';

function Experience() {
  const [education, setEducation] = useState([]);
  const [workHistory, setWorkHistory] = useState([]);

  useEffect(() => {
    fetch("src/assets/education.json")
    .then(response => response.json())
    .then(data => setEducation(data))
    .catch(error => console.error('Error fetching education data:', error));
  }, []);

  useEffect(() => {
    fetch("src/assets/workHistory.json")
    .then(response => response.json())
    .then(data => setWorkHistory(data))
    .catch(error => console.error('Error fetching work history data:', error));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold pb-3">Work History</h1>
      {workHistory.map(workHistoryItem => (
        <WorkHistoryBlock 
          company={workHistoryItem.company}
          title={workHistoryItem.title}
          location={workHistoryItem.location}
          current={workHistoryItem.current}
        />
      ))}

      <h1 className="text-xl font-bold py-3">Education</h1>
      {education.map(educationItem => (
        <ExperienceBlock 
          school={educationItem.school}
          years={educationItem.years}
          degree={educationItem.degree}
          major={educationItem.major}
        />
      ))}
    </div>
  )
}

export default Experience;