// src/utils/getExperienceMetadata.js

import fs from 'fs';
import path from 'path';

export default function getExperienceMetadata({ experienceType }) {
  const filePath = path.join(process.cwd(), `src/content/${experienceType}.json`);
  const experienceData = fs.readFileSync(filePath, 'utf8');
  const experience = JSON.parse(experienceData);
  return experience;
}