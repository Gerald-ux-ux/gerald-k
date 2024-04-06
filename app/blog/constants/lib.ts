import { baseUrl } from "@/app/api/baseUrl";

export const Total_Blog_Views = `${baseUrl}/api/blogs/views`;
export const Specific_Blog_Views = (slug: string) =>
  `${baseUrl}/api/blogs/views/${slug}`;
