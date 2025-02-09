import { HttpError } from "../../errors/HttpError";
import { TBlog } from "./blog.interface"
import { Blog } from "./blog.model"

const createBlog = async (payload: TBlog) => {
    const createdBlog = await Blog.create(payload);
    return createdBlog;
};

const getAllBlogs = async () => {
    const blogs = await Blog.find();

    if (blogs.length === 0) {
        throw new HttpError(404, "Blogs were not found in the database")
    };

    return blogs;
}

export const BlogServices = {
    createBlog,
    getAllBlogs,
}