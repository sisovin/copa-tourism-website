import { Controller, Get, Post, Put, Delete, Body, Param, Query, Res, HttpStatus } from '@nestjs/common';
import { DestinationService } from './destination.service';

@Controller('destinations')
export class DestinationController {
  constructor(private readonly destinationService: DestinationService) {}

  @Get()
  async getAllDestinations(@Res() res) {
    try {
      const destinations = await this.destinationService.getAllDestinations();
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Destinations fetched successfully', data: destinations });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error fetching destinations', error });
    }
  }

  @Get(':id')
  async getDestinationById(@Param('id') id: number, @Res() res) {
    try {
      const destination = await this.destinationService.getDestinationById(id);

      if (!destination) {
        return res.status(HttpStatus.NOT_FOUND).json({ status: 'error', message: 'Destination not found' });
      }

      res.status(HttpStatus.OK).json({ status: 'success', message: 'Destination fetched successfully', data: destination });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error fetching destination', error });
    }
  }

  @Post()
  async createDestination(@Body() body: { name: string; description?: string; location: string; userId: number }, @Res() res) {
    const { name, description, location, userId } = body;

    try {
      const destination = await this.destinationService.createDestination({ name, description, location, userId });
      res.status(HttpStatus.CREATED).json({ status: 'success', message: 'Destination created successfully', data: destination });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error creating destination', error });
    }
  }

  @Put(':id')
  async updateDestination(@Param('id') id: number, @Body() body: { name?: string; description?: string; location?: string }, @Res() res) {
    const { name, description, location } = body;

    try {
      const destination = await this.destinationService.updateDestination(id, { name, description, location });
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Destination updated successfully', data: destination });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error updating destination', error });
    }
  }

  @Delete(':id')
  async deleteDestination(@Param('id') id: number, @Res() res) {
    try {
      await this.destinationService.deleteDestination(id);
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Destination deleted successfully' });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error deleting destination', error });
    }
  }

  @Get('search')
  async searchDestinations(@Query('query') query: string, @Res() res) {
    try {
      const destinations = await this.destinationService.searchDestinations(query);
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Destinations fetched successfully', data: destinations });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error fetching destinations', error });
    }
  }
}
