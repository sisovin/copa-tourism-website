import { Controller, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async createBooking(@Body() body: { userId: number; packageId: number; startDate: string; endDate: string }, @Res() res) {
    const { userId, packageId, startDate, endDate } = body;

    try {
      const booking = await this.bookingService.createBooking({ userId, packageId, startDate, endDate });
      res.status(HttpStatus.CREATED).json({ status: 'success', message: 'Booking created successfully', data: booking });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error creating booking', error });
    }
  }

  @Put(':id')
  async updateBooking(@Param('id') id: number, @Body() body: { startDate?: string; endDate?: string }, @Res() res) {
    const { startDate, endDate } = body;

    try {
      const booking = await this.bookingService.updateBooking(id, { startDate, endDate });
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Booking updated successfully', data: booking });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error updating booking', error });
    }
  }

  @Delete(':id')
  async deleteBooking(@Param('id') id: number, @Res() res) {
    try {
      await this.bookingService.deleteBooking(id);
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Booking deleted successfully' });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error deleting booking', error });
    }
  }
}
