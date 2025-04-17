import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DestinationService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllDestinations() {
    return await this.prisma.destination.findMany();
  }

  async getDestinationById(id: number) {
    return await this.prisma.destination.findUnique({ where: { id } });
  }

  async getDestinationBySlug(slug: string) {
    return await this.prisma.destination.findUnique({ where: { slug } });
  }

  async createDestination(data: { name: string; description?: string; location: string; userId: number }) {
    return await this.prisma.destination.create({ data });
  }

  async updateDestination(id: number, data: { name?: string; description?: string; location?: string }) {
    return await this.prisma.destination.update({ where: { id }, data });
  }

  async deleteDestination(id: number) {
    return await this.prisma.destination.delete({ where: { id } });
  }
}
