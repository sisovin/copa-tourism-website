import { Controller, Get, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get()
  async getAllContent(@Res() res) {
    try {
      const content = await this.contentService.getAllContent();
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Content fetched successfully', data: content });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error fetching content', error });
    }
  }

  @Get(':id')
  async getContentById(@Param('id') id: number, @Res() res) {
    try {
      const content = await this.contentService.getContentById(id);

      if (!content) {
        return res.status(HttpStatus.NOT_FOUND).json({ status: 'error', message: 'Content not found' });
      }

      res.status(HttpStatus.OK).json({ status: 'success', message: 'Content fetched successfully', data: content });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error fetching content', error });
    }
  }

  @Post()
  async createContent(@Body() body: { title: string; description?: string; userId: number }, @Res() res) {
    const { title, description, userId } = body;

    try {
      const content = await this.contentService.createContent({ title, description, userId });
      res.status(HttpStatus.CREATED).json({ status: 'success', message: 'Content created successfully', data: content });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error creating content', error });
    }
  }

  @Put(':id')
  async updateContent(@Param('id') id: number, @Body() body: { title?: string; description?: string }, @Res() res) {
    const { title, description } = body;

    try {
      const content = await this.contentService.updateContent(id, { title, description });
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Content updated successfully', data: content });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error updating content', error });
    }
  }

  @Delete(':id')
  async deleteContent(@Param('id') id: number, @Res() res) {
    try {
      await this.contentService.deleteContent(id);
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Content deleted successfully' });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error deleting content', error });
    }
  }
}
