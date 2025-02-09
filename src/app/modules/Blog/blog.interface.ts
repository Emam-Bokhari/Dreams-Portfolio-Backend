export type TBlog = {
  title: string;
  thumbnail: string;
  category: string;
  publishedDate: Date;
  authorInfo: string;
  introduction: string;
  mainContent: string;
  tags?: string[];
  isDeleted?: boolean;
};
