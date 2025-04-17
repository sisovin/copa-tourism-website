import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookingService {
  constructor(private readonly prisma: PrismaService) {}

  async createBooking(data: { userId: number; packageId: number; startDate: string; endDate: string }) {
    return await this.prisma.booking.create({ data });
  }

  async updateBooking(id: number, data: { startDate?: string; endDate?: string }) {
    return await this.prisma.booking.update({ where: { id }, data });
  }

  async deleteBooking(id: number) {
    return await this.prisma.booking.delete({ where: { id } });
  }
}
