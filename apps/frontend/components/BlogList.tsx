import React from 'react';
import useSWR from 'swr';
import BlogCard from './BlogCard';
import LoadingSkeleton from './LoadingSkeleton';
import ToastNotification from './ToastNotification';
import { Container, Grid, Title } from '@copa/ui';

const fetcher = (url) => fetch(url).then((res) => res.json());

const BlogList = () => {
  const { data: blogs, error } = useSWR('/blogs', fetcher);

  if (error) return <ToastNotification message="Error fetching blogs" />;
  if (!blogs) return <LoadingSkeleton />;

  return (
    <Container>
      <Title level={1} className="text-2xl font-bold mb-4">Blog Posts</Title>
      <Grid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} title={blog.title} content={blog.content} slug={blog.slug} />
        ))}
      </Grid>
    </Container>
  );
};

export default BlogList;
