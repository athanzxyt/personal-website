// app/blogs/page.js

import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import getBlogsMetadata from "@/utils/getBlogsMetadata";

export async function generateMetadata({ params, searchParams }) {
  return {
    title: "Blogs | Athan Zhang"
  }
}

export default function BlogsPage() {
  const blogs = getBlogsMetadata();

  return (
    <>
      <Navbar />
      <main>
        <div className="text-sm md:text-base text-zinc-500 pb-8">
          <p>
            This section contains literally anything. From favorite quotes
            to random thoughts, it's a place where I can share my ideas and
            experiences with the world.
          </p>
        </div>
        <div>
          {blogs.map((blog, blogIndex) => (
            <BlogCard
              key={blogIndex}
              blog={blog}
            />
          ))}
        </div>
      </main>
    </>
  );
}
