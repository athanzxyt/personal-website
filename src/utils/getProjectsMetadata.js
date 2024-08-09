// src/utils/getProjectsMetadata.js

import fs from 'fs'
import path from 'path';
import matter from 'gray-matter'

export default function getProjectsMetadata() {
  const projectsDirectory = path.join(process.cwd(), 'src/content/projects');
  const filenames = fs.readdirSync(projectsDirectory);
  const markdownProjects = filenames.filter(file => file.endsWith('.md'))

  const projects = markdownProjects.map((filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      feature: matterResult.data.feature,
      icon: matterResult.data.icon,
      link: matterResult.data.link,
      title: matterResult.data.title,
      description: matterResult.data.description,
      slug: filename.replace('.md', ''),
    };
  });
  return projects;
}
