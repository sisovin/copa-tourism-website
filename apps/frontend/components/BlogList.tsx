import React from 'react';
import useSWR from 'swr';
import BlogCard from './BlogCard';
import LoadingSkeleton from './LoadingSkeleton';
import ToastNotification from './ToastNotification';

const fetcher = (url) => fetch(url).then((res) => res.json());

const BlogList = () => {
  const { data: blogs, error } = useSWR('/blogs', fetcher);

  if (error) return <ToastNotification message="Error fetching blogs" />;
  if (!blogs) return <LoadingSkeleton />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} title={blog.title} content={blog.content} slug={blog.slug} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
