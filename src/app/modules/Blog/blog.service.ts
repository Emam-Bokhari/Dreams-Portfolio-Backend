import { TBlog } from "./blog.interface"
import { Blog } from "./blog.model"

const createBlog = async (payload: TBlog) => {
    const createdBlog = await Blog.create(payload);
    return createdBlog;
};

export const BlogServices = {
    createBlog,
}