// src/app/blogs/[slug]/page.js

import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import React from 'react';
import getBlogsMetadata from '@/utils/getBlogsMetadata';
import { timeAgo } from '@/utils/dateDifference';

import { notFound } from 'next/navigation';
import Link from 'next/link';

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
  const timeAgoString = timeAgo(post.date);

  if (!post) {
    notFound()
  }

  const formatting = {
    overrides: {
      h1: {
        props: {
          className: 'blog-h1',
        },
      },
      h2: {
        props: {
          className: 'blog-h2',
        },
      },
      p: {
        props: {
          className: 'blog-text',
        },
      },
    },
  };

  return (
    <main>
      <article>
        <Link href='/blogs' className='text-zinc-500'>← Back to Blogs</Link>
        <h1 className='text-3xl font-serif pt-4 pb-1'>{post.title}</h1>
        <h2 className='text-sm text-zinc-500 italic pb-8'>Published on: {post.date} ({timeAgoString})</h2>
        <Markdown options={formatting}>{post.content}</Markdown>
      </article>
    </main>
  );
}