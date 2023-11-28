"use client";

import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";
import FlipNumber from "./FlipNumber";

import useSWR from "swr";
import Fetcher from "@/lib/fetcher";
import { addCommas } from "@/lib/utils";
import { ArrowTrendingUpIcon } from "@heroicons/react/20/solid";

/** Github */
// export function Github() {
//   const { data: githubData, error: githubDataError } = useSWR(
//     `/api/github?username=gerald-ux-ux`,
//     Fetcher,
//   );

//   console.log("It is", githubData);

//   if (githubDataError) return <div>failed to load</div>;

//   return addCommas(githubData?.stars);
// }

/** Youtube */
export function Youtube() {
  const { data: youtubeData, error: youtubeDataError } = useSWR(
    `api/youtube`,
    Fetcher,
  );

  if (youtubeDataError) return <div>failed to load</div>;
  return addCommas(youtubeData?.subscribers);
}

export default function Stats() {
  const username = "gerald-ux-ux";
  const url = `api/github?username=${username}`;

  const { data: youtubeData, error: youtubeDataError } = useSWR(
    `api/youtube`,
    Fetcher,
  );

  const { data: postsData, error: postsError } = useSWR(
    `/api/prisma/hitsTotal`,
    Fetcher,
  );

  return (
    <ul className="animated-list space-y-2">
      <li className="transition-opacity">
        <Link className="flex items-center gap-3" href="/blog">
          <ArrowTrendingUpIcon className="h-5 w-5" />
          <div className="flex items-center gap-2">
            <FlipNumber>
              {postsData ? addCommas(postsData?.total) : "000"}
            </FlipNumber>
            <span> Total Blog Views</span>
          </div>
        </Link>
      </li>

      <li className="transition-opacity">
        <Link
          className="flex items-center gap-3"
          href={"/https://www.youtube.com/channel/UCAszclBzNqvwJpM4F1OdhXQ"}
        >
          <FaYoutube className="text-xl" />
          <div className="flex items-center gap-2">
            <FlipNumber>
              {youtubeData ? addCommas(youtubeData?.views) : "000"}
            </FlipNumber>
            <span> Total Youtube Views</span>
          </div>
        </Link>
      </li>
    </ul>
  );
}
