import { Controller, Get, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async getAllBlogs(@Res() res) {
    try {
      const blogs = await this.blogService.getAllBlogs();
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Blogs fetched successfully', data: blogs });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error fetching blogs', error });
    }
  }

  @Get(':slug')
  async getBlogBySlug(@Param('slug') slug: string, @Res() res) {
    try {
      const blog = await this.blogService.getBlogBySlug(slug);

      if (!blog) {
        return res.status(HttpStatus.NOT_FOUND).json({ status: 'error', message: 'Blog not found' });
      }

      res.status(HttpStatus.OK).json({ status: 'success', message: 'Blog fetched successfully', data: blog });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error fetching blog', error });
    }
  }

  @Post()
  async createBlog(@Body() body: { title: string; content: string; slug: string; published: boolean; authorId: number }, @Res() res) {
    const { title, content, slug, published, authorId } = body;

    try {
      const blog = await this.blogService.createBlog({ title, content, slug, published, authorId });
      res.status(HttpStatus.CREATED).json({ status: 'success', message: 'Blog created successfully', data: blog });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error creating blog', error });
    }
  }

  @Put(':slug')
  async updateBlog(@Param('slug') slug: string, @Body() body: { title?: string; content?: string; published?: boolean }, @Res() res) {
    const { title, content, published } = body;

    try {
      const blog = await this.blogService.updateBlog(slug, { title, content, published });
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Blog updated successfully', data: blog });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error updating blog', error });
    }
  }

  @Delete(':slug')
  async deleteBlog(@Param('slug') slug: string, @Res() res) {
    try {
      await this.blogService.deleteBlog(slug);
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Blog deleted successfully' });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error deleting blog', error });
    }
  }
}
