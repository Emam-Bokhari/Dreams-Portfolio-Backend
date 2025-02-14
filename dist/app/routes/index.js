'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const project_route_1 = require('../modules/Project/project.route');
const blog_route_1 = require('../modules/Blog/blog.route');
const contact_route_1 = require('../modules/Contact/contact.route');
const dashboard_route_1 = require('../modules/Dashboard/dashboard.route');
const router = express_1.default.Router();
const moduleRoutes = [
  {
    path: '/projects',
    route: project_route_1.ProjectRoutes,
  },
  {
    path: '/blogs',
    route: blog_route_1.BlogRoutes,
  },
  {
    path: '/contacts',
    route: contact_route_1.ContactRoutes,
  },
  {
    path: '/dashboard',
    route: dashboard_route_1.DashboardRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
