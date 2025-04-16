import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class BlogService {
  async getAllBlogs() {
    return await prisma.blog.findMany();
  }

  async getBlogBySlug(slug: string) {
    return await prisma.blog.findUnique({ where: { slug } });
  }

  async createBlog(data: { title: string; content: string; slug: string; published: boolean; authorId: number }) {
    return await prisma.blog.create({ data });
  }

  async updateBlog(slug: string, data: { title?: string; content?: string; published?: boolean }) {
    return await prisma.blog.update({ where: { slug }, data });
  }

  async deleteBlog(slug: string) {
    return await prisma.blog.delete({ where: { slug } });
  }
}
