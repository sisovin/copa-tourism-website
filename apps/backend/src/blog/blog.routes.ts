import { Router } from 'express';
import { BlogController } from './blog.controller';

const router = Router();
const blogController = new BlogController();

router.get('/blogs', blogController.getAllBlogs);
router.get('/blogs/:slug', blogController.getBlogBySlug);
router.post('/blogs', blogController.createBlog);
router.put('/blogs/:slug', blogController.updateBlog);
router.delete('/blogs/:slug', blogController.deleteBlog);

export default router;
