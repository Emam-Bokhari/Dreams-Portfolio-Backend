import { asyncHandler } from "../../utils/global/asyncHandler";
import { sendResponse } from "../../utils/global/sendResponse";
import { BlogServices } from "./blog.service";

const createBlog = asyncHandler(async (req, res) => {
    const blogPayload = req.body;
    const createdBlog = await BlogServices.createBlog(blogPayload);
    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "Blog is created successfully",
        data: createdBlog,
    })
});

export const BlogControllers = {
    createBlog,
}