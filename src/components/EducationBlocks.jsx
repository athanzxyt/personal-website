// EducationBlocks.jsx

import React, { useState, useEffect } from 'react';

const EducationBlock = ({ school, years, degree, major }) => {
  return (
    <div className="pb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-base md:text-lg pb-1">{school}</h2>
        <p className="text-xs md:text-sm text-secondary">{years}</p>
      </div>
      <p className="text-xs md:text-sm text-zinc-500">{degree}</p>
      <p className="text-xs md:text-sm text-zinc-500 italic">{major}</p>
    </div>
  );
};

const EducationBlocks = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("/education.json")
      .then(response => response.json())
      .then(data => setEducation(data))
      .catch(error => console.error('Error fetching education data:', error));
  }, []);

  return (
    <>
      {education.map(educationItem => (
        <EducationBlock
          school={educationItem.school}
          years={educationItem.years}
          degree={educationItem.degree}
          major={educationItem.major}
        />
      ))}
    </>
  )
};

export default EducationBlocks;
