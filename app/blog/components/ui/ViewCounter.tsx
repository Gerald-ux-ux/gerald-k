"use client";

import fetcher from "@/lib/fetcher";
import { Post as PostType } from "../../../../.contentlayer/generated";
import useSWR from "swr";
import FlipNumber from "@/components/FlipNumber";
import LoadingViews from "@/components/ui/LoadingViews";

export default function ViewCounter({ post }: { post: PostType }) {
  const { data } = useSWR(`/api/prisma/hitsSlug?slug=${post.slug}`, fetcher, {
    revalidateOnFocus: false,
  });

  const views = data?.Views;

  return (
    <span className="flex  items-center gap-2">
      {views !== undefined ? (
        <FlipNumber>{views}</FlipNumber>
      ) : (
        <div className="animate-pulse rounded-full">
          <LoadingViews />
        </div>
      )}
      views
    </span>
  );
}
