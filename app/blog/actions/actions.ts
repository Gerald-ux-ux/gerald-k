"use server";

import { Specific_Blog_Views, Total_Blog_Views } from "../constants/lib";
import { BlogViews } from "../types/blogs-type";

export async function getTotalBlogViews(): Promise<BlogViews> {
  try {
    const response = await fetch(Total_Blog_Views);
    const data = await response.json();
    return data;
  } catch (error: any) {
    return error.response?.data;
  }
}

export async function getSpecificBlogViews(slug: string) {
  try {
    const response = await fetch(Specific_Blog_Views(slug));
    const data = await response.json();
    return data;
  } catch (error: any) {
    return error.response?.data;
  }
}
