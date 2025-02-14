import express from 'express';
import { ProjectRoutes } from '../modules/Project/project.route';
import { BlogRoutes } from '../modules/Blog/blog.route';
import { ContactRoutes } from '../modules/Contact/contact.route';
import { DashboardRoutes } from '../modules/Dashboard/dashboard.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/projects',
    route: ProjectRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/contacts',
    route: ContactRoutes,
  },
  {
    path: '/dashboard',
    route: DashboardRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
