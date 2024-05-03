"use client";

import { formatDate } from "@/lib/formatdate";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import SnippetCodeList from "./SnippetCodeList";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import "react-loading-skeleton/dist/skeleton.css";

import SnippetTags from "./tags";
import useShowMostRelevant from "../hooks/useShowMostRelevant";
import clsx from "clsx";

type SnippetProps = {
  data?: any;
  setSearchQuery?: string;
};

export default function Snippets({ data }: SnippetProps) {
  const [expanded, setExpanded] = useState<boolean[]>([]);

  const searchQuery = useSearchParams();
  const searchItem = searchQuery.get("query");
  const { maxCopyCountNumber } = useShowMostRelevant({ data, searchItem });

  const router = useRouter();
  const pathname = usePathname();

  const handleClicked = (snippet: any) => {
    return router.push(`${pathname}/${snippet._id}`);
  };

  console.log("relevantSnippet", maxCopyCountNumber);

  return (
    <ul className="animated-list flex w-full flex-col gap-2">
      {/* <div className="my-2 flex flex-row items-center gap-4">
        <span className="rounded-lg bg-success p-2  text-black ">
          Most Relevant
        </span>
      </div> */}
      {data
        ?.filter((snippet: any) =>
          searchItem
            ? snippet?.title?.toLowerCase()?.includes(searchItem.toLowerCase())
            : true,
        )
        .map((snippet: any, i: number) => (
          <div key={i} onClick={() => handleClicked(snippet)}>
            <li
              className={clsx(
                "flex cursor-pointer flex-col gap-3 rounded-lg border border-secondaryA  p-2",
                maxCopyCountNumber ? "border border-green-300" : "",
              )}
            >
              <span className="flex w-full items-center justify-between gap-2 ">
                <p className=" truncate  text-sm  font-medium tracking-tight md:w-9/12 md:text-xl md:font-semibold">
                  {snippet?.title} ({snippet.code.length})
                </p>

                <span className="hidden items-center gap-2  text-xs md:flex md:text-base">
                  <p className="w-full">{snippet.author.name}</p>

                  <span className=" hidden rounded-full bg-secondaryA p-2  md:block">
                    <FaRegUser />
                  </span>
                </span>
              </span>
              <span className="flex w-full items-center justify-between  text-sm md:text-base">
                <p className="w-44 truncate  text-start md:w-96 ">
                  {snippet.description}
                </p>

                <p>{formatDate(snippet.createdAt)}</p>
              </span>

              {expanded[i] && (
                <span>
                  {snippet.code.map((code: any) => (
                    <SnippetCodeList code={code} key={code._id} />
                  ))}
                </span>
              )}

              <SnippetTags snippet={snippet} />
            </li>
          </div>
        ))}
    </ul>
  );
}
