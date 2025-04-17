import { Controller, Get, Post, Put, Delete, Body, Param, Query, Res, HttpStatus } from '@nestjs/common';
import { PackageService } from './package.service';

@Controller('packages')
export class PackageController {
  constructor(private readonly packageService: PackageService) {}

  @Get()
  async getAllPackages(@Res() res) {
    try {
      const packages = await this.packageService.getAllPackages();
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Packages fetched successfully', data: packages });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error fetching packages', error });
    }
  }

  @Get(':id')
  async getPackageById(@Param('id') id: number, @Res() res) {
    try {
      const package = await this.packageService.getPackageById(id);

      if (!package) {
        return res.status(HttpStatus.NOT_FOUND).json({ status: 'error', message: 'Package not found' });
      }

      res.status(HttpStatus.OK).json({ status: 'success', message: 'Package fetched successfully', data: package });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error fetching package', error });
    }
  }

  @Post()
  async createPackage(@Body() body: { name: string; description?: string; price: number; destinationId: number }, @Res() res) {
    const { name, description, price, destinationId } = body;

    try {
      const package = await this.packageService.createPackage({ name, description, price, destinationId });
      res.status(HttpStatus.CREATED).json({ status: 'success', message: 'Package created successfully', data: package });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error creating package', error });
    }
  }

  @Put(':id')
  async updatePackage(@Param('id') id: number, @Body() body: { name?: string; description?: string; price?: number }, @Res() res) {
    const { name, description, price } = body;

    try {
      const package = await this.packageService.updatePackage(id, { name, description, price });
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Package updated successfully', data: package });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error updating package', error });
    }
  }

  @Delete(':id')
  async deletePackage(@Param('id') id: number, @Res() res) {
    try {
      await this.packageService.deletePackage(id);
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Package deleted successfully' });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error deleting package', error });
    }
  }

  @Get('search')
  async searchPackages(@Query('query') query: string, @Res() res) {
    try {
      const packages = await this.packageService.searchPackages(query);
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Packages fetched successfully', data: packages });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error fetching packages', error });
    }
  }
}
