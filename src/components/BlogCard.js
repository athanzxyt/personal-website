// src/components/BlogCard.js

import Link from 'next/link';

export default function BlogCard(props) {
  const { blog } = props;

  return (
    <Link
      href={`/blogs/${blog.slug}`}
    >
      <div className="cursor-pointer bg-zinc-50 hover:bg-tertiary p-4 shadow border border-gray-300 rounded-xl mb-4 transition-transform duration-300 transform hover:-translate-y-2">
        <h1 className='font-serif text-xl'>{blog.title}</h1>
        <h2 className='text-sm text-zinc-500'>{blog.subtitle}</h2>
      </div>
    </Link>
  )
};