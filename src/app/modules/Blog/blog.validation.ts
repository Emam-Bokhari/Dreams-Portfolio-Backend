import { z } from "zod";

const createBlogValidationSchema = z.object({
    body: z.object({
        title: z.string().min(5, "Title must be at least 5 characters long").max(100, "Title must not exceed 100 characters"),
        thumbnail: z.string(),
        category: z.string().min(3, "Category must be at least 3 characters long").max(50, "Category must not exceed 50 characters"),
        publishedDate: z.string(),
        authorInfo: z.string().min(3, "Author information must be at least 3 characters long").max(500, "Author information must not exceed 500 characters"),
        introduction: z.string().min(20, "Introduction must be at least 20 characters long").max(500, "Introduction must not exceed 500 characters"),
        mainContent: z.string().min(50, "Main content must be at least 50 characters long"),
        tags: z.array(z.string().min(2, "Each tag must have at least 2 characters")).max(10, "Maximum 10 tags allowed").optional(),
        isDeleted: z.boolean().default(false),

    })
})

const updateBlogValidationSchema = z.object({
    body: z.object({
        title: z.string().min(5, "Title must be at least 5 characters long").max(100, "Title must not exceed 100 characters").optional(),
        thumbnail: z.string().optional(),
        category: z.string().min(3, "Category must be at least 3 characters long").max(50, "Category must not exceed 50 characters").optional(),
        publishedDate: z.string().optional(),
        authorInfo: z.string().min(3, "Author information must be at least 3 characters long").max(500, "Author information must not exceed 500 characters").optional(),
        introduction: z.string().min(20, "Introduction must be at least 20 characters long").max(500, "Introduction must not exceed 500 characters").optional(),
        mainContent: z.string().min(50, "Main content must be at least 50 characters long").optional(),
        tags: z.array(z.string().min(2, "Each tag must have at least 2 characters")).max(10, "Maximum 10 tags allowed").optional(),
        isDeleted: z.boolean().default(false),

    })
})

export const BlogValidationSchema = {
    createBlogValidationSchema,
    updateBlogValidationSchema,
}