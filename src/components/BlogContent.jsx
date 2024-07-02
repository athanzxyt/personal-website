// BlogContent.jsx

import React, { useEffect, useState } from 'react';

const BlogBlock = ({ title, subtitle, date, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-zinc-50 hover:bg-tertiary p-4 shadow border border-gray-300 rounded-xl mb-4 transition-transform duration-300 transform hover:-translate-y-2"
    >
      <h1 className='font-serif text-xl'>{title}</h1>
      <h2 className='text-sm text-zinc-500'>{subtitle}</h2>
    </div>
  )
};

const BlogContent = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogContent, setBlogContent] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/blogs.json');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleBlogClick = async (slug) => {
    try {
      const response = await fetch(`/blogs/${slug}.md`);
      const content = await response.text();
      setSelectedBlog(slug);
      setBlogContent(content);
    } catch (error) {
      console.error('Error fetching blog content:', error);
    }
  };

  const handleBackClick = () => {
    setSelectedBlog(null);
    setBlogContent('');
  };

  return (
    <div className="container">
      {selectedBlog ? (
        <div>
          <button
            onClick={handleBackClick}
            className="mb-4 p-2 bg-blue-500 text-white rounded"
          >
            &larr; Back
          </button>
          <div dangerouslySetInnerHTML={{ __html: blogContent }} />
        </div>
      ) : (
        <div>
          {blogs.map((blog) => (
            <BlogBlock
              key={blog.slug}
              title={blog.title}
              subtitle={blog.subtitle}
              date={blog.date}
              onClick={() => handleBlogClick(blog.slug)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogContent;