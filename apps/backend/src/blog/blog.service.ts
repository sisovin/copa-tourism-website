import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllBlogs() {
    return await this.prisma.blog.findMany();
  }

  async getBlogBySlug(slug: string) {
    return await this.prisma.blog.findUnique({ where: { slug } });
  }

  async createBlog(data: { title: string; content: string; slug: string; published: boolean; authorId: number }) {
    return await this.prisma.blog.create({ data });
  }

  async updateBlog(slug: string, data: { title?: string; content?: string; published?: boolean }) {
    return await this.prisma.blog.update({ where: { slug }, data });
  }

  async deleteBlog(slug: string) {
    return await this.prisma.blog.delete({ where: { slug } });
  }
}
