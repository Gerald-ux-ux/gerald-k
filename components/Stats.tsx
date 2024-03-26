"use client";

import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import FlipNumber from "./FlipNumber";

import useSWR from "swr";
import Fetcher from "@/lib/fetcher";
import { addCommas } from "@/lib/utils";
import { ArrowTrendingUpIcon } from "@heroicons/react/20/solid";

import { BlogViews } from "@/app/blog/types/blogs-type";

type Props = {
  views: BlogViews;
};

/** Youtube */
export function Youtube() {
  const { data: youtubeData, error: youtubeDataError } = useSWR(
    `api/youtube`,
    Fetcher,
  );

  if (youtubeDataError) return <div>failed to load</div>;
  return addCommas(youtubeData?.subscribers);
}

export default function Stats({ views }: Props) {
  const { data: youtubeData } = useSWR(`api/youtube`, Fetcher);

  return (
    <ul className="animated-list space-y-2">
      <li className="transition-opacity">
        <Link className="flex items-center gap-3" href="/blog">
          <ArrowTrendingUpIcon className="h-5 w-5" />
          <div className="flex items-center gap-2">
            <FlipNumber>{views ? addCommas(views.total) : "000"}</FlipNumber>
            <span> Total Blog Views</span>
          </div>
        </Link>
      </li>

      <li className="transition-opacity">
        <a
          className="flex items-center gap-3"
          href={"https://www.youtube.com/@geralddd.g/featured"}
        >
          <FaYoutube className="text-xl" />
          <div className="flex items-center gap-2">
            <FlipNumber>
              {youtubeData ? addCommas(youtubeData?.views) : "000"}
            </FlipNumber>
            <span> Total Youtube Views</span>
          </div>
        </a>
      </li>
    </ul>
  );
}
