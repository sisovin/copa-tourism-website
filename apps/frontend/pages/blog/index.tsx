import React from 'react';
import BlogList from '../../components/BlogList';

const BlogPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <BlogList />
    </div>
  );
};

export default BlogPage;
