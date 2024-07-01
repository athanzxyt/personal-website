// About.jsx

import React, { useState, useEffect } from 'react';

import WorkHistoryBlock from '../components/WorkHistoryBlock';

function About() {
  const [workHistory, setWorkHistory] = useState([]);

  useEffect(() => {
    fetch("src/assets/workHistory.json")
    .then(response => response.json())
    .then(data => setWorkHistory(data))
    .catch(error => console.error('Error fetching work history data:', error));
  }, []);

  return (
    <div className='space-y-12'>
      <div className='text-zinc-500'>
        <p>
          I'm currently an undergraduate at Princeton in an accelerated
          track studying Computer Science. Currently I'm helping build
          backend machine learning pipelines and advising with strategy at
          <span> Vytal</span>
          , a startup I helped start with a few friends back in high school.
          <br />
          <br />
          On campus, I'm primarily involved with pursuing research in the 
          field of Human-Computer Interaction and working at
          <span> Prospect Student Ventures</span> (Princeton's student-run VC),
          as the Director of Founder Support. In my free time, I enjoying training for triathlons (swim, bike, run),
          lifting, reading, and following the latest trends in tech.
        </p>
      </div>
      <div>
        <h1 className="font-serif text-xl pb-3">Currently Working At</h1>
        {workHistory.filter(workHistoryItem => workHistoryItem.current).map(filteredWorkHistoryItem => (
          <WorkHistoryBlock
            company={filteredWorkHistoryItem.company}
            title={filteredWorkHistoryItem.title}
            current={filteredWorkHistoryItem.current}
            imgPath={filteredWorkHistoryItem.imgPath}
          />
        ))}
      </div>
    </div>
  )
}

export default About;