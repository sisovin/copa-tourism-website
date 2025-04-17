import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PackageService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPackages() {
    return await this.prisma.package.findMany();
  }

  async getPackageById(id: number) {
    return await this.prisma.package.findUnique({ where: { id } });
  }

  async createPackage(data: { name: string; description?: string; price: number; destinationId: number }) {
    return await this.prisma.package.create({ data });
  }

  async updatePackage(id: number, data: { name?: string; description?: string; price?: number; destinationId?: number }) {
    return await this.prisma.package.update({ where: { id }, data });
  }

  async deletePackage(id: number) {
    return await this.prisma.package.delete({ where: { id } });
  }
}
