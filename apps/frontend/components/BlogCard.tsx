import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardTitle, CardDescription, CardLink } from '@copa/ui';

const BlogCard = ({ title, content, slug }) => {
  return (
    <Card>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{content}</CardDescription>
        <CardLink href={`/blog/${slug}`}>Read more</CardLink>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
