import express from 'express';
import { BlogControllers } from './blog.controller';

const router = express.Router();

router.post('/', BlogControllers.createBlogController);

router.get('/', BlogControllers.getAllBlogsController);

router.get('/:id', BlogControllers.getBlogController);

router.patch('/:id', BlogControllers.updateBlogController);

router.delete('/:id', BlogControllers.deleteBlogController);

export const BlogRoutes = router;
