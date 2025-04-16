import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PackageService {
  async getAllPackages() {
    return await prisma.package.findMany();
  }

  async getPackageById(id: number) {
    return await prisma.package.findUnique({ where: { id } });
  }

  async createPackage(data: { name: string; description?: string; price: number; destinationId: number }) {
    return await prisma.package.create({ data });
  }

  async updatePackage(id: number, data: { name?: string; description?: string; price?: number; destinationId?: number }) {
    return await prisma.package.update({ where: { id }, data });
  }

  async deletePackage(id: number) {
    return await prisma.package.delete({ where: { id } });
  }
}
