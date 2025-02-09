import { model, Schema } from "mongoose";
import { TBlog } from "./blog.interface";

const blogSchema = new Schema<TBlog>({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    thumbnail: {
        type: String,
        trim: true,
        required: true,
    },
    category: {
        type: String,
        trim: true,
        required: true,
    },
    publishedDate: {
        type: Date,
        trim: true,
        required: true,
    },
    authorInfo: {
        type: String,
        trim: true,
        required: true,
    },
    introduction: {
        type: String,
        trim: true,
        required: true,
    },
    mainContent: {
        type: String,
        trim: true,
        required: true,
    },
    tags: {
        type: [String],
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);

export const Blog = model<TBlog>("Blog", blogSchema);