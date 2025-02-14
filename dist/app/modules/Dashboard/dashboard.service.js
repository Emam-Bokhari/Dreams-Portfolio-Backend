'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.DashboardServices = void 0;
const blog_model_1 = require('../Blog/blog.model');
const contact_model_1 = require('../Contact/contact.model');
const project_model_1 = require('../Project/project.model');
// Function to get counts from the collections
const getDashboardData = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const projectsCount = yield project_model_1.Project.aggregate([
      { $count: 'totalProjects' },
    ]);
    const blogsCount = yield blog_model_1.Blog.aggregate([
      { $count: 'totalBlogs' },
    ]);
    const contactsCount = yield contact_model_1.Contact.aggregate([
      { $count: 'totalContacts' },
    ]);
    return {
      projects:
        ((_a = projectsCount[0]) === null || _a === void 0
          ? void 0
          : _a.totalProjects) || 0,
      blogs:
        ((_b = blogsCount[0]) === null || _b === void 0
          ? void 0
          : _b.totalBlogs) || 0,
      contacts:
        ((_c = contactsCount[0]) === null || _c === void 0
          ? void 0
          : _c.totalContacts) || 0,
    };
  });
exports.DashboardServices = {
  getDashboardData,
};
