import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { formatResponse } from '../utils/responseFormat';

const prisma = new PrismaClient();

export class BlogController {
  async getAllBlogs(req: Request, res: Response) {
    try {
      const blogs = await prisma.blog.findMany();
      res.status(200).json(formatResponse('success', 'Blogs fetched successfully', blogs));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error fetching blogs', error));
    }
  }

  async getBlogBySlug(req: Request, res: Response) {
    const { slug } = req.params;

    try {
      const blog = await prisma.blog.findUnique({ where: { slug } });

      if (!blog) {
        return res.status(404).json(formatResponse('error', 'Blog not found'));
      }

      res.status(200).json(formatResponse('success', 'Blog fetched successfully', blog));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error fetching blog', error));
    }
  }

  async createBlog(req: Request, res: Response) {
    const { title, content, slug, published, authorId } = req.body;

    try {
      const blog = await prisma.blog.create({
        data: {
          title,
          content,
          slug,
          published,
          authorId,
        },
      });

      res.status(201).json(formatResponse('success', 'Blog created successfully', blog));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error creating blog', error));
    }
  }

  async updateBlog(req: Request, res: Response) {
    const { slug } = req.params;
    const { title, content, published } = req.body;

    try {
      const blog = await prisma.blog.update({
        where: { slug },
        data: {
          title,
          content,
          published,
        },
      });

      res.status(200).json(formatResponse('success', 'Blog updated successfully', blog));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error updating blog', error));
    }
  }

  async deleteBlog(req: Request, res: Response) {
    const { slug } = req.params;

    try {
      await prisma.blog.delete({ where: { slug } });
      res.status(200).json(formatResponse('success', 'Blog deleted successfully'));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error deleting blog', error));
    }
  }
}
