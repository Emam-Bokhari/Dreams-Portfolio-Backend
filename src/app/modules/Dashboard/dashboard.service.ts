import { Blog } from '../Blog/blog.model';
import { Contact } from '../Contact/contact.model';
import { Project } from '../Project/project.model';

// Function to get counts from the collections
const getDashboardData = async () => {
  const projectsCount = await Project.aggregate([{ $count: 'totalProjects' }]);

  const blogsCount = await Blog.aggregate([{ $count: 'totalBlogs' }]);

  const contactsCount = await Contact.aggregate([{ $count: 'totalContacts' }]);

  return {
    projects: projectsCount[0]?.totalProjects || 0,
    blogs: blogsCount[0]?.totalBlogs || 0,
    contacts: contactsCount[0]?.totalContacts || 0,
  };
};

export const DashboardServices = {
  getDashboardData,
};
