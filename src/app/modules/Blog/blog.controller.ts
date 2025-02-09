import { asyncHandler } from "../../utils/global/asyncHandler";
import { sendResponse } from "../../utils/global/sendResponse";
import { BlogServices } from "./blog.service";

const createBlogController = asyncHandler(async (req, res) => {
    const blogPayload = req.body;
    const createdBlog = await BlogServices.createBlog(blogPayload);
    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "Blog is created successfully",
        data: createdBlog,
    })
});

const getAllBlogsController = asyncHandler(async (req, res) => {
    const blogs = await BlogServices.getAllBlogs();
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Blogs are retrieved successfully",
        data: blogs,
    })
})

export const BlogControllers = {
    createBlogController,
    getAllBlogsController,
}