import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaClient } from '@copa/database';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
