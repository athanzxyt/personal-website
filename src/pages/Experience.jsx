// Experience.jsx

import React, { useState, useEffect } from 'react';
import ExperienceBlock from '../components/ExperienceBlock';
import WorkHistoryBlocks from '../components/WorkHistoryBlocks';
import AwardBlock from '../components/AwardBlock';

function Experience() {
  const [education, setEducation] = useState([]);
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    fetch("/education.json")
      .then(response => response.json())
      .then(data => setEducation(data))
      .catch(error => console.error('Error fetching education data:', error));
  }, []);

  useEffect(() => {
    fetch("/awards.json")
      .then(response => response.json())
      .then(data => setAwards(data))
      .catch(error => console.error('Error fetching awards data:', error));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-semibold pb-3">Work History</h1>
      <WorkHistoryBlocks currentOnly={false} />

      <h1 className="text-xl font-semibold py-3">Education</h1>
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