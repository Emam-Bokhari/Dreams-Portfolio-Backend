'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Blog = void 0;
const mongoose_1 = require('mongoose');
const queryFilter_1 = require('../../utils/moduleSpecific/queryFilter');
const blogSchema = new mongoose_1.Schema(
  {
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
    authorName: {
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
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
// query middleware for soft delete by utils
blogSchema.pre('find', queryFilter_1.excludeDeletedQuery);
blogSchema.pre('findOne', queryFilter_1.excludeDeletedQuery);
// aggregate middleware for soft delete by utils
blogSchema.pre('aggregate', queryFilter_1.excludeDeletedAggregation);
exports.Blog = (0, mongoose_1.model)('Blog', blogSchema);
