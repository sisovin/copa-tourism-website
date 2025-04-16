import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class DestinationService {
  async getAllDestinations() {
    return await prisma.destination.findMany();
  }

  async getDestinationById(id: number) {
    return await prisma.destination.findUnique({ where: { id } });
  }

  async createDestination(data: { name: string; description?: string; location: string; userId: number }) {
    return await prisma.destination.create({ data });
  }

  async updateDestination(id: number, data: { name?: string; description?: string; location?: string }) {
    return await prisma.destination.update({ where: { id }, data });
  }

  async deleteDestination(id: number) {
    return await prisma.destination.delete({ where: { id } });
  }
}
