import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const BlogPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (slug) {
      const fetchBlog = async () => {
        try {
          const response = await fetch(`/blogs/${slug}`);
          const data = await response.json();
          setBlog(data);
        } catch (error) {
          console.error('Error fetching blog:', error);
        }
      };

      fetchBlog();
    }
  }, [slug]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div className="prose">
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogPostPage;
