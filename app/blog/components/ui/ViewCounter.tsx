"use client";

import fetcher from "@/lib/fetcher";
import { Post as PostType } from "../../../../.contentlayer/generated";
import useSWR from "swr";
import FlipNumber from "@/components/FlipNumber";

export default function ViewCounter({ post }: { post: PostType }) {
  const { data } = useSWR(`/api/prisma/hitsSlug?slug=${post.slug}`, fetcher, {
    revalidateOnFocus: false,
  });

  const views = data?.Views;


  return (
    <span>
      {views !== undefined ? <FlipNumber>{views}</FlipNumber> : "Loading..."}{" "}
      views
    </span>
  );
}
