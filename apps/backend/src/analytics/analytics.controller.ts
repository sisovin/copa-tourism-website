import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('overview')
  async getOverview(@Res() res) {
    try {
      const overviewData = await this.analyticsService.getOverview();
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Overview data fetched successfully', data: overviewData });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error fetching overview data', error });
    }
  }

  @Get('user-stats')
  async getUserStats(@Res() res) {
    try {
      const userStats = await this.analyticsService.getUserStats();
      res.status(HttpStatus.OK).json({ status: 'success', message: 'User stats fetched successfully', data: userStats });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error fetching user stats', error });
    }
  }

  @Get('booking-stats')
  async getBookingStats(@Res() res) {
    try {
      const bookingStats = await this.analyticsService.getBookingStats();
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Booking stats fetched successfully', data: bookingStats });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error fetching booking stats', error });
    }
  }
}
