"use client";

import { Post as PostType } from "../../../../.contentlayer/generated";
import FlipNumber from "@/components/FlipNumber";

export default function ViewCounter({
  post,
  views,
}: {
  post: PostType;
  views: any;
}) {
  return (
    <span className="flex  items-center gap-2">
      <FlipNumber>{views.views}</FlipNumber>
      views
    </span>
  );
}
