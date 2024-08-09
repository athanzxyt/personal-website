// src/app/blogs/[slug]/page.js

import fs from 'fs';
import matter from 'gray-matter';
import getBlogsMetadata from '@/utils/getBlogsMetadata';

function getBlogContent(slug) {
  const filePath = `src/content/blogs/${slug}.md`;
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
  };
}

export const generateStaticParams = async () => {
  const blogs = getBlogMetadata();
  return blogs.map((blog) => ({
    params: {
      slug: blog.slug,
    },
  }));
}

export async function generateMetadata({ params, searchParams }) {
  const id = params?.slug ? ''
}

export default function BlogPage({ slug }) {
  const { title, date, content } = getBlogContent(slug);

  return (
    <main>
      <h1 className="text-2xl font-medium pb-3">{title}</h1>
      <p className="text-sm text-zinc-500 pb-3">{date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}