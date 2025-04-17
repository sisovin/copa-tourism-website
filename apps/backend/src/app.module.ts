import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { DestinationModule } from './destination/destination.module';
import { PackageModule } from './package/package.module';
import { BookingModule } from './booking/booking.module';
import { ContentModule } from './content/content.module';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    BlogModule,
    DestinationModule,
    PackageModule,
    BookingModule,
    ContentModule,
    AnalyticsModule,
  ],
})
export class AppModule {}
