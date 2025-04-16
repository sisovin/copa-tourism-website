import React from 'react';
import Link from 'next/link';

const BlogCard = ({ title, content, slug }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <Link href={`/blog/${slug}`}>
        <a className="text-blue-500 hover:underline">Read more</a>
      </Link>
    </div>
  );
};

export default BlogCard;
