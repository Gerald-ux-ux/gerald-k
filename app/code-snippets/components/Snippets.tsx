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
  const today = new Date();
  const formattedToday = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(today);

  const endDate = new Date();
  endDate.setDate(today.getDate() + 2);
  const formattedEndDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(endDate);

  const isNew = today <= endDate;

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
        .sort(
          (a: any, b: any) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )
        .map((snippet: any, i: number) => (
          <div key={i} onClick={() => handleClicked(snippet)}>
            <li
              className={clsx(
                "flex cursor-pointer flex-col gap-3 rounded-lg border border-secondaryA  p-2",
                // maxCopyCountNumber ? "border border-green-300" : "",
              )}
            >
              <span className="flex w-full items-center justify-between gap-2 ">
                <p className=" truncate  text-sm  font-medium tracking-tight md:w-9/12 md:text-xl md:font-semibold">
                  {snippet?.title} ({snippet.code.length})
                </p>
                {formattedToday === formatDate(snippet.createdAt) ||
                formattedEndDate === formatDate(snippet.createdAt) ? (
                  <span className="text-secondaryA rounded-md bg-beta p-1 text-xs">
                    New
                  </span>
                ) : null}

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
