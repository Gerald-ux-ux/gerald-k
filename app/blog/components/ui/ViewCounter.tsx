"use client";

import FlipNumber from "@/components/FlipNumber";

export default function ViewCounter({ views }: { views: any }) {
  return (
    <span className="flex  items-center gap-2">
      <FlipNumber>{views.views}</FlipNumber>
      views
    </span>
  );
}
