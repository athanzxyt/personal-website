// src/utils/getBlogsMetadata.js

import fs from 'fs'
import path from 'path';
import matter from 'gray-matter'

export default function getBlogsMetadata() {
  const blogsDirectory = path.join(process.cwd(), 'src/content/blogs');
  const filenames = fs.readdirSync(blogsDirectory);
  const markdownBlogs = filenames.filter(file => file.endsWith('.md'))

  const blogs = markdownBlogs.map((filename) => {
    const filePath = path.join(blogsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      slug: filename.replace('.md', ''),
    };
  });
  return blogs;
}
