import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContentService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllContent() {
    return await this.prisma.content.findMany();
  }

  async getContentById(id: number) {
    return await this.prisma.content.findUnique({ where: { id } });
  }

  async createContent(data: { title: string; description?: string; userId: number }) {
    return await this.prisma.content.create({ data });
  }

  async updateContent(id: number, data: { title?: string; description?: string }) {
    return await this.prisma.content.update({ where: { id }, data });
  }

  async deleteContent(id: number) {
    return await this.prisma.content.delete({ where: { id } });
  }
}
