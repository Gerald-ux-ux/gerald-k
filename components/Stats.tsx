"use client";

import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";
import FlipNumber from "./FlipNumber";
import useSWR from "swr";
import Fetcher from "@/lib/fetcher";
import { addCommas } from "@/lib/utils";
import { ArrowTrendingUpIcon } from "@heroicons/react/20/solid";

export function Github() {
  const { data: githubData, error: githubDataError } = useSWR(
    `/api/github?username=gerald-ux-ux`,
    Fetcher,
  );
  if (githubDataError) return <div>failed to load</div>;
  return addCommas(githubData?.stars);
}

export default function Stats() {
  const username = "gerald-ux-ux";

  const { data: githubData, error: githubDataError } = useSWR(
    `/api/github?username=${username}`,
    Fetcher,
  );

  return (
    <ul className="animated-list space-y-2">
      <li className="transition-opacity">
        <Link
          className="flex items-center gap-3 no-underline"
          href={"https://github.com/Gerald-ux-ux"}
        >
          <FaGithub className="text-xl" />
          <div className="">
            000
            {/* */}
            {/* <FlipNumber>
            {githubData ? addCommas(githubData?.stars) : "000"}
          </FlipNumber> */}
            <span> Repository Stars</span>
          </div>
        </Link>
      </li>
      <li className="transition-opacity">
        <Link className="flex items-center gap-3" href="/blog">
          <ArrowTrendingUpIcon className="h-5 w-5" />
          <div>
            000
            {/* <FlipNumber>
              {postsData ? addCommas(postsData?.total) : "0,000"}
            </FlipNumber> */}
            <span> Total Blog Views</span>
          </div>
        </Link>
      </li>

      <li className="transition-opacity">
        <Link className="flex items-center gap-3" href="/blog">
          <FaYoutube className="text-xl" />
          <div>
            000
            {/* <FlipNumber>
              {postsData ? addCommas(postsData?.total) : "0,000"}
            </FlipNumber> */}
            <span> Total Subscribers</span>
          </div>
        </Link>
      </li>
    </ul>
  );
}
