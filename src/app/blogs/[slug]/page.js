// src/app/blogs/[slug]/page.js

import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import React from 'react';
import getBlogsMetadata from '@/utils/getBlogsMetadata';

import { notFound } from 'next/navigation';

function getBlogContent(slug) {
  const filePath = `src/content/blogs/${slug}.md`;

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
  };
}

export const generateStaticParams = async () => {
  const blogs = getBlogsMetadata();
  return blogs.map((blog) => ({
    params: {
      slug: blog.slug
    },
  }));
}

export async function generateMetadata({ params, searchParams }) {
  const post = getBlogContent(params.slug);
  const title = post?.title ? `${post.title} ` : 'Blog Not Found';

  return {
    title: `${title} | Athan Zhang`
  }
}

export default function BlogPage(props) {
  const slug = props.params.slug;
  const post = getBlogContent(slug);

  if (!post) {
    notFound()
  }

  const formatting = {
    overrides: {
      h1: {
        component: ({ children, ...props }) => (
          <h1 className="text-3xl font-bold my-4 font-red-300" {...props}>{children}</h1>
        ),
      },
      h2: {
        component: ({ children, ...props }) => (
          <h2 className="text-2xl font-semibold my-3" {...props}>{children}</h2>
        ),
      },
      p: {
        component: ({ children, ...props }) => (
          <p className="my-2 text-gray-700" {...props}>{children}</p>
        ),
      },
    },
  };

  return (
    <main>
      <article>
        <Markdown options={formatting}>{post.content}</Markdown>
      </article>
    </main>
  );
}