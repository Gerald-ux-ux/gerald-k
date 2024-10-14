import { allPosts } from "@/.contentlayer/generated";
import { Metadata } from "next";

import PostList from "./components/ui/PostList";

export const metadata: Metadata = {
  title: "Blog | Gerald",
  description: "Blogs about coding, productivity and more",
};

export default function Blog() {
  // Sorting in descending order
  const posts = allPosts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <main className="mx-auto flex max-w-[700px] flex-col gap-16 px-6 md:gap-24 md:px-6">
      <div className="flex flex-col gap-8">
        <div className="">
          <h1 className="animate-in text-3xl font-bold tracking-tight">Blog</h1>
          <p className="animate-in text-secondary">
            {posts.length} posts about code, productivity and more ...
          </p>
        </div>
      </div>

      <div className="animate-in">
        <PostList posts={posts} />
      </div>
    </main>
  );
}
