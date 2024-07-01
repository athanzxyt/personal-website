// Experience.jsx

import React, { useState, useEffect } from 'react';
import ExperienceBlock from '../components/ExperienceBlock';
import WorkHistoryBlock from '../components/WorkHistoryBlock';
import AwardBlock from '../components/AwardBlock';

function Experience() {
  const [education, setEducation] = useState([]);
  const [workHistory, setWorkHistory] = useState([]);
  const [awards, setAwards] = useState([]);

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

  useEffect(() => {
    fetch("src/assets/awards.json")
    .then(response => response.json())
    .then(data => setAwards(data))
    .catch(error => console.error('Error fetching awards data:', error));
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
          imgPath={workHistoryItem.imgPath}
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

      <h1 className="text-xl font-bold py-3">Awards</h1>
      {awards.map(award => (
        <AwardBlock 
          award={award.award}
          organization={award.organization}
          year={award.year}
        />
      ))}
    </div>
  )
}

export default Experience;